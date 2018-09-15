

### DFA  
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

Some readings
Semantics, Analysis and Security of Backtracking Regular Expression Matchers
http://etheses.bham.ac.uk/6011/1/RathnayakeMudiyanselage15PhD.pdf

Exploring Regular Expression Comprehension
https://wangpeipei90.github.io/papers/ase2017.pdf

Greate talk on Algorithm 2
https://www.coursera.org/lecture/algorithms-part2/regular-expressions-go3D7


****

### Kleene's findings

Original 
https://www.nayuki.io/page/countable-sets-and-kleene-star

This one is easier reading (better printing)the same as above
http://www2.fiit.stuba.sk/~kvasnicka/CognitiveScience/2.prednaska/kleene56representation%5B1%5D.pdf

Regular Languages and Finite Automata - written 12 pages
https://www.cs.nmsu.edu/historical-projects/Projects/kleene.9.16.10.pdf


Each character in a regular expression (that is, each character in the string describing its pattern) 
is either 
- a metacharacter, having a special meaning, 
- or a regular character that has a literal meaning


****

## Kleens Representaton of Events in Nerve Nets and Finite Automata

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

### The input to a Nerve Net

Consider a nerve with k input neurons N1 ....Nk
t is time so P is the time 

| t  | N1 |N2 |
| ----- | ------ |------ |
| p    | 1  | 0  |
| p-1  | 1  | 1  |
| p-2  | 0  | 1  |


So here, N1, N2 is equiveranrt to J, K, L / P is t on the example above anatomy of the patterns

### Definite Event

### 1: Definite Events Defined

Duration l (definite of length)
consective moment p-l+1, ... , p

There would be exactly kl elements of table entries (length x number of input neurons)
so there would be 2<sup>kl</sup> is the exactly possible number of variety of the tables.
Therefore 2<sup>kl</sup> k x l would be a possible occurence of  event

So
> There are exactly 2<sup>2<sup>kl</sup></sup> on positive definitite events on k input neurons of length l

### 2 & 3 Rrepresentability of Define Events
M1, m2.. represents synapses
lag - as in lag / delay behind
Any positive definitive event is representable by firing neuron with lag 2.

using [] as depth, just like () on usual math
kl-formula: the number of depth can be defined 
Each kl-formula F expresses a definite event E on k input neurons of length l.

***

 


### Representation of Events in Nerve Nets and Finite Automata note 2 scrubles
https://www.rand.org/content/dam/rand/pubs/research_memoranda/2008/RM704.pdf

soma - cell body ( where nucleus and mitochondorion etc presents)
Axon is the fiber sticking out from soma, the end bits id the synapses after branched out.
The branches called axon termibal.

Page13 Definite Events
where p is like Q so p-1 is Q1
N1 N2 s are like what ∑ would present= ( where the arrow / actual value) 
The number is fixed period of time so that is relate to the position

***

###definine in formula

*P* : inner nurons  - primary stimulated nuron  
*p* : Time actual time not length or duration  
*P*(*p*) : Nuromn *P* fires at the time of *p*  
k input newrons : N1...., Nk  (starting 1)
*l* : priod of time (length)
*kl* elements in the ele,meths

*M* : Connection, synapses


    clarify 1 : 
    need clarify relation of depth, p, l, lag, s
    
    think *p* should be starting 0 then goes p-1, p-2 ... p-i
    length is the maximum number of abs(pi) + 1
    
    othe rway to think if p start 1 then maxmum it can go is p-1
    in this case l is 2 so in this way l = p+1
    
    so in that sense p-l+1 is replisenting the relation above
    
    
    
      clarify 2 : 

      on page 8, *M* : is inserted to show that we can have the net connected.
      so you can see the events never occered such a time the circle attached





Mesurements of depth: 

the *k* input newrons N1...., Nk at the *l* moments *l*+1, ... *p*
This expression, *kl-formula*, of depth ==  greater number of successive time `&` or `V` is used in the construction


Examples:  

N1 (p-1) Input Nuron N1 at the time of *p*-1


***

