# CHAPTER 11 — RAPID REVISION + MIND MAPS

### Thermodynamics

---

# ⚡ ONE-PAGE RAPID REVISION SHEET

## 🔢 Key Definitions — Absolute Must-Memorise

| Quantity | Definition | Formula | SI Unit |
|---|---|---|---|
| **Internal Energy (U)** | Sum of KE + PE of all molecules (state variable) | — | J |
| **Heat (ΔQ)** | Energy in transit due to temperature difference | — | J |
| **Work (ΔW)** | Energy transferred by non-thermal means | ΔW = PΔV | J |
| **Specific heat capacity (s)** | Heat per kg per K temperature rise | s = ΔQ/(mΔT) | J kg⁻¹ K⁻¹ |
| **Molar heat capacity (C)** | Heat per mole per K temperature rise | C = ΔQ/(μΔT) | J mol⁻¹ K⁻¹ |
| **Efficiency (η)** | Work output / heat absorbed from source | η = W/Q₁ = 1 − Q₂/Q₁ | Dimensionless |
| **COP (refrigerator)** | Heat extracted / work input | β = Q₂/W | Dimensionless |
| **Adiabatic index (γ)** | Ratio of specific heats | γ = Cₚ/Cᵥ | Dimensionless |

---

## 📐 Essential Formulae — Must Know Cold

```
FIRST LAW:
    ┌────────────────────────────────────────────────────────┐
    │  ΔQ = ΔU + ΔW  (conservation of energy)               │
    │  ΔW = PΔV  (work at constant/varying pressure)       │
    │  ΔU = state variable; ΔQ, ΔW = path functions        │
    │  Sign convention: ΔQ+ = absorbed; ΔW+ = done BY gas  │
    └────────────────────────────────────────────────────────┘

THERMODYNAMIC PROCESSES (ideal gas):
    ┌────────────────────────────────────────────────────────┐
    │  Isothermal:  T = const; ΔU = 0; ΔQ = ΔW            │
    │               W = μRT ln(V₂/V₁)                      │
    │  Adiabatic:  ΔQ = 0; PVᵞ = const;                   │
    │               W = μR(T₁−T₂)/(γ−1)                   │
    │  Isochoric:  V = const; ΔW = 0; ΔQ = ΔU = μCᵥΔT    │
    │  Isobaric:   P = const; W = PΔV = μRΔT; ΔQ = μCₚΔT │
    │  Cyclic:     ΔU = 0; ΔQ_total = ΔW_total = loop area│
    └────────────────────────────────────────────────────────┘

SPECIFIC HEAT:
    ┌────────────────────────────────────────────────────────┐
    │  Cₚ − Cᵥ = R  (Mayer's relation; ideal gas)          │
    │  γ = Cₚ/Cᵥ  (monoatomic: 5/3; diatomic: 7/5)       │
    │  Dulong-Petit: C(solid) ≈ 3R ≈ 24.9 J mol⁻¹K⁻¹     │
    │  Cᵥ = R/(γ−1);  Cₚ = γR/(γ−1)                      │
    └────────────────────────────────────────────────────────┘

CARNOT ENGINE:
    ┌────────────────────────────────────────────────────────┐
    │  η = 1 − T₂/T₁  (T in Kelvin; T₂ < T₁)             │
    │  Q₁/Q₂ = T₁/T₂  (universal relation)                │
    │  W = Q₁ − Q₂ = Q₁(1 − T₂/T₁)                       │
    │  COP_refrig = T₂/(T₁−T₂) = Q₂/W                    │
    │  No engine can exceed Carnot efficiency               │
    └────────────────────────────────────────────────────────┘

SECOND LAW:
    ┌────────────────────────────────────────────────────────┐
    │  Kelvin-Planck: η(heat engine) < 1 always            │
    │  Clausius: Heat alone cannot flow cold → hot         │
    │  All spontaneous processes are irreversible           │
    └────────────────────────────────────────────────────────┘
```

---

## 📊 Process Comparison Table — Critical for MCQs

```
─────────────────────────────────────────────────────────────────────────
 PROCESS    │ Constant │   ΔU    │   ΔW       │  ΔQ        │ P-V Graph
─────────────────────────────────────────────────────────────────────────
 Isothermal │    T     │    0    │ μRT ln(V₂/V₁)│= ΔW       │ Hyperbola
 Adiabatic  │  ΔQ=0   │ = −ΔW  │μR(T₁−T₂)/(γ−1)│ 0        │ Steeper curve
 Isochoric  │    V     │ = ΔQ   │    0        │ μCᵥΔT     │ Vertical line
 Isobaric   │    P     │ μCᵥΔT │  PΔV=μRΔT  │ μCₚΔT    │ Horizontal line
 Cyclic     │  ΔU=0   │    0    │ = ΔQ_net   │ = ΔW_net  │ Closed loop
─────────────────────────────────────────────────────────────────────────
```

---

## ⚠️ Critical Distinctions — High-Yield Exam Traps

```
FIRST LAW TRAPS:
  ✓ ΔQ and ΔW are PATH FUNCTIONS; ΔU is a STATE FUNCTION
  ✓ "Body has heat" = meaningless; "heat is supplied to body" = meaningful
  ✓ Sign: ΔW > 0 = gas expands and does work; ΔW < 0 = work done ON gas
  ✓ Isothermal ≠ no heat exchange (ΔQ = ΔW ≠ 0 in general)
  ✓ Adiabatic ≠ constant temperature (T changes in adiabatic process!)

PROCESS TRAPS:
  ✓ Adiabat STEEPER than isotherm on P-V plot (slope: −γP/V vs −P/V)
  ✓ Adiabatic expansion → gas COOLS (T₂ < T₁)
  ✓ Adiabatic compression → gas HEATS (T₂ > T₁)
  ✓ Free expansion into vacuum: ΔQ=0, ΔW=0, ΔU=0 → ΔT=0 for ideal gas
    BUT it is IRREVERSIBLE (non-equilibrium process)
  ✓ Work done in cyclic process = AREA ENCLOSED by loop on P-V diagram
    Clockwise loop → positive work (engine); Anticlockwise → negative (refrigerator)

SPECIFIC HEAT TRAPS:
  ✓ Cₚ > Cᵥ ALWAYS for gases; Cₚ − Cᵥ = R (Mayer's relation)
  ✓ For SOLIDS: Cₚ ≈ Cᵥ (since ΔV is negligible); C ≈ 3R (Dulong-Petit)
  ✓ Carbon is an exception to Dulong-Petit (C = 6.1 J mol⁻¹ K⁻¹, not 3R)
  ✓ γ = Cₚ/Cᵥ > 1 ALWAYS; monoatomic γ = 5/3; diatomic γ = 7/5

CARNOT TRAPS:
  ✓ η = 1 − T₂/T₁ (KELVIN temperatures only — NOT Celsius!)
  ✓ η = 1 only when T₂ = 0 K — unachievable (Third Law)
  ✓ Efficiency depends ONLY on T₁ and T₂, not on working substance
  ✓ No engine can EXCEED Carnot efficiency (between same temperatures)
  ✓ Carnot is a THEORETICAL IDEAL — no real engine achieves it
  ✓ Q₁/Q₂ = T₁/T₂ is UNIVERSAL — valid for any Carnot engine

SECOND LAW TRAPS:
  ✓ Second Law gives DIRECTION to processes — First Law does not
  ✓ Kelvin-Planck and Clausius statements are EQUIVALENT (not independent)
  ✓ Reversibility requires BOTH: quasi-static AND non-dissipative
  ✓ Quasi-static alone ≠ reversible (quasi-static + friction = irreversible)
  ✓ All spontaneous processes are irreversible; reversible processes are ideals
```

---

# 🗺️ MIND MAP 1 — Chapter Overview

```
                ┌──────────────────────────────────────────────────────┐
                │              THERMODYNAMICS                           │
                │  Macroscopic science of heat, work, and energy       │
                └──────────────────────────┬───────────────────────────┘
                                           │
      ┌────────────────────────────────────┼──────────────────────────────────┐
      ▼                                    ▼                                  ▼
┌──────────────┐                  ┌─────────────────┐              ┌────────────────┐
│  ZEROTH LAW  │                  │   FIRST LAW     │              │  SECOND LAW    │
│              │                  │                 │              │                │
│ Two systems  │                  │  ΔQ = ΔU + ΔW  │              │ Kelvin-Planck  │
│ in equil. with│                 │                 │              │ + Clausius     │
│ same third → │                  │ Conservation of │              │                │
│ in equil.    │                  │ energy          │              │ Direction of   │
│ with each    │                  │                 │              │ spontaneous    │
│ other        │                  │ State variable: │              │ processes;     │
│              │                  │  U (not Q, W)   │              │ η < 1; β < ∞  │
│ ↓ Temperature│                  │                 │              │                │
│ is defined   │                  │ 5 processes:    │              │ ↓ Carnot Engine│
└──────────────┘                  │ Isothermal      │              │  η = 1 − T₂/T₁│
                                  │ Adiabatic       │              └────────────────┘
                                  │ Isochoric       │
                                  │ Isobaric        │
                                  │ Cyclic          │
                                  └─────────────────┘
```

---

# 🗺️ MIND MAP 2 — First Law and Processes

```
                        ΔQ = ΔU + ΔW
                              │
          ┌───────────────────┼────────────────────┐
          ▼                   ▼                    ▼
    ΔQ = 0               ΔU = 0               ΔW = 0
   ADIABATIC            ISOTHERMAL           ISOCHORIC
  (insulated)          (const temp)         (const volume)
       │                    │                    │
  PVᵞ=const            PV=const             All heat →
  ΔU = −ΔW            ΔQ = ΔW            internal energy
  T changes            T=const             ΔQ = μCᵥΔT
  W=μR(T₁−T₂)/(γ−1)  W=μRT ln(V₂/V₁)    W = 0
       │
  Expansion: T falls
  Compression: T rises
  [Steeper than isotherm
   on P-V plot]
                       ┌──────────────────────────┐
                       │     ISOBARIC (P = const) │
                       │  ΔW = PΔV = μRΔT         │
                       │  ΔQ = μCₚΔT              │
                       │  ΔU = μCᵥΔT              │
                       │  ΔQ = ΔU + ΔW ✓          │
                       └──────────────────────────┘
                       ┌──────────────────────────┐
                       │     CYCLIC (closed loop)  │
                       │  ΔU = 0                  │
                       │  ΔQ = ΔW = area of loop  │
                       │  Clockwise → engine       │
                       │  Anticlockwise → refriger │
                       └──────────────────────────┘
```

---

# 🗺️ MIND MAP 3 — Carnot Engine

```
                    ┌─────────────────────────────────────────────┐
                    │           HOT RESERVOIR (T₁)                │
                    │         absorbs Q₁ (isothermal expansion)   │
                    └──────────────────────┬──────────────────────┘
                                           │ Q₁
                    ┌──────────────────────▼──────────────────────┐
                    │              CARNOT ENGINE                    │
                    │  Step 1: Isothermal expansion  (T₁, absorb Q₁)│
                    │  Step 2: Adiabatic expansion   (T₁ → T₂)    │
                    │  Step 3: Isothermal compression (T₂, give Q₂)│
                    │  Step 4: Adiabatic compression (T₂ → T₁)    │
                    │                                               │
                    │  W = Q₁ − Q₂                                 │
                    │  η = W/Q₁ = 1 − T₂/T₁                      │
                    │  Q₁/Q₂ = T₁/T₂  (universal)                │
                    └──────┬────────────────────────────┬──────────┘
                           │ W (useful work)             │ Q₂
                           ▼                             ▼
                    ┌──────────────────┐     ┌──────────────────────┐
                    │   USEFUL OUTPUT  │     │  COLD RESERVOIR (T₂) │
                    │   (shaft work,   │     │  (waste heat)         │
                    │    electricity)  │     │  Q₂ = Q₁(1 − η)     │
                    └──────────────────┘     └──────────────────────┘

CARNOT'S THEOREM:
  ┌────────────────────────────────────────────────────────────────┐
  │  (a) No engine between T₁ and T₂ can have η > η_Carnot       │
  │  (b) η_Carnot is independent of the working substance         │
  │      → η depends ONLY on T₁ and T₂                           │
  └────────────────────────────────────────────────────────────────┘
```

---

# 🗺️ MIND MAP 4 — Second Law: Reversibility & Irreversibility

```
              ┌─────────────────────────────────────────────────────┐
              │              SECOND LAW OF THERMODYNAMICS            │
              │  Establishes DIRECTION of spontaneous processes      │
              └───────────────────────┬─────────────────────────────┘
                                      │
              ┌───────────────────────┼──────────────────────────────┐
              ▼                       ▼                              ▼
     ┌─────────────────┐   ┌─────────────────────┐    ┌────────────────────┐
     │  KELVIN-PLANCK  │   │     CLAUSIUS         │    │   IRREVERSIBILITY  │
     │                 │   │                      │    │                    │
     │ No engine can   │   │ No process can       │    │ All spontaneous    │
     │ convert ALL     │   │ transfer heat from   │    │ processes are      │
     │ absorbed heat   │   │ cold to hot as       │    │ irreversible       │
     │ to work alone   │   │ sole result          │    │                    │
     │                 │   │                      │    │ Causes:            │
     │ → η < 1 always  │   │ → COP(refrig) < ∞   │    │ 1. Non-equilibrium │
     └────────┬────────┘   └──────────┬───────────┘    │    states          │
              └───────────────────────┘                 │ 2. Dissipation     │
                       EQUIVALENT                       │   (friction, etc.)│
                                                        └────────────────────┘
                                                                 │
                                          ┌──────────────────────┘
                                          ▼
                                 ┌─────────────────────┐
                                 │  REVERSIBLE PROCESS  │
                                 │  (Idealisation)       │
                                 │                       │
                                 │  Conditions:          │
                                 │  1. Quasi-static      │
                                 │  2. Non-dissipative   │
                                 │                       │
                                 │  → Maximum efficiency │
                                 │  → Carnot engine      │
                                 └─────────────────────--┘
```

---

# 🗺️ MIND MAP 5 — Specific Heats

```
                    ┌─────────────────────────────────────────┐
                    │         SPECIFIC HEAT CAPACITIES        │
                    └──────────────────┬──────────────────────┘
                                       │
               ┌───────────────────────┼───────────────────────┐
               ▼                       ▼                       ▼
        ┌─────────────┐         ┌─────────────┐        ┌──────────────┐
        │   SOLIDS    │         │    GASES    │        │   LIQUIDS    │
        └──────┬──────┘         └──────┬──────┘        └──────┬───────┘
               │                       │                       │
        Dulong-Petit:            Cₚ and Cᵥ:           s (water) = 4186
        C ≈ 3R                   Cₚ > Cᵥ             J kg⁻¹ K⁻¹
        ≈ 24.9 J mol⁻¹ K⁻¹       (always!)            (highest of common
               │                       │                substances)
        Exceptions:             Mayer's Relation:
        Carbon: C = 6.1          Cₚ − Cᵥ = R
        Si, Be: lower too
               │                Monoatomic (He, Ar):
        Valid at                 Cᵥ = 3R/2; Cₚ = 5R/2; γ = 5/3
        ROOM TEMPERATURE         Diatomic (N₂, O₂):
        Breaks down at           Cᵥ = 5R/2; Cₚ = 7R/2; γ = 7/5
        low T (quantum           Polyatomic (NH₃, CO₂):
        effects)                 Cᵥ = 3R; Cₚ = 4R; γ = 4/3
```

---

# 🗺️ MIND MAP 6 — Connecting All Concepts

```
              ┌─────────────────────────────────────────────────────────┐
              │                    ENERGY                               │
              └──────────────────────────┬──────────────────────────────┘
                                         │
        ┌────────────────────────────────┼──────────────────────────────────┐
        ▼                                ▼                                  ▼
  INTERNAL ENERGY (U)            HEAT (ΔQ)                     WORK (ΔW)
  State variable                 Path function                 Path function
  U = f(T, state)                Energy in transit due         Energy transfer
  For ideal gas: U = f(T) only   to temperature difference     by non-thermal
        │                               │                       means (piston)
  Changes only via                  Leads to change in U           │
  heat or work exchange                    │                        │
        │                         First Law connects them:          │
        └─────────────────────────┤  ΔQ = ΔU + ΔW  ├───────────────┘
                                  └────────────────────┘
                                           │
                              ┌────────────┼────────────┐
                              ▼            ▼            ▼
                         Isothermal  Adiabatic     Isobaric
                         (ΔU=0)      (ΔQ=0)        (W=PΔV)
                              │            │
                          Q=W done    W at expense
                          on environment  of U (T drops)
                                   │
                              Carnot Cycle:
                              2 isothermals + 2 adiabatics
                              → Maximum efficiency: η = 1 − T₂/T₁
                                   │
                              Second Law:
                              η < 1 (never perfect engine)
                              COP < ∞ (never perfect refrigerator)
```

---

## 🏆 Last-Minute Exam Checklist

```
Before answering any Thermodynamics question:

□ Is it about the FIRST LAW (ΔQ = ΔU + ΔW)?
  → Identify the process; determine which of ΔQ, ΔU, ΔW is zero or given
  → Check sign convention: ΔW > 0 = done BY gas; ΔW < 0 = done ON gas
  → ΔU is a STATE FUNCTION → same for all paths between two states
  → ΔQ and ΔW are path-dependent

□ Is it an ISOTHERMAL process?
  → Ideal gas: ΔU = 0; ΔQ = ΔW = μRT ln(V₂/V₁)
  → Temperature in Kelvin; note: V₂/V₁ > 1 for expansion

□ Is it an ADIABATIC process?
  → ΔQ = 0; PVᵞ = const; T₁V₁^(γ−1) = T₂V₂^(γ−1)
  → W = μR(T₁−T₂)/(γ−1) [positive if T₁ > T₂, i.e., expansion]
  → Adiabat is STEEPER than isotherm on P-V plot (slope ratio = γ)

□ Is it an ISOCHORIC/ISOBARIC process?
  → Isochoric: ΔW = 0; ΔQ = ΔU = μCᵥΔT
  → Isobaric: ΔW = PΔV = μRΔT; ΔQ = μCₚΔT; ΔU = μCᵥΔT

□ Is it about SPECIFIC HEAT of gases?
  → Cₚ − Cᵥ = R (Mayer's relation)
  → γ = Cₚ/Cᵥ: monoatomic = 5/3; diatomic = 7/5
  → Cᵥ = R/(γ−1); Cₚ = γR/(γ−1)

□ Is it a CARNOT ENGINE problem?
  → η = 1 − T₂/T₁ (T in KELVIN!)
  → Q₁/Q₂ = T₁/T₂; W = Q₁ − Q₂
  → No engine exceeds Carnot efficiency between same temperatures
  → η independent of working substance

□ Is it about REVERSIBILITY?
  → Reversible = quasi-static AND non-dissipative
  → All real processes are irreversible
  → Carnot cycle is reversible → maximum efficiency

□ DIMENSIONAL FORMULA CHECK?
  → ΔQ, ΔW, ΔU: [ML²T⁻²] = J
  → s (specific heat): [L²T⁻²K⁻¹] = J kg⁻¹ K⁻¹
  → C (molar heat): [ML²T⁻²mol⁻¹K⁻¹] = J mol⁻¹ K⁻¹
  → R: [ML²T⁻²mol⁻¹K⁻¹] = J mol⁻¹ K⁻¹
  → η, γ, COP: dimensionless
```

---

## 📌 Common Formula Errors to Avoid

| Wrong | Correct | Situation |
|---|---|---|
| ΔU = 0 in adiabatic process | ΔU = −ΔW (ΔU ≠ 0!) | Adiabatic = no heat, NOT no energy change |
| W = μRΔT for all processes | W = μRT ln(V₂/V₁) for isothermal; W = μRΔT only for isobaric | Different processes → different work formulae |
| η = 1 − T₂/T₁ with T in °C | η = 1 − T₂/T₁ with **T in Kelvin** | Always convert to Kelvin first! |
| Cₚ < Cᵥ | **Cₚ > Cᵥ** always; Cₚ − Cᵥ = R | More heat needed at const P (expansion work) |
| Adiabat less steep than isotherm | Adiabat **steeper** (slope = −γP/V > −P/V) | γ > 1 makes adiabat fall faster |
| Free expansion is reversible | Free expansion is **irreversible** (non-equilibrium states) | Gas doesn't spontaneously reconcentrate |
| All quasi-static processes are reversible | Reversible = quasi-static **AND** non-dissipative | Friction can make quasi-static irreversible |
| Q₁/Q₂ = T₁/T₂ for any engine | Q₁/Q₂ = T₁/T₂ only for **Carnot (reversible) engine** | Irreversible engines: Q₁/Q₂ ≠ T₁/T₂ |
| Efficiency can exceed Carnot η | No real engine can **exceed** Carnot efficiency | Carnot's theorem (Second Law) |

---

## 🔢 Comparative Values

```
─────────────────────────────────────────────────────────────────────
γ VALUES (adiabatic index = Cₚ/Cᵥ):
  Monoatomic (He, Ne, Ar):  γ = 5/3 ≈ 1.67
  Diatomic (H₂, N₂, O₂):  γ = 7/5 = 1.4  (at room temperature)
  Triatomic linear (CO₂):  γ ≈ 1.4
  Polyatomic nonlinear:     γ ≈ 4/3 ≈ 1.33
─────────────────────────────────────────────────────────────────────
MOLAR SPECIFIC HEATS (ideal gas):
  Monoatomic:  Cᵥ = 3R/2 = 12.5 J mol⁻¹K⁻¹; Cₚ = 5R/2 = 20.8 J mol⁻¹K⁻¹
  Diatomic:    Cᵥ = 5R/2 = 20.8 J mol⁻¹K⁻¹; Cₚ = 7R/2 = 29.1 J mol⁻¹K⁻¹
─────────────────────────────────────────────────────────────────────
SOLIDS (Dulong-Petit):
  Al: 24.4;  Cu: 24.5;  Pb: 26.5;  Ag: 25.5;  W: 24.9 (all ~3R)
  Exception: Carbon (diamond): 6.1 J mol⁻¹K⁻¹ (much less than 3R)
─────────────────────────────────────────────────────────────────────
IMPORTANT CONSTANTS:
  R = 8.31 J mol⁻¹ K⁻¹;  3R ≈ 24.9 J mol⁻¹ K⁻¹
  1 cal = 4.186 J;  s(water) = 4186 J kg⁻¹ K⁻¹
  L_v(water) = 22.56 × 10⁵ J kg⁻¹;  Absolute zero = 0 K = −273.15°C
─────────────────────────────────────────────────────────────────────
```

---

*End of Revision Notes + Mind Maps — Physics Ch. 11*