# 4. Sub String Search

## Knuth–Morris–Pratt DFA

(there cam be NFS implimention too)

This is bassiclly makes the window the of the pattern is matched ont the givin string.

There would be computstion needed on 

    1: actual pattarn matching  
    2: DFA from the pattern 

### start with this DFA

#### Let's make a DFA tables - so it can be express as 2d array

The top row is on the what state is (jth caracter on pat) on the DFA 
The second row woulbe the actual pattern (pat)  
You can create all other row as DFA table number of row is the all charactor occers on the pattern  
where it matched there would be a number will be added as to go to the j+1 

![](https://github.com/ichiLamuchy/Thanks_Octocat/blob/master/Algorithms/Algo2/Images/kmp-dfa.png)
The point here is how you determine whichi state unmatched caracter would go. 

When it matched uptil jth caractor, you can stimulate a new-pat = pat [1... j-1]   
(who the hell knows why?)   

using existing table to read the new-pat to find out the state X, you copy how it would behave at the stage X and copy it
then you can fill in the unpatched column on the tables.
[KMP VIDEO by Sedgewick](https://www.coursera.org/learn/algorithms-part2/lecture/TAtDr/knuth-morris-pratt)

OK in other word - how to make KMP DFA is

stimuration of new-pat, where it end up will be indicated by state X, 
you can copy the column of unmatched caractor on the your current posion (j)
Quite simple.





#### Constructing the DFA for KMP substring search: Java implementation

For each state j:   
・Copy dfa[][X] to dfa[][j] for mismatch case.     
・Set dfa[pat.charAt(j)][j] to j+1 for match case. 
  - pat.charAt(j)is for row of acttual what char is on the string at the jth. so that means it would send it to the next state
・Update X.    
 
    public KMP(String pat)
    {
       this.pat = pat;
       M = pat.length();
       dfa = new int[R][M];
       dfa[pat.charAt(0)][0] = 1;
       for (int X = 0, j = 1; j < M; j++)
       {
        for (int c = 0; c < R; c++)   // this bits is teh KMP DFA behaviour
        dfa[c][j] = dfa[c][X];        // update mismatched case
        dfa[pat.charAt(j)][j] = j+1;  // update matched case
        X = dfa[pat.charAt(j)][X];    // update X position
        } 
    }

where R is the radix and M is the length of the pattern
