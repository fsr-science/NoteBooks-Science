# CHAPTER 5: THERMODYNAMICS

### Complete Study Notes | Board · NEET · JEE Layered

---

## 🗺️ CONCEPT ROADMAP

```
[Why Thermodynamics?]
        → Explains energy changes in chemical/physical processes
        → Tells us: Will a reaction occur? How much energy? To what extent?
        ↓
[Basic Terminology]
        → System, Surroundings, Boundary
        → Types: Open · Closed · Isolated
        → State Functions vs Path Functions
        ↓
[Internal Energy (U) — First Law]
        → ΔU = q + w
        → Work: w = –pex·ΔV (pressure-volume work)
        → Heat: q (measured by temperature change)
        → Special cases: Isothermal, Adiabatic, Free expansion
        ↓
[Enthalpy (H)]
        → H = U + pV
        → ΔH = ΔU + ΔngRT
        → ΔH = qp (heat at constant pressure)
        → Heat capacity: Cp – Cv = R
        ↓
[Calorimetry — Measuring ΔU and ΔH]
        → Bomb calorimeter (constant volume → ΔU)
        → Coffee-cup calorimeter (constant pressure → ΔH)
        ↓
[Types of Enthalpy Changes]
        → Reaction, Formation, Combustion, Atomization, Bond, Lattice
        → Phase: Fusion, Vaporization, Sublimation
        → Solution, Dilution
        → Hess's Law and Born–Haber Cycle
        ↓
[Spontaneity — Why Reactions Occur?]
        → Enthalpy criterion (incomplete)
        → Entropy (S) — disorder/randomness
        → Second Law: ΔStotal > 0 for spontaneous process
        → Third Law: S→0 as T→0 K for pure crystal
        ↓
[Gibbs Energy (G)]
        → G = H – TS
        → ΔG = ΔH – TΔS (Gibbs equation)
        → ΔG < 0 → spontaneous; ΔG > 0 → non-spontaneous
        → ΔG° = –RT ln K (link to equilibrium)
```

---

## SECTION 1 — THERMODYNAMIC TERMS `[Board · NEET · JEE]`

*"It is the only physical theory of universal content concerning which I am convinced that, within the framework of the applicability of its basic concepts, it will never be overthrown."* — Albert Einstein

### 1.1 The System and the Surroundings

**System:** The part of the universe under observation/study.

**Surroundings:** Everything else (the rest of the universe that can interact with the system).

**Boundary:** The real or imaginary wall separating the system from surroundings. Controls movement of matter and energy.

> The Universe = The System + The Surroundings

**Practical note:** The surroundings are usually the immediate vicinity (e.g., the room around a beaker), not the entire universe — only that which can interact.

### 1.2 Types of Systems `[Board · NEET]`

| Type               | Matter exchange? | Energy exchange? | Example                                         |
| ------------------ | ---------------- | ---------------- | ----------------------------------------------- |
| **Open**     | Yes              | Yes              | Reactants in an open beaker                     |
| **Closed**   | No               | Yes              | Reactants in a sealed copper/steel vessel       |
| **Isolated** | No               | No               | Reactants in a thermos flask (insulated vessel) |

> ⚠️ **Common Mistake:** An adiabatic system ≠ an isolated system. Adiabatic means no heat transfer (q = 0), but work may still be done. An isolated system has neither heat nor work exchange (q = 0 AND w = 0 → ΔU = 0).

### 1.3 State of the System and State Functions `[Board · NEET · JEE]`

**State of a system:** Completely described by macroscopic (bulk) properties like pressure (p), volume (V), temperature (T), and composition (n).

**State Functions/State Variables:** Properties whose values depend **only on the current state** of the system, NOT on the path taken to reach that state.

| State Functions (path-independent) | Path Functions (path-dependent) |
| ---------------------------------- | ------------------------------- |
| Internal energy (U)                | Heat (q)                        |
| Enthalpy (H)                       | Work (w)                        |
| Entropy (S), Gibbs energy (G)      |                                 |
| p, V, T, n                         |                                 |

> **Key insight:** ΔU = q + w. While q and w individually depend on the path, their sum (ΔU) depends only on initial and final states.

**Macroscopic vs Microscopic approach:**

* Thermodynamics deals with **macroscopic** averages (billions of molecules)
* Does NOT need to track individual particle motions
* Applies only when system is **in equilibrium** or moves between equilibrium states

### 1.4 The Internal Energy (U) as a State Function `[Board · NEET · JEE]`

**Internal energy (U):** The total energy of the system — sum of all kinetic (translational, rotational, vibrational) and potential energies of all particles in the system.

**Key property:** U is a **state function** — ΔU depends only on initial and final states.

**U changes when:**

* Heat passes into or out of the system
* Work is done on or by the system
* Matter enters or leaves the system

**Joule's Experiment (1840–50):** Showed that regardless of the method used (paddle-wheel churning OR electrical immersion rod), the same amount of work done on an adiabatic water system produces the **same temperature change** → confirms U is a state function.

**Mathematically:** For adiabatic processes: ΔU = U₂ – U₁ = w_ad

**Sign Conventions (IUPAC):**

| Quantity | When system gains       | Sign | When system loses       | Sign |
| -------- | ----------------------- | ---- | ----------------------- | ---- |
| q (heat) | Heat absorbed by system | +    | Heat released by system | –   |
| w (work) | Work done ON system     | +    | Work done BY system     | –   |

> ⚠️ **Note:** Physics books use the older convention where work done BY the system is positive. IUPAC (chemistry) uses the convention above. Know which convention is being used!

---

## SECTION 2 — APPLICATIONS: WORK AND HEAT `[Board · NEET · JEE]`

### 2.1 Pressure-Volume Work

For a gas compressed by external pressure p_ex:

**Single-step compression (irreversible):**

$$
w = -p_{ex} \cdot \Delta V = -p_{ex}(V_f - V_i)
$$

> **Sign check:** Compression → Vf < Vi → ΔV < 0 → w = –p_ex(negative) = **positive** ✓ (work done on system)

**Multi-step compression:**

$$
w = -\sum p_{ex} \cdot \Delta V
$$

**Reversible compression (continuous change):**

$$
w_{rev} = -\int_{V_i}^{V_f} p , dV
$$

For isothermal reversible process of an ideal gas (pV = nRT):

$$
w_{rev} = -nRT \ln\frac{V_f}{V_i} = -2.303,nRT\log\frac{V_f}{V_i}
$$

**Reversible vs Irreversible Processes:**

| Feature   | Reversible                                         | Irreversible                 |
| --------- | -------------------------------------------------- | ---------------------------- |
| How?      | Infinitely slow; system always near equilibrium    | Finite, rapid steps          |
| Work done | Maximum (for expansion); minimum (for compression) | Less than maximum            |
| Direction | Can be reversed by infinitesimal change            | Cannot spontaneously reverse |
| Real?     | Idealized (theoretical limit)                      | All real processes           |

**Free Expansion:** Expansion into vacuum (p_ex = 0)
→ w = –p_ex · ΔV = 0; For ideal gas: also q = 0, therefore **ΔU = 0**

### 2.2 Summary of Work Expressions

| Process                               | Work (w)         | Heat (q)        | ΔU  |
| ------------------------------------- | ---------------- | --------------- | ---- |
| Isothermal free expansion (ideal gas) | 0                | 0               | 0    |
| Isothermal irreversible expansion     | –p_ex(Vf – Vi) | +p_ex(Vf – Vi) | 0    |
| Isothermal reversible expansion       | –nRT ln(Vf/Vi)  | +nRT ln(Vf/Vi)  | 0    |
| Adiabatic (any)                       | w_ad             | 0               | w_ad |
| Constant volume                       | 0                | q_V             | q_V  |

### 2.3 Heat (q)

**Heat (q):** Energy exchanged between system and surroundings due to temperature difference.

* q = C·ΔT (general)
* q = m·c·ΔT = C·ΔT (where C = total heat capacity, c = specific heat capacity)

**At constant volume:** ΔU = q_V (no work done since ΔV = 0)

---

## SECTION 3 — FIRST LAW OF THERMODYNAMICS `[Board · NEET · JEE]`

### The General Statement

**First Law of Thermodynamics:**

> *"The energy of an isolated system is constant."*

Also known as the **Law of Conservation of Energy:** energy can neither be created nor destroyed, only transformed.

**Mathematical Expression:**

$$
\boxed{\Delta U = q + w}
$$

This is the fundamental equation. When w = 0 and q = 0: **ΔU = 0** (isolated system).

**Problem 5.1 type (NCERT):**

* (i) No heat, work done ON system: ΔU = w_ad (adiabatic wall)
* (ii) No work, heat q lost by system: ΔU = –q (thermally conducting wall)
* (iii) Work w done BY system, heat q absorbed: ΔU = q – w (closed system)

**Important Note:** We can NEVER measure absolute U. We can only measure changes:  **ΔU** . Volume, in contrast, can be specified absolutely.

---

## SECTION 4 — ENTHALPY (H) `[Board · NEET · JEE]`

### 4.1 Why Define Enthalpy?

Most chemical reactions are carried out at **constant atmospheric pressure** (open flasks, test tubes), not constant volume. So ΔU = q_V is not directly useful. We need a new function for constant pressure processes.

At constant pressure:

$$
\Delta U = q_p - p\Delta V
$$

$$
q_p = (U_2 + pV_2) - (U_1 + pV_1)
$$

### 4.2 Definition of Enthalpy

$$
\boxed{H = U + pV}
$$

H is a **state function** (since U, p, V are all state functions).

At constant pressure:

$$
\Delta H = \Delta U + p\Delta V
$$

And since q_p = ΔH:

$$
\boxed{\Delta H = q_p}
$$

> **Key:** When heat is absorbed/evolved at constant pressure, we are measuring changes in enthalpy, NOT internal energy.

**Sign conventions:**

* **ΔH < 0** → **Exothermic** (heat evolved; system loses heat to surroundings)
* **ΔH > 0** → **Endothermic** (heat absorbed; system gains heat from surroundings)

### 4.3 Relationship Between ΔH and ΔU

For reactions involving gases:

$$
\boxed{\Delta H = \Delta U + \Delta n_g RT}
$$

Where:

* **Δn_g** = moles of gaseous products – moles of gaseous reactants
* R = 8.314 J mol⁻¹ K⁻¹
* T = temperature in Kelvin

| Δn_g     | Relationship |
| --------- | ------------ |
| Δn_g > 0 | ΔH > ΔU    |
| Δn_g < 0 | ΔH < ΔU    |
| Δn_g = 0 | ΔH = ΔU    |

**For solids and liquids:** ΔH ≈ ΔU (volume changes are negligible; p·ΔV ≈ 0)

### 4.4 Heat Capacity `[Board · NEET]`

**Heat capacity (C):** Heat required to raise the temperature of a system by 1°C (or 1 K).

$$
q = C\Delta T
$$

**Molar heat capacity (C_m):** Heat capacity per mole = C/n

**Specific heat capacity (c):** Heat capacity per unit mass

$$
q = m \cdot c \cdot \Delta T
$$

**C_V (at constant volume):** q_V = C_V ΔT = ΔU

**C_P (at constant pressure):** q_p = C_P ΔT = ΔH

**Relationship for ideal gas:**

$$
\boxed{C_P - C_V = R}
$$

*Derivation:* For 1 mol ideal gas: ΔH = ΔU + RΔT → C_P ΔT = C_V ΔT + RΔT → C_P – C_V = R

---

## SECTION 5 — CALORIMETRY `[Board · NEET]`

**Calorimetry:** Experimental measurement of heat changes using a  **calorimeter** .

### 5.1 Bomb Calorimeter — Measuring ΔU

* Used for combustion reactions
* **Sealed steel vessel** (bomb) immersed in a water bath
* **Constant volume** → no work done (ΔV = 0)
* Measures heat at constant volume → **q_V = ΔU**
* Temperature rise converted to heat using: q = C_V × ΔT

> **Key:** In bomb calorimeter, ΔU is measured directly. To get ΔH, use: ΔH = ΔU + Δn_g RT

### 5.2 Constant Pressure Calorimeter — Measuring ΔH

* Open to atmosphere (constant pressure)
* Often a simple coffee-cup or polystyrene setup
* **q_p = ΔH** (enthalpy of reaction / heat of reaction)
* Exothermic: q_p < 0; temperature rises in calorimeter
* Endothermic: q_p > 0; temperature falls

---

## SECTION 6 — ENTHALPY OF REACTIONS `[Board · NEET · JEE]`

### 6.1 Reaction Enthalpy (Δ_r H)

**Definition:** Enthalpy change accompanying a chemical reaction.

$$
\Delta_r H = \sum a_i H_{products} - \sum b_i H_{reactants}
$$

Where a_i and b_i are stoichiometric coefficients.

### 6.2 Standard Enthalpy of Reactions (Δ_r H°)

**Standard state:** Pure substance at **1 bar** pressure at a specified temperature (usually 298 K).

**Standard enthalpy of reaction (Δ_r H°):** Enthalpy change when all reactants and products are in their standard states.

Denoted by adding superscript ⊖ (or °): **Δ_r H°**

### 6.3 Enthalpy Changes During Phase Transformations `[Board · NEET]`

| Transformation   | Symbol     | Definition                                                                           | Sign                     | Example                           |
| ---------------- | ---------- | ------------------------------------------------------------------------------------ | ------------------------ | --------------------------------- |
| Fusion (melting) | Δ_fus H° | Enthalpy change when 1 mol solid melts at constant T and 1 bar                       | Always +ve (endothermic) | H₂O(s) → H₂O(l); +6.01 kJ/mol  |
| Vaporization     | Δ_vap H° | Enthalpy change when 1 mol liquid vaporizes at constant T and 1 bar                  | Always +ve               | H₂O(l) → H₂O(g); +40.79 kJ/mol |
| Sublimation      | Δ_sub H° | Enthalpy change when 1 mol solid converts directly to vapour at constant T and 1 bar | Always +ve               | CO₂(s) → CO₂(g); +25.2 kJ/mol  |

> Note: Reverse processes (freezing, condensation, deposition) are exothermic (equal magnitude, opposite sign).

**Δ_sub H° = Δ_fus H° + Δ_vap H°** (by Hess's Law)

The magnitude of enthalpy changes reflects the strength of  **intermolecular interactions** :

* Strong H-bonds (water) → large Δ_vap H°
* Weak dipole-dipole (acetone) → smaller Δ_vap H°

### 6.4 Standard Enthalpy of Formation (Δ_f H°) `[Board · NEET · JEE]`

**Definition:** Standard enthalpy change for the formation of **one mole** of a compound from its **constituent elements in their most stable reference states** at 25°C and 1 bar.

**Reference state:** Most stable form of an element at 25°C and 1 bar.

* H₂ (g) for hydrogen
* O₂ (g) for oxygen
* C (graphite, s) for carbon
* S (rhombic, s) for sulphur

**Convention:** Δ_f H° of an element **in its reference state = 0** (by definition)

**Key examples:**

| Compound    | Reaction                                         | Δ_f H° (kJ mol⁻¹) |
| ----------- | ------------------------------------------------ | --------------------- |
| H₂O(l)     | H₂(g) + ½O₂(g) → H₂O(l)                     | –285.8               |
| CH₄(g)     | C(graphite) + 2H₂(g) → CH₄(g)                 | –74.81               |
| C₂H₅OH(l) | 2C(graphite) + 3H₂(g) + ½O₂(g) → C₂H₅OH(l) | –277.7               |
| CO₂(g)     | C(graphite) + O₂(g) → CO₂(g)                  | –393.51              |

**Using standard enthalpies of formation:**

$$
\Delta_r H° = \sum a_i \Delta_f H°(products) - \sum b_i \Delta_f H°(reactants)
$$

> ⚠️ **Common Mistake:** Not every enthalpy change equals Δ_f H°. For Δ_f H° to apply: (1) exactly one mole of compound formed; (2) from elements in their most stable states; (3) NOT from other compounds.

### 6.5 Thermochemical Equations `[Board]`

A balanced chemical equation with its Δ_r H value. Rules:

1. Coefficients = moles (not molecules)
2. Physical states must be specified: (g), (l), (s), (aq)
3. Allotropic states specified if relevant
4. When equation is  **reversed** : sign of Δ_r H **reverses**
5. When equation coefficients are multiplied by n: Δ_r H also multiplied by n
6. Enthalpy is an **extensive property**

---

## SECTION 7 — HESS'S LAW `[Board · NEET · JEE]`

### 7.1 Statement

> **Hess's Law of Constant Heat Summation:** If a reaction takes place in several steps, its standard reaction enthalpy is the **sum** of the standard enthalpies of the intermediate reactions into which the overall reaction may be divided at the same temperature.

This follows directly from the fact that **H is a state function** → ΔH is path-independent.

### 7.2 Application

If: Overall reaction: A → B (ΔH)
Via: A → C (ΔH₁), C → D (ΔH₂), D → B (ΔH₃)
Then: **ΔH = ΔH₁ + ΔH₂ + ΔH₃**

**Classic Example — CO formation:**

| Step | Reaction                        | Δ_r H°           |
| ---- | ------------------------------- | ------------------ |
| (i)  | C(graphite) + O₂(g) → CO₂(g) | –393.5 kJ mol⁻¹ |
| (ii) | CO(g) + ½O₂(g) → CO₂(g)     | –283.0 kJ mol⁻¹ |

**Required:** C(graphite) + ½O₂(g) → CO(g) (cannot measure directly)

**Method:** (i) + reverse of (ii):
→ Δ_r H° = –393.5 + (+283.0) = **–110.5 kJ mol⁻¹**

---

## SECTION 8 — ENTHALPIES FOR SPECIFIC REACTION TYPES `[Board · NEET · JEE]`

### 8.1 Standard Enthalpy of Combustion (Δ_c H°)

**Definition:** Enthalpy change per mole of substance when it undergoes **complete combustion** with oxygen, with all reactants and products in standard states.

* Always **negative** (exothermic)

| Substance      | Combustion reaction                     | Δ_c H° (kJ mol⁻¹) |
| -------------- | --------------------------------------- | --------------------- |
| CH₄(g)        | CH₄ + 2O₂ → CO₂ + 2H₂O(l)          | –890.3               |
| C₄H₁₀(g)    | C₄H₁₀ + 13/2 O₂ → 4CO₂ + 5H₂O(l) | –2658.0              |
| C₆H₁₂O₆(s) | C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O(l)  | –2802.0              |
| C(graphite)    | C + O₂ → CO₂                         | –393.5               |

### 8.2 Enthalpy of Atomization (Δ_a H°)

**Definition:** Enthalpy change when **one mole of bonds** in a substance are completely broken to produce  **gaseous atoms** .

| Reaction                | Δ_a H° (kJ mol⁻¹) |
| ----------------------- | --------------------- |
| H₂(g) → 2H(g)         | +435.0                |
| CH₄(g) → C(g) + 4H(g) | +1665                 |
| Na(s) → Na(g)          | +108.4                |

> For  **diatomic molecules** , Δ_a H° = bond dissociation enthalpy

### 8.3 Bond Enthalpy (Δ_bond H°) `[Board · NEET · JEE]`

**Bond dissociation enthalpy:** Enthalpy change when **one mole of covalent bonds** in a gaseous compound are broken to give products in gas phase.

**For diatomic molecules:** Bond dissociation enthalpy = Δ_a H°

| Bond   | Δ_bond H° (kJ mol⁻¹) |
| ------ | ------------------------ |
| H–H   | 435.8                    |
| Cl–Cl | 242                      |
| O=O    | 498                      |
| C–H   | ~414                     |
| C–C   | 347                      |
| C=C    | 611                      |
| C≡C   | 837                      |
| N≡N   | 946                      |

**For polyatomic molecules:** Bond dissociation energies differ for successive bond breaking steps → use  **Mean Bond Enthalpy** .

*Example:* CH₄ → CH₃ + H: +427; CH₃ → CH₂ + H: +439; CH₂ → CH + H: +452; CH → C + H: +347 kJ mol⁻¹
→ Mean C–H bond enthalpy = (1665/4) = **416 kJ mol⁻¹**

**Using bond enthalpies to calculate Δ_r H° (for gaseous reactions):**

$$
\Delta_r H° = \sum \Delta_{bond}H° *{(reactants)} - \sum \Delta* {bond}H°_{(products)}
$$

> **Limitation:** Only approximate; valid only when all substances are in gas phase.

### 8.4 Lattice Enthalpy (Δ_lattice H°) `[Board · NEET · JEE]`

**Definition:** Enthalpy change when **one mole** of an ionic compound **dissociates** into its constituent gaseous ions.

$$
\text{Na}^+\text{Cl}^-(s) \rightarrow \text{Na}^+(g) + \text{Cl}^-(g); \quad \Delta_{lattice}H° = +788 \text{ kJ mol}^{-1}
$$

> Always **positive** (endothermic; ionic bonds must be broken)

**Cannot be measured directly** → use the **Born–Haber Cycle** (application of Hess's Law)

### 8.5 Born–Haber Cycle for NaCl `[NEET · JEE]`

| Step | Process                                  | Symbol        | Value (kJ mol⁻¹) |
| ---- | ---------------------------------------- | ------------- | ------------------ |
| 1    | Na(s) → Na(g) (sublimation)             | Δ_sub H°    | +108.4             |
| 2    | Na(g) → Na⁺(g) + e⁻ (ionization)      | Δ_i H°      | +496               |
| 3    | ½Cl₂(g) → Cl(g) (bond dissociation)   | ½Δ_bond H° | +121               |
| 4    | Cl(g) + e⁻ → Cl⁻(g) (electron gain)   | Δ_eg H°     | –348.6            |
| 5    | Na(s) + ½Cl₂(g) → NaCl(s) (formation) | Δ_f H°      | –411.2            |

By Hess's Law: **Δ_lattice H° = +411.2 + 108.4 + 121 + 496 – 348.6 = +788 kJ mol⁻¹**

### 8.6 Enthalpy of Solution (Δ_sol H°) `[Board · NEET]`

**Definition:** Enthalpy change when **one mole** of a substance dissolves in a **specified amount** of solvent.

$$
\Delta_{sol}H° = \Delta_{lattice}H° + \Delta_{hyd}H°
$$

Where Δ_hyd H° = enthalpy of hydration (always negative; ions stabilized by water molecules).

**For NaCl:**

* Δ_lattice H° = +788 kJ mol⁻¹ (energy to separate ions — endothermic)
* Δ_hyd H° = –784 kJ mol⁻¹ (energy from hydration — exothermic)
* Δ_sol H° = +788 – 784 = **+4 kJ mol⁻¹** (slightly endothermic)

**Δ_sol H° at infinite dilution:** When ions no longer interact with each other.

### 8.7 Enthalpy of Dilution `[Board]`

**Definition:** Heat change when more solvent is added to a solution (diluting it).

= Δ_sol H° (more dilute) – Δ_sol H° (less dilute)

---

## SECTION 9 — SPONTANEITY `[Board · NEET · JEE]`

### 9.1 What is Spontaneity?

**Spontaneous process:** Has the **potential to proceed without external assistance** (but says nothing about rate).

* Examples: water flowing downhill, gas expanding to fill available volume
* Spontaneous processes are **irreversible** — they cannot spontaneously reverse
* Can be reversed ONLY by external agency

> ⚠️ **Key Distinction:** Spontaneous ≠ fast. H₂ + O₂ mixture at room temperature is spontaneously reactive but extremely slow without a catalyst.

### 9.2 Is Decrease in Enthalpy Sufficient for Spontaneity?

Many exothermic reactions are spontaneous. But:

* ½N₂ + O₂ → NO₂; Δ_r H° = +33.2 kJ mol⁻¹ → **endothermic but spontaneous!**
* C(graphite) + 2S(l) → CS₂(l); Δ_r H° = +128.5 kJ mol⁻¹ → endothermic but spontaneous!

**Conclusion:** Decrease in enthalpy alone is NOT a complete criterion for spontaneity.

### 9.3 Entropy (S) — The Second Criterion `[Board · NEET · JEE]`

**Entropy (S):** A thermodynamic state function. Measure of the **degree of disorder or randomness** of a system.

* **Greater disorder → higher entropy**
* Gaseous state: highest entropy (most disordered)
* Crystalline solid: lowest entropy (most ordered)

**Quantitative definition:**

$$
\Delta S = \frac{q_{rev}}{T}
$$

Where q_rev = heat absorbed in a reversible process; T = absolute temperature.

**Units:** J K⁻¹ mol⁻¹

**Factors that increase entropy:**

* Solid → liquid → gas
* Dissolving a substance
* Increasing temperature
* Increasing volume
* Mixing two gases
* Increasing number of particles

**Second Law of Thermodynamics:**

$$
\boxed{\Delta S_{total} = \Delta S_{system} + \Delta S_{surroundings} > 0 \text{ (spontaneous)}}
$$

* = 0: system at equilibrium
* > 0: spontaneous process
  >
* < 0: non-spontaneous (reverse is spontaneous)

> **ΔU does NOT discriminate between reversible and irreversible processes** (for ideal gas isothermal expansion). **ΔS does.**

**Entropy change of surroundings:**

$$
\Delta S_{surr} = \frac{-\Delta H_{sys}}{T}
$$

(Negative because heat gained by surroundings = heat lost by system)

### 9.4 Third Law of Thermodynamics `[Board · NEET]`

> **Third Law:** The entropy of any **pure crystalline substance approaches zero** as the temperature approaches absolute zero (0 K).

* Reason: perfect order exists in a crystal at 0 K
* Applies to pure crystalline solids only (not solutions, supercooled liquids)
* Allows calculation of **absolute entropy** values from thermal data

**Standard Molar Entropy (S°):** Absolute entropy of 1 mol of a substance at 25°C and 1 bar.

**Entropy change of reaction:**

$$
\Delta_r S° = \sum a_i S°(products) - \sum b_i S°(reactants)
$$

---

## SECTION 10 — GIBBS ENERGY AND SPONTANEITY `[Board · NEET · JEE]`

### 10.1 Definition of Gibbs Energy

Since most reactions are at constant T and p (not isolated systems), we need a single function combining both ΔH and ΔS:

$$
\boxed{G = H - TS}
$$

**Gibbs energy (G):** An extensive property and state function.

At constant temperature:

$$
\boxed{\Delta G = \Delta H - T\Delta S}
$$

This is the **Gibbs equation** — one of the most important in chemistry.

* ΔH term: energy factor (drives exothermic reactions forward)
* TΔS term: entropy factor (energy unavailable for useful work)
* ΔG = net energy available to do **useful work** = "free energy"

### 10.2 Gibbs Energy and Spontaneity

$$
\Delta G < 0 \quad \Rightarrow \quad \text{Spontaneous (at constant T, p)}
$$

$$
\Delta G = 0 \quad \Rightarrow \quad \text{Equilibrium}
$$

$$
\Delta G > 0 \quad \Rightarrow \quad \text{Non-spontaneous (reverse is spontaneous)}
$$

### 10.3 Effect of Temperature on Spontaneity `[Board · NEET · JEE]`

| Δ_r H° | Δ_r S° | Δ_r G°                 | Spontaneity                                   |
| -------- | -------- | ------------------------ | --------------------------------------------- |
| –       | +        | Always –                | **Spontaneous at all temperatures**     |
| –       | –       | – at low T, + at high T | Spontaneous at**low T**only             |
| +        | +        | + at low T, – at high T | Spontaneous at**high T**only            |
| +        | –       | Always +                 | **Non-spontaneous at all temperatures** |

> ⚠️ "Low T" and "High T" are relative to the crossover temperature T = ΔH/ΔS (where ΔG = 0).

**Crossover temperature:** When ΔG = 0 → ΔH = TΔS → **T = ΔH/ΔS**

### 10.4 Gibbs Energy and Equilibrium `[Board · NEET · JEE]`

**At equilibrium:** ΔG = 0 (neither forward nor reverse reaction is spontaneous)

For standard conditions:

$$
\boxed{\Delta_r G° = -RT\ln K = -2.303RT\log K}
$$

Also:

$$
\Delta_r G° = \Delta_r H° - T\Delta_r S°
$$

**Relationships between K and ΔG°:**

| ΔG°                       | K      | Implication                                         |
| --------------------------- | ------ | --------------------------------------------------- |
| ΔG° << 0 (large negative) | K >> 1 | Reaction essentially complete; exothermic reactions |
| ΔG° = 0                   | K = 1  | Neither forward nor reverse favoured                |
| ΔG° >> 0 (large positive) | K << 1 | Reaction barely proceeds; strongly endothermic      |

**Formula rearrangements:**

$$
\log K = \frac{-\Delta_r G°}{2.303RT}
$$

$$
K = e^{-\Delta G°/RT}
$$

---

## SECTION 11 — KEY DISTINCTIONS `[NEET · JEE]`

| Feature       | Internal Energy (U)    | Enthalpy (H)       |
| ------------- | ---------------------- | ------------------ |
| Definition    | Total energy of system | U + pV             |
| Measured at   | Constant volume        | Constant pressure  |
| Related to    | q_V = ΔU              | q_p = ΔH          |
| Connection    | ΔH = ΔU + Δn_g RT   |                    |
| Practical use | Bomb calorimeter       | Most lab reactions |

| Feature             | Heat (q)             | Work (w)             |
| ------------------- | -------------------- | -------------------- |
| State function?     | No — path dependent | No — path dependent |
| Sign (system gains) | +                    | +                    |
| Sign (system loses) | –                   | –                   |

| Feature         | Entropy (S)         | Gibbs Energy (G) |
| --------------- | ------------------- | ---------------- |
| Definition      | Measure of disorder | H – TS          |
| Units           | J K⁻¹ mol⁻¹     | kJ mol⁻¹       |
| Spontaneity     | ΔS_total > 0       | ΔG < 0          |
| Equilibrium     | ΔS_total = 0       | ΔG = 0          |
| State function? | Yes                 | Yes              |

| Δ_bond H° for diatomic                           | Δ_a H°                            |
| -------------------------------------------------- | ----------------------------------- |
| Same value                                         | Same — breaking bond = atomization |
| E.g., H₂: Δ_bond H° = Δ_a H° = 435 kJ mol⁻¹ |                                     |

---

## SECTION 12 — IMPORTANT FORMULAS SUMMARY `[Board · NEET · JEE]`

```
FIRST LAW:
  ΔU = q + w
  w = –pex·ΔV          (irreversible)
  w = –nRT ln(Vf/Vi)   (reversible isothermal)
  Cp – Cv = R

ENTHALPY:
  H = U + pV
  ΔH = ΔU + Δng·RT
  ΔH = qp
  ΔrH° = Σai·Δf H°(products) – Σbi·Δf H°(reactants)

BOND ENTHALPY:
  ΔrH° = Σ Δbond H°(reactants) – Σ Δbond H°(products)

ENTROPY:
  ΔS = qrev/T
  ΔStotal = ΔSsys + ΔSsurr > 0   (spontaneous)
  ΔSsurr = –ΔHsys/T

GIBBS ENERGY:
  G = H – TS
  ΔG = ΔH – TΔS
  ΔrG° = –RT ln K = –2.303 RT log K
  ΔrG° = ΔrH° – T·ΔrS°
  Spontaneous: ΔG < 0
  Crossover T: T = ΔH/ΔS (when ΔG = 0)
```

---

## SECTION 13 — SOLVED NCERT EXAMPLES (ANNOTATED) `[Board · NEET]`

### Problem 5.5 — ΔH to ΔU conversion

**Given:** H₂O(l) → H₂O(g); Δ_vap H = +41 kJ mol⁻¹ at 1 bar, 100°C

**Δn_g** = 1 (1 mol gas produced, 0 mol gas consumed)

$$
\Delta U = \Delta H - \Delta n_g RT = 41 - (1)(8.3 \times 10^{-3})(373) = 41 - 3.096 = 37.9 \text{ kJ mol}^{-1}
$$

### Problem 5.6 — Bomb Calorimeter

**Given:** 1g graphite burnt; heat capacity = 20.7 kJ/K; T rises 298→299 K

$$
q = -C_V \times \Delta T = -20.7 \times 1 = -20.7 \text{ kJ}
$$

For 1 mol (12 g): ΔU = –20.7 × 12 = **–248.4 kJ mol⁻¹**

Since Δn_g = 0 (CO₂ produced = O₂ consumed): **ΔH = ΔU = –248.4 kJ mol⁻¹**

### Problem 5.12 — Gibbs Energy from K_p

**Given:** K_p = 2.47 × 10⁻²⁹ at 298 K

$$
\Delta_r G° = -2.303RT\log K_p = -2.303 \times 8.314 \times 298 \times \log(2.47 \times 10^{-29})
$$

$$
= -2.303 \times 8.314 \times 298 \times (-28.607) = +163 \text{ kJ mol}^{-1}
$$

---

*End of Core Notes — Ch. 5: Thermodynamics*
