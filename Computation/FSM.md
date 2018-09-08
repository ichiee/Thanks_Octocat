
## Finite State Machine

### Prep!

Symbol - a, b, c, 0, 1, 2

Alphabet (denoted by)Σ  - collection of symbols - 

          i.e. {a, b, g} {0, 1, 2} ...

String - Sequesnce of symbols - 

          i.e. a, b, 0, 1, aa, bb, ab, 01

Language - Set of strings   

            i.e. Σ = {0, 1}   
                  L1  = set of all strings of lenhgth 2   
                      = {00, 01, 10, 11}      
                  L2  = set of all stiging of length 3      
                      = {000, 001, 010, 011, 100, 101, 110, 111}      
                  L3  = set of all strings that beging with 0     
                      = {0, 00, 01, 000, 001, 020, 011, 0000, ...}    
                 (infinite set) 
                 L1 an L2 is finite set 
                 L3 is nifinite set 



### Powers of Σ : 

    Σ = {0,1}

Σ<sup>0</sup> = Set of all strings of length is 0 :
(Sigma power zero) Σ = {ε}  

Σ<sup>1</sup> = Set of all strings of length is 1 :
(Sigma power onw) Σ = {0, 1} 

Σ<sup>2</sup> = Set of all strings of length is 2 :
(Sigma power two) Σ = {00, 01, 10, 11} 

Σ<sup>3</sup> = Set of all strings of length is 2 :
(Sigma power three) Σ = {000, 001, 010, 011, 100, 101, 110, 111}


Σ<sup>n</sup> = Set of all strings of length is n :


Cardinality:
number of elements in a set
So cardinality of Σ<sup>n</sup> (Sigma power n)is 2<sup>n</sup> (if n > 0)


### Σ<sup>*</sup>

∑<sup>*</sup> = Σ<sup>0</sup> ∪ Σ<sup>1</sup> ∪ Σ<sup>2</sup> ∪ Σ<sup>3</sup> ... ∪ ∪ ∪ 

∑<sup>*</sup> = {ε} ∪ {0, 1} ∪ {00, 01, 10, 11}  ∪ {000, 001, 010, 011, 100, 101, 110, 111} ...

Set of all possible strings of all lengths over {0,1}

This is infinite set!


###   Finite State Machine

also know as Finite Automata

- With output

    Moore Machine
    Mealy Machine



- without output

    DFA
    NFA
    ∈-NFA



Here let's see **DFA**

## Determonistic Finite Automata   

it is the simplest form of computation   
It has very limited memory    


Q = set of states 

∑ = input

q0 = start state from where any input is processed (q0 ∈ Q).

F = a set of final state/states of Q (F ⊆ Q) 

δ = transition function where δ: Q × ∑ → Q


    (i.e)
    Q = {A, B, C, D}

    ∑ = i{0, 1}

    q0 = A

    F = {D}

    δ = (table Q × ∑ → Q so xis 1,2 y is A, B, C, D)

****


Examples:

dead state or trap state is where you cannot go to the final state

if you wanna construct DFA which does not contain paticular string, first make the DFA contents the string,
then flip it! (make final state to non final state, make non final state to final state


*****

Some to use and understand math notation - just copy and paste  
https://github.com/Jam3/math-as-code/blob/master/README.md  
Copy and paste notation if you need  
https://en.wikipedia.org/wiki/List_of_mathematical_symbols  

Σ  
∈

2<sup>kl</sup>  
epsilon   ε 
union (denoted by ∪) 
***


***

I ### Just some basic mathmatic notation

In set theory, the "element of" symbol ∈ and ∋ can be used to describe whether something is an element of a set   
"not an element of" symbols ∉ and ∌ like so:  
> A = {3, 7, 8}, 3 ∈ A  
> A = {3, 7, 8}, A ∋ 3  
> A = {3, 7, 8}, 9 ∉ A  
***
