# 📖 CHAPTER 1 — GLOSSARY & TERMINOLOGY
> **Sets** | All terms alphabetically arranged with precise mathematical definitions and exam relevance tags.

---

## A

> [!important] **Absorption Laws** *(JEE)*
> Two identities relating union and intersection:
>
> $$A \cup (A \cap B) = A$$
>
> $$A \cap (A \cup B) = A$$
>
> They state that taking the union (or intersection) of a set with a subset of itself always returns the original set.

---

> [!note] **Associative Law** *(Board/JEE)*
> Set operations that are associative can be grouped in any order without changing the result:
>
> $(A \cup B) \cup C = A \cup (B \cup C)$
>
> $(A \cap B) \cap C = A \cap (B \cap C)$

---

## C

> [!important] **Cardinal Number** *(Board)*
> The number of distinct elements in a finite set $A$, denoted $n(A)$ or $|A|$. For an empty set, $n(\phi) = 0$. For an infinite set, the cardinal number is not a finite number.

---

> [!important] **Closed Interval** $[a, b]$ *(Board/JEE)*
> The set $\{x : x \in \mathbb{R},\ a \leq x \leq b\}$. Both endpoints $a$ and $b$ are included. Represented on a number line with **filled circles** at both ends.
>
> Length of the interval $= b - a$.

---

> [!note] **Commutative Law** *(Board)*
> Union and intersection are both commutative:
>
> $A \cup B = B \cup A$
>
> $A \cap B = B \cap A$
>
> Note: Set difference is **not** commutative: $A - B \neq B - A$ in general.

---

> [!important] **Complement of a Set** $A'$ *(Board/JEE)*
> Given a universal set $U$ and $A \subseteq U$, the complement of $A$ is:
>
> $$A' = U - A = \{x : x \in U \text{ and } x \notin A\}$$
>
> Key properties: $A \cup A' = U$, $A \cap A' = \phi$, $(A')' = A$, $U' = \phi$, $\phi' = U$.
>
> *Also written:* $A^c$, $\bar{A}$, $\complement_U A$

---

## D

> [!important] **De Morgan's Laws** *(Board/JEE — Very Frequently Tested)*
> Named after **Augustus De Morgan (1806–1871)**. Two dual laws relating complement with union and intersection:
>
> **Law 1:** $(A \cup B)' = A' \cap B'$
>
> "The complement of a union is the intersection of the complements."
>
> **Law 2:** $(A \cap B)' = A' \cup B'$
>
> "The complement of an intersection is the union of the complements."
>
> *Applications:* Used extensively in Venn diagram problems, logic, and probability.

---

> [!note] **Difference of Sets** *(Board/JEE)*
> $A - B = \{x : x \in A \text{ and } x \notin B\}$
>
> Equivalently: $A - B = A \cap B'$
>
> Note that $A - B$, $A \cap B$, and $B - A$ are mutually disjoint and their union equals $A \cup B$.

---

> [!note] **Disjoint Sets** *(Board/JEE)*
> Two sets $A$ and $B$ are **disjoint** if they have no common elements:
>
> $$A \cap B = \phi$$
>
> On a Venn diagram, disjoint sets are represented by non-overlapping circles.

---

> [!note] **Distributive Laws** *(JEE)*
> Union distributes over intersection, and intersection distributes over union:
>
> $A \cap (B \cup C) = (A \cap B) \cup (A \cap C)$
>
> $A \cup (B \cap C) = (A \cup B) \cap (A \cup C)$

---

## E

> [!important] **Element (Member)** *(Board)*
> An object belonging to a set. If $a$ is an element of set $A$: write $a \in A$. If not: $a \notin A$.
>
> *Synonyms:* element, member, object — all refer to the same thing.

---

> [!important] **Empty Set (Null Set, Void Set)** $\phi$ *(Board/JEE)*
> A set with **no elements**. Denoted by $\phi$ or $\{\}$.
>
> Key facts:
> - $\phi$ is a subset of every set: $\phi \subseteq A$ for all $A$
> - $n(\phi) = 0$
> - $\phi$ is finite
> - $\{\phi\}$ is **not** the empty set — it is a set containing one element (which happens to be the empty set)
>
> *Examples:* $\{x \in \mathbb{N} : 1 < x < 2\} = \phi$, $\{x : x^2 + 1 = 0,\ x \in \mathbb{R}\} = \phi$

---

> [!note] **Equal Sets** *(Board)*
> Sets $A$ and $B$ are equal ($A = B$) if and only if they contain exactly the same elements.
>
> Equivalently: $A = B \iff (A \subseteq B$ and $B \subseteq A)$
>
> Note: Order of elements and repetition do not matter — $\{1,2,3\} = \{3,2,1\} = \{1,1,2,3\}$

---

## F

> [!important] **Finite Set** *(Board)*
> A set which is empty or contains a **definite (countable) number of elements**.
>
> $n(A)$ is a non-negative integer for finite sets.
>
> *Examples:* $\{a, e, i, o, u\}$ — $n = 5$; $\phi$ — $n = 0$; $\{x \in \mathbb{N} : x \leq 100\}$ — $n = 100$

---

## H

> [!note] **Half-Open Interval** *(Board/JEE)*
> An interval that includes one endpoint but not the other:
>
> $[a, b) = \{x \in \mathbb{R} : a \leq x < b\}$ — includes $a$, excludes $b$
>
> $(a, b] = \{x \in \mathbb{R} : a < x \leq b\}$ — excludes $a$, includes $b$

---

## I

> [!important] **Idempotent Laws** *(Board)*
> Applying a set operation with itself returns the same set:
>
> $A \cup A = A$
>
> $A \cap A = A$

---

> [!important] **Inclusion-Exclusion Principle** *(Board/JEE — Numerically Tested)*
> For two sets:
>
> $$n(A \cup B) = n(A) + n(B) - n(A \cap B)$$
>
> For three sets:
>
> $$n(A \cup B \cup C) = n(A) + n(B) + n(C) - n(A \cap B) - n(B \cap C) - n(A \cap C) + n(A \cap B \cap C)$$
>
> Used for word problems involving surveys, populations, and Venn diagrams.

---

> [!important] **Infinite Set** *(Board)*
> A set that is not finite — it contains an unlimited (uncountable or countably infinite) number of elements.
>
> *Examples:* $\mathbb{N}$, $\mathbb{Z}$, $\mathbb{Q}$, $\mathbb{R}$, set of all prime numbers, set of all even integers

---

> [!note] **Intersection of Sets** $A \cap B$ *(Board/JEE)*
> The set of all elements **common to both** $A$ and $B$:
>
> $$A \cap B = \{x : x \in A \text{ and } x \in B\}$$
>
> Properties: commutative, associative, distributive over union, $A \cap \phi = \phi$, $A \cap U = A$.

---

> [!note] **Interval** *(Board/JEE)*
> A subset of $\mathbb{R}$ consisting of all real numbers between two endpoints $a$ and $b$ (with $a < b$). Four types: open $(a,b)$, closed $[a,b]$, and two half-open types $[a,b)$ and $(a,b]$. Every interval contains infinitely many points.
>
> Length of any interval with endpoints $a$ and $b$ is $b - a$.

---

## L

> [!note] **Law of Double Complementation** *(Board)*
> $(A')' = A$
>
> Taking the complement of the complement returns the original set.

---

## M

> [!note] **Mutually Disjoint Sets** *(JEE)*
> A collection of sets where every pair of distinct sets has empty intersection. Formally: $A_i \cap A_j = \phi$ for all $i \neq j$.
>
> Key result: for any two sets $A$ and $B$, the sets $A - B$, $A \cap B$, and $B - A$ are mutually disjoint.

---

## N

> [!important] **Natural Numbers** $\mathbb{N}$ *(Board)*
> $\mathbb{N} = \{1, 2, 3, 4, \ldots\}$
>
> Note: In NCERT Class 11 convention, $0 \notin \mathbb{N}$ (zero is not a natural number).
>
> Subset chain: $\mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R}$

---

> [!note] **Null Set** — see *Empty Set*

---

## O

> [!important] **Open Interval** $(a, b)$ *(Board/JEE)*
> The set $\{x : x \in \mathbb{R},\ a < x < b\}$. Neither endpoint is included. Represented on a number line with **hollow circles** at both ends.

---

## P

> [!important] **Power Set** $P(A)$ *(JEE — High Importance)*
> The set of **all subsets** of a set $A$, including $\phi$ and $A$ itself.
>
> $$n(P(A)) = 2^{n(A)}$$
>
> *Examples:*
> - $P(\phi) = \{\phi\}$, so $n(P(\phi)) = 1$
> - $P(\{a\}) = \{\phi, \{a\}\}$, so $n = 2$
> - $P(\{a,b\}) = \{\phi, \{a\}, \{b\}, \{a,b\}\}$, so $n = 4$
>
> *Derived counts:*
> - Non-empty subsets: $2^n - 1$
> - Proper subsets: $2^n - 1$
> - Non-empty proper subsets: $2^n - 2$

---

> [!important] **Proper Subset** $A \subset B$ *(Board/JEE)*
> Set $A$ is a proper subset of $B$ if $A \subseteq B$ and $A \neq B$.
>
> Equivalently: every element of $A$ is in $B$, but $B$ has at least one element not in $A$.
>
> *Notation:* $A \subset B$ or $A \subsetneq B$

---

## R

> [!note] **Real Numbers** $\mathbb{R}$ *(Board)*
> The complete set of all rational and irrational numbers. $\mathbb{R} = \mathbb{Q} \cup \mathbb{T}$ where $\mathbb{T}$ is the set of irrational numbers. The two sets $\mathbb{Q}$ and $\mathbb{T}$ are disjoint ($\mathbb{Q} \cap \mathbb{T} = \phi$).

---

> [!note] **Roster Form (Tabular Form)** *(Board)*
> A method of representing a set by **listing all elements** within curly braces, separated by commas. Each element appears only once; order is immaterial.
>
> *Example:* $\{1, 3, 5, 7, 9\}$ represents all odd natural numbers less than 10.

---

## S

> [!important] **Set** *(Board)*
> A **well-defined collection of objects**. The defining criterion must be unambiguous — for any object, it must be definitively possible to say whether or not it belongs to the collection.

---

> [!important] **Set-Builder Form** *(Board)*
> A method of representing a set by specifying the **common property** of all its elements:
>
> $A = \{x : P(x)\}$ — "the set of all $x$ such that $x$ satisfies $P$"
>
> The colon `:` reads as "such that". Sometimes a `|` is used instead of `:`.

---

> [!note] **Singleton Set** *(Board)*
> A set containing exactly **one element**. Example: $\{5\}$, $\{0\}$, $\{a\}$.

---

> [!important] **Subset** $A \subseteq B$ *(Board/JEE)*
> Set $A$ is a subset of $B$ if every element of $A$ is also an element of $B$:
>
> $$A \subseteq B \iff (x \in A \Rightarrow x \in B)$$
>
> Key facts:
> - Every set is a subset of itself: $A \subseteq A$
> - $\phi \subseteq A$ for every set $A$
> - $A \subseteq B$ and $B \subseteq A \iff A = B$
>
> *Do not confuse* $\in$ (element of) with $\subseteq$ (subset of).

---

> [!important] **Superset** $B \supseteq A$ *(Board)*
> $B$ is a superset of $A$ if $A \subseteq B$. Written $B \supseteq A$.
>
> *"B contains A."*

---

## U

> [!important] **Union of Sets** $A \cup B$ *(Board/JEE)*
> The set of all elements that belong to $A$ **or** $B$ (or both):
>
> $$A \cup B = \{x : x \in A \text{ or } x \in B\}$$
>
> Properties: commutative, associative, $A \cup \phi = A$, $A \cup U = U$, $A \cup A = A$.
>
> If $B \subseteq A$, then $A \cup B = A$.

---

> [!important] **Universal Set** $U$ *(Board/JEE)*
> The **reference set** for a given context — all sets under discussion are subsets of $U$. Denoted $U$ and typically shown as a rectangle in Venn diagrams.
>
> Properties: $U \cup A = U$, $U \cap A = A$, $U' = \phi$

---

## V

> [!note] **Venn Diagram** *(Board)*
> A visual representation of sets using overlapping circles inside a rectangle. Named after English logician **John Venn (1834–1883)**.
>
> - Rectangle represents the universal set $U$
> - Circles represent subsets
> - Overlapping regions represent intersections
>
> Used to visualise: $A \cup B$, $A \cap B$, $A - B$, $A'$, and De Morgan's laws.

---

> [!note] **Void Set** — see *Empty Set*

---

## W

> [!note] **Well-Defined Collection** *(Board)*
> A collection is well-defined if for every conceivable object, we can determine with certainty whether it belongs to the collection or not. This is the essential criterion for a collection to qualify as a set.
>
> *Well-defined:* "All prime numbers less than 10" — clearly $\{2,3,5,7\}$
>
> *Not well-defined:* "The best movies ever made" — subjective, depends on opinion

---

*End of Glossary — Ch. 1: Sets*
*Exam Tags: Board · JEE Mains · JEE Advanced*