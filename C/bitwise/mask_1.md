# Bitwise


This is a good cheat sheet of bitwise operation

https://medium.com/@shashankmohabia/bitwise-operators-facts-and-hacks-903ca516f28c



### When creating mask

1:Try to use 1 not 0 to start with




### magic of x & (x - 1) 
from peter wegner


Kate uses here 
https://github.com/katef/kgt/blob/master/src/svg/output.c#L297 


`Case 1`
Turn off the rightmost 1-bit.
x & (x - 1) 

The value has the rightmost 1 bit.   
In this case subtracting one from it sets all the lower bits to one and changes that rightmost bit to 0
It will result to take off the right most 1 bit of x. 
The value has the rightmost 1 bit. In this case subtracting one from it sets all the lower bits to one and changes that rightmost bit to 0 

It is simply if when you substruct one from the number, rightmost of 1 becoming 0 and all the lower side (on the right) 0 become 1 this create all 0 uptil the right most 1 if you use &  -> as result, take the rightmost 1 off




-----
Cheat sheet:

```

(1<<n)-1  
simple masks. 

(x & 01)  
is 1 if the 1st bit is 1.  

x & (-x)  
is leave right most 1 to 1 everything else to 0    

x | (x-1)  
All the 0-bits right to the rightmost 1-bit got turned into ones. 


^ can be flip everything around 
if you wanna create mask 11100111 & x
you could instead mask 00011000 ^ x 


```

resauces:
https://medium.com/@shashankmohabia/bitwise-operators-facts-and-hacks-903ca516f28c
