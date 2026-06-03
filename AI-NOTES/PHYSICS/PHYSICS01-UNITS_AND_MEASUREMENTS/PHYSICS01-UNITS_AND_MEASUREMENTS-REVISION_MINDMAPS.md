# ⚡ CHAPTER 1 — RAPID REVISION + MIND MAPS
> **Units and Measurement** | Board · NEET · JEE

---

## 📏 The 7 SI Base Units — Absolute Must-Memorise

| Quantity | Unit | Symbol | Memory Hook |
|:---|:---:|:---:|:---|
| Length | metre | **m** | "*Measure a **m**arathon*" |
| Mass | kilogram | **kg** | "*Kilo**g**rams of groceries*" |
| Time | second | **s** | "*Every **s**econd counts*" |
| Electric current | ampere | **A** | "***A**mpère — **A**ndré Marie*" |
| Temperature | kelvin | **K** | "***K**elvin — **K**-scale, no negatives*" |
| Amount of substance | mole | **mol** | "***Mol**ecular counting*" |
| Luminous intensity | candela | **cd** | "*Can**d**ela = can**d**le*" |

> [!info] **+ 2 Supplementary (Dimensionless)**
> **radian** (rad) for plane angle · **steradian** (sr) for solid angle

---

## 🔢 Significant Figures — Quick Rules

| Type of Digit | Significant? | Example | SF Count |
|:---|:---:|:---:|:---:|
| All non-zero digits | ✅ YES | 285.7 | 4 |
| Zeros between non-zero digits | ✅ YES | 1005 | 4 |
| Leading zeros | ❌ NO | 0.0023 | 2 |
| Trailing zeros, **no decimal** | ❌ NO | 2500 | 2 |
| Trailing zeros, **with decimal** | ✅ YES | 2.500 | 4 |
| Scientific notation coefficient | ✅ ALL | $4.700 \times 10^3$ | 4 |

> [!tip] Calculation Rules
> - **Add / Subtract** → match **DECIMAL PLACES** of least precise value
> - **Multiply / Divide** → match **SF COUNT** of least precise value
> - **Rounding when digit = 5** → round to **EVEN** preceding digit

---

## 📐 Key Dimensional Formulae — Know Cold ⭐

| Quantity | Dimensional Formula |
|:---|:---:|
| Velocity | $[M^0 L T^{-1}]$ |
| Acceleration | $[M^0 L T^{-2}]$ |
| Force | $[M L T^{-2}]$ |
| Work / Energy | $[M L^2 T^{-2}]$ |
| Power | $[M L^2 T^{-3}]$ |
| Momentum / Impulse | $[M L T^{-1}]$ |
| Pressure / Stress | $[M L^{-1} T^{-2}]$ |
| Density | $[M L^{-3} T^0]$ |
| Frequency | $[M^0 L^0 T^{-1}]$ |
| Gravitational constant $G$ | $[M^{-1} L^3 T^{-2}]$ |
| Planck's constant $h$ | $[M L^2 T^{-1}]$ |
| Surface tension | $[M T^{-2}]$ |
| Viscosity coefficient | $[M L^{-1} T^{-1}]$ |

---

## ⚠️ Dimension Twins

| Dimensional Formula | Physical Quantities |
|:---:|:---|
| $[M L^2 T^{-2}]$ | Work, Energy, Torque, Heat |
| $[M L T^{-1}]$ | Linear momentum, Impulse |
| $[T^{-1}]$ | Frequency, Angular velocity, Radioactive decay constant |
| $[M L^{-1} T^{-2}]$ | Pressure, Stress, Modulus of Elasticity, Energy density |

> [!warning] Dimensional analysis **CANNOT** distinguish between quantities with identical dimensions.

---

## 🔑 Critical Conversion Facts

| Conversion | Value |
|:---|:---|
| $1 \text{ km h}^{-1}$ | $= \dfrac{5}{18} \text{ m s}^{-1} \approx 0.278 \text{ m s}^{-1}$ |
| $1 \text{ m s}^{-1}$ | $= \dfrac{18}{5} \text{ km h}^{-1} = 3.6 \text{ km h}^{-1}$ |
| 1 light year | $= 9.46 \times 10^{15}$ m |
| 1 Ångström (Å) | $= 10^{-10}$ m |
| 1 fermi (fm) | $= 10^{-15}$ m |
| 1 atm | $= 1.013 \times 10^5$ Pa |
| 1 year | $\approx \pi \times 10^7$ s *(useful approximation)* |
| 1 calorie | $= 4.2$ J |

---

## ⚡ Limitations of Dimensional Analysis

> [!danger] 5 Hard Limits
> 1. Cannot find dimensionless constants ($\pi$, $\tfrac{1}{2}$, $2$, etc.)
> 2. Cannot work with more than **3 independent variables** (in mechanics)
> 3. Cannot distinguish between **same-dimension quantities** (work vs. torque)
> 4. Cannot handle $\sin$, $\log$, $\exp$ functions (arguments must be dimensionless)
> 5. Dimensional correctness does **not** guarantee physical correctness

---
---


# 🗺️ MIND MAP 1 — Chapter Overview

```mermaid
flowchart TD
    ROOT(["UNITS AND MEASUREMENT"])

    ROOT --> SI["MEASUREMENT AND SI UNITS"]
    ROOT --> SF["SIGNIFICANT FIGURES"]
    ROOT --> DA["DIMENSIONAL ANALYSIS"]

    SI --> SI1["7 Base Units: m, kg, s, A, K, mol, cd"]
    SI --> SI2["Derived Units — from base units"]
    SI --> SI3["Supplementary: radian, steradian"]
    SI --> SI4["Historical Systems: CGS, FPS, MKS"]

    SF --> SF1["Rules for Counting: non-zero, leading, trailing"]
    SF --> SF2["Add/Sub: match decimal places"]
    SF --> SF3["Mul/Div: match SF count"]
    SF --> SF4["Scientific Notation: all coefficient digits are SF"]
    SF --> SF5["Order of Magnitude: power of 10"]

    DA --> DA1["Dimensional Formula: powers of base quantities"]
    DA --> DA2["App 1: Check equation consistency"]
    DA --> DA3["App 2: Derive relations between quantities"]
    DA --> DA4["App 3: Convert units between systems"]
    DA --> DA5["Limit: cannot find dimensionless constants"]
    DA --> DA6["Limit: max 3 variables in mechanics"]

    style ROOT fill:#2c3e50,color:#ecf0f1,stroke:#3498db,stroke-width:2px
    style SI fill:#1e3a5f,color:#aed6f1,stroke:#2980b9
    style SF fill:#1a3d2e,color:#a9dfbf,stroke:#27ae60
    style DA fill:#3d2a1a,color:#f0d0a8,stroke:#e67e22
```

---

# 🗺️ MIND MAP 2 — SI Base Units

```mermaid
flowchart LR
    ROOT(["SI BASE UNITS — 7 total"])

    ROOT --> M["metre — symbol: m"]
    ROOT --> KG["kilogram — symbol: kg"]
    ROOT --> S["second — symbol: s"]
    ROOT --> A["ampere — symbol: A"]
    ROOT --> K["kelvin — symbol: K"]
    ROOT --> MOL["mole — symbol: mol"]
    ROOT --> CD["candela — symbol: cd"]

    M --> MD["Defined by: speed of light c = 299,792,458 m/s"]
    KG --> KGD["Defined by: Planck constant h = 6.626 x 10^-34 J s"]
    S --> SD["Defined by: caesium-133 frequency = 9,192,631,770 Hz"]
    A --> AD["Defined by: elementary charge e = 1.602 x 10^-19 C"]
    K --> KD["Defined by: Boltzmann constant k = 1.381 x 10^-23 J/K"]
    MOL --> MOLD["Defined by: Avogadro constant Na = 6.022 x 10^23 /mol"]
    CD --> CDD["Defined by: luminous efficacy at 540 x 10^12 Hz"]

    style ROOT fill:#2c3e50,color:#ecf0f1,stroke:#3498db
    style M fill:#1a3a5c,color:#aee6ff,stroke:#3498db
    style KG fill:#3a1a1a,color:#ffaaaa,stroke:#e74c3c
    style S fill:#1a3a1a,color:#aaffaa,stroke:#2ecc71
    style A fill:#3a3a1a,color:#ffeeaa,stroke:#f39c12
    style K fill:#2a1a3a,color:#ddaaff,stroke:#9b59b6
    style MOL fill:#1a3a3a,color:#aaffee,stroke:#1abc9c
    style CD fill:#3a2a1a,color:#ffd0aa,stroke:#e67e22
```

---

# 🗺️ MIND MAP 3 — Significant Figures Decision Tree

```mermaid
flowchart TD
    START(["Is the digit in question a ZERO?"])

    START -->|"NO — non-zero digit"| NZ["ALWAYS SIGNIFICANT"]
    NZ --> NZX["e.g. 285.3 has 4 SF"]

    START -->|"YES — it is a zero"| Z1{"Where is the zero?"}

    Z1 -->|"Between two non-zero digits"| BETWEEN["SIGNIFICANT — e.g. 2005 has 4 SF"]

    Z1 -->|"Before first non-zero digit"| LEADING["NOT SIGNIFICANT — leading zero"]
    LEADING --> LEADX["e.g. 0.0023 has 2 SF"]

    Z1 -->|"After last non-zero digit"| TRAILING{"Does the number have a decimal point?"}

    TRAILING -->|"YES"| TRAIL_DEC["SIGNIFICANT — trailing zero with decimal"]
    TRAIL_DEC --> TRAIL_DECX["e.g. 3.500 has 4 SF"]

    TRAILING -->|"NO"| TRAIL_NODEC["NOT SIGNIFICANT — trailing zero, no decimal"]
    TRAIL_NODEC --> TRAIL_NODECX["e.g. 2500 has 2 SF"]

    TRAILING -->|"Scientific Notation"| SCI["ALL digits in coefficient are SIGNIFICANT"]
    SCI --> SCIX["e.g. 4.700 x 10^3 has 4 SF"]

    style START fill:#2c3e50,color:#ecf0f1
    style NZ fill:#1a3d2e,color:#a8f0c6,stroke:#27ae60
    style BETWEEN fill:#1a3d2e,color:#a8f0c6,stroke:#27ae60
    style TRAIL_DEC fill:#1a3d2e,color:#a8f0c6,stroke:#27ae60
    style SCI fill:#1a3d2e,color:#a8f0c6,stroke:#27ae60
    style LEADING fill:#3d1a1a,color:#f0a8a8,stroke:#e74c3c
    style TRAIL_NODEC fill:#3d1a1a,color:#f0a8a8,stroke:#e74c3c
```

### Arithmetic Operations Quick Reference

| Operation | Rule | Example | Answer |
|:---:|:---|:---|:---:|
| **Add/Subtract** | Match decimal places of least precise | $436.32 + 227.2 + 0.301$ | $663.8$ g |
| **Multiply/Divide** | Match SF count of least precise | $4.237 \div 2.51$ | $1.69$ g/cm³ |

---

# 🗺️ MIND MAP 4 — Dimensional Analysis Applications Tree

```mermaid
flowchart TD
    ROOT(["DIMENSIONAL ANALYSIS"])

    ROOT --> A1["APPLICATION 1 — Check Equation Consistency"]
    ROOT --> A2["APPLICATION 2 — Derive Formulae"]
    ROOT --> A3["APPLICATION 3 — Unit Conversion"]
    ROOT --> LIM["LIMITATIONS"]

    A1 --> P1["Principle of Homogeneity"]
    P1 --> P1A["Same dimensions on all terms: possibly correct"]
    P1 --> P1B["Different dimensions on any term: DEFINITELY wrong"]

    A2 --> D1["Assume Q = k times x^a times y^b times z^c"]
    D1 --> D2["Write dimensional formula for each side"]
    D2 --> D3["Equate powers of M, L, T"]
    D3 --> D4["Solve for a, b, c"]
    D4 --> D5["k is dimensionless — cannot be found this way"]

    A3 --> C1["Formula: n2 = n1 times (M1/M2)^a times (L1/L2)^b times (T1/T2)^c"]
    C1 --> C2["Example: 1 J = 10^7 erg"]
    C1 --> C3["Example: 1 km/h = 5/18 m/s"]

    LIM --> L1["Cannot find dimensionless constants"]
    LIM --> L2["Max 3 independent variables in mechanics"]
    LIM --> L3["Cannot distinguish same-dimension quantities"]
    LIM --> L4["Arguments of sin, log, exp must be dimensionless"]

    style ROOT fill:#2c3e50,color:#ecf0f1,stroke:#3498db
    style A1 fill:#1e3a5f,color:#aed6f1
    style A2 fill:#1a3d2e,color:#a9dfbf
    style A3 fill:#3d2a1a,color:#f0d0a8
    style LIM fill:#3d1a1a,color:#f5b7b1
    style D5 fill:#3d1a1a,color:#f5b7b1,stroke:#e74c3c
```

---

# 🗺️ MIND MAP 5 — Physical Quantities and Dimensions

```mermaid
flowchart LR
    BASE(["MECHANICS — Base: M, L, T"])

    BASE --> KIN["KINEMATICS"]
    KIN --> K1["Displacement — dim: L"]
    KIN --> K2["Velocity — dim: LT^-1"]
    KIN --> K3["Acceleration — dim: LT^-2"]

    BASE --> DYN["DYNAMICS — Force = MLT^-2"]
    DYN --> D1["Work and Energy — dim: ML^2T^-2"]
    DYN --> D2["Momentum and Impulse — dim: MLT^-1"]
    DYN --> D3["Torque — dim: ML^2T^-2  SAME as Work"]
    DYN --> D4["Pressure — dim: ML^-1T^-2  = Stress = Energy density"]
    D1 --> D5["Power — dim: ML^2T^-3"]

    BASE --> SPEC["SPECIAL CONSTANTS"]
    SPEC --> S1["G Gravitational — dim: M^-1 L^3 T^-2"]
    SPEC --> S2["h Planck — dim: ML^2T^-1  same as angular momentum"]
    SPEC --> S3["Surface tension — dim: MT^-2"]
    SPEC --> S4["Viscosity — dim: ML^-1T^-1"]
    SPEC --> S5["Frequency and angular velocity — both dim: T^-1"]

    style BASE fill:#2c3e50,color:#ecf0f1
    style SPEC fill:#2c3e50,color:#ecf0f1
    style D3 fill:#5c2c2c,color:#ffd0d0
    style D1 fill:#5c2c2c,color:#ffd0d0
```

---

# 🗺️ MIND MAP 6 — SI Prefixes (Powers of 10)

```mermaid
flowchart LR
    ROOT(["SI PREFIXES"])

    ROOT --> LARGE["LARGE — positive powers"]
    ROOT --> SMALL["SMALL — negative powers"]

    LARGE --> T["tera  T  = 10^12"]
    LARGE --> G["giga  G  = 10^9"]
    LARGE --> M["mega  M  = 10^6"]
    LARGE --> K["kilo  k  = 10^3"]
    LARGE --> H["hecto h  = 10^2"]
    LARGE --> DA["deka  da = 10^1"]

    SMALL --> D["deci  d  = 10^-1"]
    SMALL --> C["centi c  = 10^-2"]
    SMALL --> MI["milli m  = 10^-3"]
    SMALL --> MU["micro mu = 10^-6"]
    SMALL --> N["nano  n  = 10^-9"]
    SMALL --> P["pico  p  = 10^-12"]
    SMALL --> F["femto f  = 10^-15"]
    SMALL --> A["atto  a  = 10^-18"]

    style ROOT fill:#2c3e50,color:#ecf0f1
    style LARGE fill:#1a3a5c,color:#aee6ff
    style SMALL fill:#1a3d2e,color:#a8f0c6
```

> [!warning] Squared/Cubed Prefix Trap
> $$1 \text{ km} = 10^3 \text{ m} \implies 1 \text{ km}^2 = 10^6 \text{ m}^2 \implies 1 \text{ km}^3 = 10^9 \text{ m}^3$$
> $$1 \text{ cm} = 10^{-2} \text{ m} \implies 1 \text{ cm}^2 = 10^{-4} \text{ m}^2 \implies 1 \text{ cm}^3 = 10^{-6} \text{ m}^3$$

---

# 🗺️ MIND MAP 7 — Pendulum Derivation: Step by Step

```mermaid
flowchart TD
    S1(["Period T depends on: length l, mass m, gravity g"])

    S1 --> S2["STEP 1 — Write the assumption"]
    S2 --> S2A["T = k times l^x times g^y times m^z"]
    S2A --> S2B["k is a dimensionless constant"]

    S2B --> S3["STEP 2 — Write dimensions on both sides"]
    S3 --> S3A["Left side: T^1"]
    S3 --> S3B["Right side: L^x times LT^-2 to the y times M^z"]
    S3B --> S3C["Simplified: M^z times L^(x+y) times T^(-2y)"]

    S3C --> S4["STEP 3 — Equate powers of each base dimension"]
    S4 --> EQ1["Power of M: z = 0"]
    S4 --> EQ2["Power of T: -2y = 1, so y = -1/2"]
    S4 --> EQ3["Power of L: x + y = 0, so x = 1/2"]

    EQ1 --> R1["T is INDEPENDENT of mass m"]
    EQ2 --> RESULT["RESULT: T = k times sqrt(l/g)"]
    EQ3 --> RESULT

    RESULT --> OK["Actual formula: T = 2pi times sqrt(l/g)"]
    RESULT --> CANT["k = 2pi CANNOT be found by dimensional analysis"]

    style S1 fill:#1e3a5f,color:#aed6f1
    style RESULT fill:#1a3d2e,color:#a9dfbf,stroke:#27ae60
    style OK fill:#1a3d2e,color:#a9dfbf,stroke:#27ae60
    style CANT fill:#3d1a1a,color:#f5b7b1,stroke:#e74c3c
    style R1 fill:#1a3d2e,color:#a9dfbf,stroke:#27ae60
```

---

*End of Rapid Revision + Mind Maps — Ch. 1: Units and Measurement*
*Exam Tags: Board · NEET · JEE Mains · JEE Advanced*