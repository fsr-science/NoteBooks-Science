# CHAPTER 12 — RAPID REVISION + MIND MAPS

### Kinetic Theory

---

# ⚡ ONE-PAGE RAPID REVISION SHEET

## 🔢 Key Definitions — Absolute Must-Memorise

| Quantity | Definition | Formula | SI Unit |
|---|---|---|---|
| **Ideal Gas** | Gas satisfying PV = μRT at all P, T | PV = μRT | — |
| **Boltzmann constant (k_B)** | Connects temperature to molecular energy | k_B = R/N_A | J K⁻¹ |
| **Number density (n)** | Number of molecules per unit volume | n = N/V | m⁻³ |
| **RMS speed (v_rms)** | √(mean of squared speeds) | √(3k_BT/m) | m s⁻¹ |
| **Mean free path (l)** | Average distance between successive collisions | 1/(√2 π n d²) | m |
| **Degrees of freedom (f)** | Independent coordinates specifying molecular config | 3 (mono), 5 (diatomic rigid) | — |
| **Equipartition energy** | Energy per degree of freedom | ½k_BT (trans/rot); k_BT (vib) | J |

---

## 📐 Essential Formulae — Must Know Cold

```
IDEAL GAS:
    ┌────────────────────────────────────────────────────────┐
    │  PV = μRT = Nk_BT = nk_BTV                           │
    │  R = 8.314 J mol⁻¹K⁻¹; k_B = 1.38 × 10⁻²³ J K⁻¹  │
    │  N_A = 6.02 × 10²³ mol⁻¹; R = N_A k_B              │
    │  Molar volume at STP = 22.4 L                        │
    └────────────────────────────────────────────────────────┘

KINETIC THEORY — PRESSURE AND KE:
    ┌────────────────────────────────────────────────────────┐
    │  P = (1/3) n m v̄²                                    │
    │  PV = (2/3) E  [E = total translational KE]         │
    │  ½ m v̄² = (3/2) k_B T  (average KE per molecule)   │
    │  E = (3/2) Nk_BT = (3/2) μRT                        │
    └────────────────────────────────────────────────────────┘

RMS AND OTHER SPEEDS:
    ┌────────────────────────────────────────────────────────┐
    │  v_rms = √(3k_BT/m) = √(3RT/M₀)                    │
    │  ⟨v⟩ = √(8k_BT/πm)   [mean speed]                   │
    │  v_p = √(2k_BT/m)    [most probable speed]          │
    │  Order: v_p < ⟨v⟩ < v_rms                           │
    │  v_rms ∝ √T;  v_rms ∝ 1/√m  (at fixed T)           │
    └────────────────────────────────────────────────────────┘

EQUIPARTITION + SPECIFIC HEATS:
    ┌────────────────────────────────────────────────────────┐
    │  Each trans/rot DOF: ½k_BT per molecule               │
    │  Each vibrational mode: k_BT per molecule             │
    │  Cᵥ = (f/2)R;  Cₚ = Cᵥ + R = (f+2)/2 × R           │
    │  γ = Cₚ/Cᵥ                                           │
    │  Monoatomic: f=3; Cᵥ=3R/2; Cₚ=5R/2; γ=5/3          │
    │  Diatomic (rigid): f=5; Cᵥ=5R/2; Cₚ=7R/2; γ=7/5   │
    │  Solid (Dulong-Petit): C = 3R ≈ 24.9 J/mol·K        │
    └────────────────────────────────────────────────────────┘

MEAN FREE PATH:
    ┌────────────────────────────────────────────────────────┐
    │  l = 1/(√2 π n d²)                                   │
    │  l ∝ 1/n;   l ∝ 1/d²                                │
    │  Air at STP: l ≈ 2.9 × 10⁻⁷ m ≈ 1500 d            │
    └────────────────────────────────────────────────────────┘
```

---

## 📊 Specific Heats Comparison Table — Critical for MCQs

```
──────────────────────────────────────────────────────────────────────
 Gas Type         │  f   │  Cᵥ       │  Cₚ       │  Cₚ−Cᵥ │  γ
──────────────────────────────────────────────────────────────────────
 Monoatomic       │  3   │  3R/2     │  5R/2     │  R      │  5/3
 Diatomic (rigid) │  5   │  5R/2     │  7R/2     │  R      │  7/5
 Diatomic (+vib)  │  7   │  7R/2     │  9R/2     │  R      │  9/7
 Polyatomic (f_v) │3+f_v │ (3+f_v)R │ (4+f_v)R  │  R      │(4+f_v)/(3+f_v)
──────────────────────────────────────────────────────────────────────
 Values in J/mol·K: R = 8.31; R/2 = 4.15; 3R/2 = 12.5; 5R/2 = 20.8
──────────────────────────────────────────────────────────────────────
```

---

## ⚠️ Critical Distinctions — High-Yield Exam Traps

```
KINETIC THEORY TRAPS:
  ✓ Temperature = average TRANSLATIONAL KE per molecule only
    (not total energy which includes rotational/vibrational)
  ✓ Average KE = (3/2)k_BT is the SAME for all gases at same T
    (irrespective of mass, nature, diatomic/monoatomic)
  ✓ Heavier molecules → SLOWER v_rms (v_rms ∝ 1/√m)
  ✓ v̄² ≠ (v̄)²  (mean-square ≠ square of mean; RMS ≠ mean speed)
  ✓ P = (1/3)nm v̄²  uses mean-square speed, NOT square of mean

SPECIFIC HEAT TRAPS:
  ✓ Cₚ − Cᵥ = R for ANY ideal gas (mono, di, poly — always!)
  ✓ Vibrational mode contributes k_BT, NOT ½k_BT
    (two quadratic terms: KE and PE of oscillation)
  ✓ At room temperature, O₂ and N₂ are RIGID ROTATORS (f=5)
    Vibrational modes INACTIVE at room T → use γ = 7/5, not 9/7
  ✓ Carbon (diamond) is the major exception to Dulong-Petit
    C = 6.1 J/mol·K at room T (quantum effects freeze vib. modes)
  ✓ γ > 1 always; γ is largest for monoatomic (5/3 > 7/5 > 9/7)

MEAN FREE PATH TRAPS:
  ✓ l ∝ 1/n  (at constant T: l ∝ T if P is fixed, since n = P/k_BT)
  ✓ l is about 1500 × molecular diameter (NOT comparable to it)
  ✓ Mean free path >> interatomic distance >> molecular diameter
    (in gases only; this hierarchy breaks down for solids/liquids)
  ✓ In a vacuum tube, l can equal the tube length

GAS LAWS TRAPS:
  ✓ Avogadro's hypothesis: equal volumes at same T, P → same N
    This means the same NUMBER of molecules, not same mass
  ✓ Partial pressure: the pressure gas i would exert IF ALONE
    Dalton's law: only valid for non-reacting (non-interacting) gases
  ✓ Ideal gas law holds APPROXIMATELY — better at low P, high T
  ✓ 22.4 L at STP → molar volume for ANY ideal gas (not just one type)
```

---

# 🗺️ MIND MAP 1 — Chapter Overview

```
                ┌──────────────────────────────────────────────────────────┐
                │                    KINETIC THEORY                         │
                │  Molecular picture → Macroscopic gas properties          │
                └─────────────────────────┬────────────────────────────────┘
                                          │
       ┌──────────────────────────────────┼──────────────────────────────────┐
       ▼                                  ▼                                  ▼
┌──────────────────┐           ┌───────────────────┐           ┌────────────────────┐
│ MOLECULAR NATURE │           │  KINETIC THEORY   │           │  APPLICATIONS      │
│  OF MATTER       │           │  OF IDEAL GAS     │           │                    │
│                  │           │                   │           │ Specific Heats     │
│ Atoms ~1 Å size  │           │ P = (1/3)nmv̄²   │           │ (Equipartition)    │
│ Dalton → Avogadro│           │ PV = (2/3)E       │           │                    │
│ Gas laws from    │           │ ½mv̄²=(3/2)k_BT  │           │ Monoatomic: γ=5/3  │
│ PV = μRT         │           │                   │           │ Diatomic: γ=7/5    │
│ Avogadro's N_A   │           │ T = measure of    │           │ Solids: C = 3R     │
└──────────────────┘           │ avg translational │           └────────────────────┘
                               │ KE per molecule   │
                               └─────────┬─────────┘
                                         │
                                         ▼
                           ┌─────────────────────────┐
                           │     MEAN FREE PATH       │
                           │                         │
                           │ l = 1/(√2 π n d²)       │
                           │ Explains: why gas        │
                           │ diffusion is slow despite │
                           │ fast molecules           │
                           └─────────────────────────┘
```

---

# 🗺️ MIND MAP 2 — From Molecular Assumptions to Gas Laws

```
        ASSUMPTIONS OF KINETIC THEORY
              │
              ├── Large number of molecules in random motion
              ├── Average distance >> molecular size
              ├── Intermolecular forces negligible between collisions
              ├── All collisions elastic (KE + momentum conserved)
              └── No preferred direction (isotropic)
                          │
                          ▼
        DERIVATION: Momentum transfer to walls
                          │
                          ▼
               ┌─────────────────────────────────┐
               │    P = (1/3) n m v̄²            │
               └────────────┬────────────────────┘
                            │
          ┌─────────────────┼──────────────────────┐
          ▼                 ▼                       ▼
   Combine with:     PV = (2/3)E          Compare with:
   PV = Nk_BT       (pressure-energy      PV = μRT
   (ideal gas law)   connection)          (ideal gas equation)
          │                 │                       │
          ▼                 ▼                       ▼
   ½mv̄² = (3/2)k_BT   E = (3/2)Nk_BT    Both give same PV = Nk_BT
   TEMPERATURE is          TOTAL KE          ∴ Kinetic theory is
   average molecular KE    of gas            consistent with ideal gas
          │
          ▼
   v_rms = √(3k_BT/m)
   ∝ √T, ∝ 1/√m
```

---

# 🗺️ MIND MAP 3 — Law of Equipartition and Specific Heats

```
           LAW OF EQUIPARTITION OF ENERGY
           ½k_BT per quadratic energy term per molecule
                          │
          ┌───────────────┼─────────────────┐
          ▼               ▼                 ▼
  TRANSLATIONAL      ROTATIONAL        VIBRATIONAL
  3 DOF (always)     0/2/3 DOF         2 terms/mode
  energy = 3×½k_BT   ½k_BT each        k_BT per mode
                          │                 │
          ┌───────────────┼─────────────────┘
          ▼               
  MOLECULE TYPE → TOTAL U PER MOLE → Cᵥ = dU/dT
          │
          ├── MONOATOMIC (He, Ar):
          │   f=3;  U=(3/2)RT;  Cᵥ=3R/2;  γ=5/3
          │
          ├── DIATOMIC RIGID (N₂,O₂,H₂ at room T):
          │   f=5;  U=(5/2)RT;  Cᵥ=5R/2;  γ=7/5
          │
          ├── DIATOMIC +VIBRATION (CO at high T):
          │   f=7;  U=(7/2)RT;  Cᵥ=7R/2;  γ=9/7
          │
          └── SOLID (Dulong-Petit):
              3 vib. modes × k_BT = 3k_BT per atom
              U=3RT per mole;  C=3R;  (C≈24.9 J/mol·K)
              Exception: Carbon at room T (quantum freeze)
```

---

# 🗺️ MIND MAP 4 — Gas Laws from PV = Nk_BT

```
                   PV = Nk_BT = μRT
                        │
         ┌──────────────┼──────────────────────┐
         ▼              ▼                       ▼
   Fix T, μ:       Fix P, μ:               Fix P, T:
   PV = const      V/T = const             V/N = const
   BOYLE'S LAW     CHARLES' LAW            AVOGADRO'S
   (P ∝ 1/V)       (V ∝ T)                 HYPOTHESIS
                                                │
                        ▼
                   Fix V, T:
                   P = (n₁+n₂+...)k_BT
                   = P₁+P₂+...
                   DALTON'S LAW
                   (sum of partial pressures)
```

---

# 🗺️ MIND MAP 5 — Mean Free Path

```
        WHY DOES GAS DIFFUSION TAKE TIME?
        Molecules have v_rms ~ 500 m/s, yet gas spreads slowly
                          │
                          ▼
        Molecules have FINITE SIZE → they collide!
        Paths are incessantly deflected
                          │
                          ▼
        MEAN FREE PATH l = 1/(√2 π n d²)
                          │
             ┌────────────┼────────────┐
             ▼            ▼            ▼
         l ∝ 1/n      l ∝ 1/d²    l >> d (molecular diameter)
         (lower n →   (larger      AIR: l ≈ 2.9×10⁻⁷ m
          longer l)    molecules →  ≈ 1500 × diameter
                       shorter l)   >> interatomic dist (40Å)
             │
             ▼
        PRACTICAL SIGNIFICANCE:
        ─ High vacuum: l = tube length (no collisions)
        ─ Viscosity, thermal conductivity related to l
        ─ Molecular sizes first estimated via l measurements
```

---

# 🗺️ MIND MAP 6 — Connecting All Concepts

```
        MICROSCOPIC WORLD               MACROSCOPIC WORLD
        ─────────────────               ──────────────────
        Molecules (mass m)              Pressure P
        Speed v_rms                     Temperature T
        Mean free path l                Volume V
        Number density n                Moles μ
        Degree of freedom f             Specific heat Cᵥ, Cₚ
                │                               │
                └─────────┬─────────────────────┘
                          │
                  BRIDGE: KINETIC THEORY
                          │
             ┌────────────┼────────────────────┐
             ▼            ▼                    ▼
        P = ⅓nmv̄²    T = (2/3k_B) × ε̄    C_v = (f/2)R
        (pressure from  (T = measure of     (specific heat
         molecular       avg KE)             from DOF)
         collisions)
             │
             ▼
        PV = μRT (ideal gas equation — macroscopic)
        = Nk_BT (microscopic form)
        SAME EQUATION — from both thermodynamics and kinetic theory
```

---

## 🏆 Last-Minute Exam Checklist

```
Before answering any Kinetic Theory question:

□ Is it about IDEAL GAS / GAS LAWS?
  → PV = μRT; convert T to Kelvin; use correct form (moles or molecules)
  → Avogadro: equal V, P, T → equal N (not equal mass)
  → Dalton: P_total = ΣP_i; P_i = n_i k_B T

□ Is it about PRESSURE or KE?
  → P = (1/3)nm v̄²; PV = (2/3)E
  → Average KE per molecule = (3/2)k_BT → same for all gases at same T
  → RMS: v_rms = √(3RT/M₀); lighter molecule → greater v_rms

□ Is it about SPECIFIC HEAT?
  → Find f (degrees of freedom): 3 mono, 5 diatomic rigid
  → Cᵥ = (f/2)R; Cₚ = Cᵥ + R; γ = Cₚ/Cᵥ
  → Cₚ − Cᵥ = R ALWAYS (ideal gas)
  → Vibrational mode: adds 2 to f (k_BT per mode, not ½k_BT)
  → Solid: C = 3R (Dulong-Petit); Carbon is exception

□ Is it about MEAN FREE PATH?
  → l = 1/(√2 π n d²)
  → More molecules or bigger molecules → shorter l
  → At fixed P, increasing T → n decreases → l increases
  → l >> interatomic distance >> molecular size (in gases)

□ Is it about TEMPERATURE INTERPRETATION?
  → Temperature = measure of TRANSLATIONAL KE per molecule ONLY
  → ½mv² = (3/2)k_BT applies to ALL gases regardless of molecular type
  → Lighter molecules move faster at same T (v_rms ∝ 1/√m)

□ DIMENSIONAL FORMULA CHECK?
  → k_B: [ML²T⁻²K⁻¹]; R: [ML²T⁻²K⁻¹mol⁻¹]
  → v_rms: [LT⁻¹]; l: [L]; n: [L⁻³]
  → Cᵥ, Cₚ: [ML²T⁻²mol⁻¹K⁻¹]; P: [ML⁻¹T⁻²]
```

---

## 📌 Common Formula Errors to Avoid

| Wrong | Correct | Situation |
|---|---|---|
| Average KE = (1/2)mv_rms² only for monoatomic | **(3/2)k_BT for ALL gases at same T** | Average KE doesn't depend on molecular type |
| v_rms = ⟨v⟩ | v_rms > ⟨v⟩ > v_p; **v_rms = √(3k_BT/m)** | RMS ≠ mean; different formulas |
| Vibrational mode gives ½k_BT per mode | **k_BT per vibrational mode** | Two quadratic terms: KE and PE both contribute |
| γ = 5/3 for diatomic gas (N₂, O₂) | γ = **7/5 = 1.4** for rigid diatomic | 5 DOF (3 trans + 2 rot), not 3 |
| Cₚ − Cᵥ = R only for monoatomic | **Cₚ − Cᵥ = R for ANY ideal gas** (Mayer's relation) | Universal for ideal gases |
| l = 1/(π n d²) (without √2) | **l = 1/(√2 π n d²)** | The √2 comes from relative velocity of moving molecules |
| Mean free path same for all gases at same T and P | l depends on **n and d²**: heavier gas ≠ same d as lighter gas | Different molecular sizes → different l |
| v_rms increases with pressure at fixed T | v_rms = √(3k_BT/m) — **independent of pressure** at fixed T | v_rms depends only on T and m |

---

## 🔢 Speed Comparison at 300 K

```
──────────────────────────────────────────────────────────────────────
 Gas     │ M₀ (g/mol) │ v_rms (m/s) │  v_rms α 1/√M₀ (rel. to N₂)
──────────────────────────────────────────────────────────────────────
 H₂      │     2      │   1930      │  3.74 × (N₂)
 He      │     4      │   1360      │  2.65 × (N₂)
 N₂      │    28      │    516      │  1.00 (reference)
 O₂      │    32      │    483      │  0.94 × (N₂)
 CO₂     │    44      │    411      │  0.82 × (N₂)
 Cl₂     │    71      │    324      │  0.63 × (N₂)
──────────────────────────────────────────────────────────────────────
 All have same average KE = (3/2)k_BT = 6.21 × 10⁻²¹ J at 300 K
──────────────────────────────────────────────────────────────────────
```

---

## 📏 Size and Distance Hierarchy (In Gases)

```
──────────────────────────────────────────────────────────────
  Quantity               Value         Relative to mol. diameter
──────────────────────────────────────────────────────────────
  Molecular diameter (d)  ~2 Å          1× (reference)
  Interatomic distance    ~20–40 Å      10–20× d
  Mean free path (air)    ~2900 Å       ~1500× d
──────────────────────────────────────────────────────────────
  Molecular speed (N₂)   ~516 m/s
  Speed of sound in air   ~343 m/s
  (v_sound < v_rms because of √(γ/3) factor)
──────────────────────────────────────────────────────────────
```

---

*End of Revision Notes + Mind Maps — Physics Ch. 12*