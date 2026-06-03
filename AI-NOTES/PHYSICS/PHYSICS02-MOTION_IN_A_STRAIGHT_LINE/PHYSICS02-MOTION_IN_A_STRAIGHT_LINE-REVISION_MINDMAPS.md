# ⚡ CHAPTER 2 — RAPID REVISION + MIND MAPS
> **Motion in a Straight Line** | Board · NEET · JEE

---

## 🔢 Key Definitions — Absolute Must-Memorise

| Quantity | Definition | Formula | SI Unit |
|:---|:---|:---:|:---:|
| **Displacement** | Change in position (vector) | $\Delta x = x_2 - x_1$ | m |
| **Distance** | Total path length (scalar) | Sum of all segments | m |
| **Average velocity** | Displacement divided by time | $\bar{v} = \Delta x / \Delta t$ | m s⁻¹ |
| **Average speed** | Path length divided by time | path / $t$ | m s⁻¹ |
| **Instantaneous velocity** | Limit of avg velocity as $\Delta t \to 0$ | $v = dx/dt$ | m s⁻¹ |
| **Instantaneous speed** | Magnitude of instantaneous velocity | $\lvert v \rvert$ | m s⁻¹ |
| **Average acceleration** | Change in velocity divided by time | $\bar{a} = \Delta v / \Delta t$ | m s⁻² |
| **Instantaneous acceleration** | Limit of avg acceleration as $\Delta t \to 0$ | $a = dv/dt$ | m s⁻² |

---

## 📐 Three Kinematic Equations — Must Know Cold

| # | Equation | Missing Quantity |
|:---:|:---|:---:|
| 1 | $v = v_0 + at$ | displacement $x$ |
| 2 | $x = v_0 t + \frac{1}{2}at^2$ | final velocity $v$ |
| 3 | $v^2 = v_0^2 + 2ax$ | time $t$ |
| — | $x = \frac{1}{2}(v_0 + v)t$ | acceleration $a$ |
| — | $s_n = v_0 + a(n - \frac{1}{2})$ | distance in nth second |

> [!warning] Condition
> All three kinematic equations are valid **only when acceleration is constant** (both magnitude and direction). For variable acceleration, use calculus — integrate $a$ to get $v$, integrate $v$ to get $x$.

---

## 📊 Graph Interpretation — Instant Recall

| Graph | Slope of line/tangent | Area under curve |
|:---|:---|:---|
| **x–t graph** | Instantaneous velocity | — |
| **v–t graph** | Instantaneous acceleration | Displacement |
| **a–t graph** | — | Change in velocity ($\Delta v$) |

| x–t Shape | Meaning |
|:---|:---|
| Straight line (inclined) | Uniform velocity ($a = 0$) |
| Horizontal line | Object at rest ($v = 0$) |
| Upward-curving parabola | Positive constant acceleration |
| Downward-curving parabola | Negative constant acceleration |
| Vertical line | Physically **impossible** |

---

## ⚠️ Critical Distinctions — High-Yield Traps

> [!important] Path Length vs Displacement
> **Path length $\geq$ |Displacement|**
> Equality holds **only** when motion is one-directional (no reversal at any point).

> [!important] Average Speed vs |Average Velocity|
> **Average speed $\geq$ |average velocity|**
> Equality holds only for unidirectional motion.

> [!tip] Instantaneous Speed vs |Instantaneous Velocity|
> **ALWAYS EQUAL at every instant** — because at a single instant, no reversal is possible.

> [!warning] Negative Acceleration vs Slowing Down
> - Negative $a$ does NOT necessarily mean slowing down.
> - **Slowing down occurs when $v$ and $a$ have opposite signs.**
> - $v < 0$ and $a < 0$ → object is **speeding up** in the negative direction.

---

## 🔑 Special Results and Important Values

| Result | Formula or Value |
|:---|:---|
| Free fall acceleration | $g = 9.8$ m s⁻² $\approx 10$ m s⁻² |
| Stopping distance | $d_s = v_0^2 / (2a) \propto v_0^2$ |
| Reaction time (ruler drop) | $t_r = \sqrt{2d/g}$ |
| Galileo's odd numbers | $1 : 3 : 5 : 7 : 9 \ldots$ (from rest, equal time intervals) |
| Same-direction relative velocity | $v_{AB} = v_A - v_B$ |
| Opposite-direction relative velocity | $v_{AB} = v_A + v_B$ |
| Average velocity (constant $a$) | $\bar{v} = (v + v_0)/2$ (arithmetic mean) |
| Distance in nth second | $s_n = v_0 + a(n - \tfrac{1}{2})$ |
| Objects meet | Set $x_A(t) = x_B(t)$ and solve |

---

## ⚡ Dimensional Formulae

| Quantity | Dimensional Formula | SI Unit |
|:---|:---:|:---:|
| Displacement | $[M^0 L T^0]$ | m |
| Velocity | $[M^0 L T^{-1}]$ | m s⁻¹ |
| Acceleration | $[M^0 L T^{-2}]$ | m s⁻² |
| Time | $[M^0 L^0 T^1]$ | s |

---

## 🔁 Free Fall Summary

> [!info] Free Fall (taking upward as positive)
> - $a = -g = -9.8$ m s⁻²
>
> **From rest ($v_0 = 0$, $y_0 = 0$):**
> - $v = -gt$
> - $y = -\frac{1}{2}gt^2$
> - $v^2 = -2gy$
>
> **At highest point of any throw:** $v = 0$ but $a = -g \neq 0$
>
> **Galileo's Law:** Distances in successive equal intervals $\tau$ are in ratio $1 : 3 : 5 : 7 \ldots$

---
---

# 🗺️ MIND MAP 1 — Chapter Overview

```mermaid
flowchart TD
    ROOT(["MOTION IN A STRAIGHT LINE"])

    ROOT --> BC["BASIC CONCEPTS"]
    ROOT --> KIN["KINEMATICS"]
    ROOT --> GEQ["GRAPHS AND EQUATIONS"]
    ROOT --> SPC["SPECIAL TOPICS"]

    BC --> BC1["Motion = change in position with time"]
    BC --> BC2["Rectilinear motion — along a straight line"]
    BC --> BC3["Frame of reference — origin is arbitrary choice"]
    BC --> BC4["Displacement vs Path Length"]
    BC4 --> BC5["Path length is greater than or equal to |displacement|"]

    KIN --> KIN1["Average velocity: v_avg = delta_x / delta_t"]
    KIN --> KIN2["Instantaneous velocity: v = dx/dt"]
    KIN2 --> KIN3["Slope of tangent on x-t graph"]
    KIN --> KIN4["Speed = magnitude of velocity (scalar)"]
    KIN --> KIN5["Average acceleration: a_avg = delta_v / delta_t"]
    KIN --> KIN6["Instantaneous acceleration: a = dv/dt"]
    KIN6 --> KIN7["Slope of tangent on v-t graph"]

    GEQ --> GEQ1["x-t graph: slope = velocity"]
    GEQ --> GEQ2["v-t graph: slope = acceleration"]
    GEQ --> GEQ3["v-t area = displacement"]
    GEQ --> EQ["KINEMATIC EQUATIONS — constant a only"]
    EQ --> EQ1["v = v0 + at"]
    EQ --> EQ2["x = v0t + (1/2)at^2"]
    EQ --> EQ3["v^2 = v0^2 + 2ax"]

    SPC --> SPC1["Free Fall: a = g = 9.8 m s^-2 downward"]
    SPC --> SPC2["Stopping distance: ds = v0^2 / (2a)"]
    SPC --> SPC3["Reaction time: tr = sqrt(2d/g)"]
    SPC --> SPC4["Relative velocity: v_AB = v_A - v_B"]

    style ROOT fill:#2c3e50,color:#ecf0f1,stroke:#3498db,stroke-width:2px
    style BC fill:#1e3a5f,color:#aed6f1,stroke:#2980b9
    style KIN fill:#1a3d2e,color:#a9dfbf,stroke:#27ae60
    style GEQ fill:#3d2a1a,color:#f0d0a8,stroke:#e67e22
    style SPC fill:#3d1a1a,color:#f5b7b1,stroke:#e74c3c
    style EQ fill:#1a3d2e,color:#a9dfbf,stroke:#27ae60
```

---

# 🗺️ MIND MAP 2 — Types of Velocity and Speed

```mermaid
flowchart LR
    ROOT(["VELOCITY AND SPEED"])

    ROOT --> AV["AVERAGE VELOCITY"]
    ROOT --> IV["INSTANTANEOUS VELOCITY"]
    ROOT --> RV["RELATIVE VELOCITY"]

    AV --> AV1["v_avg = delta_x / delta_t"]
    AV --> AV2["Vector: can be positive, negative, or zero"]
    AV --> AV3["slope of chord on x-t graph"]
    AV --> AS["AVERAGE SPEED"]
    AS --> AS1["= path length / time (scalar)"]
    AS --> AS2["Always greater than or equal to |average velocity|"]
    AS --> AS3["Equal only for unidirectional motion"]

    IV --> IV1["v = dx/dt — derivative of position"]
    IV --> IV2["slope of tangent on x-t graph"]
    IV --> IV3["For uniform motion: instantaneous v = average v"]
    IV --> IS["INSTANTANEOUS SPEED"]
    IS --> IS1["= |v| at every instant"]
    IS --> IS2["ALWAYS equal to |instantaneous velocity|"]
    IS --> IS3["Unlike averages — no reversal possible at a point"]

    RV --> RV1["v_AB = v_A - v_B"]
    RV --> RV2["Same direction: relative speed = v_A - v_B"]
    RV --> RV3["Opposite direction: relative speed = v_A + v_B"]

    style ROOT fill:#2c3e50,color:#ecf0f1,stroke:#3498db
    style AV fill:#1e3a5f,color:#aed6f1,stroke:#2980b9
    style IV fill:#1a3d2e,color:#a9dfbf,stroke:#27ae60
    style RV fill:#3d2a1a,color:#f0d0a8,stroke:#e67e22
    style AS fill:#1a3a5c,color:#aee6ff,stroke:#3498db
    style IS fill:#1a3d2e,color:#aeffcc,stroke:#27ae60
```

---

# 🗺️ MIND MAP 3 — Kinematic Equations Decision Tree

```mermaid
flowchart TD
    ROOT(["WHICH EQUATION TO USE?"])
    ROOT --> COND["Condition: constant acceleration only"]
    COND --> Q{"Which quantity is not given and not needed?"}

    Q -->|"displacement x not needed"| EQ1["v = v0 + at"]
    Q -->|"time t not needed"| EQ2["v^2 = v0^2 + 2ax"]
    Q -->|"final velocity v not needed"| EQ3["x = v0t + (1/2)at^2"]
    Q -->|"acceleration a not needed"| EQ4["x = (1/2)(v0 + v)t"]

    EQ1 --> N1["Links v, v0, a, t — no x"]
    EQ2 --> N2["Links v, v0, a, x — no t"]
    EQ3 --> N3["Links x, v0, a, t — no v"]
    EQ4 --> N4["Links x, v, v0, t — no a"]

    ROOT --> NTH["Distance in nth second specifically"]
    NTH --> NTH1["sn = v0 + a times (n - 1/2)"]
    NTH1 --> NTH2["Not total distance in n seconds"]

    ROOT --> VAR["Variable acceleration — use calculus"]
    VAR --> VAR1["v = integral of a dt"]
    VAR --> VAR2["x = integral of v dt"]
    VAR --> VAR3["a = v times (dv/dx) — when t is absent"]

    style ROOT fill:#2c3e50,color:#ecf0f1,stroke:#3498db
    style Q fill:#3d2a1a,color:#f0d0a8,stroke:#e67e22
    style EQ1 fill:#1a3d2e,color:#a9dfbf,stroke:#27ae60
    style EQ2 fill:#1a3d2e,color:#a9dfbf,stroke:#27ae60
    style EQ3 fill:#1a3d2e,color:#a9dfbf,stroke:#27ae60
    style EQ4 fill:#1a3d2e,color:#a9dfbf,stroke:#27ae60
    style VAR fill:#3d1a1a,color:#f5b7b1,stroke:#e74c3c
    style NTH fill:#1e3a5f,color:#aed6f1,stroke:#2980b9
```

---

# 🗺️ MIND MAP 4 — Graph Shapes for Different Motions

| Type of Motion | x–t Graph Shape | v–t Graph Shape | a–t Graph Shape |
|:---|:---|:---|:---|
| At rest | Horizontal line | Point on time axis | Line at zero |
| Uniform velocity ($a = 0$) | Straight inclined line | Horizontal line at height $v$ | Line at zero |
| Uniform positive acceleration | Upward parabola from origin | Straight line from origin (positive slope) | Horizontal line at $+a$ |
| Uniform negative acceleration (decelerating) | Downward parabola | Straight line, negative slope | Horizontal line at $-a$ |
| Reversing motion | Curve with turning point | Line crossing time axis | Horizontal line (same sign throughout) |
| Free fall from rest | Downward parabola | Straight line from origin (downward) | Horizontal at $-g = -9.8$ m s⁻² |

> [!tip] Memory Hook for x–t Shapes
> - Curve **bending upward** → positive acceleration
> - Curve **bending downward** → negative acceleration
> - **Straight line** → zero acceleration (uniform motion)
> - **Vertical line** → physically **impossible** (object at two positions simultaneously)

---

# 🗺️ MIND MAP 5 — Sign Convention and Common Mistakes

```mermaid
flowchart TD
    ROOT(["SIGN CONVENTION"])

    ROOT --> STEP1["Step 1 — Choose origin and positive direction FIRST"]
    STEP1 --> STEP2["All signs of displacement, velocity, acceleration depend on this choice"]

    STEP2 --> D1["Displacement: positive if x is greater than x0"]
    STEP2 --> D2["Velocity: positive if moving in positive direction"]
    STEP2 --> D3["Acceleration: positive if in positive direction"]

    ROOT --> MISTAKES["COMMON EXAM MISTAKES"]

    MISTAKES --> M1["MISTAKE 1 — Negative a always means slowing down"]
    M1 --> M1A["CORRECT: Slowing down only when sign of v and sign of a differ"]
    M1A --> M1B["v positive, a negative — slowing down"]
    M1A --> M1C["v negative, a negative — speeding up in negative direction"]
    M1A --> M1D["v positive, a positive — speeding up"]
    M1A --> M1E["v negative, a positive — slowing down"]

    MISTAKES --> M2["MISTAKE 2 — v = 0 means a = 0"]
    M2 --> M2FIX["CORRECT: At highest point of throw, v = 0 but a = g (not zero)"]

    MISTAKES --> M3["MISTAKE 3 — Average speed equals |average velocity|"]
    M3 --> M3FIX["CORRECT: Equal ONLY for unidirectional motion (no reversal)"]

    MISTAKES --> M4["MISTAKE 4 — Using kinematic equations for variable acceleration"]
    M4 --> M4FIX["CORRECT: Use calculus (integration) for variable acceleration"]

    style ROOT fill:#2c3e50,color:#ecf0f1,stroke:#3498db
    style MISTAKES fill:#3d1a1a,color:#f5b7b1,stroke:#e74c3c
    style M1A fill:#1a3d2e,color:#a9dfbf,stroke:#27ae60
    style M2FIX fill:#1a3d2e,color:#a9dfbf,stroke:#27ae60
    style M3FIX fill:#1a3d2e,color:#a9dfbf,stroke:#27ae60
    style M4FIX fill:#1a3d2e,color:#a9dfbf,stroke:#27ae60
```

---

# 🗺️ MIND MAP 6 — Free Fall and Galileo's Laws

```mermaid
flowchart TD
    ROOT(["FREE FALL"])
    ROOT --> DEF["Object under gravity alone — no air resistance"]
    DEF --> ACC["Acceleration = g = 9.8 m s^-2 downward (constant)"]
    ACC --> UNIFORM["Special case of uniformly accelerated motion"]

    ROOT --> DROP["DROPPED FROM REST"]
    ROOT --> THROW["THROWN UPWARD"]
    ROOT --> GALILEO["GALILEO'S ODD NUMBERS"]

    DROP --> D1["v0 = 0"]
    DROP --> D2["v = gt"]
    DROP --> D3["h = (1/2)g t^2"]
    DROP --> D4["v^2 = 2gh"]

    THROW --> T1["Initial velocity v0 = u (take upward as positive)"]
    THROW --> T2["v = u - gt"]
    THROW --> T3["At maximum height: v = 0 but a = g (not zero)"]
    THROW --> T4["Time to top: t_up = u/g"]
    THROW --> T5["Maximum height: H_max = u^2 / (2g)"]
    THROW --> T6["Total time: t_total = 2u/g"]
    THROW --> T7["Time of ascent = Time of descent (symmetric)"]
    T7 --> T8["Speed at same height: same going up and coming down"]

    GALILEO --> G1["Distances from rest in successive equal intervals t"]
    G1 --> G2["Ratio: 1 : 3 : 5 : 7 : 9 ..."]
    G2 --> G3["Total distance after n intervals: proportional to n^2"]
    G3 --> G4["Ratios 1 : 4 : 9 : 16 ... (cumulative)"]

    style ROOT fill:#2c3e50,color:#ecf0f1,stroke:#3498db
    style DROP fill:#1e3a5f,color:#aed6f1,stroke:#2980b9
    style THROW fill:#1a3d2e,color:#a9dfbf,stroke:#27ae60
    style GALILEO fill:#3d2a1a,color:#f0d0a8,stroke:#e67e22
    style T3 fill:#3d1a1a,color:#f5b7b1,stroke:#e74c3c
```

---

# 🗺️ MIND MAP 7 — Relative Velocity

```mermaid
flowchart TD
    ROOT(["RELATIVE VELOCITY"])
    ROOT --> DEF["v_AB = v_A - v_B"]
    DEF --> DEF1["Velocity of A as seen from B's reference frame"]

    ROOT --> SAME["SAME DIRECTION"]
    ROOT --> OPP["OPPOSITE DIRECTIONS"]
    ROOT --> MEET["MEETING OR OVERTAKING"]

    SAME --> S1["v_rel = v_A - v_B"]
    SAME --> S2["If v_A equals v_B: relative velocity = 0"]
    S2 --> S3["Objects appear stationary to each other"]
    SAME --> S4["If v_A greater than v_B: A moves away from B"]

    OPP --> O1["v_rel = v_A + v_B (add the speeds)"]
    OPP --> O2["Closing speed is the sum of the two speeds"]
    OPP --> O3["Example: two trains approaching head-on"]

    MEET --> ME1["Set x_A(t) = x_B(t) and solve for t"]
    MEET --> ME2["Overtaking two trains (lengths L_A and L_B)"]
    ME2 --> ME3["Relative distance = L_A + L_B"]
    ME3 --> ME4["Time = (L_A + L_B) / (v_A - v_B)"]

    ROOT --> FRAME["REFERENCE FRAME NOTE"]
    FRAME --> FR1["In frame of B: B is fixed, A moves at v_AB"]
    FRAME --> FR2["In ground frame: both have their own velocities"]

    style ROOT fill:#2c3e50,color:#ecf0f1,stroke:#3498db
    style SAME fill:#1e3a5f,color:#aed6f1,stroke:#2980b9
    style OPP fill:#3d1a1a,color:#f5b7b1,stroke:#e74c3c
    style MEET fill:#1a3d2e,color:#a9dfbf,stroke:#27ae60
    style FRAME fill:#3d2a1a,color:#f0d0a8,stroke:#e67e22
    style S2 fill:#1a3d2e,color:#a9dfbf,stroke:#27ae60
```

---

# 🗺️ MIND MAP 8 — Chapter Summary (Big Picture)

```mermaid
flowchart TD
    INPUT(["INPUT: Initial conditions x0, v0, a"])

    INPUT --> CONST{"Is acceleration constant?"}

    CONST -->|"YES — constant a"| KIN["KINEMATIC EQUATIONS"]
    KIN --> KIN1["v = v0 + at"]
    KIN --> KIN2["x = v0t + (1/2)at^2"]
    KIN --> KIN3["v^2 = v0^2 + 2ax"]
    KIN --> KIN4["x = (1/2)(v0 + v)t"]

    CONST -->|"NO — variable a"| CALC["CALCULUS"]
    CALC --> CALC1["v = integral of a dt plus C"]
    CALC --> CALC2["x = integral of v dt plus C"]
    CALC --> CALC3["a = v times (dv/dx) if t is absent"]

    KIN --> OUTPUT["OUTPUT: x(t), v(t), a(t)"]
    CALC --> OUTPUT

    OUTPUT --> GRAPHS["GRAPHICAL INTERPRETATION"]
    GRAPHS --> G1["x-t: slope = v, parabola for constant a"]
    GRAPHS --> G2["v-t: slope = a, area under curve = displacement"]
    GRAPHS --> G3["a-t: area under curve = change in velocity"]

    OUTPUT --> SPECIAL["SPECIAL CASES"]
    SPECIAL --> SC1["Free fall: a = -g throughout, all kinematic eqs valid"]
    SPECIAL --> SC2["Stopping distance: ds = v0^2 / (2a) — proportional to v0^2"]
    SPECIAL --> SC3["Relative velocity: v_AB = v_A - v_B (same direction)"]

    style INPUT fill:#1e3a5f,color:#aed6f1,stroke:#2980b9
    style CONST fill:#3d2a1a,color:#f0d0a8,stroke:#e67e22
    style KIN fill:#1a3d2e,color:#a9dfbf,stroke:#27ae60
    style CALC fill:#3d1a1a,color:#f5b7b1,stroke:#e74c3c
    style OUTPUT fill:#2c3e50,color:#ecf0f1,stroke:#3498db
    style GRAPHS fill:#1a2a3d,color:#cce5ff,stroke:#3498db
    style SPECIAL fill:#2a1a3d,color:#ddaaff,stroke:#9b59b6
```

---

*End of Rapid Revision + Mind Maps — Ch. 2: Motion in a Straight Line*
*Exam Tags: Board · NEET · JEE Mains · JEE Advanced*