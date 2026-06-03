# ⚡ CHAPTER 1 — RAPID REVISION + MIND MAPS
> **Some Basic Concepts of Chemistry** | Board · NEET · JEE

---

## 🔬 Key Scientists & Their Contributions

| Scientist | Year | Contribution |
|:---|:---:|:---|
| Acharya Kanda | 600 BCE | Atomic theory (Paramānu) — 2500 yrs before Dalton |
| Antoine Lavoisier | 1789 | Law of Conservation of Mass |
| Joseph Proust | — | Law of Definite Proportions |
| John Dalton | 1803 | Law of Multiple Proportions + Atomic Theory |
| Gay Lussac | 1808 | Law of Gaseous Volumes |
| Amedeo Avogadro | 1811 | Avogadro's Law; atoms vs molecules distinction |
| Chakrapani | — | Mercury sulphide; first soap using mustard oil + alkali |
| Nagarjuna | — | Mercury compounds (Rasratnakar); metal extraction |

---

## ⚖️ Laws of Chemical Combination — At a Glance

| # | Law | Proposer | Key Statement |
|:---:|:---|:---|:---|
| 1 | Conservation of Mass | Lavoisier, 1789 | Reactant mass = Product mass. Matter never created or destroyed |
| 2 | Definite Proportions | Proust | A compound ALWAYS has same element ratio by mass |
| 3 | Multiple Proportions | Dalton, 1803 | Two elements → multiple compounds → O masses in ratio 16:32 = 1:2 |
| 4 | Gay Lussac's Law | Gay Lussac, 1808 | Gases combine in simple volume ratios at same T and P |
| 5 | Avogadro's Law | Avogadro, 1811 | Equal volumes of gases (same T and P) = equal number of molecules |

---

## ⚛️ Mole Concept — All Formulas

$$
n = \frac{m}{M} = \frac{N}{N_A} = \frac{V(\text{gas at STP})}{22.7 \text{ L}}
$$

- $N_A = 6.022 \times 10^{23} \text{ mol}^{-1}$ (Avogadro's constant)
- 1 amu = 1.66056 × 10⁻²⁴ g
- Molar mass (g mol⁻¹) = numerically equal to atomic/molecular mass in u

---

## 🧫 % Composition and Formula

$$
\text{Mass \% of element} = \frac{\text{Mass of element in 1 mol}}{\text{Molar mass of compound}} \times 100
$$

$$
n_{\text{(EF to MF)}} = \frac{\text{Molar Mass}}{\text{EF mass}} \quad \Rightarrow \quad \text{Molecular Formula} = n \times \text{EF}
$$

---

## 🔢 Significant Figures — Quick Rules

| Type of Digit | Significant? | Example | SF Count |
|:---|:---:|:---:|:---:|
| All non-zero digits | ✅ YES | 285 cm | 3 |
| Leading zeros | ❌ NO | 0.0052 | 2 |
| Zeros between non-zero digits | ✅ YES | 2005 | 4 |
| Trailing zeros WITH decimal | ✅ YES | 1.200 | 4 |
| Trailing zeros, no decimal | ❌ NO | 1200 | 2 |

> [!tip] Calculation Rules
> - **Add/Subtract** → match **decimal places** of least precise value
> - **Multiply/Divide** → match **SF count** of least precise value

---

## 💧 Solution Concentrations

| Type | Formula | Temp Dependent? |
|:---|:---|:---:|
| Molarity (M) | $n(\text{solute}) / V(L)$ | **YES** ⚠️ |
| Molality (m) | $n(\text{solute}) / \text{mass(kg of solvent)}$ | NO |
| Mole fraction (χ) | $n_A / (n_A + n_B)$ | NO |
| Mass % | mass(solute)/mass(solution) × 100 | NO |

**Dilution**: $M_1 V_1 = M_2 V_2$

---

---

# 🗺️ MIND MAP 1 — Big Picture of Chapter 1

```mermaid
flowchart TD
    ROOT(["SOME BASIC CONCEPTS OF CHEMISTRY"])

    ROOT --> MAT["MATTER"]
    ROOT --> MEA["MEASUREMENT"]
    ROOT --> QCH["QUANTITATIVE CHEMISTRY"]

    MAT --> S1["States — Solid, Liquid, Gas"]
    MAT --> S2["Classification"]
    S2 --> S2A["Mixture — variable composition"]
    S2 --> S2B["Pure Substance — fixed composition"]
    S2B --> S2C["Element — one atom type"]
    S2B --> S2D["Compound — two or more elements"]

    MEA --> M1["SI Units — 7 base units"]
    MEA --> M2["Uncertainty in Measurement"]
    M2 --> M2A["Scientific Notation"]
    M2 --> M2B["Significant Figures"]
    M2 --> M2C["Dimensional Analysis"]
    M2 --> M2D["Precision vs Accuracy"]

    QCH --> Q1["Mole Concept"]
    Q1 --> Q1A["n = m/M = N/Na = V/22.7"]
    QCH --> Q2["Stoichiometry"]
    Q2 --> Q2A["Balanced equations"]
    Q2 --> Q2B["Limiting Reagent"]
    QCH --> Q3["Solutions"]
    Q3 --> Q3A["Molarity — Molality"]
    Q3 --> Q3B["Mole fraction — Mass%"]

    style ROOT fill:#2c3e50,color:#ecf0f1,stroke:#3498db,stroke-width:2px
    style MAT fill:#1e3a5f,color:#aed6f1,stroke:#2980b9
    style MEA fill:#1a3d2e,color:#a9dfbf,stroke:#27ae60
    style QCH fill:#3d2a1a,color:#f0d0a8,stroke:#e67e22
```

---

# 🗺️ MIND MAP 2 — The Mole Concept (Central Hub)

```mermaid
flowchart TD
    AMU["1 amu = 1/12 x mass of C-12"] --> ATMAS["ATOMIC MASS (u)"]
    ATMAS --> ATMAS2["Average accounts for isotopes"]
    ATMAS2 --> MOLMAS["MOLAR MASS (M)"]
    MOLMAS --> MOLMAS2["g/mol numerically = u"]

    MOLMAS2 --> MOLES["MOLES (n) — the central unit"]

    MOLES --> MASS["MASS (m)"]
    MASS --> MASSA["m = n x M"]
    MASS --> MASSB["n = m / M"]

    MOLES --> NUM["NUMBER OF PARTICLES (N)"]
    NUM --> NUMA["N = n x Na"]
    NUM --> NUMB["n = N / Na"]

    MOLES --> VOL["VOLUME of gases at STP"]
    VOL --> VOLA["V = n x 22.7 L"]

    MOLES --> CONC["CONCENTRATION"]
    CONC --> CONCA["Molarity M = n/V"]
    CONC --> CONCB["Molality m = n/kg"]
    CONC --> CONCC["Mole fraction"]

    MOLES --> FORM["% COMPOSITION and FORMULA"]
    FORM --> FORMA["Empirical Formula"]
    FORMA --> FORMB["Molecular Formula"]

    style MOLES fill:#1a3d2e,color:#a9dfbf,stroke:#27ae60,stroke-width:2px
    style MASS fill:#1e3a5f,color:#aed6f1
    style NUM fill:#3d2a1a,color:#f0d0a8
    style VOL fill:#2c3e50,color:#ecf0f1
    style CONC fill:#3d1a3a,color:#f0a8e0
    style FORM fill:#1a1a3d,color:#d0d0ff
```

---

# 🗺️ MIND MAP 3 — Laws of Chemical Combination

```mermaid
flowchart TD
    ROOT(["LAWS OF CHEMICAL COMBINATION"])

    ROOT --> L1["1. Conservation of Mass"]
    ROOT --> L2["2. Definite Proportions"]
    ROOT --> L3["3. Multiple Proportions"]
    ROOT --> L4["4. Gay Lussac's Law"]
    ROOT --> L5["5. Avogadro's Law"]

    L1 --> L1A["Lavoisier 1789"]
    L1A --> L1B["Mass of products = mass of reactants"]
    L1B --> L1C["Basis for balancing equations"]

    L2 --> L2A["Proust"]
    L2A --> L2B["Same compound — same element ratio always"]
    L2B --> L2C["Confirmed by cupric carbonate experiments"]

    L3 --> L3A["Dalton 1803"]
    L3A --> L3B["Two elements form multiple compounds"]
    L3B --> L3C["Example: H2O vs H2O2 — O ratio = 1:2"]

    L4 --> L4A["Gay Lussac 1808"]
    L4A --> L4B["Gases combine in simple volume ratios"]
    L4B --> L4C["Example: H2:O2:H2O = 2:1:2"]

    L5 --> L5A["Avogadro 1811"]
    L5A --> L5B["Equal volumes at same T and P = equal molecules"]
    L5B --> L5C["Explained Gay Lussac's Law"]
    L5C --> L5D["Led to Dalton's Atomic Theory"]

    style ROOT fill:#2c3e50,color:#ecf0f1,stroke:#3498db
    style L1 fill:#1e3a5f,color:#aed6f1
    style L2 fill:#1a3d2e,color:#a9dfbf
    style L3 fill:#3d2a1a,color:#f0d0a8
    style L4 fill:#3d1a1a,color:#f5b7b1
    style L5 fill:#1a1a3d,color:#d0d0ff
```

---

# 🗺️ MIND MAP 4 — Classification of Matter (Detailed)

```mermaid
flowchart TD
    ROOT(["MATTER"])

    ROOT --> MIX["MIXTURE — variable composition"]
    ROOT --> PURE["PURE SUBSTANCE — fixed composition"]

    MIX --> HOM["HOMOGENEOUS — uniform"]
    MIX --> HET["HETEROGENEOUS — non-uniform"]

    PURE --> EL["ELEMENT — one atom type"]
    PURE --> COM["COMPOUND — 2+ elements, fixed ratio"]

    HOM --> HOM1["Examples: air, salt solution, vinegar, alloys"]
    HOM --> HOM2["Separated by physical methods — distillation, filtration"]

    HET --> HET1["Examples: soil, sand + dirt, oil + water"]
    HET --> HET2["Separated by physical methods — hand-picking, filtration"]

    EL --> EL1["Atomic: Na, Cu, Fe, Au"]
    EL --> EL2["Molecular: H2, O2, N2, Cl2"]

    COM --> COM1["Examples: H2O, NaCl, CO2, NH3, C6H12O6"]
    COM --> COM2["Separated only by chemical methods"]

    style ROOT fill:#2c3e50,color:#ecf0f1,stroke:#3498db
    style MIX fill:#1e3a5f,color:#aed6f1
    style PURE fill:#1a3d2e,color:#a9dfbf
    style HOM fill:#1a2a3d,color:#cce5ff
    style HET fill:#1a2a3d,color:#cce5ff
    style EL fill:#3d2a1a,color:#f0d0a8
    style COM fill:#3d1a3a,color:#f0a8e0
```

---

# 🗺️ MIND MAP 5 — Dalton's Atomic Theory: Postulates, Successes and Failures

```mermaid
flowchart TD
    ROOT(["DALTON'S ATOMIC THEORY 1808"])

    ROOT --> POST["POSTULATES"]
    ROOT --> SUC["EXPLAINED"]
    ROOT --> FAIL["FAILED TO EXPLAIN"]

    POST --> P1["Atoms are indivisible"]
    POST --> P2["Same element = same mass"]
    POST --> P3["Fixed ratio of atoms forms compounds"]
    POST --> P4["Atoms rearrange in reactions — not created or destroyed"]

    SUC --> S1["Conservation of Mass"]
    SUC --> S2["Definite Proportions"]
    SUC --> S3["Multiple Proportions"]

    FAIL --> F1["Gay Lussac's Law of Gaseous Volumes"]
    FAIL --> F2["Isotopes — same element, different mass"]
    FAIL --> F3["Isobars — different elements, same mass"]
    FAIL --> F4["Why atoms combine — valence not explained"]
    FAIL --> F5["Atoms are NOT truly indivisible"]

    style ROOT fill:#2c3e50,color:#ecf0f1,stroke:#3498db
    style POST fill:#1e3a5f,color:#aed6f1
    style SUC fill:#1a3d2e,color:#a9dfbf,stroke:#27ae60
    style FAIL fill:#3d1a1a,color:#f5b7b1,stroke:#e74c3c
```

---

# 🗺️ MIND MAP 6 — Concentration of Solutions

```mermaid
flowchart TD
    ROOT(["CONCENTRATION OF SOLUTIONS"])

    ROOT --> MASP["MASS PERCENT (w/w%)"]
    ROOT --> MOL["MOLARITY (M)"]
    ROOT --> MOLAL["MOLALITY (m)"]
    ROOT --> MOLF["MOLE FRACTION (chi)"]

    MASP --> MP1["mass of solute / mass of solution x 100"]
    MASP --> MP2["Temperature INDEPENDENT"]

    MOL --> MO1["mol solute / volume of solution (L)"]
    MOL --> MO2["Temperature DEPENDENT"]
    MOL --> MO3["Dilution: M1V1 = M2V2"]

    MOLAL --> ML1["mol solute / mass of solvent (kg)"]
    MOLAL --> ML2["Temperature INDEPENDENT"]
    MOLAL --> ML3["Preferred for colligative properties"]

    MOLF --> MF1["nA / (nA + nB)"]
    MOLF --> MF2["Dimensionless"]
    MOLF --> MF3["chi-A + chi-B = 1 always"]

    style ROOT fill:#2c3e50,color:#ecf0f1,stroke:#3498db
    style MASP fill:#1e3a5f,color:#aed6f1
    style MOL fill:#3d1a1a,color:#f5b7b1,stroke:#e74c3c
    style MOLAL fill:#1a3d2e,color:#a9dfbf,stroke:#27ae60
    style MOLF fill:#3d2a1a,color:#f0d0a8
```

> [!warning] Temperature Dependence Trap
> Only **Molarity** changes with temperature (because volume changes). Molality, mole fraction, and mass% are all temperature-independent.

---

# 🗺️ MIND MAP 7 — Empirical to Molecular Formula: Step by Step

```mermaid
flowchart TD
    S1(["Given: % composition by mass"])

    S1 --> S2["STEP 1 — Assume 100 g sample"]
    S2 --> S2A["% values become gram values directly"]

    S2A --> S3["STEP 2 — Convert grams to moles"]
    S3 --> S3A["Moles = Mass / Atomic Mass"]

    S3A --> S4["STEP 3 — Find molar ratios"]
    S4 --> S4A["Divide all mole values by smallest mole value"]

    S4A --> S5["STEP 4 — Make ratios whole numbers"]
    S5 --> S5A["If ratio = 1.5 or 2.5, multiply all by 2"]
    S5 --> S5B["If ratio = 1.33, multiply all by 3"]

    S5B --> S6["STEP 5 — Write Empirical Formula"]
    S5A --> S6

    S6 --> S7["STEP 6 — Find Molecular Formula"]
    S7 --> S7A["n = Molar Mass / EF mass"]
    S7A --> S7B["Molecular Formula = n x Empirical Formula"]

    style S1 fill:#1e3a5f,color:#aed6f1
    style S6 fill:#1a3d2e,color:#a9dfbf,stroke:#27ae60
    style S7B fill:#1a3d2e,color:#a9dfbf,stroke:#27ae60
```

---

# 🗺️ MIND MAP 8 — Significant Figures Decision Tree

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

---

*End of Rapid Revision + Mind Maps — Ch. 1: Some Basic Concepts of Chemistry*
*Exam Tags: Board · NEET · JEE Mains · JEE Advanced*