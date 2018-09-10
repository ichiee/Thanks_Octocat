## Regular Languages  

A language is said  to be a regular language if only if some Finite State Machine recognise it

So what language is not regular

The language
- which are not recognise by any FSM
- Which require memory

      - Memory of FSM is very limited
      - It cannot store or count strings




### Operation in Regular languages

#### Union    
A U B = {x| x ∈ A or x ∈ B}   
x belongs A or B.  

#### Concatination    
A o B = {xy| x ∈A and y∈B}    

x benongs to A, y belongs to B

#### Star   
A* = {x1, x2 x3 ... xk | k >= 0 and each of xi ∈ A}   
Any number of X is belonging to A   


    i.e. A = {pq, r}, B = {t, uv}

    A U B = {pq, r, t, uv}

    A o B = {pqt, pquv, rt, ruv}

    A* = {∈, pq, r, pqr, rpq, pqpq, rr, pqpqpq, rrr, ...}   


Theorem 1: The class of Regular Languages is clodes under UNION   
Theorem 1: The class of Regular Languages is clodes under CONCATINATION








