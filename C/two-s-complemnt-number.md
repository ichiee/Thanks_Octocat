
## Two's complement

wiki:https://en.wikipedia.org/wiki/Two%27s_complement


Two's complement is a mathematical operation on binary numbers

Looks at the pic below

Binary is two's complement presentaion.
two's complement  is (n^2 - n) on binary

So two's complement is switch the number then +1. it is like ~n +1

It is equiverant to binary (two's complement presentaion) of negative dec int 

![](https://github.com/ichiLamuchy/Thanks_Octocat/blob/master/C/img/twos%20complement.png)


two's complement has the advantage that the fundamental arithmetic operations of    
addition, subtraction, and multiplication are identical to those for unsigned binary numbers  
(as long as the inputs are represented in the same number of bits - as the output,    
and any overflow beyond those bits is discarded from the result)    


This explains well too
https://www.electronics-tutorials.ws/binary/signed-binary-numbers.html

Simply singed int is a half size of unsigned int. unsigned is only positive int and sined have equiverant number of negative existing too

So the SMB (the first bit) represents if it is positive or negative (0-pos 1-neg). 
Others are the same as unsigned 

so example if you have 4 bits the fist bit is for sign and the rest of 4 bits to present the number (the magnitude bits)

There are example of usefulness of usual math operation.


