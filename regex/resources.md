

DFA 
https://www.youtube.com/watch?v=QDjq027rtQY
https://www.tutorialspoint.com/automata_theory/deterministic_finite_automaton.htm

#### A DFA can be represented by a 5-tuple (Q, ∑, δ, q0, F) where −

- Q is a finite set of states.

- ∑ is a finite set of symbols called the alphabet.

- δ is the transition function where δ: Q × ∑ → Q

- q0 is the initial state from where any input is processed (q0 ∈ Q).

- F is a set of final state/states of Q (F ⊆ Q).

So 
Q = {Q0, Q1, ...}
∑ is what arrows are on 
F can be show as like relational table / database

****
Some to read
https://www.nayuki.io/page/countable-sets-and-kleene-star

this one is easier reading
http://www2.fiit.stuba.sk/~kvasnicka/CognitiveScience/2.prednaska/kleene56representation%5B1%5D.pdf

https://www.cs.nmsu.edu/historical-projects/Projects/kleene.9.16.10.pdf


Each character in a regular expression (that is, each character in the string describing its pattern) 
is either 
- a metacharacter, having a special meaning, 
- or a regular character that has a literal meaning


****


### Neuron anatomy

- Endbulb - Axton terminals, the end branches on the axton
- Axton - long part
- Soma - body part
- Dendrites - the branches around the soma where receive the nuro transmitter from endbulb
- Synapse - Gap between Endbulb and Dendrites.

Neurons receive signals from neighbor neurons through their dendrites. From there, the signal travels to the main cell body,  soma. Next, the signal leaves the soma and travels down the axon to the synapse.

### Anatomy of the patterns

Inner neuron - P ( at least ceetarin number of h (threshold) and 
Input neurons - J, K, L, M, N (condition to fire is the enviroment causes the nruron to fire at the time of T)
The written number inside of nuron (typically P) is the h - threathhold

P (t) Neuron P fires at time P
J (t-1) to J fired at t-1 

## The input to a Nerve Net

Consider a nerve with k input neurons N1 ....Nk
t is time so P is the time 

| t  | N1 |N2 |
| ----- | ------ |------ |
| p    | 1  | 0  |
| p-1  | 1  | 1  |
| p-2  | 0  | 1  |


So here, N1, N2 is equiveranrt to J, K, L / P is t on the example above anatomy of the patterns

## Definite Event

### 1: Definite Events Defined

Duration l (definite of length)
consective moment p-l+1, ... , p

There would be exactly kl elements of table entries (length x number of input neurons)
so there would be 2<sup>kl</sup> is the exactly possible number of variety of the tables.
Therefore 2<sup>kl</sup> k x l would be a possible occurence of  event

So
> There are exactly 2<sup>2<sup>kl</sup></sup> on positive definitite events on k input neurons of length l

### 2 &3 Rrepresentability of Define Events
M1, m2.. represents synapses
lag - as in lag / delay behind
Any positive definitive event is representable by firing neuron with lag 2.

using [] as depth, just like () on usual math
kl-formula: the number of depth can be defined 
Each kl-formula F expresses a definite event E on k input neurons of length l.

***

 


### Representation of Events in Nerve Nets and Finite Automata
https://www.rand.org/content/dam/rand/pubs/research_memoranda/2008/RM704.pdf

soma - cell body ( where nucleus and mitochondorion etc presents)
Axon is the fiber sticking out from soma, the end bits id the synapses after branched out.
The branches called axon termibal.

Page13 Definite Events
where p is like Q so p-1 is Q1
N1 N2 s are like what ∑ would present= ( where the arrow / actual value) 
The number is fixed period of time so that is relate to the position

