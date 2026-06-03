# CHAPTER 9 — RAPID REVISION + MIND MAPS

### Mechanical Properties of Fluids

---

# ⚡ ONE-PAGE RAPID REVISION SHEET

## 🔢 Key Definitions — Absolute Must-Memorise

|Quantity|Definition|Formula|SI Unit|
|:--|:--|:--|:--|
|**Pressure**|Normal force per unit area|$P = F/A$|Pa = N m⁻²|
|**Gauge Pressure**|Excess over atmospheric pressure|$P_g = P − P_a = \rho g h$|Pa|
|**Absolute Pressure**|Total pressure (gauge + atmospheric)|$P = P_a + \rho g h$|Pa|
|**Volume Flux**|Volume of fluid flowing per second|$Q = Av$|m³ s⁻¹|
|**Coefficient of Viscosity**|Shearing stress / Strain rate|$\eta = (F/A)/(v/l)$|Pa·s = Pl|
|**Surface Tension**|Force per unit length (or surface energy per unit area)|$S = F/2l$|N m⁻¹|
|**Capillary Rise**|Height of liquid rise in narrow tube|$h = 2S\cos\theta/\rho g a$|m|
|**Terminal Velocity**|Constant velocity when drag = net gravity|$v_t = 2a^2(\rho-\sigma)g/9\eta$|m s⁻¹|

---

## 📐 Essential Formulae — Must Know Cold

> [!important] Pressure and Depth $$P = P_a + \rho g h \quad \text{(absolute pressure at depth } h\text{)}$$
> 
> Gauge pressure: $P_g = P - P_a = \rho g h$
> 
> Pressure is the **SAME** at all points at the same horizontal level. Pressure does **NOT** depend on the shape of the container.
> 
> Units: 1 atm = 1.013×10⁵ Pa; 1 bar = 10⁵ Pa; 1 torr = 133 Pa

> [!important] Pascal's Law — Hydraulic Machines $$F_2 = \frac{F_1 A_2}{A_1} \quad \text{(hydraulic lift)}$$
> 
> Mechanical advantage = $A_2/A_1$
> 
> Volume conserved (incompressible): $A_1 d_1 = A_2 d_2$
> 
> Applications: Hydraulic lift, Hydraulic brakes (pressure transmitted equally to all wheel cylinders)

> [!important] Equation of Continuity (Mass Conservation) $$A_1 v_1 = A_2 v_2 \quad \Rightarrow \quad Av = \text{constant}$$
> 
> - Narrower pipe → higher velocity (streamlines closely spaced)
> - Wider pipe → lower velocity (streamlines widely spaced)
> - **NOT** the same as Bernoulli's equation; this is mass conservation only.

> [!important] Bernoulli's Equation (Energy Conservation) $$P + \frac{1}{2}\rho v^2 + \rho g h = \text{constant}$$
> 
> Valid for: **Non-viscous, incompressible, steady (streamline) flow** along a single streamline.
> 
> $v \uparrow \Rightarrow P \downarrow$ (at same height); $v \downarrow \Rightarrow P \uparrow$
> 
> **Torricelli's Law** (open tank, hole at depth h): $$v = \sqrt{2gh}$$
> 
> Same form as free-fall: $v^2 = 2gh$.

> [!important] Viscosity $$\eta = \frac{Fl}{vA} \quad [\text{ML}^{-1}\text{T}^{-1}]$$
> 
> **Stokes' Law** (viscous drag on a sphere): $$F = 6\pi\eta a v$$
> 
> **Terminal Velocity:** $$v_t = \frac{2a^2(\rho - \sigma)g}{9\eta}$$
> 
> $v_t \propto a^2$; $v_t \propto 1/\eta$; $v_t \propto (\rho - \sigma)$
> 
> Liquids: $\eta$ falls with $T$ | Gases: $\eta$ rises with $T$

> [!important] Surface Tension $$S = \frac{F}{2l} \quad [\text{MT}^{-2}] \quad \text{unit: N m}^{-1}$$
> 
> **Excess pressure:**
> 
> - Liquid drop (1 surface): $\Delta P = 2S/r$
> - Air bubble in liquid (1 surface): $\Delta P = 2S/r$
> - Soap bubble in air (2 surfaces): $\Delta P = 4S/r$
> 
> **Capillary rise:** $$h = \frac{2S\cos\theta}{\rho g a} \quad (h \propto 1/a)$$
> 
> Angle of contact: $S_{la}\cos\theta + S_{sl} = S_{sa}$
> 
> Acute $\theta$ → wetting (capillary rise) | Obtuse $\theta$ → non-wetting (capillary depression)

---

## 📊 Comparative Values — Important for MCQs

**Density at STP:**

|Fluid|ρ (kg m⁻³)|
|:--|:-:|
|Mercury|13,600|
|Sea water|1,030|
|Water (4°C)|1,000|
|Blood (whole)|1,060|
|Ethyl alcohol|806|
|Air|1.29|
|Hydrogen|0.09|

**Surface Tension (at 20°C):**

|Liquid|S (N m⁻¹)|
|:--|:-:|
|Mercury|0.4355|
|Water|0.0727|
|Ethanol|0.0227|

**Viscosity:**

|Fluid|T (°C)|η (mPl)|
|:--|:-:|:-:|
|Glycerine|20|830|
|Machine Oil|16|113|
|Blood|37|2.7|
|Water|20|1.0|
|Air|0|0.017|

---

## ⚠️ Critical Distinctions — High-Yield Exam Traps

> [!warning] Pressure Traps
> 
> - Pressure depends on **vertical height h only** — NOT on container shape, size, or cross-section. (Hydrostatic paradox)
> - Pressure is a **scalar quantity** — it acts equally in all directions at a point; cannot be assigned a direction.
> - **Gauge pressure** = P − Pₐ (what a tyre gauge or sphygmomanometer reads); **Absolute pressure** = Pₐ + ρgh.
> - The pressure at the bottom of the sea at 1000 m is ~104 atm, but the force on a submarine window depends on **gauge** pressure (the pressure difference), not absolute.

> [!warning] Continuity vs Bernoulli Traps
> 
> - **A₁v₁ = A₂v₂** is the equation of **continuity** (mass conservation) — has nothing to do with Bernoulli.
> - **Bernoulli** is energy conservation: $P + \frac{1}{2}\rho v^2 + \rho g h = \text{const}$.
> - In a narrower pipe: continuity gives **v increases**; Bernoulli then gives **P decreases**.
> - Do NOT confuse: narrower pipe does NOT directly increase pressure — it increases velocity, which then decreases pressure (via Bernoulli).

> [!warning] Bernoulli Validity Traps
> 
> - Bernoulli does NOT apply to: **turbulent** flow, **viscous** flow, **compressible** gases at high speed.
> - "Faster flow → lower pressure" is valid only at the **same height** (horizontal flow). In general: both velocity and height change.
> - When a fluid is at rest (v = 0 everywhere), Bernoulli correctly reduces to: $P_1 - P_2 = \rho g(h_2 - h_1)$.

> [!warning] Viscosity Traps
> 
> - Viscosity of **liquids** decreases with temperature (η ↓ as T ↑).
> - Viscosity of **gases** increases with temperature (η ↑ as T ↑) — opposite direction!
> - In fluids: stress ∝ **rate** of shear strain (v/l), NOT the strain itself (unlike solids where stress ∝ strain by Hooke's law).
> - **Blood is ~2.7× more viscous than water**, but blood's relative viscosity (η/η_water) stays constant between 0°C and 37°C.
> - **Terminal velocity ∝ a²** — a small increase in sphere size causes a large increase in vₜ. Very small particles (dust, aerosols) settle extremely slowly.

> [!warning] Surface Tension Traps
> 
> - **Soap bubble has 2 surfaces** → ΔP = 4S/r. **Liquid drop has 1 surface** → ΔP = 2S/r. Never confuse these.
> - **Air bubble in liquid = 1 surface** (liquid-air interface) → ΔP = 2S/r (same as a liquid drop).
> - Capillary rise: $h \propto 1/a$ → **thinner tube → greater rise**. Do NOT think thicker tube rises more.
> - Mercury-glass: obtuse θ → $\cos\theta < 0$ → **h is negative** → capillary **depression** (mercury falls, not rises).
> - S = F/(2l), NOT F/l — the factor of 2 accounts for the **two surfaces** of the liquid film. Do NOT drop the 2.
> - S and η both **decrease with temperature** for liquids.

---

# 🗺️ MIND MAP 1 — Chapter Overview

```mermaid
flowchart TD
    ROOT(["MECHANICAL PROPERTIES OF FLUIDS"])
    ROOT --> PR["PRESSURE"]
    ROOT --> PL["PASCAL'S LAW"]
    ROOT --> SF["STREAMLINE FLOW"]
    ROOT --> BE["BERNOULLI'S PRINCIPLE"]
    ROOT --> VI["VISCOSITY"]
    ROOT --> ST["SURFACE TENSION"]

    PR --> PR1["P = F/A; scalar; unit Pa"]
    PR --> PR2["P = Pa + rho*g*h (depth variation)"]
    PR2 --> PR3["Gauge P = rho*g*h; depends on h only"]
    PR3 --> PR4["Hydrostatic paradox: level same in all shapes"]

    PL --> PL1["Same in all directions at a point"]
    PL --> PL2["Same at all points at same horizontal level"]
    PL --> PL3["Transmitted undiminished in all directions"]
    PL3 --> PL4["Hydraulic lift: F2 = F1(A2/A1)"]
    PL4 --> PL5["Hydraulic brakes: equal force at all wheels"]

    SF --> SF1["Streamline: tangent = velocity direction"]
    SF1 --> SF2["Steady flow: streamlines do NOT cross"]
    SF2 --> SF3["Equation of continuity: A1*v1 = A2*v2"]
    SF3 --> SF4["Laminar: v < critical speed"]
    SF4 --> SF5["Turbulent: v > critical speed"]

    BE --> BE1["P + (1/2)*rho*v^2 + rho*g*h = constant"]
    BE1 --> BE2["v up means P down (at same height)"]
    BE2 --> BE3["Torricelli: v = sqrt(2gh) for open tank"]
    BE3 --> BE4["Dynamic lift: aerofoil, Magnus effect"]

    VI --> VI1["eta = (F/A)/(v/l); unit Pa.s"]
    VI1 --> VI2["Liquids: eta falls with T; Gases: eta rises with T"]
    VI2 --> VI3["Stokes law: F = 6*pi*eta*a*v"]
    VI3 --> VI4["Terminal velocity: vt = 2a^2*(rho-sigma)*g/(9*eta)"]
    VI4 --> VI5["vt proportional to a^2"]

    ST --> ST1["Extra energy at liquid surface (molecules pulled inward)"]
    ST1 --> ST2["S = F/(2l); unit N/m; Dim: MT^-2"]
    ST2 --> ST3["Excess P: drop = 2S/r; soap bubble = 4S/r"]
    ST3 --> ST4["Capillary rise: h = 2S*cos(theta)/(rho*g*a)"]
    ST4 --> ST5["S decreases with temperature"]

    style ROOT fill:#2c3e50,color:#ecf0f1,stroke:#3498db
    style PR fill:#1e3a5f,color:#aed6f1,stroke:#3498db
    style PL fill:#1e3a5f,color:#aed6f1,stroke:#3498db
    style SF fill:#1a3d2e,color:#a9dfbf,stroke:#27ae60
    style BE fill:#2d1a3d,color:#d9b3ff,stroke:#9b59b6
    style VI fill:#3d2a1a,color:#f0d0a8,stroke:#e67e22
    style ST fill:#1a3d2e,color:#a9dfbf,stroke:#27ae60
```

---

# 🗺️ MIND MAP 2 — Pressure and Pascal's Law

```mermaid
flowchart TD
    ROOT(["PRESSURE AND PASCAL'S LAW"])
    ROOT --> DEF["DEFINITION"]
    ROOT --> DEPTH["VARIATION WITH DEPTH"]
    ROOT --> MEAS["MEASUREMENT"]
    ROOT --> HYDR["HYDRAULIC MACHINES"]

    DEF --> DEF1["P = F/A (normal force per unit area)"]
    DEF1 --> DEF2["Scalar: acts equally in all directions"]
    DEF2 --> DEF3["Dim: [ML^-1 T^-2]; unit Pa = N/m^2"]
    DEF3 --> DEF4["1 atm = 1.013x10^5 Pa; 1 bar = 10^5 Pa; 1 torr = 133 Pa"]

    DEPTH --> DEPTH1["P2 - P1 = rho*g*h (9.6)"]
    DEPTH1 --> DEPTH2["P = Pa + rho*g*h (9.7) — absolute pressure"]
    DEPTH2 --> DEPTH3["Gauge P = P - Pa = rho*g*h"]
    DEPTH3 --> DEPTH4["Pressure depends ONLY on vertical h, not on container shape"]
    DEPTH4 --> DEPTH5["Hydrostatic paradox: different shaped vessels, same liquid level"]

    MEAS --> MEAS1["Mercury barometer (Torricelli 1643)"]
    MEAS1 --> MEAS2["Pa = rho*g*h where h approx 76 cm Hg"]
    MEAS2 --> MEAS3["Open-tube manometer: measures gauge pressure"]

    HYDR --> HYDR1["Pascal's law: pressure transmitted undiminished"]
    HYDR1 --> HYDR2["Hydraulic lift: F2 = F1*(A2/A1)"]
    HYDR2 --> HYDR3["Mechanical advantage = A2/A1"]
    HYDR3 --> HYDR4["Energy conserved: F2*d2 = F1*d1 (A1*d1 = A2*d2)"]
    HYDR4 --> HYDR5["Hydraulic brakes: equal braking at all four wheels"]

    style ROOT fill:#2c3e50,color:#ecf0f1,stroke:#3498db
    style DEF fill:#1e3a5f,color:#aed6f1,stroke:#3498db
    style DEPTH fill:#1e3a5f,color:#aed6f1,stroke:#3498db
    style MEAS fill:#3d2a1a,color:#f0d0a8,stroke:#e67e22
    style HYDR fill:#1a3d2e,color:#a9dfbf,stroke:#27ae60
```

---

# 🗺️ MIND MAP 3 — Bernoulli's Principle and Applications

```mermaid
flowchart TD
    ROOT(["BERNOULLI'S PRINCIPLE"])
    ROOT --> EQ["THE EQUATION"]
    ROOT --> CON["CONDITIONS"]
    ROOT --> TOR["TORRICELLI'S LAW"]
    ROOT --> APP["APPLICATIONS"]

    EQ --> EQ1["P + (1/2)*rho*v^2 + rho*g*h = constant"]
    EQ1 --> EQ2["P = pressure energy per unit volume"]
    EQ2 --> EQ3["(1/2)*rho*v^2 = KE per unit volume"]
    EQ3 --> EQ4["rho*g*h = PE per unit volume"]
    EQ4 --> EQ5["Derived from work-energy theorem"]

    CON --> CON1["Non-viscous fluid (zero viscosity)"]
    CON1 --> CON2["Incompressible fluid (rho = constant)"]
    CON2 --> CON3["Steady (streamline) flow"]
    CON3 --> CON4["Along a SINGLE streamline"]
    CON4 --> CON5["NOT valid: turbulent, viscous, or compressible flow"]

    TOR --> TOR1["Open tank: hole at depth h"]
    TOR1 --> TOR2["v = sqrt(2gh) (Torricelli's law)"]
    TOR2 --> TOR3["Same as free-fall equation v^2 = 2gh"]
    TOR3 --> TOR4["Sealed pressurised tank (P >> Pa): v set by container pressure (rockets)"]

    APP --> APP1["Non-spinning ball: symmetric streamlines, zero lift"]
    APP --> APP2["Spinning ball (Magnus effect)"]
    APP2 --> APP3["One side: v up, P down; other: v down, P up"]
    APP3 --> APP4["Net force perpendicular to motion — cricket, tennis, golf"]
    APP --> APP5["Aerofoil (wing): streamlines crowded above"]
    APP5 --> APP6["v higher above, P lower above → upward aerodynamic lift"]

    style ROOT fill:#2c3e50,color:#ecf0f1,stroke:#3498db
    style EQ fill:#2d1a3d,color:#d9b3ff,stroke:#9b59b6
    style CON fill:#3d1a1a,color:#ffd0d0,stroke:#e74c3c
    style TOR fill:#1a3d2e,color:#a9dfbf,stroke:#27ae60
    style APP fill:#1e3a5f,color:#aed6f1,stroke:#3498db
```

---

# 🗺️ MIND MAP 4 — Viscosity and Terminal Velocity

```mermaid
flowchart TD
    ROOT(["VISCOSITY"])
    ROOT --> CONC["CONCEPT"]
    ROOT --> COEFF["COEFFICIENT eta"]
    ROOT --> STOKES["STOKES' LAW"]
    ROOT --> TERM["TERMINAL VELOCITY"]

    CONC --> CONC1["Internal friction in flowing fluids"]
    CONC1 --> CONC2["Different fluid layers at different velocities"]
    CONC2 --> CONC3["Faster layer drags slower; slower retards faster"]
    CONC3 --> CONC4["Laminar: max velocity along tube axis, zero at walls"]

    COEFF --> COEFF1["eta = (F/A)/(v/l) = F*l/(v*A)"]
    COEFF1 --> COEFF2["Unit: Pa.s = poiseuille (Pl); Dim: [ML^-1 T^-1]"]
    COEFF2 --> COEFF3["Liquids: eta DECREASES with temperature"]
    COEFF2 --> COEFF4["Gases: eta INCREASES with temperature"]
    COEFF4 --> COEFF5["OPPOSITE temperature dependence — common exam trap"]

    STOKES --> STOKES1["F = 6*pi*eta*a*v (Sir George Stokes 1819-1903)"]
    STOKES1 --> STOKES2["Drag force proportional to velocity (not v^2)"]
    STOKES2 --> STOKES3["Applies to small spheres at low speed (laminar flow around sphere)"]

    TERM --> TERM1["Body reaches vt when gravity = drag + buoyancy"]
    TERM1 --> TERM2["vt = 2*a^2*(rho-sigma)*g / (9*eta)"]
    TERM2 --> TERM3["vt proportional to a^2 — large size, much faster fall"]
    TERM3 --> TERM4["vt proportional to 1/eta — thicker fluid, slower fall"]
    TERM4 --> TERM5["Raindrops reach vt (without eta they would hit at dangerous speed)"]
    TERM5 --> TERM6["Dust (small a): vt very small — settles extremely slowly"]

    style ROOT fill:#2c3e50,color:#ecf0f1,stroke:#3498db
    style CONC fill:#1e3a5f,color:#aed6f1,stroke:#3498db
    style COEFF fill:#3d2a1a,color:#f0d0a8,stroke:#e67e22
    style STOKES fill:#1a3d2e,color:#a9dfbf,stroke:#27ae60
    style TERM fill:#2d1a3d,color:#d9b3ff,stroke:#9b59b6
```

---

# 🗺️ MIND MAP 5 — Surface Tension

```mermaid
flowchart TD
    ROOT(["SURFACE TENSION"])
    ROOT --> ORIG["MOLECULAR ORIGIN"]
    ROOT --> DEF["DEFINITION"]
    ROOT --> AOC["ANGLE OF CONTACT"]
    ROOT --> EXCPR["EXCESS PRESSURE"]
    ROOT --> CAP["CAPILLARY RISE"]

    ORIG --> ORIG1["Molecule inside: attracted symmetrically in all directions — zero net force"]
    ORIG1 --> ORIG2["Molecule at surface: attracted only from below — net inward force"]
    ORIG2 --> ORIG3["Surface molecules have extra potential energy"]
    ORIG3 --> ORIG4["Liquid tends to MINIMISE surface area to minimise energy"]

    DEF --> DEF1["S = F/(2l) [factor 2: film has two surfaces]"]
    DEF1 --> DEF2["Unit: N/m; Dim: [MT^-2]; Scalar"]
    DEF2 --> DEF3["Also = surface energy per unit area (J/m^2)"]
    DEF3 --> DEF4["S decreases with temperature"]
    DEF4 --> DEF5["Mercury: 0.4355 N/m; Water: 0.0727 N/m; Ethanol: 0.0227 N/m"]

    AOC --> AOC1["theta: angle between tangent to surface and solid, measured inside liquid"]
    AOC1 --> AOC2["Equilibrium: Sla*cos(theta) + Ssl = Ssa"]
    AOC2 --> AOC3["theta < 90 (acute): wetting (water-glass); liquid spreads"]
    AOC3 --> AOC4["theta > 90 (obtuse): non-wetting (mercury-glass); droplets form"]
    AOC4 --> AOC5["Soaps and detergents reduce theta; waterproofing agents increase theta"]

    EXCPR --> EXCPR1["Spherical shape minimises surface area for given volume"]
    EXCPR1 --> EXCPR2["Liquid drop (1 surface): Pi - Po = 2S/r"]
    EXCPR2 --> EXCPR3["Air bubble in liquid (1 surface): Pi - Po = 2S/r"]
    EXCPR3 --> EXCPR4["Soap bubble (2 surfaces): Pi - Po = 4S/r"]
    EXCPR4 --> EXCPR5["Convex side always at HIGHER pressure than concave side"]

    CAP --> CAP1["Wetting liquid (acute theta): liquid RISES in tube"]
    CAP1 --> CAP2["Non-wetting (obtuse theta): liquid is DEPRESSED in tube"]
    CAP2 --> CAP3["Formula: h = 2S*cos(theta)/(rho*g*a)"]
    CAP3 --> CAP4["h proportional to 1/a: thinner tube, greater rise"]
    CAP4 --> CAP5["Real uses: sap in trees; oil in wicks; water in cloth and soil"]

    style ROOT fill:#2c3e50,color:#ecf0f1,stroke:#3498db
    style ORIG fill:#3d1a1a,color:#ffd0d0,stroke:#e74c3c
    style DEF fill:#1e3a5f,color:#aed6f1,stroke:#3498db
    style AOC fill:#3d2a1a,color:#f0d0a8,stroke:#e67e22
    style EXCPR fill:#2d1a3d,color:#d9b3ff,stroke:#9b59b6
    style CAP fill:#1a3d2e,color:#a9dfbf,stroke:#27ae60
```

---

## 🏆 Last-Minute Exam Checklist

> [!tip] Before answering any Mechanical Properties of Fluids problem, run through this list
> 
> - **Pressure at depth?** → $P = P_a + \rho g h$ (absolute); Gauge = $\rho g h$; depends on h only, not container shape.
> - **Pascal's law problem?** → $F_2 = F_1(A_2/A_1)$; volume conserved: $A_1 d_1 = A_2 d_2$.
> - **Continuity or Bernoulli?** → Continuity = mass conservation ($A_1 v_1 = A_2 v_2$); Bernoulli = energy conservation. Apply separately.
> - **Bernoulli valid?** → Only for non-viscous, incompressible, steady flow along a streamline.
> - **v↑ means P↓?** → Only at the **same height** (horizontal pipe). In a general pipe, check height changes too.
> - **Torricelli's Law?** → $v = \sqrt{2gh}$ for open tank. Same form as free-fall.
> - **Viscosity temperature dependence?** → Liquids: η **decreases** with T. Gases: η **increases** with T. (Opposite directions!)
> - **Terminal velocity formula?** → $v_t = 2a^2(\rho-\sigma)g/9\eta$; $v_t \propto a^2$; $v_t \propto 1/\eta$.
> - **Excess pressure in a drop?** → Drop or air bubble (1 surface): $\Delta P = 2S/r$.
> - **Excess pressure in a soap bubble?** → 2 surfaces: $\Delta P = 4S/r$. **Double the drop formula!**
> - **Capillary rise formula?** → $h = 2S\cos\theta/(\rho g a)$; $h \propto 1/a$ (thinner = higher).
> - **Mercury in glass capillary?** → Obtuse θ → $\cos\theta < 0$ → capillary **depression**, not rise.
> - **S = F/(2l) not F/l?** → Factor of 2 because film has **two** surfaces. Never drop it.
> - **S and η both decrease with T for liquids?** → Yes — hot water cleans better (lower S and η).
> - **Pressure is scalar?** → Yes — no direction can be assigned to it; acts equally in all directions.
> - **Dim. formula for P, Y, G, B all the same?** → Yes: $[\text{ML}^{-1}\text{T}^{-2}]$ (they are all stress-like quantities).
> - **Dim. formula for η?** → $[\text{ML}^{-1}\text{T}^{-1}]$ (one less T than pressure — note the difference!).
> - **Dim. formula for S?** → $[\text{MT}^{-2}]$ (no L — force per unit length = mass × acceleration-like per length).

---

## 📌 Common Formula Errors to Avoid

|Wrong Formula|Correct Formula|Situation|
|:--|:--|:--|
|$P = \rho g h$|$P = P_a + \rho g h$|Absolute pressure at depth h — never forget Pₐ|
|$S = F/l$|$S = F/(2l)$|Film has **two** surfaces — factor of 2 essential|
|Soap bubble $\Delta P = 2S/r$|Soap bubble $\Delta P = \mathbf{4S/r}$|Two surfaces in a soap bubble — **double** the drop formula|
|$\eta$ falls with T for all fluids|Liquids: $\eta \downarrow$; Gases: $\eta \uparrow$|Opposite temperature dependence for liquids vs gases|
|$v_t \propto a$|$v_t \propto \mathbf{a^2}$|Terminal velocity depends on **square** of radius|
|Capillary rise $h \propto a$|$h \propto \mathbf{1/a}$|Rise is **inversely** proportional to tube radius|
|Mercury rises in glass capillary|Mercury is **depressed** in glass|Obtuse θ → $\cos\theta < 0$ → h < 0|
|A₁v₁ = A₂v₂ is Bernoulli|A₁v₁ = A₂v₂ is the **continuity equation**|Different law — mass conservation, not energy conservation|
|$v\uparrow \Rightarrow P\downarrow$ always|$v\uparrow \Rightarrow P\downarrow$ **only at same height**|Bernoulli: $P + \frac{1}{2}\rho v^2 + \rho g h = \text{const}$; if h also changes, P may not decrease|

---

_End of Revision Notes + Mind Maps — Physics Ch. 9_