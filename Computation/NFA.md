## Non Determonistic Finite Automata


Let's compare to DFA
#### Determistic Finite Automata
    Detaminism

> In DFA given current state **we know** where the next state will be
> it ahs **only one** unique next state
> It has **no choises or randomness**
> It his simple and easy to design

#### Non-detamisitic Final Automata      
    Non-Detaminism

> In NFA, given the current state there could be **multiple next stages**    
> The next stages may be **chosen at random**
> All the next states may be **chosen paralle**
> there is **ε choice** which is empty string


### Formal definition of NFA

Machine accepts     
L = {Set of all strings that end with 0}        

Q = set of all states

∑ = input

q0 = start state from where any input is processed (q0 ∈ Q).

F = a set of final state/states 

δ = transition function where δ: Q × ∑ → 2 <sup>Q</sup>


    (i.e)
    Q = {A, B}

    ∑ = i{0, 1}

    q0 = A

    F = B

    δ = 4

If there is 2 stages there would be 4 possibilities (a, b, ab, Φ)to go - 2<sup>2</sup>     
If there is 3 stages there would be 8 possibilities (a, b, c, ab, ac, bc, abc ∞̸)to go - 2<sup>3</sup>      


If there is anyway to run the machine  that ends in any set  of states out of which
at least one state is a final state, then the NFA accepts

Dead configuration where it finish  Φ -> nowhere to go while DFA the situation wpuld ceate dead state

So any condition - make one state has one the difinite arrow to go to the next one. 
When the happen, you must create dead state if you wanna convert **NFA to DFA**

******

## NFA to DFA

conversion of NFA to DFA
https://www.youtube.com/watch?v=--CSVsFIDng&index=15&list=PLBlnK6fEyqRgp46KUv4ZY69yXmpwKOIev        

Every DFA is an NFA but not vise varsa
But there is an equivalant DFA for every NFA


Reminder - only difference is       
DFA     
δ: Q × ∑ → 2 <sup>Q</sup>      
NFA     
δ: Q × ∑ → Q        

#### So anywhere another possibility need to set it dead state for the input where the conditions happen.

### EXAMPLE 1

#### NFA

|   | 0   | 1      |
|---|-----|--------|
| A | {A} | {A, B} |
| B | Φ   | Φ      |

#### DFA
|   | 0   | 1      |
|---|-----|--------|
| A | {A} |  {AB}  |            
| AB | {A}  | {AB}      |           

make this AB state      
Now you gotta have value of AB by perform UNION of a & b        
so union of A &  Φ  is A        
union of AB and  Φ  is AB       

It's called **subset construction method**

### EXAMPLE 2

#### NFA 
given by        
M = \[{A, B, C}, (a, b),δ, A, {C} ]     

δ is given by   
    
|   | a    | b    |
|---|------|------|
| A | A, B | C    |
| B | A    | B    |
| C | -    | A, B |


#### DFA 

|   | a    | b    |
|---|------|------|
| A | A, B | C    |
| B | A    | B    |
| C | -    | A, B |

Again All union operation       
So A U B is {A, B} U A. -> A is common. so the answere is AB        
D is dead state     
All the sate involve C will be the final states     
so BC and C will be final states        


#### So if there is 1 input goes more than 1 destination, it will be Unioned on DFA

