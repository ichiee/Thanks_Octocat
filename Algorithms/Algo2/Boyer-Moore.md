## 4 Substring Search

### Boyer-Moore

text (position i; len N)        
pat (position j: len M)



When finding non matching patterns,     
find j of the pat matching to the i by checking backward of pat (prefix of pat) 

if text[i] is not present on pat then i++   

![Boyer-Moore Skip Computation](https://github.com/ichiLamuchy/Thanks_Octocat/blob/master/Algorithms/Algo2/Images/boyer-moore%20skip%20computation.png)

You can create a column called right[c] 
(it can mean the next character)    

where there is value - it would represents the index of the existing pattern - right[pat.charAt(j)] = j;    
    
 
    right = new int[R];
    for (int c = 0; c < R; c++)
       right[c] = -1;
    for (int j = 0; j < M; j++)
       right[pat.charAt(j)] = j;
 
 
So here is Java
  
    public int search(String txt)
    {
       int N = txt.length();
       int M = pat.length();
       int skip;
       for (int i = 0; i <= N-M; i += skip)
       {
          skip = 0;
          for (int j = M-1; j >= 0; j--)
          {
             if (pat.charAt(j) != txt.charAt(i+j))
             {
                // compute skip value
                skip = Math.max(1, j - right[txt.charAt(i+j)]);
                break;
              } 
          }
           if (skip == 0) return i;
                return N; 
     }
     
     
Explanation:

skip = Math.max(1, j - right[txt.charAt(i+j)]);     
     
     
     txt.charAt(i+j)] is to see what char is on the text where comparation
     as the j point at the begining of comparation
     
     right[txt.charAt(i+j)])
     to see the table what int is on
     and that is the index of the pat
     
     j - right[txt.charAt(i+j)]
     To see if the charactor existing on any prefix (from j) of the pat
     If so the value would be more than 1 therefore
     
     Math.max(1, j - right[txt.charAt(i+j)])
     will be the value of skip
     
     
### Ω Takes N/M. - Quite amazing 
Big O can be the same as Brute-Force N times


     
     
     
