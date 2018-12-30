## 4 Substring search

###Rabin-Karp fingerprint search

WIP oh this is sick i need to come back though 

### Basic idea = modular hashing.

・Compute a hash of pattern characters 0 to M - 1.   

・For each i, compute a hash of text characters i to M + i - 1. ・If pattern hash = text substring hash, check for a match.  

use some random prime number and use modular
so the prime is the hash value

### 1: How to compute hash funmction

#### Efficiently computing the hash function

 Modular hash function.   
Using the notation ti for txt.charAt(i), we wish to compute

x<sub>i</sub> =t<sub>i</sub> R<sup>M-1</sup> +t<sub>i+1</sub> R<sup>M-2</sup> +...+t<sub>i+M-1</sub> R<sup>0</sup> (modQ)

Intuition. M-digit, base-R integer, modulo Q.

Horner's method. Linear-time method to evaluate degree-M polynomial.

![](https://github.com/ichiLamuchy/Thanks_Octocat/blob/master/Algorithms/Algo2/Images/efficiently%20computing%20the%20hash%20function.png)

on here 10 is R
Takes previous value to use teh computation

![](https://github.com/ichiLamuchy/Thanks_Octocat/blob/master/Algorithms/Algo2/Images/Efficiently%20computing%20the%20hash%20function2.png)


        public class RabinKarp
        {
           private long patHash; // pattern hash value
           private int M;         // pattern length
           private long Q;        // modulus
           private int R;         // radix
           private long RM;       // R^(M-1) % Q

           public RabinKarp(String pat) {
              M = pat.length();
              R = 256;
              Q = longRandomPrime();
              RM = 1;
              for (int i = 1; i <= M-1; i++)
                 RM = (R * RM) % Q;
              patHash = hash(pat, M);
           }
           private long hash(String key, int M)
           {  /* as before */  }
           public int search(String txt)
           {  /* see next slide */  }
        }





