

## Talk from Robert Sedgewick  
https://www.coursera.org/lecture/algorithms-part2/regular-expressions-go3D7

brilliant his text book 
https://algs4.cs.princeton.edu/54regexp/


This is must read as well  
Theory of DFA  
https://www.dennis-grinch.co.uk/tutorial/dfa-theory

********

**Fragile X** syndrome is a common cause of mental returdation

- Human genome containts tripler repeats of CGG or AGG, bracketed by GCG at the befining and CTG at the end.

- GCG(CGG|AGG)*CTG as regex pattern

Pattern matching applications

Test if a string matches some patterns

- process natural languages

Regular expression is 
> notention to specify a set of strings


|   operation   | precedence order |   RE i.e.  |   matches   |   does not match   |
|:-------------:|:----------------:|:----------:|:-----------:|:------------------:|
| concatenation |         3        |    BBAAB   |    BBAAB    | every other string |
|       or      |         4        |    AA\|BB   |   AA BAAB   | every other string |
|    closure    |         2        |    AB*A    |  AA ABBBBA  |      AB ABABA      |
|    parents    |         1        | A(A\|B)AAB  | AAAAB ABAAB | every other string |
|               |                  | (AB)*A     | AABABABABA  |       AA ABBA      |






Ex. [A-E]+ is short hand of (A|B|C|D|E)(A|B|C|D|E)*


RE notation is surprisingly expressive

| operation            | RE i.e.           | matches            | does not match         |
|----------------------|-------------------|--------------------|------------------------|
| wildcard             | .U.U.U            | CUMUKUK   SUDULUM  | SUCUUBUN   TUMUL YUBOS |
| character classes [] | [A-Za-z][a-z]*    | word   Capitalised | camelCase              |
| at least 1   +       | a(BC) + DE        | ABCDE   ABCBCDE    | ADE                    |
| exactly k   {k}      | [0-9]{3}-[0-9]{4} | 123-2222           | 1111111                |

