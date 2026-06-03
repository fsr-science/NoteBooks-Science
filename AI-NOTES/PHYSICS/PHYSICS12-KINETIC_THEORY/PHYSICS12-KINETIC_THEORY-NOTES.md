# CHAPTER 12: KINETIC THEORY

### Complete Study Notes | Board · NEET · JEE Layered

---

## 🗺️ CONCEPT ROADMAP

```
[KINETIC THEORY — molecular interpretation of macroscopic gas properties]
    → Gases = large number of rapidly moving atoms/molecules
    → Inter-atomic forces negligible in gases (unlike solids/liquids)
        ↓
[MOLECULAR NATURE OF MATTER]
    Atomic Hypothesis: matter made of atoms (Dalton, Avogadro, Gay Lussac)
    → Atom size ~1 Å (10⁻¹⁰ m); interatomic distance in gas ~tens of Å
        ↓
[BEHAVIOUR OF GASES — Gas Laws]
    PV = μRT (Ideal Gas Equation)
    Boyle's Law | Charles' Law | Avogadro's Hypothesis | Dalton's Law
        ↓
[KINETIC THEORY OF IDEAL GAS]
    Pressure from molecular collisions: P = (1/3) nm<v²>
        ↓
[KINETIC INTERPRETATION OF TEMPERATURE]
    Average KE per molecule = (3/2)k_B T
    Temperature ∝ average translational KE
        ↓
[LAW OF EQUIPARTITION OF ENERGY]
    Each degree of freedom gets energy = (1/2)k_B T
    Translational/Rotational: 1 DOF = ½k_BT | Vibrational: 1 mode = k_BT
        ↓
[SPECIFIC HEAT CAPACITIES OF GASES AND SOLIDS]
    Monoatomic: Cᵥ = 3R/2 | Diatomic (rigid): Cᵥ = 5R/2 | Solids: C = 3R
        ↓
[MEAN FREE PATH]
    l = 1/(√2 π n d²) — average distance between successive collisions
```

---

## SECTION 1 — INTRODUCTION ⭐⭐

### 1.1 What is Kinetic Theory?

**Kinetic theory** explains the behaviour of gases based on the molecular picture: a gas consists of a large number of **rapidly and randomly moving atoms or molecules**.

Key features:
- Developed in the 19th century by **Maxwell, Boltzmann**, and others
- Inter-atomic forces are **short-range** — important in solids and liquids but **negligible in gases**
- Provides a **molecular/microscopic interpretation** of macroscopic properties like pressure and temperature
- Consistent with all gas laws and Avogadro's hypothesis

> 🔑 **Why kinetic theory works for gases:** In a gas at ordinary conditions, molecules are far apart (~10 × their diameter), so intermolecular forces are negligible between collisions. Between collisions, molecules move in straight lines (Newton's First Law).

### 1.2 What Kinetic Theory Achieves

1. Gives a **molecular interpretation of pressure and temperature**
2. Is consistent with **all gas laws** (Boyle, Charles, Dalton)
3. Correctly explains **specific heat capacities** of many gases
4. Relates measurable gas properties (viscosity, conduction, diffusion) to **molecular parameters** — enabling estimates of molecular sizes and masses

---

## SECTION 2 — MOLECULAR NATURE OF MATTER ⭐⭐

### 2.1 Atomic Hypothesis

> **Atomic Hypothesis (Feynman):** All things are made of atoms — little particles that move around in perpetual motion, attracting each other when a little distance apart, but repelling upon being squeezed into one another.

Richard Feynman considered "Matter is made up of atoms" the most significant scientific discovery.

### 2.2 Historical Development

| Contributor | Contribution |
|---|---|
| **Kanada (India, ~600 BC)** | Proposed paramanu (indivisible atoms); 4 types — earth, water, fire, air |
| **Democritus (Greece, ~400 BC)** | Atomic hypothesis; "atom" = indivisible in Greek |
| **John Dalton (~1800 AD)** | Scientific atomic theory; explained laws of definite and multiple proportions |
| **Gay Lussac (early 19th c.)** | Volumes of reacting gases are in ratios of small integers |
| **Avogadro (~1811)** | Equal volumes of all gases at same T and P have same number of molecules |

### 2.3 Key Facts About Molecular Structure

| State | Interatomic Distance | Notes |
|---|---|---|
| Solid | ~2 Å (a few angstroms) | Tightly packed; rigidly fixed |
| Liquid | ~2–3 Å | Close but can move around; hence liquids flow |
| Gas | Tens of Å | Far apart; intermolecular forces negligible |

- **Size of an atom:** ~1 angstrom = 10⁻¹⁰ m
- **Mean free path in gases:** ~thousands of angstroms (Å) — ~1000× molecular size
- Gas molecules are **much freer** than in solids/liquids; travel long distances without colliding

---

## SECTION 3 — BEHAVIOUR OF GASES ⭐⭐⭐

### 3.1 The Ideal Gas Equation

For a given sample of gas at low pressures and high temperatures (well above liquefaction):

$$\boxed{PV = \mu RT} \quad \text{...(12.3)}$$

Where:
- P = pressure, V = volume, T = absolute temperature (in Kelvin)
- μ = number of moles
- R = 8.314 J mol⁻¹ K⁻¹ (universal gas constant)
- R = N_A × k_B (Avogadro's number × Boltzmann constant)

**Alternative forms:**

$$PV = Nk_B T \qquad \text{(N = total molecules)}$$
$$P = nk_B T \qquad \text{(n = number density = N/V)}$$
$$P = \frac{\rho RT}{M_0} \qquad \text{(ρ = mass density, } M_0 \text{ = molar mass)}$$

> 🔑 **Ideal gas:** A gas that satisfies PV = μRT exactly at all P and T. No real gas is truly ideal. Real gases approach ideal behaviour at **low pressures and high temperatures** (molecules far apart → interactions negligible).

### 3.2 Boltzmann Constant (k_B)

From PV = NkT: $$k_B = \frac{R}{N_A} = 1.38 \times 10^{-23} \text{ J K}^{-1}$$

This constant k_B is the same for all gases — it connects macroscopic temperature with microscopic molecular energy.

### 3.3 Avogadro's Hypothesis (from Kinetic Theory)

From $\frac{P_1V_1}{N_1T_1} = \frac{P_2V_2}{N_2T_2} = k_B$:

If P, V, T are same for two gas samples → **N is also the same**.

> **Avogadro's hypothesis:** Equal volumes of all gases at the same temperature and pressure contain the **same number of molecules**.

- Number in 22.4 litres of any gas at STP = **6.02 × 10²³** (Avogadro's number, N_A)
- This volume (22.4 L) is the **molar volume** at STP

### 3.4 Gas Laws — Derived from PV = μRT

| Law | Condition | Result |
|---|---|---|
| **Boyle's Law** | Fixed μ, T | PV = constant → P ∝ 1/V |
| **Charles' Law** | Fixed μ, P | V/T = constant → V ∝ T |
| **Avogadro's Law** | Fixed P, T | V ∝ N (or μ) |
| **Dalton's Law** | Mixture of ideal gases | P_total = P₁ + P₂ + ... (sum of partial pressures) |

**Dalton's Law:** For a mixture of non-interacting ideal gases:
$$PV = (\mu_1 + \mu_2 + ...) RT$$
$$P = P_1 + P_2 + ... \quad \text{where } P_i = \mu_i RT/V$$

Each P_i is the **partial pressure** — the pressure that gas i would exert if alone in the same volume at the same temperature.

### 3.5 Worked Examples (Key NCERT Results)

**Molecular volume fraction (water vapour at 100°C, 1 atm):**
- Density of water: 1000 kg/m³; density of vapour: 0.6 kg/m³
- Volume ratio (vapour/liquid) = 1000/0.6 ≈ 1667
- Fraction of molecular volume to total volume ≈ **6 × 10⁻⁴**

**Radius of water molecule (from density):**
- Mass of one molecule = 0.018/(6 × 10²³) = 3 × 10⁻²⁶ kg
- Volume of one molecule = 3 × 10⁻²⁹ m³ → **Radius ≈ 2 Å**

---

## SECTION 4 — KINETIC THEORY OF AN IDEAL GAS ⭐⭐⭐⭐

### 4.1 Basic Assumptions of Kinetic Theory

1. A gas is a collection of a **large number** of molecules (~ N_A order) in **incessant random motion**
2. At ordinary P and T, average distance between molecules >> typical molecular size (2 Å)
3. **Intermolecular forces are negligible** between collisions (molecules move in straight lines)
4. Molecules **occasionally collide** with each other or with walls
5. All collisions are **perfectly elastic** (total KE and momentum conserved)
6. No preferred direction of molecular velocities (gas is **isotropic**)

### 4.2 Derivation of Pressure of an Ideal Gas

Consider a gas in a cubic container of side l. A molecule with velocity (v_x, v_y, v_z) hits the wall perpendicular to x-axis:

**Momentum change per collision:**
$$\Delta p = 2mv_x \quad \text{(x-component reverses; y, z unchanged)}$$

**Molecules hitting the wall in time Δt:**
- Only molecules within distance v_x Δt reach the wall
- Half of them move towards the wall
- Number = ½ A v_x Δt × n (n = number density)

**Total momentum transferred to wall in Δt:**
$$Q = (2mv_x) \times (\tfrac{1}{2}nAv_x\Delta t) = nmAv_x^2\Delta t$$

**Pressure = force/area = rate of momentum transfer/area:**
$$P = \frac{Q}{A\Delta t} = nm\overline{v_x^2}$$

**Summing over all molecules (gas is isotropic):**
$$\overline{v_x^2} = \overline{v_y^2} = \overline{v_z^2} = \frac{1}{3}\overline{v^2}$$

$$\boxed{P = \frac{1}{3}nm\overline{v^2}} \quad \text{...(12.14)}$$

Where $\overline{v^2}$ = mean of squared speed (mean square speed).

> 🔑 **Important remarks:**
> - This result is independent of the shape of the container (Pascal's law)
> - Molecular collisions among themselves do not affect the result (steady-state distribution maintained)

### 4.3 Kinetic Interpretation of Temperature ⭐⭐⭐⭐

From P = (1/3)nm v̄²:
$$PV = \frac{1}{3}Nm\overline{v^2} = \frac{2}{3} \times N \times \frac{1}{2}m\overline{v^2} = \frac{2}{3}E \quad \text{...(12.17)}$$

Where E = total translational kinetic energy of all N molecules.

Comparing with the ideal gas equation PV = Nk_BT:

$$\boxed{E = \frac{3}{2}Nk_BT} \quad \text{...(12.18)}$$

$$\boxed{\frac{1}{2}m\overline{v^2} = \frac{3}{2}k_BT} \quad \text{...(12.19)}$$

> ⭐ **Critical Result:** The **average translational kinetic energy per molecule** is:
> $$\bar{\varepsilon} = \frac{3}{2}k_BT$$
> This depends ONLY on temperature — NOT on pressure, volume, or the nature of the gas.

**This is the fundamental kinetic interpretation of temperature:** Temperature is a measure of the average translational KE of a molecule.

### 4.4 RMS Speed

The **root mean square speed:**
$$v_{rms} = \sqrt{\overline{v^2}} = \sqrt{\frac{3k_BT}{m}} = \sqrt{\frac{3RT}{M_0}}$$

At T = 300 K for N₂: m = 4.65 × 10⁻²⁶ kg → v_rms = **516 m/s**

> 🔑 **Key point:** At the same temperature, **lighter molecules have greater v_rms** (v_rms ∝ 1/√m at fixed T).

**For a mixture of gases at equilibrium:**
- Average KE per molecule = (3/2)k_BT for ALL gases regardless of molecular type
- Therefore: ½m₁v̄₁² = ½m₂v̄₂² = (3/2)k_BT at equilibrium

### 4.5 Worked Example (NCERT Ex. 12.5)

Flask contains Ar and Cl₂ in ratio 2:1 by mass at 27°C.

(i) **Ratio of average KE per molecule** = 1:1 (same temperature → same KE regardless of molecular type)

(ii) **Ratio of v_rms:**
$$\frac{(v_{rms})_{Ar}}{(v_{rms})_{Cl_2}} = \sqrt{\frac{M_{Cl_2}}{M_{Ar}}} = \sqrt{\frac{70.9}{39.9}} = \sqrt{1.77} = 1.33$$

---

## SECTION 5 — LAW OF EQUIPARTITION OF ENERGY ⭐⭐⭐⭐

### 5.1 Degrees of Freedom

**Degree of freedom (DOF):** The number of **independent coordinates** needed to specify the position/configuration of a molecule.

| Type of Motion | Description | DOF |
|---|---|---|
| **Translational** | Movement of centre of mass in x, y, z | 3 |
| **Rotational** | Rotation about independent axes | 1, 2, or 3 |
| **Vibrational** | Oscillation along interatomic axis | 2 per mode (KE + PE) |

**For different molecule types:**

| Molecule Type | Example | Translational | Rotational | Total DOF (no vib.) |
|---|---|---|---|---|
| Monoatomic | He, Ar, Ne | 3 | 0 | **3** |
| Diatomic (rigid) | N₂, O₂, H₂ | 3 | 2 | **5** |
| Diatomic (non-rigid/vibrational) | CO (at high T) | 3 | 2 | **7** (5 + 2 from vib.) |
| Polyatomic (non-linear) | NH₃, H₂O | 3 | 3 | **6** |

> 🔑 **Why only 2 rotational DOF for diatomic?** The rotation along the axis joining the atoms has very small moment of inertia, so by quantum mechanics it does not contribute at ordinary temperatures.

### 5.2 The Law of Equipartition of Energy

> **Law of Equipartition of Energy (Maxwell):** In thermal equilibrium at temperature T, the energy is equally distributed among all possible energy modes. **Each mode (degree of freedom) that involves a quadratic term in energy contributes ½k_BT to the average energy.**

- Each **translational** DOF: average energy = **½k_BT**
- Each **rotational** DOF: average energy = **½k_BT**
- Each **vibrational mode**: average energy = **k_BT** (= 2 × ½k_BT, because a vibrational mode has BOTH kinetic and potential energy — 2 quadratic terms)

### 5.3 Total Average Energy per Molecule

| Molecule | DOF (f) | Average energy per molecule |
|---|---|---|
| Monoatomic | 3 | (3/2)k_BT |
| Rigid diatomic | 5 | (5/2)k_BT |
| Diatomic + 1 vibrational mode | 7 | (7/2)k_BT |
| Polyatomic (3 trans + 3 rot + f_vib) | 6 + 2f_vib | (3 + f_vib)k_BT |

---

## SECTION 6 — SPECIFIC HEAT CAPACITY ⭐⭐⭐⭐

### 6.1 General Approach

Using the law of equipartition:

1. Find total internal energy per mole: U = (average energy per molecule) × N_A
2. $C_v = \frac{dU}{dT}$
3. $C_p = C_v + R$ (Mayer's relation for ideal gas — always valid)
4. $\gamma = C_p/C_v$

### 6.2 Monoatomic Gases (He, Ne, Ar)

- DOF = 3 (only translational)
- U = (3/2)k_BT × N_A = **(3/2)RT** per mole

$$\boxed{C_v = \frac{3}{2}R = 12.5 \text{ J mol}^{-1}\text{K}^{-1}}$$
$$C_p = \frac{5}{2}R = 20.8 \text{ J mol}^{-1}\text{K}^{-1}$$
$$\gamma = \frac{5}{3} \approx 1.67$$

### 6.3 Diatomic Gases — Rigid Rotator (N₂, O₂, H₂ at room T)

- DOF = 5 (3 translational + 2 rotational)
- U = **(5/2)RT** per mole

$$\boxed{C_v = \frac{5}{2}R = 20.8 \text{ J mol}^{-1}\text{K}^{-1}}$$
$$C_p = \frac{7}{2}R = 29.1 \text{ J mol}^{-1}\text{K}^{-1}$$
$$\gamma = \frac{7}{5} = 1.4$$

### 6.4 Diatomic Gases — With Vibration (CO, or high T)

- DOF = 7 (5 + 2 from 1 vibrational mode)
- U = **(7/2)RT** per mole

$$C_v = \frac{7}{2}R, \quad C_p = \frac{9}{2}R, \quad \gamma = \frac{9}{7}$$

### 6.5 Polyatomic Gases (general: 3 trans + 3 rot + f_vib vibrational modes)

$$C_v = (3 + f)R, \quad C_p = (4 + f)R, \quad \gamma = \frac{4+f}{3+f}$$

Where f = number of vibrational modes.

> 🔑 **Note:** C_p − C_v = R is always true for any ideal gas, regardless of molecular structure.

### 6.6 Summary Table — Specific Heats

```
─────────────────────────────────────────────────────────────────────
 Gas Type           │  Cᵥ (J/mol·K) │  Cₚ (J/mol·K) │  Cₚ−Cᵥ │  γ
─────────────────────────────────────────────────────────────────────
 Monoatomic         │    12.5 (3R/2) │    20.8 (5R/2) │   8.31  │ 5/3 ≈ 1.67
 Diatomic (rigid)   │    20.8 (5R/2) │    29.1 (7R/2) │   8.31  │ 7/5 = 1.40
 Triatomic (linear) │    24.9 (3R)   │    33.2 (4R)   │   8.31  │ 4/3 ≈ 1.33
─────────────────────────────────────────────────────────────────────
```

These predicted values match experimental measurements well for many gases.

> ⚠️ **Discrepancies:** For polyatomic gases like Cl₂, C₂H₆, the experimental C_v > predicted value (rigid). This means vibrational modes are activated at those temperatures — agreement improves when vibrational modes are included.

### 6.7 Specific Heat Capacity of Solids

Each atom in a solid vibrates in 3D about its equilibrium position. Each direction has one vibrational mode (kinetic + potential → 2 quadratic terms → k_BT per mode).

$$U = 3k_BT \times N_A = 3RT \quad \text{(per mole)}$$
$$\boxed{C = \frac{dU}{dT} = 3R \approx 24.9 \text{ J mol}^{-1}\text{K}^{-1}}$$

This is the **Dulong-Petit Law** (also derived from thermodynamics, Ch. 11).

| Solid | Molar Specific Heat (J mol⁻¹ K⁻¹) |
|---|---|
| Aluminium | 24.4 |
| Copper | 24.5 |
| Lead | 26.5 |
| Silver | 25.5 |
| Tungsten | 24.9 |
| **Carbon** | **6.1 ← Exception!** |

> ⭐ **Carbon is an exception:** Its molar specific heat (6.1 J mol⁻¹ K⁻¹) is much less than 3R at room temperature — because carbon has very high Debye temperature; vibrational modes are quantum-frozen at room T.

---

## SECTION 7 — MEAN FREE PATH ⭐⭐⭐

### 7.1 Why Gases Don't Spread Instantly

Gas molecules at 300 K have v_rms ~ 500 m/s. Yet gas leaking from a cylinder takes considerable time to fill a room. Why? Because molecules of finite size undergo **frequent collisions**, deflecting their paths incessantly.

### 7.2 Definition and Formula

**Mean free path (l):** The average distance a molecule travels between two successive collisions.

Treating target molecules as stationary (simplified):
$$l = \frac{1}{n\pi d^2}$$

More exact treatment (all molecules moving):
$$\boxed{l = \frac{1}{\sqrt{2} \pi n d^2}} \quad \text{...(12.40)}$$

Where:
- n = number density (molecules per m³)
- d = diameter of the molecule

**Mean collision time:**
$$\tau = \frac{l}{\langle v \rangle} = \frac{1}{\sqrt{2} \pi n d^2 \langle v \rangle}$$

### 7.3 Numerical Estimate for Air at STP

At STP: n = 2.7 × 10²⁵ m⁻³, d = 2 × 10⁻¹⁰ m, ⟨v⟩ = 485 m/s

$$\tau = 6.1 \times 10^{-10} \text{ s}$$
$$l = 2.9 \times 10^{-7} \text{ m} \approx 1500 \times d$$

> 🔑 **Key relationships of mean free path:**
> - l ∝ 1/n (inversely proportional to number density)
> - l ∝ 1/d² (inversely proportional to molecular cross-section)
> - Mean free path >> interatomic distance >> molecular size (in a gas)
>   - Molecular diameter: d ~ 2 Å
>   - Interatomic distance: ~40 Å (20× d)
>   - Mean free path: ~2900 Å (1500× d, 100× interatomic distance)

> ⭐ **It is this large mean free path** (compared to molecular size and interatomic distance) **that distinguishes gaseous behaviour** — molecules travel long distances freely before colliding; hence gases expand to fill their containers.

### 7.4 Physical Significance

In a **highly evacuated tube**, n is very small → l can be as large as the length of the tube. This is the principle behind vacuum technology (Crookes tube, cathode ray tubes, etc.).

Using kinetic theory with mean free path, **viscosity, thermal conductivity and diffusion** of gases can be related to molecular parameters — this was how molecular sizes were first estimated.

---

## SECTION 8 — MAXWELL SPEED DISTRIBUTION (Conceptual) ⭐⭐

Although not in NCERT class 12 detail, it is important to know:

Not all molecules in a gas have the same speed. Maxwell derived the distribution of molecular speeds (Maxwell-Boltzmann distribution):

- **Most probable speed (v_p):** Speed at which distribution is maximum: $v_p = \sqrt{\frac{2k_BT}{m}}$
- **Mean speed (⟨v⟩):** Average of all molecular speeds: $\langle v \rangle = \sqrt{\frac{8k_BT}{\pi m}}$
- **RMS speed:** $v_{rms} = \sqrt{\frac{3k_BT}{m}}$

**Order:** v_p < ⟨v⟩ < v_rms

Ratio: $v_p : \langle v \rangle : v_{rms} = \sqrt{2} : \sqrt{8/\pi} : \sqrt{3} \approx 1.41 : 1.60 : 1.73$

---

## SECTION 9 — CONNECTING KINETIC THEORY WITH THERMODYNAMICS ⭐⭐⭐

### 9.1 Internal Energy Revisited

From kinetic theory:
- For an **ideal gas**: internal energy E depends ONLY on temperature (no PE between molecules)
- E = (f/2)Nk_BT where f = total DOF
- This confirms the result from thermodynamics (Ch. 11)

For a gas in a cylinder being compressed by a piston:
- The piston acts like a "bat" — it imparts energy to gas molecules on collision
- Each collision of a molecule with the moving piston increases the molecule's speed
- → **Temperature of compressed gas rises** (consistent with adiabatic heating)

### 9.2 PV = (2/3)E — Connecting to First Law

$$PV = \frac{2}{3}E \quad \Rightarrow \quad E = \frac{3}{2}PV = \frac{3}{2}\mu RT$$

This means: for any process involving an ideal gas, a change in temperature directly translates to a change in internal energy — fully consistent with the First Law framework developed in Ch. 11.

---

## 📋 QUICK REFERENCE — All Laws, Formulae, and Dimensional Formulae

```
IDEAL GAS EQUATION:
┌──────────────────────────────────────────────────────────────┐
│  PV = μRT = Nk_BT = nk_BTV                                  │
│  R = 8.314 J mol⁻¹ K⁻¹;  k_B = 1.38 × 10⁻²³ J K⁻¹       │
│  N_A = 6.02 × 10²³ mol⁻¹;  R = N_A k_B                    │
│  Molar volume at STP = 22.4 L                               │
└──────────────────────────────────────────────────────────────┘

PRESSURE OF IDEAL GAS:
┌──────────────────────────────────────────────────────────────┐
│  P = (1/3) n m v̄²    [n = number density]                  │
│  PV = (2/3) E         [E = total translational KE]         │
└──────────────────────────────────────────────────────────────┘

KINETIC INTERPRETATION OF TEMPERATURE:
┌──────────────────────────────────────────────────────────────┐
│  ½ m v̄² = (3/2) k_B T  (per molecule)                     │
│  v_rms = √(3k_BT/m) = √(3RT/M₀)                           │
│  v_rms ∝ √T; v_rms ∝ 1/√m (at fixed T)                   │
└──────────────────────────────────────────────────────────────┘

LAW OF EQUIPARTITION:
┌──────────────────────────────────────────────────────────────┐
│  Each translational/rotational DOF: ½k_BT per molecule     │
│  Each vibrational mode: k_BT per molecule (2 quadratic terms)│
└──────────────────────────────────────────────────────────────┘

SPECIFIC HEATS (ideal gas):
┌──────────────────────────────────────────────────────────────┐
│  Cₚ − Cᵥ = R  (always, for any ideal gas)                  │
│  Monoatomic: Cᵥ = 3R/2; Cₚ = 5R/2; γ = 5/3               │
│  Diatomic (rigid): Cᵥ = 5R/2; Cₚ = 7R/2; γ = 7/5         │
│  Diatomic (+vib): Cᵥ = 7R/2; Cₚ = 9R/2; γ = 9/7          │
│  Polyatomic: Cᵥ = (3+f)R; Cₚ = (4+f)R; γ = (4+f)/(3+f)  │
│  Solid (Dulong-Petit): C = 3R ≈ 24.9 J mol⁻¹ K⁻¹          │
└──────────────────────────────────────────────────────────────┘

MEAN FREE PATH:
┌──────────────────────────────────────────────────────────────┐
│  l = 1/(√2 π n d²)     [exact: all molecules moving]       │
│  l ∝ 1/n;  l ∝ 1/d²                                        │
│  For air at STP: l ≈ 2.9 × 10⁻⁷ m ≈ 1500 × d             │
└──────────────────────────────────────────────────────────────┘
```

---

## ⚡ POINTS TO PONDER (High-Yield for Exams)

1. **Temperature = average translational KE per molecule.** This is the microscopic meaning of temperature. A thermometer works by reaching thermal equilibrium — its temperature equals the average KE of its molecules.

2. **At the same temperature, all gases have the same average KE per molecule** — regardless of mass, type, or whether monoatomic/diatomic. But lighter molecules have higher v_rms.

3. **Internal energy of an ideal gas depends only on temperature** — NOT on pressure or volume (because there are no intermolecular PE contributions in an ideal gas). This is consistent with kinetic theory.

4. **PV = (2/3)E** — The product PV of any ideal gas at a given temperature equals (2/3) of its total translational KE.

5. **Vibrational modes contribute TWICE** as much energy as translational/rotational modes (k_BT vs ½k_BT) because they have BOTH kinetic and potential energy components.

6. **Carbon is the main exception to Dulong-Petit.** Its molar specific heat at room temperature (6.1 J/mol·K) is far below 3R (24.9 J/mol·K). Quantum effects are responsible.

7. **Mean free path depends on n and d only** — not on temperature directly (though T affects n if P is constant). In a highly evacuated tube, l can be metres long.

8. **Boyle's law, Charles' law, and Avogadro's hypothesis** all follow directly from PV = Nk_BT — they are not independent postulates but consequences of the kinetic theory.

9. **Dalton's law of partial pressures** follows from the kinetic theory of mixtures — at the same temperature, all gas molecules have the same average KE, so partial pressures just add up.

10. **Ideal gas behaviour** is best at low pressure (molecules far apart → forces negligible) and high temperature (high KE >> intermolecular PE). At high pressure or near the liquefaction point, real gas deviations are significant.

11. **v_rms vs. v_mean vs. v_most probable:** All are proportional to √(T/m) but with different numerical prefactors. For exam: v_p < v_mean < v_rms.

12. **The equipartition theorem is classical** — it fails at low temperatures where quantum effects freeze out certain degrees of freedom. This explains why C_v of diatomic gases approaches (3/2)R at very low T (rotational modes freeze) and why C_v of solids decreases to zero at T → 0 K.

---

## 📊 Dimensional Formulae Summary

| Quantity | Symbol | Dimensional Formula | SI Unit |
|---|---|---|---|
| Pressure | P | [ML⁻¹T⁻²] | Pa (N m⁻²) |
| Number density | n | [L⁻³] | m⁻³ |
| Boltzmann constant | k_B | [ML²T⁻²K⁻¹] | J K⁻¹ |
| RMS speed | v_rms | [LT⁻¹] | m s⁻¹ |
| Mean free path | l | [L] | m |
| Molar specific heat | C_v, C_p | [ML²T⁻²mol⁻¹K⁻¹] | J mol⁻¹ K⁻¹ |
| Universal gas constant | R | [ML²T⁻²mol⁻¹K⁻¹] | J mol⁻¹ K⁻¹ |
| Internal energy | E, U | [ML²T⁻²] | J |

---

## 🔢 Key Constants

| Quantity | Value |
|---|---|
| Universal gas constant R | 8.314 J mol⁻¹ K⁻¹ |
| Boltzmann constant k_B | 1.38 × 10⁻²³ J K⁻¹ |
| Avogadro's number N_A | 6.02 × 10²³ mol⁻¹ |
| Molar volume at STP | 22.4 L = 22.4 × 10⁻³ m³ |
| Molecular diameter (typical) | ~2 Å = 2 × 10⁻¹⁰ m |
| Cᵥ (monoatomic) | 3R/2 = 12.5 J mol⁻¹ K⁻¹ |
| Cᵥ (rigid diatomic) | 5R/2 = 20.8 J mol⁻¹ K⁻¹ |
| C (solid, Dulong-Petit) | 3R ≈ 24.9 J mol⁻¹ K⁻¹ |
| v_rms for N₂ at 300 K | ~516 m s⁻¹ |
| Mean free path (air, STP) | ~2.9 × 10⁻⁷ m |

---

*End of Notes — Physics Chapter 12 | Total Sections: 9*