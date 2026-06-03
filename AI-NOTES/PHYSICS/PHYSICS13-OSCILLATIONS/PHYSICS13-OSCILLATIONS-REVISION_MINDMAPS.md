# CHAPTER 13 — RAPID REVISION + MIND MAPS

### Oscillations

---

# ⚡ ONE-PAGE RAPID REVISION SHEET

## 🔢 Key Definitions — Absolute Must-Memorise

| Quantity | Definition | Formula | SI Unit |
|---|---|---|---|
| **Period (T)** | Smallest time after which motion repeats | T = 1/ν = 2π/ω | s |
| **Frequency (ν)** | Oscillations per unit time | ν = 1/T | Hz (s⁻¹) |
| **Angular Frequency (ω)** | Rate of change of phase | ω = 2π/T = 2πν | rad s⁻¹ |
| **Amplitude (A)** | Maximum displacement from mean | — | m |
| **Phase constant (φ)** | Initial value of phase (ωt + φ) at t = 0 | — | rad |
| **Spring constant (k)** | Force per unit displacement | F = −kx | N m⁻¹ |
| **Restoring force** | Force directed towards mean ∝ displacement | F = −kx | N |

---

## 📐 Essential Formulae — Must Know Cold

```
SHM — DISPLACEMENT, VELOCITY, ACCELERATION:
    ┌───────────────────────────────────────────────────────────────┐
    │  x(t) = A cos(ωt + φ)                                        │
    │  v(t) = −ωA sin(ωt + φ)  =  ±ω√(A² − x²)                   │
    │  a(t) = −ω²A cos(ωt + φ)  =  −ω²x(t)                       │
    │                                                               │
    │  v_max = ωA (at x = 0)    │   v_min = 0 (at x = ±A)        │
    │  a_max = ω²A (at x = ±A)  │   a_min = 0 (at x = 0)         │
    └───────────────────────────────────────────────────────────────┘

SPRING-MASS SYSTEM:
    ┌───────────────────────────────────────────────────────────────┐
    │  F = −kx                                                      │
    │  ω = √(k/m)                                                  │
    │  T = 2π√(m/k)                                                │
    └───────────────────────────────────────────────────────────────┘

ENERGY IN SHM:
    ┌───────────────────────────────────────────────────────────────┐
    │  KE = ½kA² sin²(ωt+φ) = ½k(A²−x²)                          │
    │  PE = ½kA² cos²(ωt+φ) = ½kx²                                │
    │  Total E = ½kA² = constant  (E ∝ A²)                         │
    │  At x = 0: E = KE max  │  At x = ±A: E = PE max             │
    └───────────────────────────────────────────────────────────────┘

SIMPLE PENDULUM:
    ┌───────────────────────────────────────────────────────────────┐
    │  T = 2π√(L/g)                                                │
    │  Valid ONLY for small oscillations (θ ≪ 1 rad ≈ 20°)        │
    │  T is INDEPENDENT of mass m and amplitude (small θ)          │
    │  Seconds pendulum: T = 2 s → L ≈ 1 m on earth               │
    └───────────────────────────────────────────────────────────────┘
```

---

## 📊 Position vs. Physical Quantity Table — Critical for MCQs

```
────────────────────────────────────────────────────────────────────
  Position  │   x   │  Velocity   │  Acceleration │  KE    │  PE
────────────────────────────────────────────────────────────────────
  Mean      │   0   │  ωA (max)   │    0 (min)    │  max   │  min
  Extreme   │  ±A   │  0 (min)    │  ω²A (max)    │  min   │  max
  General   │   x   │ ω√(A²−x²)  │   −ω²x        │  ½k(A²−x²)│½kx²
────────────────────────────────────────────────────────────────────
```

---

## 📊 Phase Relationships in SHM (φ = 0 case)

```
────────────────────────────────────────────────────────────────────
  Quantity       │  Expression          │  Phase lead over x(t)
────────────────────────────────────────────────────────────────────
  Displacement   │  A cos(ωt)           │  0 (reference)
  Velocity       │  −ωA sin(ωt)         │  π/2 (90° ahead)
  Acceleration   │  −ω²A cos(ωt)        │  π (180° ahead)
────────────────────────────────────────────────────────────────────
  v leads x by π/2  │  a leads x by π  │  a leads v by π/2
────────────────────────────────────────────────────────────────────
```

---

## ⚠️ Critical Distinctions — High-Yield Exam Traps

```
SHM TRAPS:
  ✓ Period is INDEPENDENT of amplitude (isochronism)
    → T = 2π√(m/k) has no A. Bigger swing = same period.
  ✓ Acceleration is ZERO at mean position (x = 0), MAX at extremes
    → Velocity is MAX at mean, ZERO at extremes (opposite pattern!)
  ✓ KE and PE each have period T/2, NOT T
    → They complete 2 cycles for every 1 cycle of displacement
  ✓ Total energy E = ½kA² — DOES NOT CHANGE with time or position
    → Only KE and PE individually change (they trade off)
  ✓ a = −ω²x: if a-x graph is a straight line with NEGATIVE slope,
    it is SHM. Positive slope or non-linear → NOT SHM.
  ✓ v = ω√(A²−x²): velocity is REAL only if |x| ≤ A. This makes
    physical sense — the particle cannot go beyond amplitude A.

PENDULUM TRAPS:
  ✓ T = 2π√(L/g): T is INDEPENDENT of mass m (completely!)
    → A 1 kg and 100 kg bob on same pendulum have same T
  ✓ T is independent of amplitude ONLY for small angles
    → For large swings, period increases slightly
  ✓ In a lift accelerating upward: g_eff = g + a → T decreases
  ✓ In a lift accelerating downward: g_eff = g − a → T increases
  ✓ In free fall: g_eff = 0 → T = ∞ (pendulum doesn't oscillate)
  ✓ On moon (g = 1.7 m/s²): T_moon = T_earth × √(g/g_moon) = T_earth × √(9.8/1.7) ≈ 2.4 T_earth

FORCE LAW TRAPS:
  ✓ Only a = −kx (linear, negative) defines SHM
    → a = 0.7x: positive slope → NOT SHM
    → a = −200x²: non-linear (x² term) → NOT SHM
    → a = −10x: linear, negative → IS SHM ✓
    → a = 100x³: non-linear, positive → NOT SHM
  ✓ The MINUS sign in F = −kx is essential
    → Without it, force increases displacement → unstable, not SHM

ENERGY TRAPS:
  ✓ E ∝ A²: if amplitude doubles, energy QUADRUPLES
  ✓ At x = A/2: KE = ¾ × (½kA²), PE = ¼ × (½kA²) → KE:PE = 3:1
  ✓ KE = PE when x = A/√2 (NOT at x = A/2)
```

---

# 🗺️ MIND MAP 1 — Chapter Overview

```
                ┌─────────────────────────────────────────────────────┐
                │                   OSCILLATIONS                       │
                │     Periodic to-and-fro motion about mean position   │
                └──────────────────────┬──────────────────────────────┘
                                       │
       ┌───────────────────────────────┼───────────────────────────────┐
       ▼                               ▼                               ▼
┌────────────────────┐      ┌──────────────────────┐      ┌──────────────────────┐
│ PERIODIC MOTION    │      │   SIMPLE HARMONIC    │      │  SIMPLE PENDULUM     │
│                    │      │   MOTION (SHM)       │      │                      │
│ Period T = 1/ν     │      │                      │      │ T = 2π√(L/g)         │
│ ν = frequency      │      │ x = A cos(ωt + φ)   │      │                      │
│ ω = 2π/T           │      │ F = −kx              │      │ Valid: small θ only   │
│                    │      │ T = 2π√(m/k)         │      │ T independent of:    │
│ Fourier: any       │      │                      │      │  - mass m            │
│ periodic fn =      │      │ Projection of        │      │  - amplitude θ       │
│ sum of sinusoids   │      │ circular motion      │      │  (only large angle   │
└────────────────────┘      └──────────┬───────────┘      │  deviations occur)   │
                                       │                   └──────────────────────┘
                           ┌───────────┴───────────┐
                           ▼                       ▼
                  ┌─────────────────┐    ┌──────────────────────┐
                  │  KINEMATICS     │    │  ENERGY              │
                  │  v = −ωA sinθ  │    │                      │
                  │  a = −ω²x      │    │  KE = ½k(A²−x²)     │
                  │                │    │  PE = ½kx²            │
                  │  At x=0: v_max │    │  Total = ½kA²        │
                  │  At x=±A: a_max│    │  = constant          │
                  └─────────────────┘    └──────────────────────┘
```

---

# 🗺️ MIND MAP 2 — SHM Parameters and Their Meaning

```
             x(t) = A cos(ωt + φ)
                    │
     ┌──────────────┼──────────────────┐
     ▼              ▼                  ▼
┌──────────┐  ┌──────────────┐  ┌─────────────────────┐
│ A        │  │  ω           │  │  (ωt + φ)            │
│ AMPLITUDE│  │  ANGULAR     │  │  PHASE               │
│          │  │  FREQUENCY   │  │                      │
│ Max       │  │              │  │  determines STATE    │
│ displacement│ │ ω = 2π/T    │  │  of motion at time t │
│ Always > 0│  │ ω = √(k/m)  │  │                      │
│ E = ½kA²  │  │ ω = √(g/L)  │  │  φ = phase constant  │
│ A → size  │  │ (pendulum)  │  │  (initial phase)     │
│ of motion │  │             │  │  φ at t = 0          │
└──────────┘  └──────────────┘  └─────────────────────┘
```

---

# 🗺️ MIND MAP 3 — Energy in SHM

```
             TOTAL ENERGY E = ½kA² (CONSTANT)
                           │
            ┌──────────────┼──────────────┐
            ▼              │              ▼
     KINETIC ENERGY        │       POTENTIAL ENERGY
     K = ½k(A²−x²)         │       U = ½kx²
            │              │              │
            ▼              │              ▼
     MAX at x = 0          │       MAX at x = ±A
     (mean position)       │       (extreme positions)
     K = ½kA²              │       U = ½kA²
            │              │              │
            ▼              ▼              ▼
     ZERO at x = ±A    K + U = E    ZERO at x = 0
     (extreme positions)  (always)  (mean position)
            │
            ▼
     Period of K = T/2
     (same as period of U)
     Both complete 2 cycles per oscillation!
```

---

# 🗺️ MIND MAP 4 — Conditions for SHM

```
        A MOTION IS SHM IF AND ONLY IF:
                    │
        ┌───────────┼───────────────┐
        ▼                           ▼
  DISPLACEMENT FORM:          FORCE FORM:
  x = A cos(ωt + φ)           F = −kx
  (sinusoidal function          (linear restoring force
  of time)                      towards mean position)
        │                           │
        ▼                           ▼
   ↔ Equivalent ↔           a = −ω²x
                            (acceleration ∝ −displacement)
                                    │
                         a-x graph: straight line
                         through origin, negative slope
                                    │
                         Slope = −ω²
                         ω = √(|slope|)
                         T = 2π/ω
```

---

# 🗺️ MIND MAP 5 — The Simple Pendulum Derivation

```
    Simple Pendulum: mass m, string length L, angle θ from vertical
                        │
                        ▼
    Two forces: Tension T (along string) + Weight mg (downward)
                        │
                        ▼
    Restoring torque: τ = −mgL sin θ  (tangential component only)
                        │
                        ▼
    Newton's rotational law: Iα = τ
    I = mL² (point mass at distance L)
                        │
                        ▼
    α = −(mgL/I) sin θ = −(g/L) sin θ
                        │
            ┌───────────┴───────────────┐
            ▼                           ▼
    LARGE ANGLE:               SMALL ANGLE (θ ≪ 1 rad):
    sin θ ≠ θ                  sin θ ≈ θ
    NOT SHM                    α ≈ −(g/L) θ → SHM!
                                         │
                                         ▼
                               ω = √(g/L)
                               T = 2π√(L/g)
                               Independent of m and A (small θ)
```

---

# 🗺️ MIND MAP 6 — SHM and Circular Motion

```
    UNIFORM CIRCULAR MOTION                   SHM
    Particle P on circle                      Projection P′ on diameter
    Radius = A                                Amplitude = A
    Angular speed = ω (constant)              Angular frequency = ω
    Position: (A cos(ωt+φ), A sin(ωt+φ))    x(t) = A cos(ωt+φ)
    Speed = ωA (constant)                     v(t) = −ωA sin(ωt+φ)
    Acceleration = ω²A (centripetal)          a(t) = −ω²A cos(ωt+φ)
    directed toward centre                    directed toward mean position

    KEY DIFFERENCE:
    → Circular motion: force = centripetal (F = mω²r, outward from body's view)
    → SHM: force = restoring (F = −kx, always toward mean)
    → They produce the SAME EQUATIONS but arise from DIFFERENT FORCES
```

---

## 🏆 Last-Minute Exam Checklist

```
Before answering any Oscillations question:

□ Is it about PERIOD/FREQUENCY?
  → T = 1/ν = 2π/ω; ω = 2π/T = 2πν
  → Period is INDEPENDENT of amplitude (isochronism)
  → Convert any angle to radians for pendulum calculations

□ Is it about SHM KINEMATICS?
  → x = A cos(ωt + φ); v = −ωA sin(ωt + φ); a = −ω²x
  → v = ω√(A²−x²) (velocity at position x — very useful!)
  → v_max = ωA at mean; a_max = ω²A at extremes
  → Phase: v leads x by π/2; a leads x by π

□ Is it about ENERGY?
  → Total E = ½kA² = ½mω²A² (constant!)
  → KE = ½k(A²−x²); PE = ½kx²
  → KE = PE when x = A/√2 (not A/2!)
  → KE:PE = 3:1 when x = A/2

□ Is it about SPRING-MASS SYSTEM?
  → ω = √(k/m); T = 2π√(m/k)
  → Two springs in parallel: k_eff = k₁ + k₂
  → Two springs in series: 1/k_eff = 1/k₁ + 1/k₂
  → Two identical springs, both sides: k_eff = 2k; T = 2π√(m/2k)

□ Is it about SIMPLE PENDULUM?
  → T = 2π√(L/g)
  → If g changes: T_new = T_old × √(g_old/g_new)
  → In accelerating lift: replace g with g_eff = g ± a
  → On moon: g_moon ≈ g/6; T_moon ≈ T_earth × √6 ≈ 2.45 T_earth

□ IDENTIFYING SHM?
  → Look for a = −ω²x (linear, negative coefficient)
  → Check: F = −kx? (linear restoring force?)
  → a = +ve coefficient × x → NOT SHM (unstable, not oscillatory)
  → Non-linear (x², x³) → periodic but NOT SHM

□ DIMENSIONAL FORMULA CHECK?
  → ω: [T⁻¹]; A: [L]; φ: dimensionless
  → k: [MT⁻²]; T (period): [T]; ν: [T⁻¹]
  → Energy: [ML²T⁻²]; force: [MLT⁻²]
```

---

## 📌 Common Formula Errors to Avoid

| Wrong | Correct | Situation |
|---|---|---|
| T depends on amplitude A | T = 2π√(m/k) — **no A** | Isochronism: period independent of amplitude |
| a_max at mean position | a_max = ω²A at **extremes** (x = ±A) | a = −ω²x; zero at x = 0 |
| v_max at extremes | v_max = ωA at **mean position** (x = 0) | v = ω√(A²−x²); zero at x = ±A |
| KE = PE at x = A/2 | KE = PE at **x = A/√2** | ½k(A²−x²) = ½kx² → x² = A²/2 → x = A/√2 |
| Total E oscillates in time | Total E = ½kA² = **constant** | Conservative force; total mechanical energy conserved |
| Period of KE is T | Period of KE = **T/2** | KE ∝ sin², which completes 2 cycles per T |
| Pendulum T depends on mass m | T = 2π√(L/g) — **no m** | Mass cancels: F = −mg sinθ, I = mL², τ = Iα → m cancels |
| T = 2π√(g/L) | T = **2π√(L/g)** | Longer pendulum → longer period (√L in numerator) |
| sin θ ≈ θ for all θ | Valid only for **θ ≪ 1 rad** (≲ 20°) | Small angle approximation; fails for large swings |

---

## 🔢 Numerical Quick Reference

```
──────────────────────────────────────────────────────────────────────
  Configuration          │  Angular Frequency ω  │  Period T
──────────────────────────────────────────────────────────────────────
  Spring-mass (k, m)     │  √(k/m)               │  2π√(m/k)
  Two springs both sides │  √(2k/m)              │  2π√(m/2k)
  Simple pendulum (L, g) │  √(g/L)               │  2π√(L/g)
  Seconds pendulum       │  π rad/s              │  2 s
──────────────────────────────────────────────────────────────────────

  v at x = 0 (mean):   v = ωA  (max)
  v at x = A/2:        v = ω√(3/4) A = (√3/2)ωA ≈ 0.866 ωA
  v at x = A/√2:       v = ωA/√2 = 0.707 ωA  (where KE = PE)
  v at x = A:          v = 0  (extreme, min)
──────────────────────────────────────────────────────────────────────

  Energy at various displacements:
  At x = 0:     KE = ½kA²,      PE = 0
  At x = A/2:   KE = (3/4)×½kA², PE = (1/4)×½kA²  (KE:PE = 3:1)
  At x = A/√2:  KE = PE = ½ × ½kA²                (KE:PE = 1:1)
  At x = A:     KE = 0,          PE = ½kA²
──────────────────────────────────────────────────────────────────────
```

---

## 📏 Important Pendulum Calculations

```
──────────────────────────────────────────────────────────────────────
  Situation                     │  Effective g       │  Effect on T
──────────────────────────────────────────────────────────────────────
  Normal (earth surface)        │  g = 9.8 m s⁻²     │  T = 2π√(L/g)
  Lift accelerating up (+a)     │  g_eff = g + a      │  T decreases
  Lift accelerating down (−a)   │  g_eff = g − a      │  T increases
  Lift in free fall             │  g_eff = 0          │  T → ∞ (stops)
  On moon (g_m = 1.7 m s⁻²)    │  g_eff = g_m        │  T ≈ 2.4 × T_earth
  Horizontal acceleration (a)   │  g_eff = √(g²+a²)  │  T decreases
  Moving car on circular road   │  g_eff = √(g²+(v²/R)²)│ T decreases
──────────────────────────────────────────────────────────────────────
```

---

*End of Revision Notes + Mind Maps — Physics Ch. 13*