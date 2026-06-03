# CHAPTER 5 — RAPID REVISION + MIND MAPS

### Thermodynamics

---

# ⚡ ONE-PAGE RAPID REVISION SHEET

## 🔬 Key Scientists & Contributions

| Scientist                    | Contribution                                                                                                |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------- |
| J.P. Joule (1840–50)        | Showed work done on adiabatic system is path-independent; established internal energy (U) as state function |
| Rudolf Clausius (1850)       | Defined entropy (S); stated Second Law of Thermodynamics                                                    |
| Josiah Willard Gibbs (1870s) | Defined Gibbs free energy (G = H – TS); criterion for spontaneity                                          |
| Walther Nernst (1906)        | Third Law of Thermodynamics (S → 0 as T → 0 K)                                                            |
| Max Born & Fritz Haber       | Born-Haber Cycle for indirect calculation of lattice enthalpy                                               |
| Germain Hess (1840)          | Hess's Law of Constant Heat Summation                                                                       |

---

## 📊 Key Numbers to Memorise

```
R (gas constant) = 8.314 J K⁻¹ mol⁻¹ = 0.0831 L bar K⁻¹ mol⁻¹

Standard conditions: 1 bar, 298 K (25°C)

Phase change enthalpies for H₂O:
  Δfus H° = +6.01 kJ mol⁻¹  (at 273 K, 0°C)
  Δvap H° = +40.79 kJ mol⁻¹ (at 373 K, 100°C)
  Δvap H° = +44.01 kJ mol⁻¹ (at 298 K, 25°C)

NaCl Born-Haber data:
  Δsub H° (Na)   = +108.4 kJ mol⁻¹
  Δi H°   (Na)   = +496.0 kJ mol⁻¹
  ½Δbond H° (Cl₂)= +121.0 kJ mol⁻¹
  Δeg H°  (Cl)   = –348.6 kJ mol⁻¹
  Δf H°   (NaCl) = –411.2 kJ mol⁻¹
  → Δlattice H°  = +788 kJ mol⁻¹

Key Δf H° values (kJ mol⁻¹):
  CO₂(g)  = –393.5   H₂O(l) = –285.8   H₂O(g) = –241.8
  CH₄(g)  = –74.81   NH₃(g) = –46.11   HCl(g) = –92.31
  C diamond = +1.89   Elements in reference state = 0
```

---

## 🔑 All Core Equations at a Glance

```
┌──────────────────────────────────────────────────────────────────┐
│                   FIRST LAW                                       │
│  ΔU = q + w                                                       │
│  w = –pex·ΔV  (irrev.)    w = –nRT ln(Vf/Vi)  (rev. isothermal) │
│  Cp – CV = R                                                      │
├──────────────────────────────────────────────────────────────────┤
│                   ENTHALPY                                        │
│  H = U + pV                                                       │
│  ΔH = ΔU + Δng·RT                                                │
│  ΔH = qp                                                          │
│  ΔrH° = Σai·ΔfH°(prod.) – Σbi·ΔfH°(react.)                     │
│  ΔrH° = ΣΔbond H°(react.) – ΣΔbond H°(prod.)                    │
├──────────────────────────────────────────────────────────────────┤
│                   ENTROPY                                         │
│  ΔS = qrev/T                                                      │
│  ΔStotal = ΔSsys + ΔSsurr > 0  (spontaneous)                    │
│  ΔSsurr = –ΔHsys/T                                               │
├──────────────────────────────────────────────────────────────────┤
│                   GIBBS ENERGY                                    │
│  G = H – TS                                                       │
│  ΔG = ΔH – TΔS                                                   │
│  ΔrG° = –RT ln K = –2.303 RT log K                              │
│  T(crossover) = ΔH/ΔS  (when ΔG = 0)                            │
└──────────────────────────────────────────────────────────────────┘
```

---

## ⚡ Types of Systems — Quick Visual

```
OPEN SYSTEM          CLOSED SYSTEM        ISOLATED SYSTEM
┌──────────┐         ┌──────────┐         ┌──────────┐
│          │         │          │         │          │
│          │←matter  │          │         │          │
│  System  │→matter  │  System  │         │  System  │
│          │←energy  │          │←energy  │          │
│          │→energy  │          │→energy  │          │
└──────────┘         └──────────┘         └──────────┘
Open beaker          Sealed Cu vessel     Thermos flask
Matter: YES          Matter: NO           Matter: NO
Energy: YES          Energy: YES          Energy: NO
```

---

## 📐 The ΔH vs ΔU Decision Chart

```
Is Δng = 0?
  YES → ΔH = ΔU  (solids/liquids only, or Δng happens to be 0)
  NO  → ΔH = ΔU + Δng·RT

Δng = (moles gaseous products) – (moles gaseous reactants)
Note: solids and liquids IGNORED in Δng calculation!

Examples:
  C(s) + O₂(g) → CO₂(g)       Δng = 1–1 = 0  → ΔH = ΔU
  N₂(g) + 3H₂(g) → 2NH₃(g)    Δng = 2–4 = –2 → ΔH < ΔU
  CaCO₃(s) → CaO(s) + CO₂(g)  Δng = 1–0 = +1 → ΔH > ΔU
  H₂O(l) → H₂O(g)             Δng = 1–0 = +1 → ΔH > ΔU
```

---

## ⚠️ HIGH-PRIORITY DISTINCTIONS (Most Exam-Tested)

```
STATE FUNCTION vs PATH FUNCTION:
  State: U, H, S, G, p, V, T, n     → value depends only on state
  Path:  q, w                         → value depends on path taken
  Key: ΔU = q + w, but ΔU is state fn; q and w individually are NOT

ADIABATIC vs ISOLATED:
  Adiabatic: q = 0 only (work may still occur; ΔU = w)
  Isolated:  q = 0 AND w = 0 (ΔU = 0)

ΔH vs Δf H°:
  ΔH: enthalpy change for any reaction
  Δf H°: specifically for formation of 1 mol compound from elements
  in reference state → Must form from ELEMENTS, not other compounds!
  Δf H° of elements in reference state = 0 (by convention)

STANDARD ENTHALPY OF COMBUSTION:
  Always negative (exothermic)
  Complete combustion with O₂ → CO₂(g) + H₂O(l) for organic compounds

BOND DISSOCIATION vs MEAN BOND ENTHALPY:
  Bond dissociation: exact value for one specific bond in one molecule
  Mean bond: average across many compounds (used for polyatomic molecules)
  For diatomic: both are the same (and = Δa H°)
```

---

## 🔁 Effect of Temperature on Spontaneity

```
         ΔH < 0                        ΔH > 0
         (exothermic)                  (endothermic)
        ┌────────────────┐            ┌────────────────┐
ΔS > 0  │ ALWAYS         │   ΔS > 0  │ ONLY at        │
        │ SPONTANEOUS    │            │ HIGH T         │
        │ (ΔG always –)  │            │ (TΔS > ΔH)    │
        └────────────────┘            └────────────────┘
        ┌────────────────┐            ┌────────────────┐
ΔS < 0  │ ONLY at        │   ΔS < 0  │ NEVER          │
        │ LOW T          │            │ SPONTANEOUS    │
        │ (ΔH dominates) │            │ (ΔG always +)  │
        └────────────────┘            └────────────────┘

Crossover temperature T* = ΔH/ΔS (where ΔG switches sign)
```

---

## 📏 K vs ΔG° Relationship

```
ΔG° << 0 (very negative)  →  K >> 1  → Products strongly favoured
ΔG° < 0                   →  K > 1   → Products favoured
ΔG° = 0                   →  K = 1   → Equal forward/reverse
ΔG° > 0                   →  K < 1   → Reactants favoured
ΔG° >> 0 (very positive)  →  K << 1  → Products barely formed
```

---

# 🗺️ MIND MAP 1 — Complete Thermodynamics Overview

```
                        ┌────────────────────┐
                        │   THERMODYNAMICS   │
                        └─────────┬──────────┘
                                  │
        ┌─────────────────────────┼───────────────────────────┐
        ▼                         ▼                           ▼
┌───────────────┐        ┌────────────────┐        ┌─────────────────┐
│  FIRST LAW    │        │   ENTHALPY     │        │  SPONTANEITY    │
│               │        │               │        │                 │
│ ΔU = q + w   │        │  H = U + pV   │        │  ΔH (partial)  │
│               │        │  ΔH = qp      │        │  ΔS (entropy)  │
│ U = state fn  │        │  ΔH=ΔU+ΔngRT  │        │  ΔG (complete) │
│ q, w = path   │        │               │        │                 │
│               │        │  Types of ΔH  │        │  ΔG = ΔH–TΔS  │
│ Work types:   │        │  • Formation  │        │  ΔG<0: spon.   │
│ • Irreversible│        │  • Combustion │        │  ΔG=0: equil.  │
│   w=–pex·ΔV  │        │  • Atomization│        │  ΔG>0: non-sp. │
│ • Reversible  │        │  • Bond       │        │                 │
│   w=–nRTlnVf/Vi       │  • Lattice    │        │  ΔG°=–RT ln K  │
│ • Free exp.   │        │  • Solution   │        │                 │
│   w=0         │        │  • Phase ch.  │        │ 2nd Law:        │
└───────────────┘        └────────────────┘        │ ΔStotal>0      │
                                                   │                 │
                                                   │ 3rd Law:        │
                                                   │ S→0 at T→0 K   │
                                                   └─────────────────┘
```

---

# 🗺️ MIND MAP 2 — Types of Enthalpy Changes

```
                    ┌────────────────────────────┐
                    │    TYPES OF ENTHALPY       │
                    │       CHANGES              │
                    └─────────────┬──────────────┘
                                  │
    ┌───────────────┬─────────────┼──────────────┬──────────────┐
    ▼               ▼             ▼               ▼              ▼
┌────────┐     ┌────────┐   ┌────────┐      ┌────────┐    ┌────────┐
│PHASE   │     │REACTION│   │BOND    │      │LATTICE │    │SOLUTION│
│CHANGES │     │TYPES   │   │ENTHALPY│      │ENTHALPY│    │& DILU. │
├────────┤     ├────────┤   ├────────┤      ├────────┤    ├────────┤
│Fusion  │     │Formation   │Dissoci-│      │Born-   │    │ΔsolH° │
│(+, end)│     │(ΔfH°)  │   │ation   │      │Haber   │    │        │
│        │     │        │   │(diato.)│      │cycle   │    │=Δlatt H│
│Vaporiz-│     │Combustion  │        │      │        │    │+ΔhydH° │
│ation   │     │(ΔcH°<0)│   │Mean bnd│      │Always  │    │        │
│(+, end)│     │        │   │(polyat)│      │positive│    │Dilution│
│        │     │Atomizat│   │        │      │(endoth)│    │= extra │
│Sublima-│     │(ΔaH°)  │   │ΔrH°=  │      │        │    │solvent │
│tion    │     │        │   │Σreact- │      │+788 for│    │added   │
│(+, end)│     │Neutr-  │   │Σprod   │      │NaCl    │    │        │
│        │     │alization   │        │      │        │    │        │
└────────┘     └────────┘   └────────┘      └────────┘    └────────┘
                             ⚠️ ONLY for
                             gaseous rxns;
                             Approximate!
```

---

# 🗺️ MIND MAP 3 — Work, Heat, and Internal Energy

```
        ┌─────────────────────────────────────────────────────┐
        │            INTERNAL ENERGY CHANGES                  │
        │                    ΔU = q + w                       │
        └────────────────────┬────────────────────────────────┘
                             │
              ┌──────────────┴───────────────┐
              ▼                               ▼
    ┌──────────────────┐            ┌─────────────────────┐
    │       HEAT (q)   │            │      WORK (w)        │
    ├──────────────────┤            ├─────────────────────┤
    │ q = m·c·ΔT       │            │ w = –pex·ΔV          │
    │ q > 0: absorbed  │            │ (compression: +ve)  │
    │ q < 0: evolved   │            │ (expansion: –ve)    │
    │                  │            │                     │
    │ At const. vol:   │            │ REVERSIBLE:         │
    │ q = qV = ΔU      │            │ w = –nRT ln(Vf/Vi)  │
    │                  │            │                     │
    │ At const. press: │            │ FREE EXPANSION:     │
    │ q = qp = ΔH      │            │ pex = 0 → w = 0    │
    │                  │            │                     │
    │ PATH FUNCTION!   │            │ PATH FUNCTION!      │
    └──────────────────┘            └─────────────────────┘

    SPECIAL CASES:
    ┌─────────────────────────────────────────────────────────┐
    │ Adiabatic:   q = 0 → ΔU = w                           │
    │ Isolated:    q = 0 AND w = 0 → ΔU = 0                 │
    │ Isothermal ideal gas: ΔU = 0 → q = –w                 │
    │ Const. vol.:  w = 0 → ΔU = qV                         │
    └─────────────────────────────────────────────────────────┘
```

---

# 🗺️ MIND MAP 4 — Entropy and Second Law

```
                    ┌───────────────────────────┐
                    │         ENTROPY (S)        │
                    │   "Measure of Disorder"    │
                    └─────────────┬─────────────┘
                                  │
        ┌─────────────────────────┼────────────────────────────┐
        ▼                         ▼                             ▼
┌───────────────┐         ┌──────────────┐           ┌──────────────────┐
│ENTROPY ORDER  │         │ ΔS = qrev/T  │           │  SECOND LAW      │
│               │         │              │           │                  │
│ GAS > LIQ >   │         │ State fn.    │           │ ΔStotal > 0:     │
│ SOLID         │         │ Path-indep.  │           │  spontaneous     │
│               │         │              │           │                  │
│ S increases:  │         │ ΔSsurr =    │           │ ΔStotal = 0:     │
│ • s→l→g      │         │ –ΔHsys/T    │           │  equilibrium     │
│ • dissolving  │         │              │           │                  │
│ • T↑          │         │ 3rd Law:    │           │ ΔStotal < 0:     │
│ • V↑          │         │ S→0 at T→0  │           │  non-spontaneous │
│ • mixing      │         │ (pure cryst)│           │                  │
│ • particles↑  │         │              │           │ Why exothermic   │
│               │         │ Absolute S  │           │ reactions common:│
│ S decreases:  │         │ can be calc.│           │ heat to surr.    │
│ • g→l→s      │         │ from 3rd law│           │ → ΔSsurr large+  │
└───────────────┘         └──────────────┘           └──────────────────┘
```

---

# 🗺️ MIND MAP 5 — Gibbs Energy Master Map

```
                ┌─────────────────────────────────────────┐
                │           GIBBS ENERGY (G)               │
                │             G = H – TS                    │
                └──────────────────┬──────────────────────┘
                                   │
        ┌──────────────────────────┼───────────────────────────┐
        ▼                          ▼                            ▼
┌──────────────┐          ┌───────────────┐           ┌─────────────────┐
│ SPONTANEITY  │          │  GIBBS EQN    │           │  EQUILIBRIUM    │
│ CRITERION    │          │               │           │  CONNECTION     │
├──────────────┤          ├───────────────┤           ├─────────────────┤
│ ΔG < 0:      │          │ ΔG = ΔH – TΔS│           │ ΔrG° = –RT ln K │
│ Spontaneous  │          │               │           │ = –2.303RT logK │
│              │          │ ΔH term:      │           │                 │
│ ΔG = 0:      │          │ energy factor │           │ ΔG° < 0 → K>1  │
│ Equilibrium  │          │               │           │ ΔG° = 0 → K=1  │
│              │          │ TΔS term:     │           │ ΔG° > 0 → K<1  │
│ ΔG > 0:      │          │ entropy factor│           │                 │
│ Non-spon.    │          │ (unavailable  │           │ ΔrG° =          │
│              │          │ energy)       │           │ ΔrH°–TΔrS°     │
│ At const.    │          │               │           │                 │
│ T and p only │          │ ΔG = net free │           │ K = antilog of  │
│              │          │ energy for    │           │ (–ΔrG°/2.303RT)│
│              │          │ useful work   │           │                 │
└──────────────┘          └───────────────┘           └─────────────────┘
```

---

# 🗺️ MIND MAP 6 — Hess's Law and Born-Haber Cycle

```
┌─────────────────────────────────────────────────────────────────────┐
│                         HESS'S LAW                                  │
│                                                                     │
│  Enthalpy is a STATE FUNCTION → ΔH is path-independent             │
│                                                                     │
│              ΔH(overall)                                            │
│  Reactants ──────────────────────────────────────────► Products    │
│     │                                                       ▲       │
│     │ ΔH₁            Intermediates              ΔH₃        │       │
│     └──────────────────────────────────────────────────────┘       │
│                         ΔH₂                                         │
│                                                                     │
│  ΔH(overall) = ΔH₁ + ΔH₂ + ΔH₃ (regardless of path!)             │
│                                                                     │
│  RULE: Reverse equation → change sign of ΔH                        │
│  RULE: Multiply equation → multiply ΔH                              │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│                    BORN-HABER CYCLE (NaCl)                          │
│                                                                     │
│  Na⁺(g) + Cl(g) ─────────────────────────────────────────────────┐ │
│       ↑ ½Δbond H°(+121)                        Δeg H°(–348.6)   ↓ │
│  Na⁺(g) + ½Cl₂(g)                            Na⁺(g) + Cl⁻(g)    │
│       ↑ Δi H°(+496)                                   │           │
│  Na(g) + ½Cl₂(g)                           Δlattice H°(?)        │
│       ↑ Δsub H°(+108.4)                               ↓           │
│  Na(s) + ½Cl₂(g)                              NaCl(s)            │
│       └──────────── Δf H°(–411.2) ─────────────────────┘           │
│                                                                     │
│  Δlattice H° = 411.2 + 108.4 + 121 + 496 – 348.6 = +788 kJ mol⁻¹ │
└─────────────────────────────────────────────────────────────────────┘
```

---

# 📋 COMPARATIVE QUICK-REFERENCE TABLES

## All Calorimetry at a Glance

```
┌──────────────────┬──────────────────────┬───────────────────────┐
│ Feature          │ Bomb Calorimeter     │ Constant-p Calorimeter│
├──────────────────┼──────────────────────┼───────────────────────┤
│ Condition        │ Constant volume      │ Constant pressure     │
│ Volume change    │ ΔV = 0               │ ΔV ≠ 0               │
│ Work done        │ w = 0                │ w = –pΔV              │
│ Heat measured    │ qV = ΔU              │ qp = ΔH               │
│ Used for         │ Combustion reactions │ Acid-base, dissolution│
│ Setup            │ Steel bomb in water  │ Coffee-cup/polystyrene│
│ Calculation      │ q = CV × ΔT         │ q = mCΔT              │
└──────────────────┴──────────────────────┴───────────────────────┘
```

## Entropy Changes — Quick Reference

```
┌─────────────────────────────────┬───────────────┐
│ Process                         │ ΔS            │
├─────────────────────────────────┼───────────────┤
│ Solid melts (s → l)             │ + (increases) │
│ Liquid vaporizes (l → g)        │ + (increases) │
│ Gas condenses (g → l)           │ – (decreases) │
│ Solid dissolves in water        │ + (usually)   │
│ Temperature increases           │ + (increases) │
│ Volume increases (gas)          │ + (increases) │
│ Two gases mix                   │ + (increases) │
│ Gas → fewer moles of gas        │ –             │
│ More moles of gas produced      │ +             │
│ Crystal forms at 0 K            │ → 0 (3rd law) │
└─────────────────────────────────┴───────────────┘
```

## Sign Convention Summary — IUPAC

```
┌────────────────┬─────────────────────┬────────────────────────┐
│ Quantity       │ Positive (+)         │ Negative (–)           │
├────────────────┼─────────────────────┼────────────────────────┤
│ q (heat)       │ System absorbs heat  │ System releases heat   │
│ w (work)       │ Work done ON system  │ Work done BY system    │
│ ΔU             │ Internal energy      │ Internal energy        │
│                │ increases            │ decreases              │
│ ΔH             │ Endothermic reaction │ Exothermic reaction    │
│ ΔS             │ Disorder increases   │ Disorder decreases     │
│ ΔG             │ Non-spontaneous      │ Spontaneous            │
└────────────────┴─────────────────────┴────────────────────────┘
```

## Spontaneity Summary Table (Critical for NEET/JEE)

```
┌────────┬────────┬─────────────────┬──────────────────────────────────┐
│ ΔrH°  │ ΔrS°  │ ΔrG°           │ Spontaneity                      │
├────────┼────────┼─────────────────┼──────────────────────────────────┤
│  –     │  +     │ Always –        │ Spontaneous at ALL temperatures  │
│  –     │  –     │ – at low T      │ Spontaneous at LOW T only        │
│        │        │ + at high T     │ Non-spon. at high T              │
│  +     │  +     │ + at low T      │ Non-spon. at low T               │
│        │        │ – at high T     │ Spontaneous at HIGH T only       │
│  +     │  –     │ Always +        │ NON-spontaneous at any T         │
└────────┴────────┴─────────────────┴──────────────────────────────────┘
```

---

## 💡 Mnemonics and Memory Aids

```
REMEMBER ΔU = q + w:
  "You (U) are Quite Wonderful" → ΔU = q + w

STATE vs PATH FUNCTIONS:
  State functions: "Up Here Stands Gibbs" → U, H, S, G (+ p, V, T)
  Path functions: "quite weird" → q (heat) and w (work)

SIGN FOR WORK (IUPAC):
  Work done ON system → compression → piston pushes IN → + 
  Work done BY system → expansion → piston pushes OUT → –
  Memory: "What comes IN is positive"

SPONTANEITY DIAGONAL RULE:
  ΔH–/ΔS+ → always spontaneous (best of both worlds)
  ΔH+/ΔS– → never spontaneous (worst of both worlds)
  Mixed signs → temperature decides the winner!

ORDER OF ENTROPY:
  "Solid Least, Gas Greatest"
  SOLID < LIQUID << GAS

THERMODYNAMIC LAWS IN ONE SENTENCE:
  0th: Temperature tells us thermal equilibrium
  1st: You can't win (energy is conserved)
  2nd: You can't break even (entropy always increases)
  3rd: You can't get to absolute zero
```

---

## ⚡ Quick-Fire Formulas with Units

```
R = 8.314 J K⁻¹ mol⁻¹

w (irreversible) = –pex ΔV                    [L·atm or J]
w (reversible)   = –nRT ln(Vf/Vi)             [J]
q                = C·ΔT = m·c·ΔT               [J]
ΔU               = q + w                        [J or kJ]
ΔH               = ΔU + Δng·RT                 [J or kJ mol⁻¹]
Cp – CV          = R                            [J K⁻¹ mol⁻¹]
ΔS               = qrev/T                       [J K⁻¹ mol⁻¹]
ΔG               = ΔH – TΔS                    [kJ mol⁻¹]
ΔG°              = –RT ln K                     [kJ mol⁻¹]
log K            = –ΔG°/(2.303RT)              [dimensionless]
T*               = ΔH/ΔS                        [K]
```

---

*End of Rapid Revision + Mind Maps — Ch. 5: Thermodynamics*
