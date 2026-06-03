# CHAPTER 14 — RAPID REVISION + MIND MAPS

### Waves

---

# ⚡ ONE-PAGE RAPID REVISION SHEET

## 🔢 Key Definitions — Absolute Must-Memorise

| Quantity | Definition | Formula | SI Unit |
|---|---|---|---|
| **Wavelength (λ)** | Min. distance between two same-phase points | λ = 2π/k = vT = v/ν | m |
| **Angular wave number (k)** | Spatial analogue of angular frequency | k = 2π/λ | rad m⁻¹ |
| **Angular frequency (ω)** | Rate of change of phase at a fixed point | ω = 2π/T = 2πν | rad s⁻¹ |
| **Wave speed (v)** | Speed of phase propagation | v = ω/k = λν | m s⁻¹ |
| **Amplitude (a)** | Maximum particle displacement | — | m |
| **Phase** | Argument of sine function | kx − ωt + φ | rad |
| **Node** | Point of zero displacement in standing wave | x = nλ/2 | — |
| **Antinode** | Point of maximum displacement in standing wave | x = (2n+1)λ/4 | — |
| **Beat frequency** | Rate of amplitude variation | ν₁ − ν₂ | Hz |

---

## 📐 Essential Formulae — Must Know Cold

```
WAVE EQUATION:
    ┌─────────────────────────────────────────────────────────────────┐
    │  y(x,t) = a sin(kx − ωt + φ)    [travels in +x direction]     │
    │  y(x,t) = a sin(kx + ωt + φ)    [travels in −x direction]     │
    │  k = 2π/λ    ω = 2π/T = 2πν    v = ω/k = λν = λ/T           │
    └─────────────────────────────────────────────────────────────────┘

WAVE SPEEDS:
    ┌─────────────────────────────────────────────────────────────────┐
    │  String (transverse):     v = √(T/µ)   [T=tension, µ=m/L]    │
    │  Fluid (longitudinal):    v = √(B/ρ)   [B=bulk modulus]      │
    │  Solid bar:               v = √(Y/ρ)   [Y=Young's modulus]   │
    │  Gas (Laplace, correct):  v = √(γP/ρ)  [γ=Cp/Cv]            │
    │  Gas (Newton, incorrect): v = √(P/ρ)   → gives 280 m/s ✗     │
    └─────────────────────────────────────────────────────────────────┘

STANDING WAVES:
    ┌─────────────────────────────────────────────────────────────────┐
    │  y(x,t) = 2a sin kx cos ωt    (superposition of 2 opp. waves) │
    │  Nodes:     sin kx = 0  →  x = nλ/2                           │
    │  Antinodes: sin kx = ±1 →  x = (2n+1)λ/4                     │
    │  Node–antinode spacing = λ/4                                   │
    │  Node–node or antinode–antinode spacing = λ/2                  │
    └─────────────────────────────────────────────────────────────────┘

NORMAL MODES:
    ┌─────────────────────────────────────────────────────────────────┐
    │  String / pipe open at both ends:                               │
    │     νₙ = nv/2L    (n = 1, 2, 3, ...)  ALL harmonics           │
    │                                                                  │
    │  Pipe closed at one end:                                        │
    │     νₙ = (2n+1)v/4L  (n = 0, 1, 2, ...) ODD harmonics only   │
    │     Fundamental = v/4L  (HALF of open pipe!)                   │
    └─────────────────────────────────────────────────────────────────┘

BEATS:
    ┌─────────────────────────────────────────────────────────────────┐
    │  ν_beat = |ν₁ − ν₂|                                            │
    │  Heard wave frequency = (ν₁ + ν₂)/2    (average)              │
    └─────────────────────────────────────────────────────────────────┘

INTERFERENCE:
    ┌─────────────────────────────────────────────────────────────────┐
    │  Resultant amplitude = 2a cos(φ/2)                             │
    │  φ = 0:  A = 2a   (constructive)                               │
    │  φ = π:  A = 0    (destructive)                                │
    └─────────────────────────────────────────────────────────────────┘
```

---

## 📊 Quick Comparison: Types of Waves

```
────────────────────────────────────────────────────────────────────────────
  Property          │  Transverse Wave     │  Longitudinal Wave
────────────────────────────────────────────────────────────────────────────
  Particle motion   │  ⊥ to propagation    │  ∥ to propagation
  Type of strain    │  Shear               │  Compressional / Bulk
  Medium needed     │  Solid (shear mod.)  │  All elastic media
  Propagates in     │  Solids only         │  Solids, liquids, gases
  Examples          │  String, seismic S   │  Sound, seismic P
  EM waves          │  All EM waves        │  — (EM are transverse)
────────────────────────────────────────────────────────────────────────────
```

---

## 📊 Boundary Conditions and Reflection

```
────────────────────────────────────────────────────────────────────────────
  Boundary Type     │  Phase change    │  At boundary (string/pipe)
────────────────────────────────────────────────────────────────────────────
  Rigid / Closed    │  π (inverted)    │  Displacement Node, Pressure Antinode
  Free / Open       │  0 (upright)     │  Displacement Antinode, Pressure Node
────────────────────────────────────────────────────────────────────────────
```

---

## 📊 Normal Modes Summary

```
────────────────────────────────────────────────────────────────────────────
  System                │  Fundamental  │  Harmonics    │  Pattern
────────────────────────────────────────────────────────────────────────────
  String, both fixed    │   v / 2L      │  All: nν₁     │  N–A–N–A–...–N
  Pipe, both open       │   v / 2L      │  All: nν₁     │  A–N–A–N–...–A
  Pipe, one closed      │   v / 4L      │  Odd: (2n+1)ν₁│  N–A–N–A–...–A
────────────────────────────────────────────────────────────────────────────
  (N = Node, A = Antinode)
────────────────────────────────────────────────────────────────────────────
```

---

## ⚠️ Critical Distinctions — High-Yield Exam Traps

```
WAVE SPEED TRAPS:
  ✓ Wave speed depends ONLY on the medium (T, µ, B, ρ, γ)
    → NOT on frequency, wavelength, or amplitude
    → Source sets frequency; medium sets speed; λ = v/ν adjusts
  ✓ Speed of sound is INDEPENDENT of pressure at constant T
    → Doubling P doubles ρ too → P/ρ = constant → v unchanged
  ✓ Speed of sound INCREASES with temperature (v ∝ √T_absolute)
  ✓ Speed of sound INCREASES with humidity (lower effective density)
  ✓ Solids > Liquids > Gases for speed of sound
    → Bulk modulus difference dominates over density difference

NEWTON vs LAPLACE TRAP:
  ✓ Newton: isothermal → B = P → v = √(P/ρ) ≈ 280 m/s [WRONG]
  ✓ Laplace: adiabatic → B = γP → v = √(γP/ρ) ≈ 331 m/s [CORRECT]
  ✓ Sound propagation is TOO FAST for isothermal — no time for heat flow
  ✓ γ_air = 7/5 = 1.4; √1.4 ≈ 1.18 → corrects the ~15% error

STANDING WAVE TRAPS:
  ✓ Closed pipe: ONLY odd harmonics (1st, 3rd, 5th, ...)
    → Open pipe / string fixed both ends: ALL harmonics
  ✓ Fundamental of closed pipe = v/4L = HALF of open pipe (v/2L)
  ✓ Displacement NODE = Pressure ANTINODE (and vice versa)
  ✓ Standing waves do NOT transport energy
  ✓ All particles between two nodes: same PHASE, different AMPLITUDE

DIRECTION OF WAVE TRAPS:
  ✓ y = a sin(kx − ωt): POSITIVE x-direction (kx and ωt have opposite signs)
  ✓ y = a sin(kx + ωt): NEGATIVE x-direction (same signs)
  ✓ To find speed: v = coefficient of t / coefficient of x (in the same form)

BEATS TRAPS:
  ✓ Beat frequency = DIFFERENCE of frequencies (NOT sum, NOT average)
  ✓ Average frequency = (ν₁ + ν₂)/2 = what you hear as the pitch
  ✓ Beats require CLOSE frequencies (< ~15 Hz difference to be heard clearly)
  ✓ If tension of one string is increased and beats DECREASE:
    → That string was BELOW the reference frequency (tension raised it closer)
  ✓ If tension is increased and beats INCREASE:
    → That string was ABOVE the reference frequency

WAVE EQUATION TRAPS:
  ✓ Wavelength in standing wave = twice the node-to-node distance
  ✓ y(x,t) = 2a sin kx cos ωt: NOT a travelling wave!
    → kx and ωt appear separately (not in combination kx ± ωt) → stationary
```

---

# 🗺️ MIND MAP 1 — Chapter Overview

```
                ┌──────────────────────────────────────────────────────┐
                │                      WAVES                           │
                │  Propagation of disturbance; energy travels,         │
                │  matter does not                                      │
                └──────────────────────┬───────────────────────────────┘
                                       │
          ┌────────────────────────────┼────────────────────────────┐
          ▼                            ▼                            ▼
┌──────────────────────┐   ┌──────────────────────┐   ┌──────────────────────┐
│  TYPES OF WAVES      │   │  WAVE EQUATION       │   │  WAVE SPEED          │
│                      │   │                      │   │                      │
│ Mechanical           │   │ y = a sin(kx−ωt+φ)  │   │ v = ω/k = λν        │
│  • Transverse        │   │                      │   │                      │
│  • Longitudinal      │   │ Parameters:          │   │ String: √(T/µ)      │
│                      │   │  a: amplitude        │   │ Fluid:  √(B/ρ)      │
│ Electromagnetic      │   │  k: wave number      │   │ Gas:    √(γP/ρ)     │
│  • No medium needed  │   │  ω: ang. frequency   │   │  (Laplace)          │
│  • Speed = c         │   │  φ: phase constant   │   │                      │
│                      │   │                      │   │ Medium determines v  │
│ Matter waves         │   │ Speed = ω/k          │   │ Source sets ν        │
│  • Quantum physics   │   │                      │   │ λ = v/ν adjusts     │
└──────────────────────┘   └──────────────────────┘   └──────────────────────┘
          │                                                        │
          ▼                                                        ▼
┌──────────────────────┐                            ┌──────────────────────┐
│  SUPERPOSITION &     │                            │  REFLECTION          │
│  INTERFERENCE        │                            │                      │
│                      │                            │ Rigid: phase π       │
│ y = y₁ + y₂          │                            │ (inverted)           │
│                      │                            │                      │
│ Same direction:      │                            │ Open: no phase       │
│ A = 2a cos(φ/2)      │                            │ change               │
│                      │                            │                      │
│ Constructive: φ=0    │                            └──────────┬───────────┘
│ Destructive:  φ=π    │                                       │
└──────────────────────┘                                       ▼
          │                                         ┌──────────────────────┐
          ▼                                         │  STANDING WAVES      │
┌──────────────────────┐                            │                      │
│  BEATS               │                            │ y = 2a sin kx cos ωt│
│                      │                            │                      │
│ ν_beat = ν₁ − ν₂    │                            │ Nodes: nλ/2          │
│ Amplitude waxes      │                            │ Antinodes: (2n+1)λ/4│
│ and wanes            │                            │                      │
│ Musical tuning       │                            │ NORMAL MODES:        │
└──────────────────────┘                            │ String/open: nv/2L  │
                                                    │ Closed: (2n+1)v/4L  │
                                                    └──────────────────────┘
```

---

# 🗺️ MIND MAP 2 — Wave Parameters and Their Relationships

```
             y(x,t) = a sin(kx − ωt + φ)
                          │
        ┌─────────────────┼─────────────────┐
        ▼                 ▼                 ▼
┌──────────────┐  ┌────────────────┐  ┌──────────────────────┐
│      a       │  │      k         │  │        ω             │
│  AMPLITUDE   │  │  ANGULAR WAVE  │  │  ANGULAR FREQUENCY   │
│              │  │  NUMBER        │  │                      │
│ Max particle │  │                │  │ ω = 2π/T = 2πν       │
│ displacement │  │ k = 2π/λ       │  │                      │
│              │  │                │  │ Related to SOURCE    │
│ Intensity    │  │ Spatial rate   │  │ Medium-independent   │
│ ∝ a²         │  │ of phase change│  │                      │
└──────────────┘  └──────┬─────────┘  └────────┬─────────────┘
                         │                      │
                         └──────────┬───────────┘
                                    ▼
                           WAVE SPEED: v = ω/k
                                    │
                    ┌───────────────┼───────────────┐
                    ▼               ▼               ▼
             v = λν         v = λ/T        Set by MEDIUM
             (universal)    (universal)    (not by source)
```

---

# 🗺️ MIND MAP 3 — Speed of Sound in Gases

```
          Speed of Sound in a Gas
                    │
         ┌──────────┴──────────┐
         ▼                     ▼
  NEWTON (1687)          LAPLACE (correction)
  Assumed: ISOTHERMAL    Assumed: ADIABATIC
  B = P                  B = γP
  v = √(P/ρ)             v = √(γP/ρ)
  ≈ 280 m/s at STP       ≈ 331 m/s at STP ✓
  ERROR: ~15% too low    MATCHES experiment!
         │                     │
         ▼                     ▼
  Why wrong?             Why correct?
  Sound too fast         No time for heat
  for heat flow          exchange → adiabatic
  (not isothermal)       γ_air = 1.4 → √1.4≈1.18
                         ×280 ≈ 331 ✓
                               │
                    ┌──────────┼──────────┐
                    ▼          ▼          ▼
            PRESSURE:    TEMPERATURE:  HUMIDITY:
            Independent  v ∝ √T(K)     v increases
            P/ρ=const.   Higher T →    (water vapour
            at const T   faster v      less dense
                                        than air)
```

---

# 🗺️ MIND MAP 4 — Standing Waves and Normal Modes

```
        Two identical waves, opposite directions:
          y₁ = a sin(kx−ωt)  +  y₂ = a sin(kx+ωt)
                            │
                            ▼
                y = 2a sin kx cos ωt
                            │
             ┌──────────────┼──────────────┐
             ▼              ▼              ▼
          NODES         ANTINODES      KEY PROPERTY
      sin kx = 0        |sin kx| = 1   No energy transport
      x = nλ/2          x=(2n+1)λ/4    Amplitude varies
      Never move!        Max amp=2a     with position
      Pressure max       Pressure=0     Phase same between
                                        adjacent nodes
             │
             ▼
    BOUNDARY CONDITIONS → NORMAL MODES
             │
    ┌────────┴───────────────┐
    ▼                        ▼
STRING (both ends fixed)   AIR COLUMN (closed one end)
Both ends: NODES           Closed: NODE; Open: ANTINODE
L = nλ/2                   L = (2n+1)λ/4
λ = 2L/n                   λ = 4L/(2n+1)
νₙ = nv/2L                 νₙ = (2n+1)v/4L
ALL harmonics              ODD harmonics only
n = 1,2,3,...              n = 0,1,2,...
    │                           │
    ▼                           ▼
Fundamental = v/2L         Fundamental = v/4L
                            = HALF of open pipe!
```

---

# 🗺️ MIND MAP 5 — Beats

```
         Two waves of close (but ≠) frequencies
         ν₁ and ν₂ (|ν₁−ν₂| small), equal amplitudes
                          │
                          ▼
         Superposition: s = s₁ + s₂
         = a cos ω₁t + a cos ω₂t
                          │
         Using cos A + cos B = 2 cos[(A−B)/2] cos[(A+B)/2]:
                          │
                          ▼
     s = [2a cos ωbt] cos ωat
         ↑               ↑
     AMPLITUDE        CARRIER
     modulation       average freq
     oscillates       ωa = (ω₁+ω₂)/2
     at ωb=(ω₁−ω₂)/2  what we HEAR
                          │
                          ▼
     Amplitude maxima: ±2a (twice per ωb cycle)
                          │
                          ▼
     BEAT FREQUENCY = 2ωb/2π = (ω₁−ω₂)/2π = ν₁−ν₂
                          │
            ┌─────────────┼─────────────┐
            ▼             ▼             ▼
      MUSICAL USE    CONDITION      FREQUENCY
      Tune by        Close freqs    ν_beat = |ν₁−ν₂|
      eliminating    needed (<15Hz  Average pitch
      beats          audible)       = (ν₁+ν₂)/2
```

---

# 🗺️ MIND MAP 6 — Superposition and Interference

```
    PRINCIPLE OF SUPERPOSITION
    y = y₁ + y₂ + ... + yₙ
    (algebraic sum at all times)
                │
    ┌───────────┼───────────┐
    ▼           ▼           ▼
SAME          SAME        OPPOSITE
DIRECTION,    DIRECTION,  DIRECTIONS
SAME FREQ,    SAME FREQ,  → STANDING
SAME PHASE    DIFF PHASE  WAVES
φ = 0         A = 2a cos(φ/2)
A = 2a                    y = 2a sin kx cos ωt
Constructive  ┌──────────────────┐
              │ φ = 0: A = 2a   │
              │ φ = π: A = 0    │
              │ (destructive)   │
              └──────────────────┘
```

---

## 🏆 Last-Minute Exam Checklist

```
Before answering any Waves question:

□ Is it about WAVE PARAMETERS?
  → y = a sin(kx ± ωt + φ); + sign = −x direction; − sign = +x direction
  → k = 2π/λ; ω = 2π/T; v = ω/k = λν
  → All come from comparing with standard form!

□ Is it about WAVE SPEED?
  → Speed depends ONLY on medium, NOT on frequency or amplitude
  → String: v = √(T/µ) — higher tension = faster; heavier = slower
  → Gas: v = √(γP/ρ) [Laplace, correct] NOT √(P/ρ) [Newton, incorrect!]
  → Speed in solids > liquids > gases

□ Is it about SOUND SPEED CHANGES?
  → Pressure at constant T: speed UNCHANGED (P/ρ = const)
  → Temperature: speed INCREASES (v ∝ √T_abs)
  → Humidity: speed INCREASES (humid air is less dense)

□ Is it about STANDING WAVES?
  → y = 2a sin kx cos ωt — not a travelling wave!
  → Node at x = nλ/2; antinode at x = (2n+1)λ/4
  → Node–antinode gap = λ/4; node–node gap = λ/2
  → Displacement node = Pressure antinode (and vice versa)

□ Is it about NORMAL MODES?
  → String or open pipe: νₙ = nv/2L (ALL harmonics)
  → Closed pipe: νₙ = (2n+1)v/4L (ODD harmonics only)
  → Fundamental of closed pipe = v/4L = HALF of open pipe!

□ Is it about REFLECTION?
  → Rigid/closed end: phase change π → wave inverted
  → Free/open end: no phase change → wave upright

□ Is it about INTERFERENCE?
  → Resultant amplitude = 2a cos(φ/2)
  → Constructive: φ = 0, 2π, 4π, ... → A = 2a
  → Destructive: φ = π, 3π, 5π, ... → A = 0

□ Is it about BEATS?
  → ν_beat = |ν₁ − ν₂| (difference, NOT sum!)
  → If beats decrease after tension increase → string was below reference
  → If beats increase after tension increase → string was above reference

□ IDENTIFYING WAVE DIRECTION?
  → sin(kx − ωt): → +x direction ✓
  → sin(kx + ωt): → −x direction ✓
  → sin(ωt + kx): same as above → −x direction ✓

□ DIMENSIONAL FORMULA CHECK?
  → λ: [L]; k: [L⁻¹]; ω: [T⁻¹]; v: [LT⁻¹]
  → µ: [ML⁻¹]; B: [ML⁻¹T⁻²]; ρ: [ML⁻³]
```

---

## 📌 Common Formula Errors to Avoid

| Wrong | Correct | Situation |
|---|---|---|
| v = √(P/ρ) | v = **√(γP/ρ)** | Laplace correction — sound is adiabatic, not isothermal |
| Speed increases with pressure | Speed is **independent of pressure** at constant T | P and ρ increase proportionally |
| Closed pipe has all harmonics | Closed pipe has **only ODD** harmonics | One end node, one end antinode — odd multiples only |
| Fundamental of closed = v/2L | Fundamental of closed = **v/4L** | L = λ/4 for fundamental in closed pipe |
| Displacement node = pressure node | Displacement node = **pressure antinode** | Where particles can't move, pressure piles up |
| Beat freq = ν₁ + ν₂ | Beat freq = **|ν₁ − ν₂|** | Beats = difference, not sum |
| Node–node distance = λ | Node–node distance = **λ/2** | Half wavelength between successive nodes |
| y = 2a sin kx cos ωt is travelling wave | It is a **standing/stationary wave** | kx and ωt are NOT combined as (kx ± ωt) |
| T in v = √(T/µ) is period | **T is tension** (Newton), not period | µ = linear mass density = m/L |
| v ∝ T (period) | v ∝ √T_absolute (Kelvin temperature) | Speed of sound in gas: v = √(γRT/M) |

---

## 🔢 Numerical Quick Reference

```
────────────────────────────────────────────────────────────────────────────
  Wave Speed Formula          │  Relevant Quantities
────────────────────────────────────────────────────────────────────────────
  v = √(T/µ)   [string]       │  T = tension (N); µ = m/L (kg/m)
  v = √(B/ρ)   [fluid]        │  B = bulk modulus (Pa); ρ = density (kg/m³)
  v = √(Y/ρ)   [solid bar]    │  Y = Young's modulus (Pa)
  v = √(γP/ρ)  [gas, correct] │  γ = Cp/Cv; P = pressure; ρ = density
────────────────────────────────────────────────────────────────────────────

  Speed of Sound in Selected Media (from NCERT Table 14.1):
  Air (0°C):      331 m/s        Water (20°C):   1482 m/s
  Air (20°C):     343 m/s        Steel:          5941 m/s
  Helium:         965 m/s        Aluminium:      6420 m/s
  Hydrogen:      1284 m/s        Vulcanised rubber: 54 m/s
────────────────────────────────────────────────────────────────────────────

  Normal Mode Frequencies:
  String (L, both fixed):     ν₁=v/2L,  ν₂=2v/2L,  ν₃=3v/2L, ...
  Open pipe (L):              ν₁=v/2L,  ν₂=v/L,    ν₃=3v/2L, ...
  Closed pipe (L):            ν₁=v/4L,  ν₃=3v/4L,  ν₅=5v/4L, ...
────────────────────────────────────────────────────────────────────────────

  Phase Difference vs. Distance:
  Distance d = nλ:    Δφ = 2nπ    (in phase)
  Distance d = λ/2:   Δφ = π      (out of phase)
  Distance d = λ/4:   Δφ = π/2    (90° out of phase)
  General:            Δφ = 2πd/λ = kd
────────────────────────────────────────────────────────────────────────────
```

---

## 📏 Effect of Physical Conditions on Wave Speed

```
────────────────────────────────────────────────────────────────────────────
  Condition Changed             │ Effect on Speed of Sound in Gas
────────────────────────────────────────────────────────────────────────────
  Pressure doubled (const T)    │ No change  (P/ρ = const)
  Temperature increased         │ Increases  (v ∝ √T_abs)
  Humidity increased            │ Increases  (lower effective density)
  Heavy gas (higher M)          │ Decreases  (v ∝ 1/√M)
  Higher γ (monatomic vs diatomic)│ Increases (v ∝ √γ)
────────────────────────────────────────────────────────────────────────────
  Condition Changed             │ Effect on Transverse Wave Speed on String
────────────────────────────────────────────────────────────────────────────
  Tension T doubled             │ Speed increases: new v = √2 × old v
  Linear density µ doubled      │ Speed decreases: new v = old v / √2
  Both T and µ doubled          │ No change (T/µ unchanged)
────────────────────────────────────────────────────────────────────────────
```

---

*End of Revision Notes + Mind Maps — Physics Ch. 14*