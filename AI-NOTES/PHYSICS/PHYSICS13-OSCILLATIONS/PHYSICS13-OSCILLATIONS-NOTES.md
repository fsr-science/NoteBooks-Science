# CHAPTER 13: OSCILLATIONS

### Complete Study Notes | Board · NEET · JEE Layered

---

## 🗺️ CONCEPT ROADMAP

```
[OSCILLATIONS — periodic to-and-fro motion about a mean position]
    → Periodic motion: repeats at regular time intervals
    → Oscillatory motion: body moves to and fro about equilibrium
        ↓
[PERIODIC AND OSCILLATORY MOTIONS]
    Period T | Frequency ν = 1/T | Angular Frequency ω = 2π/T
    Displacement as a periodic function of time: f(t) = A cos ωt
        ↓
[SIMPLE HARMONIC MOTION (SHM)]
    x(t) = A cos(ωt + φ)
    Three key parameters: Amplitude A | Angular frequency ω | Phase constant φ
        ↓
[SHM AND UNIFORM CIRCULAR MOTION]
    SHM = Projection of uniform circular motion on a diameter
        ↓
[VELOCITY AND ACCELERATION IN SHM]
    v(t) = −ωA sin(ωt + φ)  |  a(t) = −ω²A cos(ωt + φ) = −ω²x(t)
        ↓
[FORCE LAW FOR SHM]
    F = −kx  (Restoring force, proportional to displacement)
    ω = √(k/m)  |  T = 2π√(m/k)
        ↓
[ENERGY IN SHM]
    KE = ½kA² sin²(ωt + φ)  |  PE = ½kA² cos²(ωt + φ)
    Total E = ½kA²  (constant — independent of time)
        ↓
[THE SIMPLE PENDULUM]
    T = 2π√(L/g)  — valid for small oscillations (θ ≪ 1 rad)
```

---

## SECTION 1 — INTRODUCTION ⭐⭐

### 1.1 What is Oscillatory Motion?

**Oscillatory motion** (also called vibratory motion) is a type of periodic motion in which a body moves **to and fro** (back and forth) about a **mean (equilibrium) position**.

Key examples:
- Pendulum of a wall clock swinging
- A boat tossing up and down in a river
- Piston in a steam engine going back and forth
- Vibrating strings in musical instruments (sitar, guitar, violin)
- Atoms vibrating about equilibrium positions in a solid

> 🔑 **Distinction:** Every oscillatory motion is periodic, but **not every periodic motion is oscillatory**. Uniform circular motion is periodic but not oscillatory. A motion is oscillatory only if the body moves about a mean position.

### 1.2 Importance of Oscillatory Motion

The study of oscillatory motion is foundational to physics:

1. **Sound propagation** — vibrations of air molecules
2. **Musical instruments** — vibrating membranes and strings
3. **Atomic physics** — average energy of atomic vibrations ∝ temperature
4. **Electrical engineering** — AC voltage oscillates sinusoidally
5. **Wave motion** — any medium is a collection of coupled oscillators; collective oscillations manifest as waves

---

## SECTION 2 — PERIODIC AND OSCILLATORY MOTIONS ⭐⭐⭐

### 2.1 Period and Frequency

| Quantity | Definition | Formula | SI Unit |
|---|---|---|---|
| **Period (T)** | Smallest time interval after which motion repeats | — | second (s) |
| **Frequency (ν)** | Number of oscillations per unit time | ν = 1/T | Hz (hertz) |

**1 hertz = 1 Hz = 1 oscillation per second = 1 s⁻¹**

Named after **Heinrich Rudolph Hertz** (1857–1894), discoverer of radio waves.

> 🔑 Frequency ν is not necessarily an integer. Period T is the **least** time after which motion repeats (not just any repetition interval).

**Example 13.1 (NCERT):** A human heart beats 75 times per minute.
- Beat frequency = 75/60 s = **1.25 Hz**
- Time period T = 1/1.25 = **0.8 s**

### 2.2 Displacement in Oscillatory Motion

In this chapter, **displacement** is used in a broader sense — it refers to the **change in any physical property** from its equilibrium value over time.

Types of displacement variables:
- **Linear displacement** (x): for a block on a spring
- **Angular displacement** (θ): for a simple pendulum
- **Voltage**: across a capacitor in an AC circuit
- **Pressure variation**: in a sound wave

The displacement can take positive and negative values.

### 2.3 Mathematical Representation of Periodic Motion

The simplest periodic function:
$$f(t) = A \cos \omega t \quad \text{...(13.3a)}$$

Period is given by:
$$\boxed{T = \frac{2\pi}{\omega}} \quad \text{...(13.3b)}$$

**Fourier's Theorem:** Any periodic function can be expressed as a superposition of sine and cosine functions of different time periods with suitable coefficients.

$$f(t) = A \sin\omega t + B \cos\omega t = D\sin(\omega t + \phi)$$
where $D = \sqrt{A^2 + B^2}$ and $\tan\phi = B/A$

**Non-periodic functions (exam relevance):**
- $e^{-\omega t}$: Decreases monotonically → **not periodic** (represents damped behaviour)
- $\log(\omega t)$: Increases monotonically → **not periodic**

---

## SECTION 3 — SIMPLE HARMONIC MOTION ⭐⭐⭐⭐

### 3.1 Definition of SHM

A particle executing **Simple Harmonic Motion** (SHM) has its displacement from the equilibrium position given by:

$$\boxed{x(t) = A \cos(\omega t + \phi)} \quad \text{...(13.4)}$$

where:
- **A** = amplitude (maximum displacement, always positive)
- **ω** = angular frequency (rad s⁻¹)
- **(ωt + φ)** = phase (time-dependent)
- **φ** = phase constant (initial phase, in radians)

> 🔑 **SHM is a special case of periodic motion** — not all periodic motions are SHM. SHM is specifically the one where displacement is a sinusoidal function of time.

### 3.2 Parameters of SHM

| Parameter | Symbol | Meaning | Determines |
|---|---|---|---|
| Amplitude | A | Maximum displacement from mean | Magnitude of oscillation |
| Angular frequency | ω | How fast the oscillation occurs | ω = 2π/T = 2πν |
| Phase | (ωt + φ) | State of motion at any time t | Position and velocity at time t |
| Phase constant | φ | Phase at t = 0 | Initial state of motion |

**Relationship between ω, T, and ν:**
$$\omega = \frac{2\pi}{T} = 2\pi\nu \quad \text{...(13.7)}$$

**Key notes:**
- The amplitude A is fixed for a given SHM; the **state** of motion is determined by the phase (ωt + φ)
- Two SHMs can have the same A and φ but different ω (different periods)
- Two SHMs can have the same A and ω but different φ (same amplitude, same period, different starting point)

### 3.3 Identifying SHM (Exam Shortcut)

**A motion is SHM if and only if:**
$$\text{Restoring force} \propto \text{displacement} \quad \text{AND directed towards mean position}$$

i.e., $F \propto -x$ (the minus sign shows it points towards mean position)

---

## SECTION 4 — SHM AND UNIFORM CIRCULAR MOTION ⭐⭐⭐

### 4.1 The Connection

**Key result:** The projection of uniform circular motion on any diameter of the circle executes SHM.

**Experimental observation:** A ball tied to a string, moving in a horizontal circle with constant angular speed ω, appears to execute SHM (back and forth) when viewed from the side (edge-on).

### 4.2 Mathematical Derivation

Consider a particle P moving uniformly on a circle of radius A with angular speed ω. At t = 0, the position vector OP makes angle φ with the x-axis.

At time t, the angle is (ωt + φ).

**Projection on x-axis** (P′):
$$x(t) = A \cos(\omega t + \phi) \quad \leftarrow \text{SHM!}$$

**Projection on y-axis:**
$$y(t) = A \sin(\omega t + \phi) \quad \leftarrow \text{also SHM, but with phase π/2 ahead}$$

The **reference circle** has:
- Radius = amplitude A
- Angular speed = angular frequency ω of SHM
- Initial angle = phase constant φ

> ⚠️ **Important distinction:** Although SHM and circular motion are related, the forces are fundamentally different. SHM involves a linear restoring force (F = −kx), while circular motion requires a centripetal force directed towards the centre.

---

## SECTION 5 — VELOCITY AND ACCELERATION IN SHM ⭐⭐⭐⭐

### 5.1 Velocity in SHM

By differentiating x(t) with respect to time:

$$\boxed{v(t) = -\omega A \sin(\omega t + \phi)} \quad \text{...(13.9)}$$

**Alternative form (in terms of displacement x):**
$$v = \pm \omega\sqrt{A^2 - x^2} \quad \text{...(derived from 13.9 using } \sin^2 + \cos^2 = 1\text{)}$$

| Position | x | v |
|---|---|---|
| Mean position | 0 | ±ωA (maximum) |
| Extreme positions | ±A | 0 (minimum) |

- **Maximum velocity = ωA** (at mean position, x = 0)
- **Minimum velocity = 0** (at extreme positions, x = ±A)

### 5.2 Acceleration in SHM

By differentiating v(t):

$$\boxed{a(t) = -\omega^2 A \cos(\omega t + \phi) = -\omega^2 x(t)} \quad \text{...(13.11)}$$

**The defining property of SHM:**
$$\boxed{a \propto -x} \quad \text{(acceleration is always directed towards the mean position)}$$

| Position | x | a |
|---|---|---|
| Mean position | 0 | 0 |
| Extreme positions | ±A | ∓ω²A (maximum magnitude) |

- **Maximum acceleration = ω²A** (at extreme positions)
- **Minimum acceleration = 0** (at mean position)

### 5.3 Phase Relationships

For x(t) = A cos ωt (taking φ = 0 for simplicity):

$$x(t) = A\cos\omega t$$
$$v(t) = -\omega A\sin\omega t$$
$$a(t) = -\omega^2 A\cos\omega t$$

- Velocity is **π/2 (90°) ahead** of displacement in phase
- Acceleration is **π (180°) ahead** of displacement in phase
- Acceleration is **π/2 (90°) ahead** of velocity in phase

### 5.4 Worked Example (NCERT 13.5)

x = 5 cos[2πt + π/4] (SI units)

At t = 1.5 s:
- ω = 2π rad s⁻¹; T = 1 s
- Displacement = 5 cos[3π + π/4] = −5 × cos(π/4) = −**3.535 m**
- Speed = |−ωA sin(ωt + φ)| = 5 × 2π × |sin(3π + π/4)| ≈ **22 m s⁻¹**
- Acceleration = −ω²x = −(2π)² × (−3.535) ≈ **140 m s⁻²**

---

## SECTION 6 — FORCE LAW FOR SHM ⭐⭐⭐⭐

### 6.1 Restoring Force

Using Newton's Second Law and a(t) = −ω²x(t):

$$F(t) = ma = -m\omega^2 x(t)$$
$$\boxed{F(t) = -kx(t)} \quad \text{...(13.13)}$$

where the **spring constant (force constant):**
$$k = m\omega^2 \quad \text{...(13.14a)}$$

Therefore:
$$\boxed{\omega = \sqrt{\frac{k}{m}}} \quad \text{...(13.14b)}$$

And the time period:
$$\boxed{T = 2\pi\sqrt{\frac{m}{k}}} \quad \text{...(from 13.14b)}$$

> 🔑 **F = −kx** is called the **restoring force** in SHM. It is always directed towards the mean position (opposite to displacement). SHM can be defined by either its displacement equation (Eq. 13.4) or this force law (Eq. 13.13) — they are equivalent.

> ⭐ A particle oscillating under F = −kx is called a **linear harmonic oscillator**. In real systems, the force may also have terms proportional to x², x³, etc — these are **non-linear oscillators**.

### 6.2 Spring-Mass System on a Frictionless Surface

For a mass m attached to a spring of spring constant k:
$$T = 2\pi\sqrt{\frac{m}{k}}$$

**NCERT Example 13.6 (Two springs):** Two identical springs (each spring constant k) attached on both sides of a mass m.

Net force when displaced by x: F = −kx − kx = **−2kx**

$$\boxed{T = 2\pi\sqrt{\frac{m}{2k}}}$$

---

## SECTION 7 — ENERGY IN SHM ⭐⭐⭐⭐

### 7.1 Kinetic Energy

$$\boxed{K = \frac{1}{2}mv^2 = \frac{1}{2}kA^2\sin^2(\omega t + \phi)} \quad \text{...(13.15)}$$

- K is **zero** at extreme positions (x = ±A, v = 0)
- K is **maximum = ½kA²** at mean position (x = 0, v = ωA)
- Period of K is **T/2** (K peaks twice per oscillation)

### 7.2 Potential Energy

The spring force F = −kx is a **conservative force**. The associated PE:

$$\boxed{U = \frac{1}{2}kx^2 = \frac{1}{2}kA^2\cos^2(\omega t + \phi)} \quad \text{...(13.17)}$$

- U is **zero** at mean position (x = 0)
- U is **maximum = ½kA²** at extreme positions (x = ±A)
- Period of U is also **T/2**

### 7.3 Total Mechanical Energy

$$E = K + U = \frac{1}{2}kA^2\sin^2(\omega t + \phi) + \frac{1}{2}kA^2\cos^2(\omega t + \phi)$$

$$\boxed{E = \frac{1}{2}kA^2} \quad \text{...(13.18)}$$

> 🔑 **Total energy is CONSTANT** — independent of time and position. This is consistent with conservation of energy under the conservative spring force. E depends only on the **amplitude** and the **spring constant**.

**Energy exchange in SHM:**
- At mean position (x = 0): E is entirely **kinetic**
- At extreme positions (x = ±A): E is entirely **potential**
- Between these: KE converts to PE and vice versa continuously

$$E \propto A^2 \quad \text{(total energy proportional to square of amplitude)}$$

### 7.4 Worked Example (NCERT 13.7)

Mass = 1 kg, k = 50 N m⁻¹, A = 10 cm = 0.1 m

At x = 5 cm = 0.05 m:
- ω = √(50/1) = 7.07 rad s⁻¹
- v = ω√(A² − x²) = 7.07 × √(0.01 − 0.0025) = 7.07 × 0.0866 = **0.61 m s⁻¹**
- KE = ½ × 1 × (0.61)² = **0.19 J**
- PE = ½ × 50 × (0.05)² = **0.0625 J**
- Total E = 0.25 J = ½ × 50 × (0.1)² = **0.25 J** ✓ (Conserved)

---

## SECTION 8 — THE SIMPLE PENDULUM ⭐⭐⭐⭐

### 8.1 System Description

A **simple pendulum** consists of:
- A small bob of mass m
- Attached to an inextensible, massless string of length L
- Other end fixed to a rigid support
- Bob oscillates in a vertical plane about the equilibrium (vertical) position

**Historical note:** Galileo observed a chandelier swinging in a church and, measuring its period against his pulse, discovered the isochronism of the pendulum.

### 8.2 Analysis of Forces

At angle θ from vertical, two forces act on the bob:
- Tension T (along the string, radially)
- Weight mg (vertically downward)

**Resolving weight:**
- Component along string: mg cos θ (provides no torque)
- Component perpendicular to string: mg sin θ (provides restoring torque)

**Restoring torque about the support:**
$$\tau = -L(mg\sin\theta) \quad \text{...(13.19)}$$

By Newton's law for rotation (τ = Iα):
$$I\alpha = -mgL\sin\theta$$

For a massless string: I = mL²

$$\alpha = -\frac{g}{L}\sin\theta \quad \text{...(13.22)}$$

### 8.3 Small Angle Approximation

For small θ (in radians): **sin θ ≈ θ**

From Table 13.1 (NCERT), sin θ ≈ θ is valid up to θ ≈ 20° (within ~2% error).

$$\alpha \approx -\frac{g}{L}\theta \quad \text{...(13.24)}$$

This is mathematically identical to a(t) = −ω²x(t), confirming SHM with:
$$\omega = \sqrt{\frac{g}{L}}$$

### 8.4 Time Period of Simple Pendulum

$$\boxed{T = 2\pi\sqrt{\frac{L}{g}}} \quad \text{...(13.26)}$$

> 🔑 **Key properties of the simple pendulum period:**
> 1. T ∝ √L (longer pendulum → longer period)
> 2. T ∝ 1/√g (stronger gravity → shorter period)
> 3. T is **independent of mass** of the bob
> 4. T is **independent of amplitude** (only for small oscillations)
> 5. Valid only for **small angular displacements** (θ ≪ 1 rad ≈ 20°)

**NCERT Example 13.8:** Length of a seconds pendulum (T = 2s):
$$L = \frac{gT^2}{4\pi^2} = \frac{9.8 \times 4}{4\pi^2} = \frac{9.8}{π^2} \approx \textbf{1 m}$$

### 8.5 Effect of Various Factors on Pendulum

| Factor | Effect on T | Reason |
|---|---|---|
| Increasing L | T increases (T ∝ √L) | Longer string → longer arc to traverse |
| Taking to moon (g smaller) | T increases (T ∝ 1/√g) | Weaker gravity → slower restoring force |
| Taking to higher altitude | T increases | g decreases with altitude |
| Pendulum in lift accelerating up | T decreases | Effective g increases: g_eff = g + a |
| Pendulum in lift accelerating down | T increases | Effective g decreases: g_eff = g − a |
| Pendulum in free fall | T → ∞ | g_eff = 0 (weightlessness) |
| Pendulum on a rotating platform (circular track) | T decreases | Effective g increases: $g_{eff} = \sqrt{g^2 + (v^2/R)^2}$ |

---

## SECTION 9 — CONNECTING CONCEPTS: DAMPED AND FORCED OSCILLATIONS ⭐⭐ (JEE level awareness)

> *These topics are mentioned in the NCERT chapter introduction but not developed in the Class 11 chapter. Included here for completeness.*

### 9.1 Damped Oscillations

In practice, oscillating bodies **eventually come to rest** at the equilibrium position due to:
- Friction
- Air resistance
- Other dissipative forces

The amplitude gradually decreases with time. This is **damped oscillation**.

For damped SHM: $F = -kx - bv$ (b = damping coefficient)

The motion is approximately SHM only for time intervals much less than 2m/b.

### 9.2 Forced Oscillations and Resonance

A damped oscillator can be kept oscillating by an **external periodic force**.

- **Forced oscillations:** System oscillates at the frequency of external force
- **Resonance:** When driving frequency = natural frequency of system → amplitude becomes maximum

Resonance has important applications (musical instruments, MRI, radio tuning) and dangers (bridge resonance collapse).

---

## SECTION 10 — WAVES AND OSCILLATIONS ⭐⭐

Any material medium can be pictured as a collection of coupled oscillators. The **collective oscillations** of the constituents manifest as **waves**:

- Water waves
- Seismic waves
- Electromagnetic waves (light, radio waves)
- Sound waves (air molecule vibrations)

---

## 📋 QUICK REFERENCE — All Formulae for Chapter 13

```
BASIC DEFINITIONS:
┌───────────────────────────────────────────────────────────────────┐
│  Period T: smallest time after which motion repeats              │
│  Frequency ν = 1/T;   Angular frequency ω = 2π/T = 2πν         │
│  1 Hz = 1 oscillation per second = 1 s⁻¹                        │
└───────────────────────────────────────────────────────────────────┘

SHM DISPLACEMENT, VELOCITY, ACCELERATION:
┌───────────────────────────────────────────────────────────────────┐
│  x(t) = A cos(ωt + φ)                                           │
│  v(t) = −ωA sin(ωt + φ) = ±ω√(A² − x²)                        │
│  a(t) = −ω²A cos(ωt + φ) = −ω²x(t)                             │
│                                                                   │
│  Maximum displacement: A (at extremes)                           │
│  Maximum velocity: ωA (at mean position)                         │
│  Maximum acceleration: ω²A (at extremes)                        │
└───────────────────────────────────────────────────────────────────┘

FORCE LAW AND SPRING-MASS SYSTEM:
┌───────────────────────────────────────────────────────────────────┐
│  F = −kx    (restoring force, Hooke's law)                       │
│  k = mω²   (spring constant)                                     │
│  ω = √(k/m)    T = 2π√(m/k)                                     │
└───────────────────────────────────────────────────────────────────┘

ENERGY IN SHM:
┌───────────────────────────────────────────────────────────────────┐
│  KE = ½kA² sin²(ωt+φ) = ½m ω²A² sin²(ωt+φ)                    │
│  PE = ½kx² = ½kA² cos²(ωt+φ)                                    │
│  Total E = ½kA² = constant                                       │
│  At x = 0: E = KE (max);  At x = ±A: E = PE (max)              │
│  E ∝ A² (energy proportional to square of amplitude)            │
└───────────────────────────────────────────────────────────────────┘

SIMPLE PENDULUM:
┌───────────────────────────────────────────────────────────────────┐
│  T = 2π√(L/g)                                                    │
│  Valid for small oscillations (θ ≪ 1 rad)                        │
│  T independent of mass m and amplitude θ (small)                 │
│  Seconds pendulum (T = 2 s): L ≈ 1 m on earth                  │
└───────────────────────────────────────────────────────────────────┘
```

---

## ⚡ POINTS TO PONDER (High-Yield for Exams)

1. **Every oscillatory motion is periodic, but not every periodic motion is oscillatory.** Circular motion is periodic but not oscillatory.

2. **SHM is defined by two equivalent conditions:** (i) x = A cos(ωt + φ) [displacement condition], or (ii) F = −kx [force condition]. They are mathematically equivalent.

3. **The period of SHM is independent of amplitude and phase.** This is called **isochronism**. The pendulum's period is the same whether it swings 5° or 20° (for small angles).

4. **At the mean position**, velocity is maximum (= ωA) and acceleration is zero. **At extreme positions**, velocity is zero and acceleration is maximum (= ω²A). These are exact opposites.

5. **Total energy in SHM = ½kA²** — depends only on amplitude. It does NOT depend on time, phase, or current position. Energy is proportional to A².

6. **KE and PE both oscillate with period T/2** (twice the frequency of displacement), never becoming negative (PE = ½kx² ≥ 0 always; KE = ½mv² ≥ 0 always).

7. **The simple pendulum obeys SHM only for small angles.** For large amplitudes, the restoring force is −mg sin θ, not −mgθ, so it's not simple harmonic. The period increases slightly for larger amplitudes.

8. **Two initial conditions are needed and sufficient** to fully specify SHM: e.g., (i) initial position x₀ and initial velocity v₀, or (ii) amplitude A and phase φ, or (iii) energy E and phase φ.

9. **Combination of two SHMs:** Not necessarily periodic unless the ratio of their frequencies is a rational number (fraction of integers).

10. **Acceleration a = −ω²x** is the defining signature of SHM. If a graph of a vs. x gives a straight line through the origin with negative slope, the motion is SHM.

11. **The force constant k** (spring constant) has dimensions [MT⁻²] and SI unit N m⁻¹. It is NOT the same as the spring constant in Hooke's law; they happen to be the same formula because SHM arises from Hooke's law forces.

12. **Velocity formula v = ω√(A² − x²):** When x = A/2, v = ω√(3/4)A = (√3/2)ωA ≈ 0.866 × v_max.

---

## 📊 Dimensional Formulae Summary

| Quantity | Symbol | Dimensional Formula | SI Unit |
|---|---|---|---|
| Period | T | [T] | s |
| Frequency | ν | [T⁻¹] | Hz (s⁻¹) |
| Angular frequency | ω | [T⁻¹] | rad s⁻¹ |
| Amplitude | A | [L] | m |
| Phase constant | φ | Dimensionless | rad |
| Spring constant | k | [MT⁻²] | N m⁻¹ |
| Velocity in SHM | v | [LT⁻¹] | m s⁻¹ |
| Acceleration in SHM | a | [LT⁻²] | m s⁻² |
| Energy in SHM | E | [ML²T⁻²] | J |

---

## 🔢 Key Values and Constants

| Quantity | Value / Formula |
|---|---|
| Universal relationship | ω = 2πν = 2π/T |
| 1 Hz | 1 oscillation per second = 1 s⁻¹ |
| v_max in SHM | ωA (at mean position) |
| a_max in SHM | ω²A (at extreme positions) |
| Total energy | E = ½kA² = ½mω²A² |
| Period of spring-mass | T = 2π√(m/k) |
| Period of pendulum | T = 2π√(L/g) |
| Seconds pendulum length (earth) | L ≈ 1 m (T = 2 s, g = 9.8 m s⁻²) |
| g on earth | 9.8 m s⁻² |
| g on moon | 1.7 m s⁻² |

---

*End of Notes — Physics Chapter 13 | Total Sections: 10*