book [Parsing Techniques - Dick Grune](https://dickgrune.com/Books/PTAPG_1st_Edition/BookBody.pdf)

# Languages as infinite sets

### Languages are infinite bit-strings

Σ={a, b}
Σ<sup>*</sup>= {ε, a, b, aa, ab, ba, bb, aaa, . . . }     

    The language Σ* has the interesting property that all languages using alphabet Σ are subsets of it (sorted). 
    That means that, given another possibly less trivial language over Σ, called L

Let's say Suppose our language L is “the set of all words that contain more a’s than b’s”.
If you describe it as binary as the set included is 1 not 0, 

Σ<sup>*</sup>=1111111111111111 . . .
L=0101000111010001 . . .



### Diagonalization


Description and Language example

      Description #1 000000100...   
      Description #2 110010001...   
      Description #3 011011010...   
      Description #4 110011010...   
      Description #5 100000011...    
      Description #6 111011011...


Consider the language C=100110 . . . ,
which has the property that its n-th bit is unequal to the n-th bit of the language described by Description #n.  

first bit of c is 1st bits of Description #1.
2nd bit of c is 2nd bits of Description #2.
3rd bit of c 3rd bit of Description #3.   and so on

C is made by walking the NW to SE diagonal of the language field and copying the opposites of the bits we meet

