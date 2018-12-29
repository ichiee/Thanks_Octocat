# 4 Substring Search

## Brute-Force Substring Search

### 

Check pat on text starting from the left then when matched return i


text (position i; len N)
pad (posion j; len M)

i (pointer) of the pattern matching starts
j is the posion of the pat where it checks

i+j
 
 
![](https://github.com/ichiLamuchy/Thanks_Octocat/blob/master/Algorithms/Algo2/Images/brute-force.png)

        public static int search(String pat, String txt)
        {
           int M = pat.length();
           int N = txt.length();
           for (int i = 0; i <= N - M; i++)
           {
              int j;
              for (j = 0; j < M; j++)
                 if (txt.charAt(i+j) != pat.charAt(j))
                    break;
              if (j == M) return i;
            }
            return N; //not found 
        }



#### Alternative implemention

Backup

 In many applications, we want to avoid backup in text stream.
 ・Treat input as stream of data.    
 ・Abstract model: standard input. 
 
Approach 1. Maintain buffer of last M characters.   
Approach 2. Stay tuned. 

Same sequence of char compares as previous implementation.
・ i points to end of sequence of already-matched chars in text. 
・ j stores # of already-matched chars (end of sequence in pattern).

 
        public static int search(String pat, String txt)
        {
           int i, N = txt.length();
           int j, M = pat.length();
           for (i = 0, j = 0; i < N && j < M; i++)
           {
              if (txt.charAt(i) == pat.charAt(j)) j++;
              else { i -= j; j = 0;  }
           }
           if (j == M) return i - M;
           else            
           return N;
        }


Basiclly it is the same but the i pointer is at where the actual char on comparation instead of starts (where j = 0)

Brute-force is not always good enough.
Theoretical challenge. Linear-time guarantee. Practical challenge. Avoid backup in text stream.
fundamental algorithmic problem
often no room or time to save text
###
