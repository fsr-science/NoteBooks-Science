/**
 * obsidian-markdown-it.js  (IIFE / plain-script build)
 * ─────────────────────────────────────────────────────
 * Obsidian-syntax compatibility layer for markdown-it.
 * Load with a plain <script> tag (no type="module" needed).
 * Must be loaded AFTER markdown-it.
 *
 * Exposes on window:
 *   obsidianPlugin(md, opts)          – md.use() plugin function
 *   obsidianParseFrontmatter(raw)     – strips YAML front-matter
 *   obsidianGetCSS()                  – companion stylesheet string
 *   obsidianGetToggleScript()         – callout fold JS string
 *   obsidianInitCalloutFolds(root)    – activate foldable callout toggles
 *   obsidianInitMath(root)            – render math with MathJax (async, returns Promise)
 *   obsidianInitMermaid(root)         – render Mermaid diagrams (if loaded)
 *   obsidianInitHighlight(root)       – apply highlight.js to code blocks
 *
 * Supported Obsidian features:
 *   ✓ [[Wikilinks]] / [[Page|Alias]] / [[Page#Heading]]
 *   ✓ ![[Embeds]] — image, audio, video, PDF, note transclusion
 *   ✓ Callouts > [!NOTE] / [!TIP]+ (foldable) / [!WARN]-
 *   ✓ ==Highlight==
 *   ✓ ~~Strikethrough~~
 *   ✓ Task lists [ ] [x] [/] [-] [!] [>] [<] [?] + more
 *   ✓ #Tags
 *   ✓ Block IDs  ^blockid
 *   ✓ %% Comments %%
 *   ✓ $inline math$ and $$block math$$  (MathJax rendering when available)
 *   ✓ ```tikz blocks                       (TikZJax rendering when available)
 *   ✓ ```mermaid blocks  (Mermaid.js rendering when available)
 *   ✓ Syntax-highlighted code blocks (highlight.js when available)
 *   ✓ YAML front-matter stripping
 */
(function (global) {
  'use strict';

  /* ── Constants ─────────────────────────────────────────────────────────── */

  var CALLOUT_TYPES = {
    note:1, abstract:1, summary:1, tldr:1,
    info:1, todo:1,
    tip:1, hint:1, important:1,
    success:1, check:1, done:1,
    question:1, help:1, faq:1,
    warning:1, caution:1, attention:1,
    failure:1, fail:1, missing:1,
    danger:1, error:1,
    bug:1, example:1, quote:1, cite:1
  };

  var CALLOUT_ICONS = {
    note:'📝', abstract:'📋', summary:'📋', tldr:'📋',
    info:'ℹ️',  todo:'☑️',
    tip:'💡',  hint:'💡',  important:'💡',
    success:'✅', check:'✅', done:'✅',
    question:'❓', help:'❓', faq:'❓',
    warning:'⚠️', caution:'⚠️', attention:'⚠️',
    failure:'❌', fail:'❌', missing:'❌',
    danger:'🔥', error:'🔥',
    bug:'🐛', example:'📌', quote:'💬', cite:'💬'
  };

  var EMBED_EXTS = {
    image: /\.(png|jpe?g|gif|svg|webp|bmp|avif)$/i,
    audio: /\.(mp3|wav|ogg|flac|aac|m4a|opus)$/i,
    video: /\.(mp4|webm|ogv|mov|mkv)$/i,
    pdf  : /\.pdf$/i,
    note : /\.(md|markdown)$/i
  };

  /**
   * Obsidian extended task-list states.
   * Key = character inside [ ], value = { class, checked, icon, label }.
   */
  var TASK_STATES = {
    ' ': { cls: 'task-open',        checked: false, icon: '○', label: 'Open'        },
    'x': { cls: 'task-done',        checked: true,  icon: '✓', label: 'Done'        },
    'X': { cls: 'task-done',        checked: true,  icon: '✓', label: 'Done'        },
    '/': { cls: 'task-in-progress', checked: false, icon: '◑', label: 'In Progress' },
    '-': { cls: 'task-cancelled',   checked: false, icon: '—', label: 'Cancelled'   },
    '!': { cls: 'task-important',   checked: false, icon: '!', label: 'Important'   },
    '>': { cls: 'task-deferred',    checked: false, icon: '»', label: 'Deferred'    },
    '<': { cls: 'task-scheduled',   checked: false, icon: '◷', label: 'Scheduled'   },
    '?': { cls: 'task-question',    checked: false, icon: '?', label: 'Question'    },
    'f': { cls: 'task-fun',         checked: false, icon: '★', label: 'Fun'         },
    'i': { cls: 'task-info',        checked: false, icon: 'i', label: 'Info'        },
    'l': { cls: 'task-location',    checked: false, icon: '⌖', label: 'Location'    },
    'p': { cls: 'task-pro',         checked: false, icon: '↑', label: 'Pro'         },
    'c': { cls: 'task-con',         checked: false, icon: '↓', label: 'Con'         },
    'b': { cls: 'task-bookmark',    checked: false, icon: '🔖', label: 'Bookmark'   },
    '*': { cls: 'task-star',        checked: false, icon: '⭐', label: 'Star'        },
    'u': { cls: 'task-up',          checked: false, icon: '↑', label: 'Up-vote'     },
    'd': { cls: 'task-down',        checked: false, icon: '↓', label: 'Down-vote'   }
  };

  /* ── Utility helpers ───────────────────────────────────────────────────── */

  function esc(s) {
    return String(s)
      .replace(/&/g,'&amp;').replace(/</g,'&lt;')
      .replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }

  function detectEmbedType(name) {
    var clean = name.split('|')[0].split('#')[0].trim();
    for (var t in EMBED_EXTS) {
      if (Object.prototype.hasOwnProperty.call(EMBED_EXTS, t) && EMBED_EXTS[t].test(clean)) return t;
    }
    return 'unknown';
  }

  function parseEmbedSize(str) {
    if (!str) return { width:null, height:null };
    var p = str.split('x');
    return { width: parseInt(p[0],10)||null, height: parseInt(p[1],10)||null };
  }

  function splitWikilink(inner) {
    var pipeIdx = inner.indexOf('|');
    var alias   = pipeIdx >= 0 ? inner.slice(pipeIdx+1).trim() : null;
    var core    = pipeIdx >= 0 ? inner.slice(0,pipeIdx).trim() : inner.trim();
    var hashIdx = core.indexOf('#');
    var target  = hashIdx >= 0 ? core.slice(0,hashIdx).trim() : core;
    var anchor  = hashIdx >= 0 ? core.slice(hashIdx+1).trim() : null;
    return { target:target, anchor:anchor, alias:alias };
  }

  /* Walk inline children; if handler(child) returns an array, replace it */
  function processInline(children, state, handler) {
    var out = [], i, rep;
    for (i = 0; i < children.length; i++) {
      rep = handler(children[i], state);
      if (rep === null) { out.push(children[i]); }
      else { out = out.concat(rep); }
    }
    return out;
  }

  /* Split a text token by a regex; odd slots become html_inline via makeHtml */
  function splitInlineText(child, state, re, makeHtml) {
    if (child.type !== 'text') return null;
    var parts = child.content.split(re);
    if (parts.length === 1) return null;
    var result = [], i, html, t;
    for (i = 0; i < parts.length; i++) {
      if (i % 2 === 1) {
        html = makeHtml(parts[i]);
        if (html === null) {
          t = new state.Token('text','',0); t.content = parts[i]; result.push(t);
        } else {
          t = new state.Token('html_inline','',0); t.content = html; result.push(t);
        }
      } else {
        if (!parts[i]) continue;
        t = new state.Token('text','',0); t.content = parts[i]; result.push(t);
      }
    }
    return result;
  }

  /* ── Rule: Obsidian comments  %% ... %% ────────────────────────────────── */

  function ruleComments(md) {
    md.core.ruler.push('obs_comments', function (state) {
      var i, bt;
      for (i = 0; i < state.tokens.length; i++) {
        bt = state.tokens[i];
        if (bt.type !== 'inline' || !bt.children) continue;
        bt.children = processInline(bt.children, state, function (child) {
          if (child.type !== 'text') return null;
          var stripped = child.content.replace(/%%[\s\S]*?%%/g, '');
          if (stripped === child.content) return null;
          if (!stripped) return [];
          var t = new state.Token('text','',0); t.content = stripped; return [t];
        });
      }
    });
  }

  /* ── Rule: highlight  ==text== ─────────────────────────────────────────── */

  function ruleHighlight(md) {
    md.core.ruler.push('obs_highlight', function (state) {
      var i, bt;
      for (i = 0; i < state.tokens.length; i++) {
        bt = state.tokens[i];
        if (bt.type !== 'inline' || !bt.children) continue;
        bt.children = processInline(bt.children, state, function (child, st) {
          return splitInlineText(child, st, /==((?!\s)[\s\S]*?(?<!\s))==/g, function (m) {
            return '<mark>' + state.md.renderInline(m) + '</mark>';
          });
        });
      }
    });
  }

  /* ── Rule: strikethrough  ~~text~~ ─────────────────────────────────────── */
  /* Handles plain-text content within ~~...~~.                               */
  /* For rich inline content (bold inside strikethrough), use the            */
  /* markdown-it-strikethrough-alt CDN plugin loaded before this file.        */

  function ruleStrikethrough(md) {
    md.core.ruler.push('obs_strikethrough', function (state) {
      var i, bt;
      for (i = 0; i < state.tokens.length; i++) {
        bt = state.tokens[i];
        if (bt.type !== 'inline' || !bt.children) continue;
        bt.children = processInline(bt.children, state, function (child, st) {
          return splitInlineText(child, st, /~~((?!~)[\s\S]+?)~~/g, function (m) {
            return '<del>' + state.md.renderInline(m) + '</del>';
          });
        });
      }
    });
  }

  /* ── Rule: tags  #tag  #nested/tag ─────────────────────────────────────── */

  function ruleTags(md, opts) {
    md.core.ruler.push('obs_tags', function (state) {
      var i, bt;
      for (i = 0; i < state.tokens.length; i++) {
        bt = state.tokens[i];
        if (bt.type !== 'inline' || !bt.children) continue;
        bt.children = processInline(bt.children, state, function (child, st) {
          return splitInlineText(child, st, /(?<![&\w#])(#[a-zA-Z_][a-zA-Z0-9_/\-]*)/g, function (m) {
            /* Skip CSS hex colour values (#rgb / #rrggbb) */
            if (/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/.test(m)) return null;
            var tagName = m.slice(1);
            var href = opts.resolveTag ? opts.resolveTag(tagName) : ('#tag-' + tagName);
            return '<a href="' + esc(href) + '" class="obsidian-tag" data-tag="' + esc(tagName) + '">' + esc(m) + '</a>';
          });
        });
      }
    });
  }

  /* ── Rule: block IDs  paragraph ending with  ^blockid ──────────────────── */

  function ruleBlockIds(md) {
    md.core.ruler.push('obs_blockids', function (state) {
      var i, bt, children, last, m, anchor;
      for (i = 0; i < state.tokens.length; i++) {
        bt = state.tokens[i];
        if (bt.type !== 'inline' || !bt.children) continue;
        children = bt.children;
        last = children[children.length - 1];
        if (!last || last.type !== 'text') continue;
        m = last.content.match(/\s+\^([\w-]+)$/);
        if (!m) continue;
        last.content = last.content.slice(0, -m[0].length);
        anchor = new state.Token('html_inline','',0);
        anchor.content = '<span class="obsidian-block-id" id="^' + esc(m[1]) + '" data-block-id="' + esc(m[1]) + '"></span>';
        children.push(anchor);
      }
    });
  }

  /* ── Rule: inline math  $...$  (not $$) ────────────────────────────────── */

  function ruleMathInline(md) {
    md.core.ruler.push('obs_math_inline', function (state) {
      var i, bt;
      for (i = 0; i < state.tokens.length; i++) {
        bt = state.tokens[i];
        if (bt.type !== 'inline' || !bt.children) continue;
        bt.children = processInline(bt.children, state, function (child, st) {
          // Match $...$ but not $$
          return splitInlineText(child, st, /(?<!\$)\$(?!\$)((?:[^$]|\\\$)+?)\$(?!\$)/g, function (inner) {
            return '<span class="math math-inline" data-math="' + esc(inner) + '">\\(' + esc(inner) + '\\)</span>';
          });
        });
      }
    });
  }

  /* ── Rule: block math  $$ ... $$ ───────────────────────────────────────── */

  function ruleMathBlock(md) {
    md.block.ruler.before('fence', 'obs_math_block', function (state, startLine, endLine, silent) {
      var max  = state.eMarks[startLine];
      var line = state.src.slice(state.bMarks[startLine], max).trim();
      if (line.slice(0, 2) !== '$$') return false;

      /* Single-line  $$...$$ */
      if (line.length >= 4 && line.slice(-2) === '$$' && line !== '$$') {
        if (silent) return true;
        var math = line.slice(2, -2).trim();
        var tok  = state.push('obs_math_block', '', 0);
        tok.content = math; tok.map = [startLine, startLine + 1];
        state.line = startLine + 1;
        return true;
      }
      if (line !== '$$') return false;

      /* Multi-line */
      var nextLine = startLine + 1;
      while (nextLine < endLine) {
        var lpos = state.bMarks[nextLine] + state.tShift[nextLine];
        var lmax = state.eMarks[nextLine];
        if (state.src.slice(lpos, lmax).trim() === '$$') break;
        nextLine++;
      }
      if (nextLine >= endLine) return false;
      if (silent) return true;

      var content = state.getLines(startLine + 1, nextLine, 0, true).trim();
      var tok2    = state.push('obs_math_block', '', 0);
      tok2.content = content; tok2.map = [startLine, nextLine + 1];
      state.line = nextLine + 1;
      return true;
    });

    md.renderer.rules['obs_math_block'] = function (tokens, idx) {
      var m = esc(tokens[idx].content);
      return '<div class="math math-block" data-math="' + m + '">\\[' + m + '\\]</div>\n';
    };
  }

  /* ── Rule: wikilinks  [[Page]]  [[Page|Alias]]  [[Page#Heading]] ────────── */

  function ruleWikilinks(md, opts) {
    md.core.ruler.push('obs_wikilinks', function (state) {
      var i, bt;
      for (i = 0; i < state.tokens.length; i++) {
        bt = state.tokens[i];
        if (bt.type !== 'inline' || !bt.children) continue;
        bt.children = processInline(bt.children, state, function (child, st) {
          /* Only plain wikilinks — not starting with ! (embeds) */
          return splitInlineText(child, st, /(?<!!)\[\[([^\]]+)\]\]/g, function (inner) {
            var parts = splitWikilink(inner);
            var label = parts.alias || (parts.anchor ? (parts.target + '#' + parts.anchor) : parts.target);
            var href  = opts.resolveWikilink
              ? opts.resolveWikilink(parts.target, parts.alias, parts.anchor)
              : ('#' + encodeURIComponent(parts.target));
            var anc = parts.anchor ? ' data-anchor="' + esc(parts.anchor) + '"' : '';
            return '<a href="' + esc(href) + '" class="obsidian-wikilink" data-target="' + esc(parts.target) + '"' + anc + '>' + esc(label) + '</a>';
          });
        });
      }
    });
  }

  /* ── Rule: embeds  ![[file]]  ![[img|300]]  ![[img|300x200]] ───────────── */

  function ruleEmbeds(md, opts) {
    md.core.ruler.push('obs_embeds', function (state) {
      var i, bt;
      for (i = 0; i < state.tokens.length; i++) {
        bt = state.tokens[i];
        if (bt.type !== 'inline' || !bt.children) continue;
        bt.children = processInline(bt.children, state, function (child, st) {
          return splitInlineText(child, st, /!\[\[([^\]]+)\]\]/g, function (inner) {
            var pipeIdx  = inner.indexOf('|');
            var filePart = pipeIdx >= 0 ? inner.slice(0, pipeIdx).trim() : inner.trim();
            var rawSuffix = pipeIdx >= 0 ? inner.slice(pipeIdx + 1).trim() : null;
            /* Numeric suffix → size ("300" / "300x200"); anything else → alt text */
            var sizePart = (rawSuffix && /^\d+(x\d+)?$/.test(rawSuffix)) ? rawSuffix : null;
            var altText  = (rawSuffix && !sizePart) ? rawSuffix : null;
            var hashIdx  = filePart.indexOf('#');
            var fileName = hashIdx >= 0 ? filePart.slice(0, hashIdx) : filePart;
            var anchor   = hashIdx >= 0 ? filePart.slice(hashIdx + 1) : null;
            var type     = detectEmbedType(fileName);
            var src      = opts.resolveEmbed ? opts.resolveEmbed(fileName, type) : fileName;
            return renderEmbed(src, type, fileName, sizePart, anchor, opts, altText);
          });
        });
      }
    });
  }

  function renderEmbed(src, type, fileName, sizeStr, anchor, opts, altText) {
    var sz   = parseEmbedSize(sizeStr);
    var wA   = sz.width  ? ' width="'  + sz.width  + '"' : '';
    var hA   = sz.height ? ' height="' + sz.height + '"' : '';
    var safe = esc(src);
    var name = esc(fileName);
    var alt  = altText ? esc(altText) : name;
    switch (type) {
      case 'image':
        return '<img src="' + safe + '" alt="' + alt + '" class="obsidian-embed obsidian-image"' + wA + hA + ' loading="lazy">';
      case 'audio':
        return '<audio controls class="obsidian-embed obsidian-audio"><source src="' + safe + '"><em>Audio: <a href="' + safe + '">' + name + '</a></em></audio>';
      case 'video':
        return '<video controls class="obsidian-embed obsidian-video"' + wA + hA + '><source src="' + safe + '"><em>Video: <a href="' + safe + '">' + name + '</a></em></video>';
      case 'pdf': {
        var pg = anchor ? '#page=' + encodeURIComponent(anchor) : '';
        return '<iframe src="' + safe + pg + '" class="obsidian-embed obsidian-pdf"' + wA + hA + ' loading="lazy">PDF: <a href="' + safe + '">' + name + '</a></iframe>';
      }
      case 'note':
        if (opts.resolveTransclusion) {
          return '<div class="obsidian-embed obsidian-transclusion" data-src="' + name + '">' + opts.resolveTransclusion(fileName, anchor) + '</div>';
        }
        return '<div class="obsidian-embed obsidian-transclusion" data-src="' + name + '" data-anchor="' + esc(anchor||'') + '"><em>Transclusion: <a href="' + safe + '">' + name + '</a>' + (anchor ? '#' + esc(anchor) : '') + '</em></div>';
      default:
        return '<a href="' + safe + '" class="obsidian-embed obsidian-file">' + name + '</a>';
    }
  }

  /* ── Rule: callouts  > [!NOTE]  > [!TIP]+  > [!WARN]- ─────────────────── */

  function ruleCallouts(md, opts) {
    md.core.ruler.push('obs_callout_annotate', function (state) {
      var tokens = state.tokens, i, j, bt, inlineTok, firstText, m, rawType;
      for (i = 0; i < tokens.length; i++) {
        if (tokens[i].type !== 'blockquote_open') continue;
        j = i + 1;
        while (j < tokens.length && tokens[j].type !== 'inline') {
          if (tokens[j].type === 'blockquote_close') break;
          j++;
        }
        if (j >= tokens.length || tokens[j].type !== 'inline') continue;
        inlineTok  = tokens[j];
        firstText  = (inlineTok.children && inlineTok.children[0] && inlineTok.children[0].content) || '';
        m = firstText.replace(/^\s+/,'').match(/^\[!([a-zA-Z]+)\]([+-])?\s*(.*)?$/);
        if (!m) continue;
        rawType = m[1].toLowerCase();
        if (!CALLOUT_TYPES[rawType]) continue;

        var type      = rawType;
        var foldState = m[2] || null;
        var title     = (m[3] && m[3].trim()) || (m[1].charAt(0).toUpperCase() + m[1].slice(1).toLowerCase());

        tokens[i].attrSet('data-callout', type);
        tokens[i].attrSet('data-callout-fold', foldState || '');
        if (!tokens[i].meta) tokens[i].meta = {};
        tokens[i].meta.callout = { type:type, foldState:foldState, title:title };

        if (inlineTok.children && inlineTok.children[0]) {
          inlineTok.children[0].content = inlineTok.children[0].content
            .replace(/^\[![a-zA-Z]+\][+-]?\s*.*/, '').replace(/^\s+/,'');
          if (!inlineTok.children[0].content) inlineTok.children.shift();
        }
      }
    });

    var origOpen  = md.renderer.rules.blockquote_open;
    var origClose = md.renderer.rules.blockquote_close;

    md.renderer.rules.blockquote_open = function (tokens, idx, options, env, self) {
      var token = tokens[idx];
      var meta  = token.meta && token.meta.callout;
      if (!meta) {
        return origOpen ? origOpen(tokens, idx, options, env, self) : self.renderToken(tokens, idx, options);
      }
      var icon       = (opts.calloutIcons && opts.calloutIcons[meta.type]) || CALLOUT_ICONS[meta.type] || '📌';
      var isFoldable = meta.foldState !== null;
      var isOpen     = meta.foldState !== '-';
      var foldAttr   = isFoldable ? ' data-foldable="true" data-open="' + isOpen + '"' : '';
      var chevron    = isFoldable ? '<span class="callout-fold-icon">' + (isOpen ? '▾' : '▸') + '</span>' : '';
      var titleStyle = isFoldable ? ' style="cursor:pointer"' : '';
      var bodyStyle  = (isFoldable && !isOpen) ? ' style="display:none"' : '';
      return [
        '<div class="callout callout-' + esc(meta.type) + '" data-callout="' + esc(meta.type) + '"' + foldAttr + '>',
        '<div class="callout-title"' + titleStyle + '>',
        '<span class="callout-icon">' + icon + '</span>',
        '<span class="callout-title-text">' + esc(meta.title) + '</span>',
        chevron + '</div>',
        '<div class="callout-content"' + bodyStyle + '>'
      ].join('');
    };

    md.renderer.rules.blockquote_close = function (tokens, idx, options, env, self) {
      var depth = 0, i;
      for (i = idx; i >= 0; i--) {
        if (tokens[i].type === 'blockquote_close') depth++;
        if (tokens[i].type === 'blockquote_open') {
          depth--;
          if (depth === 0) {
            if (tokens[i].meta && tokens[i].meta.callout) return '</div></div>';
            break;
          }
        }
      }
      return origClose ? origClose(tokens, idx, options, env, self) : self.renderToken(tokens, idx, options);
    };
  }

  /* ── Rule: task lists  - [ ]  - [x]  - [/]  - [-]  etc. ───────────────── */
  /*                                                                           */
  /* Supports Obsidian's extended task states. Each state renders a custom    */
  /* checkbox with a data-task attribute for CSS styling.                      */

  function ruleTaskLists(md) {
    md.core.ruler.push('obs_tasklists', function (state) {
      var tokens = state.tokens;

      /* Find the enclosing list_item_open for a given inline token index */
      function findListItem(inlineIdx) {
        var depth = 0;
        for (var k = inlineIdx - 1; k >= 0; k--) {
          var tt = tokens[k].type;
          if (tt === 'list_item_close') { depth++; continue; }
          if (tt === 'list_item_open')  {
            if (depth === 0) return k;
            depth--;
          }
        }
        return -1;
      }

      for (var i = 0; i < tokens.length; i++) {
        if (tokens[i].type !== 'inline') continue;
        var children = tokens[i].children;
        if (!children || !children.length) continue;

        /* First child must be a text token */
        var firstChild = children[0];
        if (!firstChild || firstChild.type !== 'text') continue;

        /* Must start with [<char>] pattern */
        var m = firstChild.content.match(/^\[(.)\]\s*/);
        if (!m) continue;

        /* Must be inside a list item */
        var liIdx = findListItem(i);
        if (liIdx === -1) continue;

        var stateChar = m[1];
        var info = TASK_STATES[stateChar] || TASK_STATES[' '];

        /* Strip the checkbox text from the first child */
        firstChild.content = firstChild.content.slice(m[0].length);

        /* Annotate list_item_open with task classes */
        var liTok   = tokens[liIdx];
        var liClass = (liTok.attrGet('class') || '').trim();
        liTok.attrSet('class', ('task-list-item ' + info.cls + (liClass ? ' ' + liClass : '')).trim());
        liTok.attrSet('data-task', stateChar);

        /* Annotate the parent bullet/ordered list */
        for (var j = liIdx - 1; j >= 0; j--) {
          var lt = tokens[j].type;
          if (lt === 'bullet_list_open' || lt === 'ordered_list_open') {
            var ulClass = tokens[j].attrGet('class') || '';
            if (ulClass.indexOf('task-list') === -1) {
              tokens[j].attrSet('class', (ulClass ? ulClass + ' ' : '') + 'task-list');
            }
            break;
          }
          /* If we cross a list_item boundary at depth 0, stop */
          if (lt === 'list_item_close') break;
        }

        /* Prepend a checkbox <input> HTML token */
        var chkTok = new state.Token('html_inline', '', 0);
        var checkedAttr = info.checked ? ' checked' : '';
        chkTok.content =
          '<input class="task-list-checkbox" type="checkbox"' +
          ' data-task="' + esc(stateChar) + '"' +
          ' aria-label="' + esc(info.label) + '"' +
          checkedAttr + ' disabled> ';
        children.unshift(chkTok);
      }
    });
  }

  /* ── Rule: mermaid fence ────────────────────────────────────────────────── */

  function ruleMermaid(md) {
    var orig = md.renderer.rules.fence;
    md.renderer.rules.fence = function (tokens, idx, options, env, self) {
      var token = tokens[idx];
      var lang  = token.info.trim().split(/\s+/)[0].toLowerCase();
      if (lang !== 'mermaid') {
        return orig ? orig(tokens, idx, options, env, self) : self.renderToken(tokens, idx, options);
      }
      /* Render mermaid blocks as a div; obsidianInitMermaid() will process them */
      return '<div class="obsidian-mermaid mermaid">' + esc(token.content.trim()) + '</div>\n';
    };
  }

  /* ── Rule: tikz fence ───────────────────────────────────────────────────── */

  function ruleTikz(md) {
    var orig = md.renderer.rules.fence;
    md.renderer.rules.fence = function (tokens, idx, options, env, self) {
      var token = tokens[idx];
      var lang  = token.info.trim().split(/\s+/)[0].toLowerCase();
      if (lang !== 'tikz') {
        return orig ? orig(tokens, idx, options, env, self) : self.renderToken(tokens, idx, options);
      }
      /* Emit a placeholder div — script tags injected via innerHTML are inert.
         obsidianInitTikz() will swap these for real <script type="text/tikz">
         elements created via document.createElement, which TikZJax picks up. */
      return '<div class="tikz-source" style="display:none">' + esc(token.content.trim()) + '</div>\n';
    };
  }

  // --- DESMOS fence handler ---
  function ruleDesmos(md) {
    var orig = md.renderer.rules.fence;
    md.renderer.rules.fence = function (tokens, idx, options, env, self) {
      var token = tokens[idx];
      var lang  = token.info.trim().split(/\s+/)[0].toLowerCase();
      if (lang !== 'desmos') {
        return orig ? orig(tokens, idx, options, env, self) : self.renderToken(tokens, idx, options);
      }

      /* ── Parse key=value options from info string ── */
      var opts = { lock: 'none', zoom: 'true', height: '400' };
      token.info.trim().split(/\s+/).slice(1).forEach(function (part) {
        var kv = part.split('=');
        if (kv.length === 2) opts[kv[0]] = kv[1];
      });
      /* Render desmos blocks as a div; obsidianInitDesmos() will process them */
      var expressions = token.content
        .trim()
        .split('\n')
        .filter(function (line) { return line.trim() !== ''; })
        .map(function (latex, i) { return { id: 'expr-' + i, latex: latex.trim() }; });

      var stateJson = JSON.stringify({ expressions: { list: expressions } });
      var uid = 'desmos-' + Math.random().toString(36).slice(2, 9);

      return '<div class="desmos-block" id="' + uid + '"'
        + ' data-state=\'' + stateJson.replace(/'/g, '&#39;') + '\''
        + ' data-lock="'   + opts.lock + '"'
        + ' data-zoom="'   + opts.zoom + '"'
        + ' style="width:100%;height:' + opts.height + 'px;border-radius:10px;overflow:hidden;">'
        + '</div>\n';
    };                  // ← closes md.renderer.rules.fence = function(...)
  }                     // ← closes ruleDesmos

  /* ── Rule: heading IDs — stamp id="..." on <h1>–<h6> for wikilink anchors ─ */

  function ruleHeadingIds(md) {
    md.renderer.rules.heading_open = function (tokens, idx, options, env, self) {
      var token  = tokens[idx];
      var inline = tokens[idx + 1];
      if (inline && inline.type === 'inline') {
        /* Collect plain text from all inline children (strip HTML tokens) */
        var text = (inline.children || [])
          .filter(function (t) { return t.type === 'text' || t.type === 'softbreak'; })
          .map(function (t)    { return t.type === 'softbreak' ? ' ' : t.content; })
          .join('');
        var id = text.trim()
          .toLowerCase()
          .replace(/\s+/g, '-')
          .replace(/[^\w\-]/g, '');
        if (id) token.attrSet('id', id);
      }
      return self.renderToken(tokens, idx, options);
    };
  }

  /* ── Front-matter parser ────────────────────────────────────────────────── */

  function parseFrontmatter(raw) {
    var m = raw.match(/^---[ \t]*\r?\n([\s\S]*?)\r?\n---[ \t]*(\r?\n|$)/);
    if (!m) return { content: raw, frontmatter: {}, rawFrontmatter: '' };
    var rawFM   = m[1];
    var content = raw.slice(m[0].length);
    var fm = {};
    rawFM.split(/\r?\n/).forEach(function (line) {
      var kv = line.match(/^([\w-]+)\s*:\s*(.*)/);
      if (!kv) return;
      var key = kv[1], val = kv[2].trim();
      if (val.charAt(0) === '[' && val.charAt(val.length-1) === ']') {
        fm[key] = val.slice(1,-1).split(',').map(function(s){ return s.trim().replace(/^['"]|['"]$/g,''); }).filter(Boolean);
      } else {
        fm[key] = val.replace(/^['"]|['"]$/g,'');
      }
    });
    return { content: content, frontmatter: fm, rawFrontmatter: rawFM };
  }

  /* ── Post-render init: MathJax math ─────────────────────────────────────── */
  /*                                                                           */
  /* Call after inserting rendered HTML into the DOM.                          */
  /* Requires MathJax 3 (tex-svg build) to be loaded.                         */
  /* Returns a Promise that resolves when typesetting is complete.             */

  function initMath(root) {
    var el = root || document;

    /* Mark nodes so MathJax doesn't double-process on re-calls */
    el.querySelectorAll('.math.math-inline[data-math]:not([data-mj-rendered])').forEach(function (span) {
      span.setAttribute('data-mj-rendered', 'true');
    });
    el.querySelectorAll('.math.math-block[data-math]:not([data-mj-rendered])').forEach(function (div) {
      div.setAttribute('data-mj-rendered', 'true');
    });

    /* Wait for MathJax startup to complete (it loads async), then typeset */
    if (typeof MathJax === 'undefined') return Promise.resolve();
    var ready = (MathJax.startup && MathJax.startup.promise)
      ? MathJax.startup.promise
      : Promise.resolve();
    return ready.then(function () {
      if (typeof MathJax.typesetPromise === 'function') {
        return MathJax.typesetPromise([el]);
      }
    });
  }

  /* ── Post-render init: Mermaid diagrams ─────────────────────────────────── */
  /*                                                                           */
  /* Call after inserting rendered HTML into the DOM.                          */
  /* Requires mermaid.min.js to be loaded (mermaid CDN).                      */

  function initMermaid(root) {
    if (typeof mermaid === 'undefined') return;
    var els = Array.from(
      (root || document).querySelectorAll('.obsidian-mermaid:not([data-mermaid-processed])')
    );
    if (!els.length) return;
    els.forEach(function (el) { el.setAttribute('data-mermaid-processed', 'true'); });
    try {
      if (typeof mermaid.run === 'function') {
        /* Mermaid v10+ */
        mermaid.run({ nodes: els });
      } else if (typeof mermaid.init === 'function') {
        /* Mermaid v9 */
        mermaid.init(undefined, els);
      }
    } catch (e) {
      console.warn('[obsidian-markdown-it] Mermaid render error:', e);
    }
  }

  function initDesmos(root) {
    if (typeof Desmos === 'undefined') return;
    requestAnimationFrame(function () {
      (root || document).querySelectorAll('.desmos-block:not([data-desmos-ready])').forEach(function (elt) {
        elt.setAttribute('data-desmos-ready', 'true');
        var lock      = elt.getAttribute('data-lock') || 'none';
        var allowZoom = elt.getAttribute('data-zoom') !== 'false';
        var calc = Desmos.GraphingCalculator(elt, {
          invertedColors:       true,
          settingsMenu:         false,
          zoomButtons:          allowZoom,
          lockViewport:         lock === 'all',
          expressions:          true,
          keypad:               lock === 'none',
          expressionsCollapsed: false,
        });
        try {
          var state = JSON.parse(elt.getAttribute('data-state'));
          state.expressions.list.forEach(function (expr) {
          var isSlider = expr.latex && /^[a-zA-Z](\s*)=(\s*)[0-9]/.test(expr.latex);

          if (lock === 'none') {
            // everything visible and editable — do nothing
          } else if (lock === 'expressions') {
            if (!isSlider) expr.secret = true;   // hide only non-slider lines
          } else if (lock === 'sliders') {
            if (!isSlider) expr.secret = true;   // hide formulas
            if (isSlider)  expr.readonly = true; // freeze sliders but keep visible
          } else if (lock === 'all') {
            expr.secret = true;                  // hide absolutely everything
          }

          calc.setExpression(expr);
        });
        } catch (e) {
          console.warn('[obsidian-markdown-it] Desmos expr error:', e);
        }
      });
    });
  }

  /* ── Post-render init: highlight.js code blocks ─────────────────────────── */
  /*                                                                           */
  /* Call after inserting rendered HTML into the DOM.                          */
  /* Requires highlight.js to be loaded.                                       */

  function initHighlight(root) {
    if (typeof hljs === 'undefined') return;
    (root || document)
      .querySelectorAll('pre code:not([data-highlighted])')
      .forEach(function (block) {
        hljs.highlightElement(block);
      });
  }

  /* ── Default CSS ────────────────────────────────────────────────────────── */

  var DEFAULT_CSS = [
    /* ── Callouts ─────────────────────────────────────────────────────────── */
    '.callout{border-left:4px solid var(--callout-color,#448aff);border-radius:6px;margin:1.2em 0;overflow:hidden;background:var(--callout-bg,rgba(68,138,255,.08))}',
    '.callout-title{display:flex;align-items:center;gap:.4em;padding:.55em .9em;font-weight:600;font-size:.95em;background:var(--callout-title-bg,rgba(68,138,255,.15));color:var(--callout-color,#448aff);user-select:none}',
    '.callout-content{padding:.65em .9em}',
    '.callout-fold-icon{font-size:.8em;margin-left:auto}',
    '.callout-note{--callout-color:#448aff;--callout-bg:rgba(68,138,255,.07);--callout-title-bg:rgba(68,138,255,.13)}',
    '.callout-info,.callout-todo{--callout-color:#29b6f6;--callout-bg:rgba(41,182,246,.07);--callout-title-bg:rgba(41,182,246,.13)}',
    '.callout-tip,.callout-hint,.callout-important{--callout-color:#26a69a;--callout-bg:rgba(38,166,154,.07);--callout-title-bg:rgba(38,166,154,.13)}',
    '.callout-success,.callout-check,.callout-done{--callout-color:#66bb6a;--callout-bg:rgba(102,187,106,.07);--callout-title-bg:rgba(102,187,106,.13)}',
    '.callout-warning,.callout-caution,.callout-attention{--callout-color:#ffa726;--callout-bg:rgba(255,167,38,.07);--callout-title-bg:rgba(255,167,38,.13)}',
    '.callout-danger,.callout-error{--callout-color:#ef5350;--callout-bg:rgba(239,83,80,.07);--callout-title-bg:rgba(239,83,80,.13)}',
    '.callout-failure,.callout-fail,.callout-missing{--callout-color:#ec407a;--callout-bg:rgba(236,64,122,.07);--callout-title-bg:rgba(236,64,122,.13)}',
    '.callout-question,.callout-help,.callout-faq{--callout-color:#ab47bc;--callout-bg:rgba(171,71,188,.07);--callout-title-bg:rgba(171,71,188,.13)}',
    '.callout-bug{--callout-color:#f44336;--callout-bg:rgba(244,67,54,.07);--callout-title-bg:rgba(244,67,54,.13)}',
    '.callout-example{--callout-color:#7e57c2;--callout-bg:rgba(126,87,194,.07);--callout-title-bg:rgba(126,87,194,.13)}',
    '.callout-quote,.callout-cite{--callout-color:#78909c;--callout-bg:rgba(120,144,156,.07);--callout-title-bg:rgba(120,144,156,.13)}',
    '.callout-abstract,.callout-summary,.callout-tldr{--callout-color:#26c6da;--callout-bg:rgba(38,198,218,.07);--callout-title-bg:rgba(38,198,218,.13)}',
    /* ── Footnotes ──────────────────────────────────────────────────────────── */
    '.footnotes{border-top:1px solid var(--border,#dadce0);margin-top:2em;padding-top:1em;font-size:.88em;opacity:.85}',
    '.footnotes-sep{display:none}',
    '.footnotes ol{padding-left:1.5em}',
    '.footnotes li{margin-bottom:.35em}',
    'a.footnote-ref{font-size:.8em;vertical-align:super;text-decoration:none;font-weight:600;color:var(--accent,#1a73e8);padding:0 1px}',
    'a.footnote-ref:hover{text-decoration:underline}',
    'a.footnote-backref{text-decoration:none;margin-left:.25em;opacity:.7}',
    /* ── Links & tags ──────────────────────────────────────────────────────── */
    '.obsidian-wikilink{color:var(--wikilink-color,#7c4dff);text-decoration:none;border-bottom:1px dashed currentColor}',
    '.obsidian-wikilink:hover{border-bottom-style:solid}',
    '.obsidian-tag{display:inline-block;background:var(--tag-bg,rgba(124,77,255,.12));color:var(--tag-color,#7c4dff);padding:1px 7px;border-radius:12px;font-size:.82em;text-decoration:none;font-weight:500}',
    /* ── Inline / block formatting ─────────────────────────────────────────── */
    'mark{background:var(--highlight-bg,#fff59d);color:var(--highlight-color,inherit);padding:0 2px;border-radius:2px}',
    'del{text-decoration:line-through;opacity:.7}',
    /* ── Math ──────────────────────────────────────────────────────────────── */
    '.math-block{display:block;overflow-x:auto;padding:.5em 0;text-align:center}',
    '.math-inline{font-style:italic}',
    /* ── Embeds ─────────────────────────────────────────────────────────────── */
    '.obsidian-image{max-width:100%;height:auto;border-radius:4px;display:block;margin:.5em auto}',
    '.obsidian-audio,.obsidian-video{display:block;max-width:100%;margin:.5em 0}',
    '.obsidian-pdf{width:100%;min-height:500px;border:1px solid #ccc;border-radius:4px}',
    '.obsidian-transclusion{border-left:3px solid #ccc;padding:.5em .8em;background:rgba(0,0,0,.03);border-radius:0 4px 4px 0;margin:.5em 0}',
    '.obsidian-block-id{display:none}',
    /* ── Mermaid ─────────────────────────────────────────────────────────────── */
    '.obsidian-mermaid{overflow-x:auto;text-align:center;margin:1em 0;background:transparent}',
    /* -- TikZ error block -- */
    '.tikz-error{display:flex;align-items:center;gap:.5em;margin:1em 0;padding:.6em .9em;border-left:4px solid #ef5350;border-radius:4px;background:rgba(239,83,80,.07);color:#ef5350;font-size:.9em;font-family:monospace}',
    '.tikz-error-icon{font-size:1.1em;flex-shrink:0}',
    '.tikz-error-msg{opacity:.9}',
    /* ── Task lists ──────────────────────────────────────────────────────────── */
    'ul.task-list{list-style:none;padding-left:1.2em}',
    'li.task-list-item{display:flex;align-items:baseline;gap:.45em;padding:.1em 0}',
    '.task-list-checkbox{flex-shrink:0;appearance:none;-webkit-appearance:none;width:1em;height:1em;border:1.5px solid currentColor;border-radius:3px;vertical-align:middle;position:relative;cursor:default;opacity:.75}',
    '.task-list-checkbox[checked],.task-list-checkbox:checked{background:var(--accent,#1a73e8);border-color:var(--accent,#1a73e8)}',
    '.task-list-checkbox[checked]::after,.task-list-checkbox:checked::after{content:"✓";position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:.75em;color:#fff;font-weight:700}',
    /* Extended task state colours */
    'li.task-done>.task-list-checkbox{background:var(--accent,#1a73e8);border-color:var(--accent,#1a73e8)}',
    'li.task-done>.task-list-checkbox::after{content:"✓";position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:.75em;color:#fff;font-weight:700}',
    'li.task-done{opacity:.65;text-decoration:none}',
    'li.task-in-progress>.task-list-checkbox{border-color:#ffa726;background:rgba(255,167,38,.15)}',
    'li.task-in-progress>.task-list-checkbox::after{content:"◑";position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:.75em;color:#ffa726}',
    'li.task-cancelled{opacity:.5;text-decoration:line-through}',
    'li.task-cancelled>.task-list-checkbox{border-color:#78909c;background:rgba(120,144,156,.12)}',
    'li.task-cancelled>.task-list-checkbox::after{content:"—";position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:.75em;color:#78909c}',
    'li.task-important>.task-list-checkbox{border-color:#ef5350;background:rgba(239,83,80,.12)}',
    'li.task-important>.task-list-checkbox::after{content:"!";position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:.75em;color:#ef5350;font-weight:900}',
    'li.task-deferred>.task-list-checkbox{border-color:#ab47bc}',
    'li.task-deferred>.task-list-checkbox::after{content:"»";position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:.75em;color:#ab47bc}',
    'li.task-scheduled>.task-list-checkbox{border-color:#29b6f6}',
    'li.task-scheduled>.task-list-checkbox::after{content:"◷";position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:.75em;color:#29b6f6}',
    'li.task-question>.task-list-checkbox{border-color:#ffd54f}',
    'li.task-question>.task-list-checkbox::after{content:"?";position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:.75em;color:#ffd54f;font-weight:900}',
    'li.task-star>.task-list-checkbox{border-color:#ffa726;background:rgba(255,167,38,.1)}',
    'li.task-star>.task-list-checkbox::after{content:"★";position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:.7em;color:#ffa726}',
    'li.task-bookmark>.task-list-checkbox{border-color:#7c4dff}',
    'li.task-bookmark>.task-list-checkbox::after{content:"🔖";position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:.65em}'
  ].join('\n');

  /* ── Callout fold toggle script ─────────────────────────────────────────── */

  var TOGGLE_JS = '(function(){' +
    'function init(root){' +
      '(root||document).querySelectorAll(\'.callout[data-foldable="true"] .callout-title\').forEach(function(el){' +
        'if(el._obsOk)return;el._obsOk=true;' +
        'el.addEventListener("click",function(){' +
          'var c=el.closest(".callout"),body=c.querySelector(".callout-content"),icon=c.querySelector(".callout-fold-icon"),open=c.dataset.open==="true";' +
          'c.dataset.open=open?"false":"true";body.style.display=open?"none":"";' +
          'if(icon)icon.textContent=open?"\u25b8":"\u25be";' +
        '});' +
      '});' +
    '}' +
    'window.obsidianInitCalloutFolds=init;' +
    'init(document);' +
  '})();';

  /* ── Main plugin ────────────────────────────────────────────────────────── */

  function obsidianPlugin(md, options) {
    var opts = {
      resolveWikilink: null, resolveEmbed: null, resolveTag: null,
      resolveTransclusion: null, calloutIcons: {},
      enableMath: true, enableTags: true, enableComments: true, enableTikz: true,
      enableHighlight: true, enableStrikethrough: true,
      enableTaskLists: true, enableMermaid: true, enableBlockIds: true
    };
    if (options) {
      for (var k in options) {
        if (Object.prototype.hasOwnProperty.call(options, k)) opts[k] = options[k];
      }
    }

    if (opts.enableComments)       ruleComments(md);
    if (opts.enableMath)           { ruleMathBlock(md); ruleMathInline(md); }
    if (opts.enableHighlight)      ruleHighlight(md);
    if (opts.enableStrikethrough)  ruleStrikethrough(md);
    if (opts.enableBlockIds)       ruleBlockIds(md);
    if (opts.enableTags)           ruleTags(md, opts);
    if (opts.enableTaskLists)      ruleTaskLists(md);
    ruleWikilinks(md, opts);
    ruleEmbeds(md, opts);
    ruleCallouts(md, opts);
    if (opts.enableMermaid)        ruleMermaid(md);
    if (opts.enableTikz)          ruleTikz(md);
    ruleDesmos(md);   
    ruleHeadingIds(md);
  }

  /* ── Expose globals ─────────────────────────────────────────────────────── */

  global.obsidianPlugin             = obsidianPlugin;
  global.obsidianParseFrontmatter   = parseFrontmatter;
  global.obsidianGetCSS             = function () { return DEFAULT_CSS; };
  global.obsidianGetToggleScript    = function () { return TOGGLE_JS; };
  /* Post-render init helpers */
  global.obsidianInitCalloutFolds   = function (root) {
    /* Inline version — also injected as a <script> via obsidianGetToggleScript */
    (root || document)
      .querySelectorAll('.callout[data-foldable="true"] .callout-title')
      .forEach(function (el) {
        if (el._obsOk) return; el._obsOk = true;
        el.addEventListener('click', function () {
          var c    = el.closest('.callout');
          var body = c.querySelector('.callout-content');
          var icon = c.querySelector('.callout-fold-icon');
          var open = c.dataset.open === 'true';
          c.dataset.open = open ? 'false' : 'true';
          body.style.display = open ? 'none' : '';
          if (icon) icon.textContent = open ? '\u25b8' : '\u25be';
        });
      });
  };
  global.obsidianInitMath           = initMath;
  global.obsidianInitTikz           = function (root) {
    /* The local bin/tikzjax/output/tikzjax.js observes document.body with
       { childList: true, subtree: true }, so <script type="text/tikz"> elements
       inserted anywhere in the DOM are picked up automatically.
       Strategy: replace each .tikz-source div directly with the script element;
       tikzjax handles the spinner -> SVG replacement in-place.

       Preamble injection (required by this tikzjax build):
       ─────────────────────────────────────────────────────
       The tikzjax engine uses a frozen LaTeX core dump that has already passed
       the preamble stage. This means \usepackage and \usetikzlibrary cannot
       appear inside the script body — they must be injected via the
       data-add-to-preamble attribute BEFORE \begin{document}.

       This function automatically:
         1. Scans the tikz block for \usepackage / \usetikzlibrary lines and
            any setup macros (e.g. \tdplotsetmaincoords) that precede
            \begin{tikzpicture}.
         2. Moves them into data-add-to-preamble (appending \begin{document}).
         3. Appends \end{document} after \end{tikzpicture} in the body.

       Users write natural LaTeX in ```tikz blocks — no special syntax needed:

         ```tikz
         \usepackage{tikz-3dplot}
         \tdplotsetmaincoords{70}{110}
         \begin{tikzpicture}[tdplot_main_coords, scale=1.5]
             ...
         \end{tikzpicture}
         ```

       Error handling: when TeX compilation fails tikzjax sets
         spinner.outerHTML = "<img src='//invalid.site/img-not-found.png'/>"
       leaving a broken-image icon in the document.  A MutationObserver on the
       parent catches that IMG insertion and replaces it with a styled error
       block.  On success, tikzjax dispatches "tikzjax-load-finished" (bubbles)
       on the rendered SVG; we use that to disconnect the observer cleanly.      */

    /* ── Preamble extractor ──────────────────────────────────────────────── */
    function extractPreamble(raw) {
      var lines      = raw.split('\n');
      var preamble   = [];
      var bodyLines  = [];
      var inBody     = false;

      for (var i = 0; i < lines.length; i++) {
        var line = lines[i];
        var trimmed = line.trim();

        if (inBody) {
          bodyLines.push(line);
          continue;
        }

        /* Lines before \begin{tikzpicture} that are preamble commands */
        if (
          /^\\usepackage\b/.test(trimmed)   ||
          /^\\usetikzlibrary\b/.test(trimmed)
        ) {
          preamble.push(trimmed);
          continue;
        }

        /* Any other command before \begin{tikzpicture} is a setup macro
           e.g. \tdplotsetmaincoords{70}{110} */
        if (/^\\[a-zA-Z]/.test(trimmed) && !/^\\begin\b/.test(trimmed)) {
          preamble.push(trimmed);
          continue;
        }

        /* Once we hit \begin{tikzpicture} (or any \begin), enter body mode */
        inBody = true;
        bodyLines.push(line);
      }

      /* Build the data-add-to-preamble value:
         all extracted commands + \begin{document} */
      var preambleAttr = preamble.join('') + (preamble.length ? '\\begin{document}' : '\\begin{document}');

      /* Body: the tikzpicture content + \end{document} */
      var body = bodyLines.join('\n').trimRight();
      /* Append \end{document} if not already present */
      if (body.indexOf('\\end{document}') === -1) {
        body = body + '\n\\end{document}';
      }

      return { preamble: preambleAttr, body: body };
    }

    var el = root || document;
    el.querySelectorAll('.tikz-source:not([data-tikz-rendered])').forEach(function (div) {
      div.setAttribute('data-tikz-rendered', 'true');

      /* Extract preamble commands and clean body */
      var parsed = extractPreamble(div.textContent);

      var s  = document.createElement('script');
      s.type = 'text/tikz';
      s.setAttribute('data-add-to-preamble', parsed.preamble);
      s.setAttribute('data-show-console', 'true');  /* temporary debug */
      s.textContent = parsed.body;

      var parent = div.parentNode;

      /* Watch for tikzjax inserting <img src="//invalid.site/..."> on error. */
      var obs = new MutationObserver(function (mutations) {
        for (var m = 0; m < mutations.length; m++) {
          var added = mutations[m].addedNodes;
          for (var n = 0; n < added.length; n++) {
            if (added[n].nodeName === 'IMG') {
              obs.disconnect();
              var err = document.createElement('div');
              err.className = 'tikz-error';
              err.innerHTML =
                '<span class="tikz-error-icon">⚠️</span>' +
                '<span class="tikz-error-msg">TikZ render failed — see console for details.</span>';
              if (added[n].parentNode) added[n].parentNode.replaceChild(err, added[n]);
              return;
            }
          }
        }
      });
      obs.observe(parent, { childList: true });

      /* Disconnect cleanly on success. */
      parent.addEventListener('tikzjax-load-finished', function cleanup() {
        parent.removeEventListener('tikzjax-load-finished', cleanup);
        obs.disconnect();
      });

      /* Insert directly — tikzjax finds it via its subtree:true observer. */
      parent.replaceChild(s, div);
    });
  };
  global.obsidianInitMermaid        = initMermaid;
  global.obsidianInitHighlight      = initHighlight;
  global.obsidianInitDesmos         = initDesmos;

}(window));
