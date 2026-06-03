# ⚡ CHAPTER 1 — RAPID REVISION + MIND MAPS
> **Sets** | Board · JEE

---

## 🔬 Key Mathematicians & Their Contributions

| Mathematician | Period | Contribution |
|:---|:---:|:---|
| Georg Cantor | 1845–1918 | Founder of modern set theory; papers 1874–1897; showed reals cannot be listed 1-to-1 with integers |
| Richard Dedekind | 1831–1916 | Received and extended Cantor's work |
| Gottlob Frege | ~1900 | Presented set theory as principles of logic |
| Bertrand Russell | 1872–1970 | Showed (1902) that "set of all sets" leads to contradiction — Russell's Paradox |
| Ernst Zermelo | 1871–1953 | First axiomatisation of set theory (1908) |
| John Venn | 1834–1883 | Introduced Venn diagrams for visual representation of sets |

---

## ⚖️ Types of Sets — At a Glance

| Type | Defining Property | Example |
|:---|:---|:---|
| Empty Set $\phi$ | No elements | $\{x \in \mathbb{N} : 1 < x < 2\}$ |
| Singleton Set | Exactly one element | $\{0\}$, $\{5\}$ |
| Finite Set | Countable number of elements | $\{a, e, i, o, u\}$, $n = 5$ |
| Infinite Set | Unlimited elements | $\mathbb{N}$, $\mathbb{Z}$, $\mathbb{R}$ |
| Equal Sets | Exactly the same elements | $\{1,2,3\} = \{3,2,1\}$ |
| Disjoint Sets | No common elements; $A \cap B = \phi$ | Even and odd integers |
| Universal Set $U$ | Contains all sets in context | Shown as rectangle in Venn |

---

## 🔢 Subsets and Power Sets — Quick Rules

$$n(A) = m \implies n(P(A)) = 2^m$$

| Count | Formula |
|:---|:---:|
| Total subsets | $2^n$ |
| Proper subsets | $2^n - 1$ |
| Non-empty subsets | $2^n - 1$ |
| Non-empty proper subsets | $2^n - 2$ |

---

## 🧮 Set Operations — All Formulas

$$n(A \cup B) = n(A) + n(B) - n(A \cap B)$$

$$n(A \cup B \cup C) = n(A) + n(B) + n(C) - n(A \cap B) - n(B \cap C) - n(A \cap C) + n(A \cap B \cap C)$$

$$A - B = A \cap B'$$

$$A = (A \cap B) \cup (A - B)$$

$$A \cup (B - A) = A \cup B$$

---

## 📏 Intervals — Quick Reference

| Notation | Type | Endpoints Included? |
|:---:|:---:|:---:|
| $(a, b)$ | Open | Neither |
| $[a, b]$ | Closed | Both |
| $[a, b)$ | Half-open | Only $a$ |
| $(a, b]$ | Half-open | Only $b$ |
| $[0, \infty)$ | Non-negative reals | 0 only |
| $(-\infty, \infty)$ | All of $\mathbb{R}$ | — |

> [!tip] Number Line Convention
> **Hollow circle** = open endpoint (not included)
> **Filled circle** = closed endpoint (included)
> $\infty$ is **never** included — always use round bracket at $\pm\infty$

---

## 🧩 De Morgan's Laws + Properties Summary

| Property | Formula |
|:---|:---|
| De Morgan 1 | $(A \cup B)' = A' \cap B'$ |
| De Morgan 2 | $(A \cap B)' = A' \cup B'$ |
| Double complement | $(A')' = A$ |
| Complement of $U$ | $U' = \phi$ |
| Complement of $\phi$ | $\phi' = U$ |
| Complement law 1 | $A \cup A' = U$ |
| Complement law 2 | $A \cap A' = \phi$ |
| Absorption 1 | $A \cup (A \cap B) = A$ |
| Absorption 2 | $A \cap (A \cup B) = A$ |

> [!warning] Most Common Error in Exams
> Students often write $(A \cup B)' = A' \cup B'$ — this is **WRONG**.
> The complement of a **union** is an **intersection**: $(A \cup B)' = A' \cap B'$

---

---

# 🗺️ MIND MAP 1 — Big Picture of Chapter 1

```mermaid
flowchart TD
    ROOT(["SETS"])

    ROOT --> DEF["DEFINITION"]
    ROOT --> REP["REPRESENTATION"]
    ROOT --> TYPES["TYPES OF SETS"]
    ROOT --> REL["RELATIONS BETWEEN SETS"]
    ROOT --> OPS["OPERATIONS ON SETS"]

    DEF --> D1["Well-defined collection of objects"]
    DEF --> D2["Elements denoted by lowercase letters"]

    REP --> R1["Roster Form — list all elements"]
    REP --> R2["Set-Builder Form — describe property"]

    TYPES --> T1["Empty Set — phi"]
    TYPES --> T2["Finite Set — countable elements"]
    TYPES --> T3["Infinite Set — uncountable"]
    TYPES --> T4["Equal Sets — same elements"]
    TYPES --> T5["Singleton Set — one element"]

    REL --> RL1["Subset — A subset B"]
    REL --> RL2["Proper Subset — A strictly inside B"]
    REL --> RL3["Power Set — all subsets of A"]
    REL --> RL4["Universal Set — reference set U"]

    OPS --> O1["Union — A union B"]
    OPS --> O2["Intersection — A intersect B"]
    OPS --> O3["Difference — A minus B"]
    OPS --> O4["Complement — A prime"]

    style ROOT fill:#2c3e50,color:#ecf0f1,stroke:#3498db,stroke-width:2px
    style DEF fill:#1e3a5f,color:#aed6f1,stroke:#2980b9
    style TYPES fill:#1a3d2e,color:#a9dfbf,stroke:#27ae60
    style OPS fill:#3d2a1a,color:#f0d0a8,stroke:#e67e22
    style REL fill:#3d1a3a,color:#f0a8e0,stroke:#8e44ad
```

---

# 🗺️ MIND MAP 2 — Types of Sets (Detailed)

```mermaid
flowchart TD
    ROOT(["TYPES OF SETS"])

    ROOT --> EMPTY["EMPTY SET phi"]
    ROOT --> FIN["FINITE SET"]
    ROOT --> INF["INFINITE SET"]
    ROOT --> EQ["EQUAL SETS"]

    EMPTY --> E1["No elements at all"]
    E1 --> E2["n(phi) = 0"]
    E2 --> E3["phi is subset of every set"]
    E3 --> E4["{phi} is NOT the empty set"]

    FIN --> F1["Definite number of elements"]
    F1 --> F2["n(A) is a natural number"]
    F2 --> F3["Example: vowels, months, students"]

    INF --> I1["Elements continue without end"]
    I1 --> I2["Example: N, Z, Q, R"]
    I2 --> I3["Cannot fully list in roster form"]

    EQ --> Q1["A = B if same elements"]
    Q1 --> Q2["Order does not matter"]
    Q2 --> Q3["Repetition does not matter"]
    Q3 --> Q4["{1,2,3} = {3,1,2} = {1,1,2,3}"]

    style ROOT fill:#2c3e50,color:#ecf0f1,stroke:#3498db
    style EMPTY fill:#3d1a1a,color:#f5b7b1,stroke:#e74c3c
    style FIN fill:#1a3d2e,color:#a9dfbf,stroke:#27ae60
    style INF fill:#1e3a5f,color:#aed6f1,stroke:#2980b9
    style EQ fill:#3d2a1a,color:#f0d0a8,stroke:#e67e22
```

---

# 🗺️ MIND MAP 3 — Subsets and Power Sets

```mermaid
flowchart TD
    ROOT(["SUBSETS AND POWER SETS"])

    ROOT --> SUB["SUBSET A subset B"]
    ROOT --> PROP["PROPER SUBSET A strictly inside B"]
    ROOT --> POW["POWER SET P(A)"]

    SUB --> S1["Every element of A is in B"]
    S1 --> S2["A subset A for every A"]
    S2 --> S3["phi subset A for every A"]
    S3 --> S4["A subset B and B subset A implies A = B"]

    PROP --> P1["A subset B and A not equal B"]
    P1 --> P2["B has at least one element not in A"]
    P2 --> P3["Example: {1,2} is proper subset of {1,2,3}"]

    POW --> PW1["Set of all subsets of A"]
    PW1 --> PW2["n(P(A)) = 2^n(A)"]
    PW2 --> PW3["Always includes phi and A itself"]
    PW3 --> PW4["P(phi) = {phi} — has 1 element"]
    PW3 --> PW5["P({a,b}) has 4 elements"]

    style ROOT fill:#2c3e50,color:#ecf0f1,stroke:#3498db
    style SUB fill:#1e3a5f,color:#aed6f1,stroke:#2980b9
    style PROP fill:#1a3d2e,color:#a9dfbf,stroke:#27ae60
    style POW fill:#3d2a1a,color:#f0d0a8,stroke:#e67e22
```

---

# 🗺️ MIND MAP 4 — Operations on Sets

```mermaid
flowchart TD
    ROOT(["OPERATIONS ON SETS"])

    ROOT --> UNI["UNION A union B"]
    ROOT --> INT["INTERSECTION A intersect B"]
    ROOT --> DIFF["DIFFERENCE A minus B"]
    ROOT --> COMP["COMPLEMENT A prime"]

    UNI --> U1["Elements in A or B or both"]
    U1 --> U2["Commutative: A union B = B union A"]
    U2 --> U3["A union phi = A"]
    U3 --> U4["A union U = U"]

    INT --> I1["Elements common to both A and B"]
    I1 --> I2["Commutative: A intersect B = B intersect A"]
    I2 --> I3["A intersect phi = phi"]
    I3 --> I4["A intersect U = A"]

    DIFF --> D1["Elements in A but NOT in B"]
    D1 --> D2["A minus B = A intersect B prime"]
    D2 --> D3["NOT commutative: A minus B not equal B minus A"]
    D3 --> D4["A minus B, A intersect B, B minus A are disjoint"]

    COMP --> C1["Elements of U not in A"]
    C1 --> C2["A union A prime = U"]
    C2 --> C3["A intersect A prime = phi"]
    C3 --> C4["(A prime) prime = A"]

    style ROOT fill:#2c3e50,color:#ecf0f1,stroke:#3498db
    style UNI fill:#1e3a5f,color:#aed6f1,stroke:#2980b9
    style INT fill:#1a3d2e,color:#a9dfbf,stroke:#27ae60
    style DIFF fill:#3d2a1a,color:#f0d0a8,stroke:#e67e22
    style COMP fill:#3d1a3a,color:#f0a8e0,stroke:#8e44ad
```

---

# 🗺️ MIND MAP 5 — De Morgan's Laws and Complement Properties

```mermaid
flowchart TD
    ROOT(["DE MORGAN'S LAWS"])

    ROOT --> L1["Law 1: (A union B) prime = A prime intersect B prime"]
    ROOT --> L2["Law 2: (A intersect B) prime = A prime union B prime"]

    L1 --> L1A["Complement of UNION = INTERSECTION of complements"]
    L1A --> L1B["Useful for: A prime intersect B prime problems"]
    L1B --> L1C["Key trick: n(A prime intersect B prime) = n(U) - n(A union B)"]

    L2 --> L2A["Complement of INTERSECTION = UNION of complements"]
    L2A --> L2B["Useful for: A prime union B prime problems"]
    L2B --> L2C["Key trick: n(A prime union B prime) = n(U) - n(A intersect B)"]

    ROOT --> PROPS["COMPLEMENT PROPERTIES"]

    PROPS --> P1["A union A prime = U"]
    PROPS --> P2["A intersect A prime = phi"]
    PROPS --> P3["(A prime) prime = A"]
    PROPS --> P4["U prime = phi and phi prime = U"]

    style ROOT fill:#2c3e50,color:#ecf0f1,stroke:#3498db,stroke-width:2px
    style L1 fill:#1e3a5f,color:#aed6f1,stroke:#2980b9
    style L2 fill:#1a3d2e,color:#a9dfbf,stroke:#27ae60
    style PROPS fill:#3d2a1a,color:#f0d0a8,stroke:#e67e22
```

---

# 🗺️ MIND MAP 6 — Intervals as Subsets of R

```mermaid
flowchart TD
    ROOT(["INTERVALS AS SUBSETS OF R"])

    ROOT --> OPEN["OPEN INTERVAL (a, b)"]
    ROOT --> CLOSED["CLOSED INTERVAL [a, b]"]
    ROOT --> HALFOP["HALF-OPEN [a, b) and (a, b]"]
    ROOT --> INF["INFINITE INTERVALS"]

    OPEN --> O1["Set: a less than x less than b"]
    O1 --> O2["Neither endpoint included"]
    O2 --> O3["Hollow circles on number line"]

    CLOSED --> C1["Set: a less than or equal x less than or equal b"]
    C1 --> C2["Both endpoints included"]
    C2 --> C3["Filled circles on number line"]

    HALFOP --> H1["[a,b): includes a, excludes b"]
    HALFOP --> H2["(a,b]: excludes a, includes b"]

    INF --> I1["[0, +inf): non-negative reals"]
    INF --> I2["(-inf, 0): negative reals"]
    INF --> I3["(-inf, +inf): all of R"]
    INF --> I4["inf is NEVER included — always round bracket"]

    ROOT --> LEN["LENGTH = b minus a for any interval type"]

    style ROOT fill:#2c3e50,color:#ecf0f1,stroke:#3498db
    style OPEN fill:#3d1a1a,color:#f5b7b1,stroke:#e74c3c
    style CLOSED fill:#1a3d2e,color:#a9dfbf,stroke:#27ae60
    style HALFOP fill:#3d2a1a,color:#f0d0a8,stroke:#e67e22
    style INF fill:#1e3a5f,color:#aed6f1
```

---

# 🗺️ MIND MAP 7 — Inclusion-Exclusion Principle (Step by Step)

```mermaid
flowchart TD
    S1(["Given: n(A), n(B), n(A intersect B) or n(A union B)"])

    S1 --> S2["STEP 1 — Identify what is given and what is asked"]

    S2 --> S3["STEP 2 — Apply formula"]
    S3 --> S3A["n(A union B) = n(A) + n(B) - n(A intersect B)"]

    S3A --> S4["For THREE sets: add all three individually"]
    S4 --> S4A["Subtract pairwise intersections"]
    S4A --> S4B["Add back triple intersection"]

    S4B --> S5["STEP 3 — Find complement if needed"]
    S5 --> S5A["n(A union B) prime = n(U) - n(A union B)"]
    S5A --> S5B["Use De Morgan if you need A prime intersect B prime"]

    S5B --> S6["STEP 4 — Extract only-A, only-B, only-AB"]
    S6 --> S6A["Only A = n(A) - n(A intersect B)"]
    S6 --> S6B["Only B = n(B) - n(A intersect B)"]

    style S1 fill:#1e3a5f,color:#aed6f1
    style S3A fill:#1a3d2e,color:#a9dfbf,stroke:#27ae60
    style S5A fill:#3d2a1a,color:#f0d0a8
    style S6 fill:#3d1a3a,color:#f0a8e0,stroke:#8e44ad
```

---

# 🗺️ MIND MAP 8 — Subset Conditions Equivalence

```mermaid
flowchart TD
    ROOT(["A subset B"])

    ROOT --> C1["Condition 1: A minus B = phi"]
    ROOT --> C2["Condition 2: A union B = B"]
    ROOT --> C3["Condition 3: A intersect B = A"]
    ROOT --> C4["Condition 4: A prime union B = U"]

    C1 --> EX1["All elements of A are in B"]
    C1 --> EX1A["So nothing left when B is removed from A"]

    C2 --> EX2["B already contains all of A"]
    C2 --> EX2A["Union adds nothing new to B"]

    C3 --> EX3["Everything in A is in B"]
    C3 --> EX3A["So intersecting with B just gives back A"]

    C4 --> EX4["JEE Advanced level equivalence"]
    C4 --> EX4A["Since A subset B, B prime subset A prime"]
    C4 --> EX4B["A prime union B = U follows"]

    style ROOT fill:#2c3e50,color:#ecf0f1,stroke:#3498db,stroke-width:2px
    style C1 fill:#1e3a5f,color:#aed6f1
    style C2 fill:#1a3d2e,color:#a9dfbf
    style C3 fill:#3d2a1a,color:#f0d0a8
    style C4 fill:#3d1a1a,color:#f5b7b1,stroke:#e74c3c
```

---

*End of Rapid Revision + Mind Maps — Ch. 1: Sets*
*Exam Tags: Board · JEE Mains · JEE Advanced*