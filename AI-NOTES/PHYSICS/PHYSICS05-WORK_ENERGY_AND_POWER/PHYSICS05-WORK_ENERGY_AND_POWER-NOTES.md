# ⚡ CHAPTER 5 — WORK, ENERGY AND POWER
> **Complete Study Notes** | Board · NEET · JEE Layered

---

## 🗺️ CONCEPT ROADMAP

```mermaid
flowchart TD
    A(["Chapter 4: Laws of Motion — F = ma"])
    A --> B["Force acts over a DISPLACEMENT"]
    B --> C["WORK: W = F·d = Fd cos(theta)"]
    C --> C1["Scalar dot product of F and d"]
    C --> D["Work changes KINETIC ENERGY"]
    D --> E["Work-Energy Theorem: Kf - Ki = Wnet"]
    E --> F["Conservative Forces"]
    F --> F1["Gravitational PE: V = mgh"]
    F --> F2["Spring PE: V = (1/2)kx^2"]
    F1 --> G["Conservation of Mechanical Energy"]
    F2 --> G
    G --> G1["K + V = constant (conservative forces only)"]
    G --> H["Non-conservative Forces (Friction)"]
    H --> H1["Modified: Ef - Ei = Wnc"]
    G1 --> I["POWER: P = W/t = F·v"]
    H1 --> I
    I --> J["COLLISIONS"]
    J --> J1["Elastic: KE + p conserved"]
    J --> J2["Inelastic: p conserved only"]
    J --> J3["Perfectly Inelastic: bodies stick"]

    style A fill:#1e3a5f,color:#e0f0ff,stroke:#4a9eff
    style E fill:#1a3d2e,color:#a8f0c6,stroke:#2ecc71
    style G1 fill:#1a3d2e,color:#a8f0c6,stroke:#2ecc71
    style H fill:#3d2a1a,color:#f0d0a8,stroke:#e67e22
    style H1 fill:#3d2a1a,color:#f0d0a8,stroke:#e67e22
    style J fill:#3d1a1a,color:#ffd0d0,stroke:#e74c3c
    style J1 fill:#3d1a1a,color:#ffd0d0,stroke:#e74c3c
    style J2 fill:#3d1a1a,color:#ffd0d0,stroke:#e74c3c
    style J3 fill:#3d1a1a,color:#ffd0d0,stroke:#e74c3c
```

---

## SECTION 1 — SCALAR (DOT) PRODUCT OF TWO VECTORS ⭐

### 1.1 Definition

The scalar product (dot product) of two vectors **A** and **B** is defined as:

$$\mathbf{A} \cdot \mathbf{B} = AB\cos\theta \quad \text{...(5.1a)}$$

where θ is the angle between the two vectors.

> 🔑 The result is a **scalar** (no direction), even though A and B are vectors.

**Geometric interpretation:**
- **A·B** = (magnitude of **A**) × (component of **B** along **A**) = A (B cosθ)
- **A·B** = (magnitude of **B**) × (component of **A** along **B**) = B (A cosθ)

### 1.2 Properties of Dot Product

| Property | Expression |
|:---|:---|
| **Commutative** | **A·B** = **B·A** |
| **Distributive** | **A·(B + C)** = **A·B** + **A·C** |
| **Scalar multiply** | **A·(λB)** = λ(**A·B**) |
| **Perpendicular vectors** | **A·B** = 0 (cos90° = 0) |
| **Parallel vectors** | **A·B** = AB (cos0° = 1) |
| **Self dot product** | **A·A** = A² |

**For unit vectors î, ĵ, k̂:**

$$\hat{i}\cdot\hat{i} = \hat{j}\cdot\hat{j} = \hat{k}\cdot\hat{k} = 1$$

$$\hat{i}\cdot\hat{j} = \hat{j}\cdot\hat{k} = \hat{k}\cdot\hat{i} = 0$$

**In component form:** If **A** = Axî + Ayĵ + Azk̂ and **B** = Bxî + Byĵ + Bzk̂,

$$\mathbf{A}\cdot\mathbf{B} = A_xB_x + A_yB_y + A_zB_z \quad \text{...(5.1b)}$$

### 1.3 Solved Example (NCERT 5.1)

**F** = (3î + 4ĵ − 5k̂) units, **d** = (5î + 4ĵ + 3k̂) units

**F·d** = (3)(5) + (4)(4) + (−5)(3) = 15 + 16 − 15 = **16 units**

F = √(9+16+25) = √50; d = √(25+16+9) = √50

cosθ = 16/(√50 × √50) = 16/50 = **0.32**; θ = cos⁻¹(0.32)

---

## SECTION 2 — THE WORK–ENERGY THEOREM ⭐⭐

### 2.1 Derivation (Constant Force, 1D → 3D)

From kinematics: v² − u² = 2**a**·**d**

Multiplying both sides by m/2:

$$\frac{1}{2}mv^2 - \frac{1}{2}mu^2 = m\mathbf{a}\cdot\mathbf{d} = \mathbf{F}\cdot\mathbf{d}$$

$$\boxed{K_f - K_i = W} \quad \text{...(5.3)}$$

> **Work–Energy Theorem:** The change in kinetic energy of a particle is equal to the net work done on it by all forces.

> [!note] Key Insight
> The WE theorem is a **scalar** form of Newton's Second Law. Direction information from Newton's 2nd law is "integrated over" and not explicitly retained.

### 2.2 Solved — Raindrop (NCERT 5.2)

Drop: m = 1.00 g = 10⁻³ kg; h = 1.00 km = 10³ m; final speed = 50.0 m s⁻¹

> [!example] Solution
>
> **(a)** Work by gravity: $W_g = mgh = 10^{-3} \times 10 \times 10^3 = \mathbf{10.0 \text{ J}}$
>
> **(b)** $\Delta K = \tfrac{1}{2}mv^2 - 0 = \tfrac{1}{2} \times 10^{-3} \times 50^2 = \mathbf{1.25 \text{ J}}$
>
> Work by resistive force: $W_r = \Delta K - W_g = 1.25 - 10.0 = \mathbf{-8.75 \text{ J}}$ (negative, as expected)

---

## SECTION 3 — WORK ⭐⭐

### 3.1 Definition

> **Work done by a constant force F on a body undergoing displacement d:**

$$\boxed{W = Fd\cos\theta = \mathbf{F}\cdot\mathbf{d}} \quad \text{...(5.4)}$$

where θ = angle between **F** and **d**.

- **SI Unit:** **Joule (J)** = N m = kg m² s⁻²
- **Dimensional Formula:** **[ML²T⁻²]**
- Work is a **scalar** quantity; can be **positive, negative, or zero**

### 3.2 When is Work Zero?

| Condition | Example |
|:---|:---|
| Displacement = 0 | Weightlifter holding 150 kg stationary for 30 s |
| Force = 0 | Block sliding on perfectly frictionless surface |
| F ⊥ d (θ = 90°) | Moon's orbital motion (gravity ⊥ velocity); porter walking horizontally with load on head |

### 3.3 Sign of Work

| θ | cosθ | Work | Example |
|:---|:---|:---|:---|
| 0° to 90° | Positive | **Positive** | Applied force in direction of motion |
| Exactly 90° | Zero | **Zero** | Normal force on moving body |
| 90° to 180° | Negative | **Negative** | Friction opposes motion (θ = 180°) |

> [!warning] Exam Trap
> Work done by friction is negative (opposes motion). Work done by gravity on a rising body is negative.

### 3.4 Alternative Units of Energy

| Unit | Equivalent in J |
|:---|:---|
| erg | 10⁻⁷ J |
| electron volt (eV) | 1.6 × 10⁻¹⁹ J |
| calorie (cal) | 4.186 J |
| kilowatt hour (kWh) | 3.6 × 10⁶ J |

### 3.5 Solved — Cyclist skidding to stop (NCERT 5.3)

Force on cycle by road = 200 N opposing motion (θ = 180°); d = 10 m

> [!example] Solution
>
> (a) Work done by road on cycle: $W_r = 200 \times 10 \times \cos 180° = \mathbf{-2000 \text{ J}}$
>
> (b) Work done by cycle on road: Road has **no displacement** → $W = 0$

> [!note] Key Insight
> Though force on road is equal and opposite (Newton's 3rd law), work done on road is zero because road doesn't move. $W_{12} + W_{21} \neq 0$ in general.

---

## SECTION 4 — KINETIC ENERGY ⭐⭐

### 4.1 Definition

> **Kinetic energy (K)** of a body of mass m moving with speed v:

$$\boxed{K = \frac{1}{2}mv^2 = \frac{1}{2}m\mathbf{v}\cdot\mathbf{v}} \quad \text{...(5.5)}$$

- **Scalar quantity**, always **positive**
- SI Unit: **Joule (J)**; Dimensional Formula: **[ML²T⁻²]**
- "Energy of motion" — measure of capacity to do work

**Useful relation:** From p = mv → K = p²/(2m) = p·v/2

### 4.2 Solved — Bullet through plywood (NCERT 5.4)

m = 50 g = 0.05 kg; vi = 200 m s⁻¹; Final KE = 10% of initial KE

> [!example] Solution
>
> $K_i = \tfrac{1}{2} \times 0.05 \times 200^2 = 1000 \text{ J}$; $K_f = 0.1 \times 1000 = 100 \text{ J}$
>
> $$v_f = \sqrt{\frac{2 \times 100}{0.05}} = \sqrt{4000} = \mathbf{63.2 \text{ m s}^{-1}}$$
>
> Note: Speed is reduced by 68%, not 90% (KE ∝ v²).

---

## SECTION 5 — WORK DONE BY A VARIABLE FORCE ⭐⭐

### 5.1 Integration Approach

For a force F(x) varying with position x:

$$\boxed{W = \int_{x_i}^{x_f} F(x)\, dx} \quad \text{...(5.7)}$$

This equals the **area under the F−x graph** between xi and xf.

**Approximate method:** Divide displacement into small intervals Δx:

$$W \approx \sum_{x_i}^{x_f} F(x)\,\Delta x$$

As Δx → 0, this sum approaches the exact integral.

### 5.2 Solved — Woman pushing trunk (NCERT 5.5)

Applied force: 100 N for first 10 m, then decreases linearly to 50 N at 20 m. Frictional force: constant 50 N opposing motion over 20 m.

> [!example] Solution
>
> Work by woman (area of rectangle + trapezium):
> $$W_F = 100 \times 10 + \frac{1}{2}(100+50) \times 10 = 1000 + 750 = \mathbf{1750 \text{ J}}$$
>
> Work by friction:
> $$W_f = (-50) \times 20 = \mathbf{-1000 \text{ J}}$$

---

## SECTION 6 — WORK–ENERGY THEOREM FOR VARIABLE FORCE ⭐⭐

### 6.1 Proof

Starting from Newton's 2nd law in 1D:

$$\frac{dK}{dt} = m v \frac{dv}{dt} = Fv = F\frac{dx}{dt}$$

Therefore: dK = F dx

Integrating from xi to xf:

$$K_f - K_i = \int_{x_i}^{x_f} F\,dx = W \quad \text{...(5.8b)}$$

> The WE theorem holds for **variable forces** as well. It is a general result.

### 6.2 Important Distinctions

| Newton's 2nd Law | Work–Energy Theorem |
|:---|:---|
| Vector form | Scalar form |
| Instantaneous (force at instant → accel. at same instant) | Integrated over time/displacement interval |
| Contains direction information | Direction information lost |
| F = ma | Kf − Ki = W |

### 6.3 Solved — Rough patch with variable force (NCERT 5.6)

m = 1 kg, vi = 2 m s⁻¹; Retarding force: Fr = −k/x (k = 0.5 J) for 0.1 < x < 2.01 m

> [!example] Solution
>
> $$K_f = K_i + \int_{0.1}^{2.01} \frac{-k}{x}\,dx = 2 - 0.5\ln(2.01/0.1)$$
>
> $$= 2 - 0.5\ln(20.1) = 2 - 1.5 = \mathbf{0.5 \text{ J}}$$
>
> $$v_f = \sqrt{2K_f/m} = \mathbf{1 \text{ m s}^{-1}}$$

---

## SECTION 7 — CONCEPT OF POTENTIAL ENERGY ⭐⭐⭐

### 7.1 What is Potential Energy?

> **Potential energy** is the **stored energy** of a body by virtue of its **position or configuration**. It is the energy that can be converted into kinetic energy when constraints are removed.

**Examples:** Stretched bow-string → arrow flies off; compressed spring → releases energy; fault lines in Earth's crust → earthquakes; water at height behind a dam → power generation.

> [!important] Key Rule
> Potential energy is defined **only for conservative forces**. It cannot be associated with non-conservative forces like friction.

### 7.2 Gravitational Potential Energy ⭐⭐

Work done by external agent in lifting mass m to height h (against gravity):

$$\boxed{V(h) = mgh} \quad \text{...(gravitational PE)}$$

- Reference: V = 0 at ground (h = 0) — **choice of reference is arbitrary**
- Relation to force: F = −dV/dh = −mg (negative = downward force)
- When released from h: KE at ground = mgh (PE → KE conversion)

### 7.3 Conservative Forces — Defining Property

A force F(x) is **conservative** if:

$$F(x) = -\frac{dV}{dx} \quad \text{(1D)} \quad \text{...(5.9)}$$

This means: work done depends only on end points, not on path taken; work done over any closed path = 0.

**Examples of conservative forces:** Gravity, spring force, electrostatic force.

**Examples of non-conservative forces:** Friction, air resistance, viscous drag.

> [!tip] Path Independence — Exam Note
> Gravitational force on a ball on a frictionless inclined plane: speed at the bottom = $\sqrt{2gh}$ regardless of the angle of inclination — **path independent!** This is the hallmark of a conservative force.

---

## SECTION 8 — CONSERVATION OF MECHANICAL ENERGY ⭐⭐⭐

### 8.1 Derivation

For a body under a conservative force F:

From WE theorem: ΔK = F(x) Δx

From definition of PE: −ΔV = F(x) Δx

Adding: **ΔK + ΔV = 0**

$$\boxed{\Delta(K + V) = 0 \implies K + V = \text{constant}} \quad \text{...(5.10)}$$

Or equivalently: Ki + V(xi) = Kf + V(xf) ...(5.11)

> [!important] Principle of Conservation of Mechanical Energy
> The total mechanical energy (K + V) of a system remains constant if all forces acting on it are **conservative**.

### 8.2 Ball Dropped from Height H

| Height | KE | PE | Total E |
|:---|:---|:---|:---|
| H (top) | 0 | mgH | mgH |
| h (intermediate) | $\frac{1}{2}mv_h^2$ | mgh | mgH |
| 0 (ground) | $\frac{1}{2}mv_f^2$ | 0 | mgH |

At ground: ½mvf² = mgH → **vf = √(2gH)** ✓ (same as kinematics result)

### 8.3 Solved — Bob completing circular loop (NCERT 5.7) ⭐⭐

Bob of mass m on string of length L; horizontal velocity v₀ at lowest point A; string goes slack at highest point C.

> [!example] Solution
>
> At C, $T_C = 0$: mg provides centripetal force: $mg = mv_C^2/L$ → $v_C = \sqrt{gL}$
>
> Energy conservation (A to C):
> $$\frac{1}{2}mv_0^2 = \frac{1}{2}mv_C^2 + mg(2L) = \frac{1}{2}m(gL) + 2mgL = \frac{5}{2}mgL$$
>
> $$\boxed{v_0 = \sqrt{5gL}}$$
>
> At B (end of diameter, height L):
> $$\frac{1}{2}mv_B^2 = \frac{5}{2}mgL - mgL = \frac{3}{2}mgL \implies v_B = \sqrt{3gL}$$
>
> Ratio $K_B/K_C = (3gL)/(gL) = \mathbf{3 : 1}$
>
> After C, string slackens → bob follows **projectile motion** (horizontal velocity = $v_C$ to the left).

### 8.4 Summary Table — Energy at Key Points (Bob on Loop)

| Point | Height | Speed | KE | PE |
|:---|:---|:---|:---|:---|
| A (bottom) | 0 | √(5gL) | 5mgL/2 | 0 |
| B (side) | L | √(3gL) | 3mgL/2 | mgL |
| C (top) | 2L | √(gL) | mgL/2 | 2mgL |

**Total = 5mgL/2 at every point ✓**

---

## SECTION 9 — POTENTIAL ENERGY OF A SPRING ⭐⭐⭐

### 9.1 Spring Force (Hooke's Law)

$$\boxed{F_s = -kx} \quad \text{...(Hooke's Law)}$$

where x = displacement from equilibrium; k = spring constant (N m⁻¹) = [MT⁻²]; negative sign → restoring force (always toward equilibrium).

**Stiff spring:** large k | **Soft spring:** small k

### 9.2 Potential Energy of a Spring

Work done by spring force when extended from 0 to xm:

$$W_s = -\int_0^{x_m} kx\,dx = -\frac{kx_m^2}{2}$$

This work is stored as potential energy:

$$\boxed{V(x) = \frac{1}{2}kx^2} \quad \text{...(5.19)}$$

Note: V is always **positive** (parabolic, symmetric about x = 0); V(0) = 0 by choice.

Verify: F = −dV/dx = −kx ✓

### 9.3 Spring is a Conservative Force

Work done by spring in any closed cycle (extend to xm, release back to 0) = 0.

Work from xi to xf: Ws = ½kxi² − ½kxf² (depends only on end points) ✓

### 9.4 Maximum Speed of Oscillating Block

Block of mass m on spring, released from rest at x = xm:

At equilibrium (x = 0): All PE converts to KE:

$$\frac{1}{2}kx_m^2 = \frac{1}{2}mv_m^2 \implies \boxed{v_m = x_m\sqrt{k/m}} \quad \text{...(maximum speed)}$$

The graphs of K and V vs x are complementary parabolas; total E = K + V remains constant.

### 9.5 Solved — Car colliding with spring (NCERT 5.8)

m = 1000 kg; v = 18 km/h = 5 m s⁻¹; k = 5.25 × 10³ N m⁻¹

> [!example] Solution
>
> $KE = \tfrac{1}{2} \times 1000 \times 25 = 1.25 \times 10^4 \text{ J}$
>
> At maximum compression $x_m$: all KE → PE in spring
>
> $$\frac{1}{2}kx_m^2 = 1.25 \times 10^4 \implies x_m = \sqrt{\frac{2 \times 1.25 \times 10^4}{5.25 \times 10^3}} = \mathbf{2.00 \text{ m}}$$

### 9.6 Solved — With friction (NCERT 5.9)

Now μ = 0.5 (frictional force = 0.5 × 1000 × 10 = 5000 N opposes motion)

> [!example] Solution
>
> Using WE theorem (NOT conservation of mechanical energy — friction is non-conservative):
>
> $$\frac{1}{2}mv^2 = \frac{1}{2}kx_m^2 + \mu mg x_m$$
>
> $$kx_m^2 + 2\mu mg x_m - mv^2 = 0 \implies x_m = \mathbf{1.35 \text{ m}}$$
>
> (Less than 2.00 m due to energy loss to friction ✓)

### 9.7 Remarks on Conservative Forces

1. **Time information absent:** Conservation of energy gives positions, not time duration.
2. **Not all forces are conservative:** Friction's PE cannot be defined.
3. **Zero of PE is arbitrary:** Spring: V = 0 at x = 0 (equilibrium). Gravity: V = 0 at ground.

---

## SECTION 10 — NON-CONSERVATIVE FORCES AND ENERGY

### 10.1 Modified Energy Equation

When both conservative (Fc) and non-conservative (Fnc) forces act:

$$\Delta E = W_{nc}$$

$$\boxed{E_f - E_i = W_{nc}} \quad \text{...(modified energy theorem)}$$

where Wnc = work done by non-conservative forces over path.

- Friction: Wnc < 0 → Ef < Ei (mechanical energy decreases)
- A motor/engine doing work on the system: Wnc > 0 → Ef > Ei

> [!warning] Path Dependence
> Unlike conservative force work, $W_{nc}$ **depends on the path** taken.

---

## SECTION 11 — POWER ⭐⭐

### 11.1 Definition

> **Power** is the **time rate of doing work** (or energy transfer).

**Average Power:**

$$P_{av} = \frac{W}{t}$$

**Instantaneous Power:**

$$\boxed{P = \frac{dW}{dt} = \mathbf{F}\cdot\mathbf{v}} \quad \text{...(5.20, 5.21)}$$

where **v** is instantaneous velocity.

- **Scalar quantity**
- SI Unit: **Watt (W)** = J s⁻¹ = kg m² s⁻³
- Named after **James Watt** (steam engine inventor)
- Dimensional Formula: **[ML²T⁻³]**

### 11.2 Other Units of Power

| Unit | Equivalent |
|:---|:---|
| **Horse-power (hp)** | 746 W |
| **kWh (kilowatt hour)** | 3.6 × 10⁶ J (unit of ENERGY, not power!) |

> [!warning] Common Mistake
> kWh is a unit of **energy** (power × time), not power!
> 1 kWh = 1000 W × 3600 s = 3.6 × 10⁶ J

### 11.3 Solved — Elevator (NCERT 5.10)

Load = 1800 kg; speed = 2 m s⁻¹ (constant); frictional force = 4000 N

> [!example] Solution
>
> Total downward force: $F = mg + F_f = 1800 \times 10 + 4000 = 22000 \text{ N}$
>
> At constant speed, motor supplies force = 22000 N (to maintain equilibrium)
>
> $$P = Fv = 22000 \times 2 = \mathbf{44000 \text{ W} = 44 \text{ kW} \approx 59 \text{ hp}}$$

---

## SECTION 12 — COLLISIONS ⭐⭐⭐

### 12.1 What is a Collision?

> A **collision** is a brief interaction between bodies during which the momentum and/or energy is exchanged through impulsive forces.

**Key point:** During a collision, total linear momentum is **always conserved** (by Newton's 3rd law). KE may or may not be conserved.

**Scattering:** When interaction involves action at a distance (e.g., alpha particle + nucleus, comet + Sun).

### 12.2 Types of Collisions

| Type | Momentum | Kinetic Energy | Notes |
|:---|:---|:---|:---|
| **Elastic** | Conserved | Conserved | Ideal; billiard balls approx. |
| **Inelastic** | Conserved | **Not** conserved | Most real collisions |
| **Perfectly Inelastic** | Conserved | **Maximum loss** | Bodies stick together |

> [!important] The Golden Rule
> In ALL collisions, linear momentum is conserved (as long as no external force). KE conservation is ONLY in elastic collisions.

### 12.3 Completely Inelastic Collision (1D) ⭐⭐

m₁ moving with v₁ᵢ hits stationary m₂; they stick together:

$$m_1 v_{1i} = (m_1 + m_2)v_f$$

$$\boxed{v_f = \frac{m_1}{m_1 + m_2}v_{1i}} \quad \text{...(5.22)}$$

**Loss in KE:**

$$\Delta K = \frac{1}{2}\frac{m_1 m_2}{m_1 + m_2}v_{1i}^2 \quad \text{(always positive)}$$

### 12.4 Elastic Collision (1D) ⭐⭐⭐

Using momentum conservation (5.23) and KE conservation (5.24):

**Key intermediate result:** v₂f = v₁ᵢ + v₁f ...(5.25)

$$\boxed{v_{1f} = \frac{m_1 - m_2}{m_1 + m_2}v_{1i}} \quad \text{...(5.26)}$$

$$\boxed{v_{2f} = \frac{2m_1}{m_1 + m_2}v_{1i}} \quad \text{...(5.27)}$$

**Relative velocity:** v₂f − v₁f = v₁ᵢ − v₂ᵢ (coefficient of restitution = 1 for elastic)

### 12.5 Special Cases of Elastic Collision ⭐⭐

| Case | Condition | Result |
|:---|:---|:---|
| **Equal masses** | m₁ = m₂ | v₁f = 0; v₂f = v₁ᵢ (complete transfer) |
| **Very heavy target** | m₂ >> m₁ | v₁f ≈ −v₁ᵢ; v₂f ≈ 0 (ball bounces back) |
| **Very heavy projectile** | m₁ >> m₂ | v₁f ≈ v₁ᵢ; v₂f ≈ 2v₁ᵢ (target pushed ahead) |

> 🔑 **Equal mass elastic collision:** First body stops completely; second moves with initial speed of first. This is the basis of Newton's cradle!

### 12.6 Neutron Moderation (NCERT 5.11) — Application ⭐

In a nuclear reactor, fast neutrons (v₁ᵢ = 10⁷ m s⁻¹) must be slowed using a moderator.

Fractional KE retained by neutron:

$$f_1 = \frac{K_{1f}}{K_{1i}} = \left(\frac{m_1 - m_2}{m_1 + m_2}\right)^2$$

| Moderator | m₂/m₁ | f₁ (KE retained) | f₂ (KE transferred) |
|:---|:---|:---|:---|
| Deuterium (D₂O) | 2 | 1/9 ≈ 11% | 8/9 ≈ 89% |
| Carbon (graphite) | 12 | (11/13)² ≈ 71.6% | 28.4% |

**Deuterium is more efficient** — neutron loses ~89% of energy per collision.

### 12.7 Elastic Collision in 2D (Glancing Collision) ⭐⭐

For 2D collision (Fig 5.10), using vector momentum conservation + energy conservation:

x-component: $m_1v_{1i} = m_1v_{1f}\cos\theta_1 + m_2v_{2f}\cos\theta_2$ ...(5.28)

y-component: $0 = m_1v_{1f}\sin\theta_1 - m_2v_{2f}\sin\theta_2$ ...(5.29)

KE conservation: $\tfrac{1}{2}m_1v_{1i}^2 = \tfrac{1}{2}m_1v_{1f}^2 + \tfrac{1}{2}m_2v_{2f}^2$ ...(5.30)

**4 unknowns (v₁f, v₂f, θ₁, θ₂), 3 equations** → one more condition needed (e.g., θ₁ measured)

### 12.8 Solved — Billiard Balls (NCERT 5.12) ⭐⭐

Equal masses (m₁ = m₂); θ₂ = 37°; elastic collision.

> [!example] Solution
>
> Since $m_1 = m_2$: $\mathbf{v}_{1i} = \mathbf{v}_{1f} + \mathbf{v}_{2f}$ (vector)
>
> Squaring: $v_{1i}^2 = v_{1f}^2 + v_{2f}^2 + 2\mathbf{v}_{1f}\cdot\mathbf{v}_{2f}$
>
> From KE conservation (equal masses): $v_{1i}^2 = v_{1f}^2 + v_{2f}^2$
>
> Therefore: $\mathbf{v}_{1f}\cdot\mathbf{v}_{2f} = 0$ → $\theta_1 + \theta_2 = 90°$
>
> $$\theta_1 = 90° - 37° = \mathbf{53°}$$

> [!important] Golden Result
> When two equal masses undergo a glancing elastic collision (one initially at rest), they always move at **right angles to each other** after collision.

---

## SECTION 13 — PROBLEM-SOLVING STRATEGY

### 13.1 Work–Energy Problems

1. Identify all forces acting on the body
2. Calculate work done by each force over the displacement
3. Apply: Kf − Ki = W_net
4. If conservative forces only: use K + V = constant (easier!)
5. If friction present: Ef − Ei = Wnc = −friction force × displacement

### 13.2 Collision Problems

1. Draw before/after diagram; label all masses and velocities
2. Check if elastic (KE conserved) or inelastic
3. **Always apply momentum conservation** first
4. For elastic: additionally apply KE conservation OR use formulas (5.26), (5.27)
5. For perfectly inelastic: use combined velocity formula (5.22)
6. Calculate energy loss if required: ΔK = Kᵢ − Kf

---

## 📋 QUICK REFERENCE — All Laws and Formulas

> [!important] Work and Kinetic Energy
>
> $$W = \mathbf{F}\cdot\mathbf{d} = Fd\cos\theta \qquad [ML^2T^{-2}], \text{ SI: J}$$
>
> $$\text{Variable force: } W = \int F(x)\,dx \quad \text{(area under F-x graph)}$$
>
> $$W = 0 \text{ if } d=0,\; F=0,\; \text{or } F\perp d$$
>
> $$K = \tfrac{1}{2}mv^2 = \frac{p^2}{2m}$$
>
> $$\text{Work-Energy Theorem: } K_f - K_i = W_{net}$$

> [!important] Potential Energy and Conservation
>
> $$\text{Gravitational: } V = mgh \quad (V=0 \text{ at ground})$$
>
> $$\text{Spring: } V = \tfrac{1}{2}kx^2 \quad (V=0 \text{ at equilibrium})$$
>
> $$\text{Conservative force: } F = -\frac{dV}{dx}$$
>
> $$\text{Conservation: } K + V = \text{const} \quad \text{(conservative forces only)}$$
>
> $$\text{With friction: } E_f - E_i = W_{nc} \quad (W_{nc} < 0 \text{ for friction})$$

> [!important] Power
>
> $$P_{av} = \frac{W}{t} \qquad [ML^2T^{-3}], \text{ SI: W (watt)}$$
>
> $$P_{inst} = \mathbf{F}\cdot\mathbf{v}$$
>
> $$1 \text{ hp} = 746 \text{ W}; \quad 1 \text{ kWh} = 3.6 \times 10^6 \text{ J}$$

> [!important] Elastic Collision (1D, m₂ at rest)
>
> $$v_{1f} = \frac{m_1 - m_2}{m_1 + m_2}\,v_{1i}$$
>
> $$v_{2f} = \frac{2m_1}{m_1 + m_2}\,v_{1i}$$
>
> $$\text{Equal masses: } v_{1f}=0;\; v_{2f}=v_{1i} \text{ (complete KE transfer)}$$

> [!important] Perfectly Inelastic Collision (1D)
>
> $$v_f = \frac{m_1}{m_1 + m_2}\,v_{1i}$$
>
> $$\Delta K = \frac{1}{2}\frac{m_1 m_2}{m_1+m_2}v_{1i}^2 \quad \text{(energy lost)}$$

---

## ⚡ POINTS TO PONDER (High-Yield for Exams)

1. **Work done is force-specific.** Always state: "Work done BY [force] ON [body]." Work done by friction ≠ work done by applied force.

2. **Work can be negative.** Unlike mass and KE (always positive scalars), work done by friction or gravity on a rising body is negative.

3. **Cricketer moves hands back** not because force is reduced — momentum change is fixed. Moving hands back increases contact time, reducing force.

4. **Satellite speeding up as it spirals in:** As it descends, PE decreases by more than KE increases → total mechanical energy decreases (air drag removes energy). Despite losing total energy, it speeds up because PE → KE conversion dominates.

5. **Rocket burning casing:** Heat comes from the **rocket's kinetic energy** (which ultimately came from chemical energy of fuel).

6. **Comet on closed orbit:** Gravity is conservative → work done over complete orbit = 0 → KE same at start and end.

7. **PE is always undetermined up to a constant.** Only changes in PE are physically meaningful. The choice of reference point (where V = 0) is arbitrary — but must be consistent throughout a problem.

8. **F = −kx is for ideal springs.** Real springs show deviation from Hooke's law at large extensions.

9. **During collision, KE ≠ conserved even in elastic.** KE conservation in elastic collisions applies to initial and final states — NOT at every instant during contact.

10. **Work done by internal forces:** The sum of work done by action-reaction forces (W₁₂ + W₂₁) is NOT necessarily zero. This is why a block sliding on another can lose KE.