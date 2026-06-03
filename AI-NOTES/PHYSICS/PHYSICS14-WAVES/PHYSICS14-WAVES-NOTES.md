# CHAPTER 14: WAVES

### Complete Study Notes | Board · NEET · JEE Layered

---

## 🗺️ CONCEPT ROADMAP

```
[WAVES — propagation of disturbance through a medium without net transfer of matter]
    → Mechanical waves require a medium; EM waves do not
    → Three types: Mechanical | Electromagnetic | Matter waves
        ↓
[TRANSVERSE AND LONGITUDINAL WAVES]
    Transverse: particle motion ⊥ wave propagation (string waves)
    Longitudinal: particle motion ∥ wave propagation (sound waves)
        ↓
[DISPLACEMENT RELATION IN A PROGRESSIVE WAVE]
    y(x, t) = a sin(kx − ωt + φ)
    Parameters: Amplitude a | Angular wave number k | Angular frequency ω | Phase φ
        ↓
[SPEED OF A TRAVELLING WAVE]
    v = ω/k = λν = λ/T
    On string: v = √(T/µ)   |   In fluid: v = √(B/ρ)   |   In gas: v = √(γP/ρ)
        ↓
[SUPERPOSITION OF WAVES]
    y = y₁ + y₂    Constructive (φ = 0): amplitude = 2a
    Destructive (φ = π): amplitude = 0
        ↓
[REFLECTION OF WAVES]
    Rigid boundary: phase reversal (π shift)
    Open boundary: no phase change
        ↓
[STANDING WAVES AND NORMAL MODES]
    y(x, t) = 2a sin kx cos ωt
    Nodes (y = 0) and Antinodes (y = 2a) fixed in space
        ↓
[BEATS]
    ν_beat = ν₁ − ν₂   (two close frequencies → periodic intensity variation)
```

---

## SECTION 1 — INTRODUCTION ⭐⭐

### 1.1 What is a Wave?

A **wave** is a disturbance that propagates through a medium (or vacuum) **without the actual physical transfer or flow of matter** as a whole. It is energy (and information) that travels, not the medium itself.

**Classic demonstration:** Drop a pebble in a still pond. Ripples (circles) travel outward. Cork pieces placed on the surface move **up and down** but do NOT move outward — the water does not flow; only the disturbance travels.

Similarly, when you speak, sound moves outward from your mouth — no air flows from your mouth to the listener's ear. Only a pattern of compressions and rarefactions propagates.

> 🔑 **Key concept:** Waves transport **energy and information**, not matter. The medium oscillates about its mean position — it does not travel with the wave.

### 1.2 Types of Waves

| Type | Medium required? | Examples |
|---|---|---|
| **Mechanical waves** | Yes — elastic medium | Water waves, sound, seismic, string waves |
| **Electromagnetic waves** | No — travel in vacuum | Light, X-rays, radio waves, UV, microwaves |
| **Matter waves** | — (quantum phenomenon) | Electron waves (used in electron microscopes) |

**In this chapter, we study mechanical waves only.**

**Speed of light (all EM waves in vacuum):**
$$c = 299,792,458 \text{ m s}^{-1} \approx 3 \times 10^8 \text{ m s}^{-1} \quad \text{...(14.1)}$$

### 1.3 How Mechanical Waves Travel — The Spring Analogy

Consider a series of springs connected end-to-end. Pull the first spring sideways and release it:
- Spring 1 is disturbed from equilibrium → it pulls Spring 2
- Spring 2 disturbs Spring 3 → and so on
- Each spring only **oscillates locally** about its equilibrium
- The **disturbance** (not the spring) travels down the chain

**In solids:** atoms in a crystal lattice act as oscillators connected by interatomic forces (analogous to springs). Displacing one atom disturbs its neighbours → wave propagates.

**In air (sound):** A compressed region pushes molecules into the adjacent region. That region gets compressed and the original region expands (rarefaction). The pattern of compression–rarefaction travels as a sound wave.

---

## SECTION 2 — TRANSVERSE AND LONGITUDINAL WAVES ⭐⭐⭐

### 2.1 Transverse Waves

In a **transverse wave**, the particles of the medium oscillate **perpendicular (normal) to the direction of wave propagation**.

**Example:** A wave on a stretched string.
- Wave travels along the x-direction
- String elements oscillate in the y-direction (up and down)
- The displacement is perpendicular to propagation

**Key property:** Transverse waves involve **shearing strain** — the medium is being sheared sideways.

> ⚠️ **Therefore:** Transverse waves can propagate **only in solids** (and at surfaces), because only solids can sustain shear stress. Fluids (liquids and gases) cannot sustain shear stress → **transverse waves cannot propagate in fluids**.

### 2.2 Longitudinal Waves

In a **longitudinal wave**, the particles of the medium oscillate **parallel to (along) the direction of wave propagation**.

**Example:** Sound waves in air.
- Wave travels along x-direction
- Air molecules also oscillate back and forth in x-direction
- Creates alternating regions of **compression** (high density/pressure) and **rarefaction** (low density/pressure)

**Key property:** Longitudinal waves involve **compressive/tensile (bulk) strain**.

> ⚠️ **Therefore:** Longitudinal waves can propagate in **all elastic media** — solids, liquids, and gases — because all of them can be compressed.

### 2.3 Summary Table

| Feature | Transverse | Longitudinal |
|---|---|---|
| Particle displacement | ⊥ to wave direction | ∥ to wave direction |
| Type of strain | Shear strain | Compressive strain |
| Medium required | Solids (and fluid surfaces) | All elastic media |
| Examples | String waves, seismic S-waves, EM waves | Sound, seismic P-waves |
| Propagates in fluids? | ❌ No | ✅ Yes |

### 2.4 Water Waves — A Special Case

Surface water waves are a **combination of both transverse and longitudinal** components. Particles in water waves undergo both up-down and back-and-forth motion (approximately circular or elliptical paths).

Two types of surface water waves:
- **Capillary waves:** Short wavelength (few cm); restoring force = surface tension
- **Gravity waves:** Long wavelength (several metres to hundreds of metres); restoring force = gravity

### 2.5 Example 14.1 (NCERT)

| Wave motion | Type |
|---|---|
| Kink in a longitudinal spring (sideways push) | Transverse **and** Longitudinal |
| Waves in a cylinder (piston back-and-forth) | Longitudinal |
| Waves from a motorboat | Transverse **and** Longitudinal |
| Ultrasonic waves from a quartz crystal in air | Longitudinal |

---

## SECTION 3 — DISPLACEMENT RELATION IN A PROGRESSIVE WAVE ⭐⭐⭐⭐

### 3.1 The General Equation

A **sinusoidal progressive (travelling) wave** moving in the **positive x-direction** is described by:

$$\boxed{y(x,t) = a \sin(kx - \omega t + \phi)} \quad \text{...(14.2)}$$

An equivalent form using both sine and cosine:
$$y(x,t) = A\sin(kx - \omega t) + B\cos(kx - \omega t) \quad \text{...(14.3)}$$
where $a = \sqrt{A^2 + B^2}$ and $\phi = \tan^{-1}(B/A)$

For a wave moving in the **negative x-direction**:
$$y(x,t) = a\sin(kx + \omega t + \phi) \quad \text{...(14.4)}$$

> 🔑 **Memory trick:** Negative direction of propagation → **negative** sign between kx and ωt (i.e., kx − ωt → positive x-direction; kx + ωt → negative x-direction).

### 3.2 Amplitude and Phase

**Amplitude (a):**
- The **maximum displacement** of a particle from its equilibrium position
- Sine function varies between −1 and +1, so y varies between −a and +a
- Always positive; SI unit: metre (m)

**Phase:**
- The quantity $(kx - \omega t + \phi)$ is the **phase** of the wave
- For a given amplitude, the phase determines the displacement at any position and time
- **Initial phase angle φ:** The value of the phase at x = 0, t = 0
- By choosing the origin of space and time appropriately, we can set φ = 0 (no loss of generality)

### 3.3 Wavelength and Angular Wave Number

**Wavelength (λ):**
The **minimum distance between two points having the same phase** at a given instant of time.
- Equivalently: the distance between two consecutive crests (or troughs)
- SI unit: metre (m)
- Dimensional formula: [L]

The sine function in Eq. (14.2) repeats after every 2π change in its argument:
$$\sin kx = \sin k\left(x + \frac{2\pi}{k}\right)$$

Therefore:
$$\boxed{\lambda = \frac{2\pi}{k} \quad \Leftrightarrow \quad k = \frac{2\pi}{\lambda}} \quad \text{...(14.6)}$$

**Angular wave number (k)** (also called propagation constant):
- SI unit: radian per metre (rad m⁻¹), or simply m⁻¹
- Represents 2π times the number of waves per unit length
- Dimensional formula: [L⁻¹]

### 3.4 Period, Angular Frequency, and Frequency

**Period (T):** The time for any one particle of the medium to complete one full oscillation.

From Eq. (14.2), fixing position x = 0:
$$y(0, t) = -a\sin(\omega t)$$

Period condition: $-a\sin\omega t = -a\sin\omega(t + T)$, which gives $\omega T = 2\pi$:

$$\boxed{T = \frac{2\pi}{\omega} \quad \Leftrightarrow \quad \omega = \frac{2\pi}{T}} \quad \text{...(14.7)}$$

**Frequency (ν):**
$$\boxed{\nu = \frac{1}{T} = \frac{\omega}{2\pi}} \quad \text{...(14.8)}$$

Unit: hertz (Hz = s⁻¹); ω has unit rad s⁻¹

### 3.5 All Parameters at a Glance

| Symbol | Name | Formula | SI Unit |
|---|---|---|---|
| a | Amplitude | max displacement | m |
| k | Angular wave number | k = 2π/λ | rad m⁻¹ |
| ω | Angular frequency | ω = 2π/T = 2πν | rad s⁻¹ |
| φ | Initial phase angle | phase at x=0, t=0 | rad |
| λ | Wavelength | λ = 2π/k | m |
| T | Period | T = 2π/ω | s |
| ν | Frequency | ν = 1/T | Hz |

### 3.6 Example 14.2 (NCERT)

Wave: $y(x,t) = 0.005\sin(80.0x - 3.0t)$ (SI units)

Comparing with $y = a\sin(kx - \omega t)$:
- **Amplitude:** a = 0.005 m = **5 mm**
- **k** = 80.0 m⁻¹; **ω** = 3.0 rad s⁻¹
- **Wavelength:** λ = 2π/k = 2π/80.0 = **7.85 cm**
- **Period:** T = 2π/ω = 2π/3.0 = **2.09 s**
- **Frequency:** ν = 1/T = **0.48 Hz**
- **Displacement at x = 30.0 cm, t = 20 s:**
  y = 0.005 sin(80 × 0.3 − 3 × 20) = 0.005 sin(24 − 60) = 0.005 sin(−36 + 12π)
  = 0.005 sin(1.699) ≈ **5 mm**

---

## SECTION 4 — THE SPEED OF A TRAVELLING WAVE ⭐⭐⭐⭐

### 4.1 Wave Speed Formula

To find wave speed, fix attention on a **point of constant phase** (e.g., a crest). As time advances, this point moves. The condition for constant phase:

$$kx - \omega t = \text{constant}$$

Differentiating: $k\,dx - \omega\,dt = 0$

$$\boxed{v = \frac{dx}{dt} = \frac{\omega}{k}} \quad \text{...(14.11)}$$

Using $\omega = 2\pi\nu$ and $k = 2\pi/\lambda$:

$$\boxed{v = \frac{\omega}{k} = \frac{\lambda}{T} = \lambda\nu} \quad \text{...(14.12)}$$

> 🔑 **Physical meaning:** In one full oscillation period T, the wave pattern advances exactly one wavelength λ. So v = λ/T = λν. This is a **universal relation** for all progressive waves.

> ⚠️ **Important:** The speed of a mechanical wave is determined **entirely by the properties of the medium** (elastic properties and density). It does NOT depend on the frequency or wavelength of the wave — those are determined by the source.

### 4.2 Speed of Transverse Waves on a Stretched String

For a string with:
- **T** = tension (in Newtons)
- **µ** = linear mass density = mass per unit length = m/L (kg m⁻¹)

Dimensional analysis gives:

$$\boxed{v = \sqrt{\frac{T}{\mu}}} \quad \text{...(14.14)}$$

**Key point:** v depends only on T and µ, not on frequency. Stiffer string (higher T) → faster wave. Denser string (higher µ) → slower wave.

> ⚠️ Note: T here denotes **Tension**, not period. Be careful with symbols.

**Example 14.3 (NCERT):** Steel wire, length = 0.72 m, mass = 5.0 × 10⁻³ kg, tension = 60 N.
$$\mu = \frac{5.0 \times 10^{-3}}{0.72} = 6.9 \times 10^{-3} \text{ kg m}^{-1}$$
$$v = \sqrt{\frac{60}{6.9 \times 10^{-3}}} = \sqrt{8696} \approx \textbf{93 m s}^{-1}$$

### 4.3 Speed of Longitudinal Waves (Speed of Sound)

For a fluid (liquid or gas) with:
- **B** = bulk modulus of elasticity (Pa)
- **ρ** = mass density (kg m⁻³)

$$\boxed{v = \sqrt{\frac{B}{\rho}}} \quad \text{...(14.19)}$$

For a solid bar (lateral expansion negligible), Young's modulus Y replaces B:
$$v = \sqrt{\frac{Y}{\rho}} \quad \text{...(14.20)}$$

### 4.4 Speed of Sound in a Gas — Newton's Formula and Laplace Correction

**Newton's assumption (isothermal process):**

Pressure variations are slow enough for heat to flow and maintain constant temperature. For an ideal gas under isothermal conditions: B = P.

$$v_{\text{Newton}} = \sqrt{\frac{P}{\rho}} \quad \text{...(14.22)}$$

**Result at STP:** v ≈ 280 m s⁻¹ — about **15% less** than the experimental value of 331 m s⁻¹.

**Laplace's correction (adiabatic process):**

Sound propagation is so rapid that there is **no time for heat exchange** — it is an adiabatic process. For adiabatic conditions: $B_{\text{ad}} = \gamma P$ (where γ = C_p/C_v = ratio of specific heats).

$$\boxed{v = \sqrt{\frac{\gamma P}{\rho}}} \quad \text{...(14.24)}$$

For air: **γ = 7/5 = 1.4** → v = √(1.4) × 280 ≈ **331.3 m s⁻¹** ✓ (matches experiment!)

**Example 14.4 (NCERT):** Density of air at STP = 1.29 kg m⁻³; P = 1.01 × 10⁵ Pa.
Using Newton's formula: v = √(P/ρ) = √(1.01×10⁵/1.29) ≈ 280 m s⁻¹
Using Laplace: v = √(γP/ρ) = √(1.4 × 1.01×10⁵/1.29) ≈ **331 m s⁻¹** ✓

### 4.5 Why Sound is Faster in Solids and Liquids than in Gases

From Table 14.1 (NCERT):

| Medium | Speed of sound |
|---|---|
| Air (0°C) | 331 m s⁻¹ |
| Air (20°C) | 343 m s⁻¹ |
| Helium | 965 m s⁻¹ |
| Water (20°C) | 1482 m s⁻¹ |
| Steel | 5941 m s⁻¹ |
| Aluminium | 6420 m s⁻¹ |

Using $v = \sqrt{B/\rho}$: Solids and liquids have **much higher bulk modulus B** compared to gases (much harder to compress). Although they also have higher density ρ, the increase in B outweighs the increase in ρ → higher speed.

### 4.6 Effect of Temperature on Speed of Sound in Air

From ideal gas law: $P = \frac{\rho RT}{M}$ (R = gas constant, M = molar mass)

Substituting in Laplace formula:
$$v = \sqrt{\frac{\gamma RT}{M}} \quad \propto \sqrt{T}$$

where T is the absolute temperature (Kelvin). Speed of sound **increases with temperature** as √T. At higher temperatures, molecules move faster → disturbance propagates faster.

### 4.7 Effect of Humidity

Water vapour (H₂O) has molecular mass 18 g/mol, while air (mix of N₂ and O₂) has average molecular mass ~29 g/mol. Humid air has lower effective molecular mass → lower density ρ → **higher speed of sound**. Speed of sound **increases with humidity**.

---

## SECTION 5 — THE PRINCIPLE OF SUPERPOSITION OF WAVES ⭐⭐⭐⭐

### 5.1 The Principle

When two or more waves travel simultaneously through the same medium, the net displacement of any element of the medium is the **algebraic sum** of the individual displacements:

$$\boxed{y(x,t) = y_1(x,t) + y_2(x,t)} \quad \text{...(14.25)}$$

More generally, for n waves:
$$y = \sum_{i=1}^{n} f_i(x - vt) \quad \text{...(14.26)}$$

**Key insight:** Each wave pulse **retains its identity** after passing through another — waves pass through each other without permanent change. Only **during the overlap** does the combined pattern differ.

### 5.2 Interference of Two Harmonic Waves

Consider two waves of equal amplitude and frequency, travelling in the same direction, differing only in phase φ:
$$y_1(x,t) = a\sin(kx - \omega t)$$
$$y_2(x,t) = a\sin(kx - \omega t + \phi)$$

Applying superposition and trigonometric identity $\sin A + \sin B = 2\sin\frac{A+B}{2}\cos\frac{A-B}{2}$:

$$\boxed{y(x,t) = 2a\cos\frac{\phi}{2}\cdot\sin\left(kx - \omega t + \frac{\phi}{2}\right)} \quad \text{...(14.31)}$$

The resultant is still a harmonic wave with:
- Same frequency and wavelength
- Initial phase = φ/2
- **Amplitude = $2a\cos\frac{\phi}{2}$** ← depends on phase difference!

### 5.3 Constructive and Destructive Interference

| Phase difference φ | Amplitude of resultant | Type |
|---|---|---|
| φ = 0 (in phase) | **2a** (maximum) | **Constructive interference** |
| φ = π (out of phase) | **0** (minimum) | **Destructive interference** |
| General φ | $2a\cos(\phi/2)$ | Partial interference |

**Constructive:** $y = 2a\sin(kx - \omega t)$ — amplitude doubles, waves reinforce.

**Destructive:** $y = 0$ — waves exactly cancel each other everywhere at all times.

---

## SECTION 6 — REFLECTION OF WAVES ⭐⭐⭐

### 6.1 Reflection at a Rigid Boundary

When a wave pulse (or wave) reaches a **rigid boundary** (like a wall, or the fixed end of a string):
- The boundary **cannot move** — displacement must be zero at the boundary at all times
- By Newton's Third Law: the wall exerts an equal and opposite force → generates a reflected pulse
- The reflected pulse has the **same shape** but undergoes a **phase change of π (180°)**

**Mathematically:**
- Incident wave: $y_i(x,t) = a\sin(kx - \omega t)$
- Reflected wave at rigid boundary: $y_r(x,t) = a\sin(kx + \omega t + \pi) = -a\sin(kx + \omega t)$ ...(14.35)

At the boundary: $y_i + y_r = 0$ at all times ✓

> 🔑 Rigid boundary: **phase reversal** (φ changes by π). The reflected wave is **inverted**.
> Example: Echo is reflection from a rigid surface.

### 6.2 Reflection at an Open Boundary

At a **free (open) boundary** (like the open end of a pipe, or a string tied to a freely sliding ring):
- The boundary is free to move
- Maximum displacement occurs at the boundary (antinode)
- Reflected wave has the **same phase** — **no phase change**

**Mathematically:**
- Reflected wave at open boundary: $y_r(x,t) = a\sin(kx + \omega t)$ ...(14.36)
- Maximum displacement at the boundary = 2a

> 🔑 Open boundary: **no phase change**. Reflected wave is in phase with incident wave.

### 6.3 Summary

| Boundary | Phase change | Boundary is | Displacement at boundary |
|---|---|---|---|
| **Rigid (closed)** | π (180°) | Fixed | Zero (Node) |
| **Open (free)** | 0 | Free to move | Maximum (Antinode) |

---

## SECTION 7 — STANDING WAVES AND NORMAL MODES ⭐⭐⭐⭐⭐

### 7.1 Formation of Standing Waves

When a wave travelling in one direction is reflected at a boundary, and the reflected wave travels back through the same medium, the two waves **superpose**. If the two waves have the same amplitude, frequency, and wavelength, the result is a **standing (stationary) wave** — a wave pattern that does NOT travel but oscillates in place.

**Derivation:**
$$y_1(x,t) = a\sin(kx - \omega t) \quad \text{(incident)}$$
$$y_2(x,t) = a\sin(kx + \omega t) \quad \text{(reflected)}$$

Using $\sin A + \sin B = 2\sin\frac{A+B}{2}\cos\frac{A-B}{2}$:

$$\boxed{y(x,t) = 2a\sin kx\cdot\cos\omega t} \quad \text{...(14.37)}$$

### 7.2 Key Features of Standing Waves

**Comparing with a progressive wave $y = a\sin(kx - \omega t)$:**

| Feature | Progressive wave | Standing wave |
|---|---|---|
| Amplitude | Constant = a everywhere | Varies: 2a sin kx (depends on position) |
| Phase | kx − ωt (travels) | kx and ωt appear separately (doesn't travel) |
| Energy transport | Yes — wave carries energy | No — energy stored in place |
| All particles | Different phases | Same phase (between two nodes), different amplitudes |

### 7.3 Nodes and Antinodes

**Nodes** — points of **zero displacement** (permanently at rest):
$$\sin kx = 0 \Rightarrow kx = n\pi \Rightarrow x = \frac{n\lambda}{2} \quad (n = 0, 1, 2, 3, \ldots)$$

**Antinodes** — points of **maximum displacement** (amplitude = 2a):
$$|\sin kx| = 1 \Rightarrow kx = \left(n + \frac{1}{2}\right)\pi \Rightarrow x = \left(n + \frac{1}{2}\right)\frac{\lambda}{2} \quad (n = 0, 1, 2, \ldots)$$

> 🔑 **Spacing:**
> - Distance between **two successive nodes** = λ/2
> - Distance between **two successive antinodes** = λ/2
> - Distance between a **node and adjacent antinode** = λ/4

### 7.4 Normal Modes of a Stretched String (Fixed at Both Ends)

Both ends are **fixed** → both ends are **nodes**. For a string of length L:

**Boundary condition:** $x = 0$ and $x = L$ must both be nodes.
$$L = n\frac{\lambda}{2} \quad (n = 1, 2, 3, \ldots) \quad \text{...(14.40)}$$

Possible wavelengths:
$$\boxed{\lambda_n = \frac{2L}{n}} \quad \text{...(14.41)}$$

Corresponding frequencies (using $\nu = v/\lambda$ and $v = \sqrt{T/\mu}$):
$$\boxed{\nu_n = \frac{nv}{2L} = \frac{n}{2L}\sqrt{\frac{T}{\mu}}} \quad (n = 1, 2, 3, \ldots) \quad \text{...(14.42)}$$

| Harmonic | n | Frequency | Number of loops | Nodes | Antinodes |
|---|---|---|---|---|---|
| 1st (fundamental) | 1 | ν₁ = v/2L | 1 | 2 | 1 |
| 2nd | 2 | ν₂ = 2ν₁ | 2 | 3 | 2 |
| 3rd | 3 | ν₃ = 3ν₁ | 3 | 4 | 3 |
| nth | n | νₙ = nν₁ | n | n+1 | n |

**All harmonics** (both odd and even) are present in a string fixed at both ends.

> 🔑 The **fundamental mode (first harmonic)** has the lowest frequency ν₁ = v/2L. All higher harmonics are integer multiples of ν₁.

> 🔑 **Musical instruments:** Sitar, violin, guitar — based on vibrating strings fixed at both ends. Where the string is plucked determines which harmonics are excited most prominently.

### 7.5 Normal Modes of an Air Column — Closed at One End, Open at the Other

**Closed end** (in contact with water or wall) → **Node** (displacement minimum, pressure maximum)
**Open end** → **Antinode** (displacement maximum, pressure minimum)

Boundary conditions: x = 0 is a node; x = L is an antinode.

$$L = \left(n + \frac{1}{2}\right)\frac{\lambda}{2} \quad (n = 0, 1, 2, \ldots) \quad \text{...(14.43)}$$

Frequencies:
$$\boxed{\nu_n = \left(n + \frac{1}{2}\right)\frac{v}{2L} = \frac{(2n+1)v}{4L}} \quad (n = 0, 1, 2, \ldots) \quad \text{...(14.44)}$$

| n | Mode | Frequency |
|---|---|---|
| 0 | Fundamental (1st harmonic) | ν₀ = v/4L |
| 1 | 3rd harmonic | 3v/4L |
| 2 | 5th harmonic | 5v/4L |

**Only odd harmonics** are present in a pipe closed at one end.
Fundamental = v/4L; harmonics are: v/4L, 3v/4L, 5v/4L, 7v/4L, ...

### 7.6 Normal Modes of an Air Column — Open at Both Ends

Both ends are **antinodes**. This is analogous to the string fixed at both ends (but with antinodes at boundaries instead of nodes):

$$\nu_n = \frac{nv}{2L} \quad (n = 1, 2, 3, \ldots)$$

**All harmonics** are present (same formula as string fixed at both ends).
Fundamental = v/2L; harmonics: v/2L, 2v/2L, 3v/2L, ...

### 7.7 Comparison Summary

| System | Boundary conditions | Fundamental freq. | Harmonics present |
|---|---|---|---|
| String, both ends fixed | Node–Node | v/2L | All (1st, 2nd, 3rd, ...) |
| Pipe, both ends open | Antinode–Antinode | v/2L | All |
| Pipe, one end closed | Node–Antinode | v/4L | Odd only (1st, 3rd, 5th, ...) |

> 🔑 Fundamental of pipe open at both ends = **twice** that of pipe closed at one end (of same length L).

### 7.8 Resonance

When an external frequency matches a natural frequency (normal mode) of the system, **resonance** occurs — the system vibrates with greatly increased amplitude.

Strings and air columns can undergo **forced oscillations**. When the external frequency is close to a natural frequency, the system shows resonance.

### 7.9 Example 14.5 (NCERT)

Pipe 30.0 cm long, **open at both ends**, v = 330 m s⁻¹. Source: 1.1 kHz.

$$\nu_n = \frac{nv}{2L} = \frac{n \times 330}{0.60} = 550n \text{ Hz}$$

For 1100 Hz: n = 1100/550 = **2** → **second harmonic** resonates.

**If one end is closed:**
$$\nu_n = \frac{(2n+1)v}{4L} = \frac{(2n+1) \times 330}{1.2} = 275(2n+1) \text{ Hz}$$

1100/275 = 4 → would need n = 1.5 (not integer) → **4th harmonic does not exist** in a closed pipe (only odd harmonics: 275, 825, 1375, ...) → **No resonance**.

---

## SECTION 8 — BEATS ⭐⭐⭐

### 8.1 What are Beats?

**Beats** are the periodic variation (waxing and waning) of sound **intensity** heard when two sound waves of **slightly different frequencies** (ν₁ and ν₂) are superposed. The intensity alternately increases (constructive interference) and decreases (destructive interference) at a rate equal to the **difference in frequencies**.

**Practical use:** Musicians tune their instruments by listening for beats — when beats disappear, the instruments are in tune.

### 8.2 Mathematical Derivation

Let x = 0 (fix location). Two waves:
$$s_1 = a\cos\omega_1 t; \quad s_2 = a\cos\omega_2 t$$

(Using cosine for convenience, with equal amplitudes)

Superposition: $s = s_1 + s_2 = a(\cos\omega_1 t + \cos\omega_2 t)$

Using $\cos A + \cos B = 2\cos\frac{A-B}{2}\cos\frac{A+B}{2}$:

$$\boxed{s = \left[2a\cos\omega_b t\right]\cos\omega_a t} \quad \text{...(14.47)}$$

where:
$$\omega_b = \frac{\omega_1 - \omega_2}{2} \quad \text{(slow modulation frequency)}$$
$$\omega_a = \frac{\omega_1 + \omega_2}{2} \quad \text{(average frequency — what we hear)}$$

### 8.3 Beat Frequency

The amplitude $[2a\cos\omega_b t]$ oscillates in time. The intensity (∝ amplitude²) goes through maxima and minima. The amplitude becomes maximum twice per period of the cosine factor — so the **beat frequency** is:

$$\boxed{\nu_{\text{beat}} = \nu_1 - \nu_2 \quad \text{(assume } \nu_1 > \nu_2\text{)}} \quad \text{...(14.48)}$$

> 🔑 **Beat frequency = |difference of the two frequencies|**. If the frequencies are very close (|ν₁ − ν₂| small), beats are slow and easily heard. If they differ too much (>15–20 Hz), the ear cannot distinguish individual beats.

### 8.4 Example 14.6 (NCERT)

Two sitar strings A and B play 'Dha'. They produce 5 Hz beats. Tension of B is increased → beats decrease to 3 Hz.
- Increasing tension of B → **frequency of B increases**
- If ν_B > ν_A: increasing ν_B further would **increase** beat frequency — but beats decreased ✗
- Therefore: **ν_B < ν_A**
- ν_A − ν_B = 5 Hz and ν_A = 427 Hz → **ν_B = 422 Hz**

---

## 📋 QUICK REFERENCE — All Formulae for Chapter 14

```
WAVE EQUATION:
┌─────────────────────────────────────────────────────────────────────┐
│  y(x,t) = a sin(kx − ωt + φ)    [+x direction]                    │
│  y(x,t) = a sin(kx + ωt + φ)    [−x direction]                    │
└─────────────────────────────────────────────────────────────────────┘

WAVE PARAMETERS:
┌─────────────────────────────────────────────────────────────────────┐
│  λ = 2π/k        k = 2π/λ                                          │
│  T = 2π/ω        ω = 2π/T = 2πν                                    │
│  ν = 1/T         v = ω/k = λν = λ/T                                │
└─────────────────────────────────────────────────────────────────────┘

WAVE SPEEDS:
┌─────────────────────────────────────────────────────────────────────┐
│  String (transverse):    v = √(T/µ)     [T = tension, µ = m/L]    │
│  Fluid (longitudinal):   v = √(B/ρ)     [B = bulk modulus]        │
│  Solid bar:              v = √(Y/ρ)     [Y = Young's modulus]     │
│  Gas (Newton):           v = √(P/ρ)                                │
│  Gas (Laplace):          v = √(γP/ρ)   [γ = Cp/Cv; correct!]     │
└─────────────────────────────────────────────────────────────────────┘

SUPERPOSITION AND INTERFERENCE:
┌─────────────────────────────────────────────────────────────────────┐
│  Resultant amplitude: A = 2a cos(φ/2)                              │
│  Constructive (φ = 0): A = 2a    Destructive (φ = π): A = 0       │
└─────────────────────────────────────────────────────────────────────┘

STANDING WAVES:
┌─────────────────────────────────────────────────────────────────────┐
│  y(x,t) = 2a sin kx cos ωt                                         │
│  Node: x = nλ/2         Antinode: x = (2n+1)λ/4                   │
│  Node–node spacing = λ/2 = Antinode–antinode spacing               │
└─────────────────────────────────────────────────────────────────────┘

NORMAL MODES:
┌─────────────────────────────────────────────────────────────────────┐
│  String / open pipe:    νₙ = nv/2L   (all harmonics: n=1,2,3,...)  │
│  Closed pipe:           νₙ = (2n+1)v/4L  (odd only: n=0,1,2,...) │
│  Fundamental of closed pipe = v/4L (half of open pipe!)            │
└─────────────────────────────────────────────────────────────────────┘

BEATS:
┌─────────────────────────────────────────────────────────────────────┐
│  ν_beat = ν₁ − ν₂   (|difference of two close frequencies|)        │
└─────────────────────────────────────────────────────────────────────┘
```

---

## ⚡ POINTS TO PONDER (High-Yield for Exams)

1. **Waves transport energy, not matter.** A wave on a string carries energy from one end to the other; the string elements just oscillate up and down.

2. **Mechanical wave speed depends only on medium properties.** The source determines frequency; the medium then fixes wavelength (λ = v/ν). You cannot change wave speed by changing the source frequency.

3. **Newton's formula is wrong; Laplace's correction makes it right.** Sound propagation is adiabatic, not isothermal. Using B = γP (not B = P) gives the correct speed.

4. **In a harmonic progressive wave:** All particles have the same amplitude but different phases at any given instant.

5. **In a stationary wave:** All particles between two nodes have the same phase at any instant but have different amplitudes.

6. **The wave equation y = a sin(kx − ωt) vs y = a sin(kx + ωt):** The sign between kx and ωt tells direction. Negative sign → positive x; positive sign → negative x.

7. **Transverse waves require shear modulus; longitudinal waves require bulk modulus.** Fluids lack shear modulus → no transverse waves in fluids.

8. **Node is a point of zero displacement but maximum pressure variation.** Antinode is a point of maximum displacement but minimum (zero) pressure variation. Displacement node = pressure antinode.

9. **Beats require close (but not equal) frequencies AND comparable amplitudes.** If the amplitudes are very different, the quieter wave may not cause audible beats.

10. **A closed pipe supports only odd harmonics; an open pipe (or string fixed at both ends) supports all harmonics.** This is why a clarinet (closed pipe) sounds different from a flute (open pipe).

11. **The speed of sound in air increases with temperature** (∝ √T) and with humidity (lighter humid air).

12. **Speed of sound is independent of pressure at constant temperature.** At constant T, increasing P also increases ρ proportionally, so P/ρ = constant.

---

## 📊 Dimensional Formulae Summary

| Quantity | Symbol | Dimensional Formula | SI Unit |
|---|---|---|---|
| Wavelength | λ | [L] | m |
| Angular wave number | k | [L⁻¹] | rad m⁻¹ |
| Angular frequency | ω | [T⁻¹] | rad s⁻¹ |
| Frequency | ν | [T⁻¹] | Hz (s⁻¹) |
| Period | T | [T] | s |
| Amplitude | a | [L] | m |
| Wave speed | v | [LT⁻¹] | m s⁻¹ |
| Bulk modulus | B | [ML⁻¹T⁻²] | Pa (N m⁻²) |
| Young's modulus | Y | [ML⁻¹T⁻²] | Pa |
| Linear mass density | µ | [ML⁻¹] | kg m⁻¹ |
| Tension | T | [MLT⁻²] | N |
| Mass density | ρ | [ML⁻³] | kg m⁻³ |
| Beat frequency | ν_beat | [T⁻¹] | Hz |

---

*End of Notes — Physics Chapter 14 | Total Sections: 8*