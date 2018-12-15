[Session 17: Succinct Structures I video](https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-851-advanced-data-structures-spring-2012/lecture-videos/session-17-succinct-structures-i/)
[Succinct Data Structures Ian Munro](https://cs.uwaterloo.ca/~imunro/cs840/Notes16/SuccinctDS.pdf)

## Rank & Select in bit string

Navigation left and right child children of ith internal nodes are at  position 2i & 2i+1 

Top->bottom Left->tight.   
you can make array with 1 and 0.    
1 - internal   
0 - external (nothing)

Rank(i) = is a # is at before posion (the number of the node).   
Select (j) position of jth 1 bit (all the possible left and right children count).    

So that 
left child (i) = 2 rank, (i)  
right (above)+1

parent (i) = select, ([i/2])   

now minimise!!

it need to be on constant time to minimise!

**** add the logic here for reducing process ****************************
Rank: 

1: use lookup table for it string

len X => O(2<sup>x</sup>)


## OM! Binary trie - rooted orderd tree - balanced paren
      binary trie - complete bimary tree likr red-black tree    
      rooted ordered tree - can have multiple childrens

#### Transfer binary trie to Rooted ordered tree. 

      take binary trie and then group the right side then roatate 45 degree
      anything on the sama levers are connected to the same node which the most left node orininally / initailally connected to


#### rooted orderd tree to balanced parens

      create start from top and left to create parens

      ((()()()())(())())

### OOOOh! Open paren is 0 / Close paren is 1
so you can express it on binary (sweet)

But then though it could be able to present the data set the kate showed me on Fri (check the paper)

Anyway:

    Binary trie   - rooted orderd tree      - balanced paren

    Left child    - fist child of the node  - ( next char [if (]

    Right chile   - next sibling            - go to the ), next char[if (]

    Parent        - previous sibling [if not one then go up to parent] - prev char if ) goto the ( of the ) if prev char is (, then you done, that is it


Let's do sub tree
















