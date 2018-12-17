
[Slide](https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-introduction-to-algorithms-sma-5503-fall-2005/video-lectures/lecture-10-red-black-trees-rotations-insertions-deletions/lec10.pdf)
[Video](https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-introduction-to-algorithms-sma-5503-fall-2005/video-lectures/lecture-10-red-black-trees-rotations-insertions-deletions/)
## Red-black Trees, Rotations, Insertions, Deletions

### Red-black Trees

This data structure requires an extra onebit
color field in each node.

### Red-black properties:

    1. Every node is either red or black.   
    2. The root and leaves (NIL’s) are black.   
    3. If a node is red, then its parent is black.- only one red node for one black node
    4. All simple paths from any node x to a descendant leaf have the same number    
    of black nodes = black-height(x). 
       In other word: Height bloack node is count the height of the children nodes (how many level it goes deeper) which are black

All finishing NIL

Above properties will make effficiant operations


### Height of a red-black tree

Theorem. 
A red-black tree with n keys has height )n key is actual node not includeded NIL terminater)

`h ≤ 2 lg(n + 1)`

1:proof is by induction
2: proof sketch

Merge red nodes into their black parents. 
it become
2-3-4 tree (

    every internal node has 2,3, or 4 children)
    every leaf has the same depth - black node depth
    
    
this way it unified the depth (hheight)

h as original height
hp as after red marged to black

    how many leaf (NUL) on the tree = n+1 in either tree
        keys (is a node number / internal node)
    
     Possible depth - as it has2-4 children each
     between 2<sup>hp</sup> and  4<sup>hp</sup>
  
    so surely possible minimum height is the same or less tah. the number of leaf
    2<sup>hp</sup> ≤ n+1
    hp ≤ log(n+1)
  
    number of red node is the most half of the length of the path 
  
    therefore
 
    h ≤ 2 log (n)+1
    

### How to manupirate Red-black Trees

The queries SEARCH, MIN, MAX, SUCCESSOR, and PREDECESSOR
all run in O(lgn) time on a red-black tree with n nodes. 


The operations INSERT and DELETE cause modifications to the red-black tree: 

- BST operation

- color changes
 
- restructuring the links of the tree via “rotations”


#### Rotations

Preserve binary search tree properties.
reverse as symmetric way, then swap the node then childeren will be on the same order as the original (see slide - esier)
`This operation preserve the BST property - left child <= parent, right node >= parent node`    

a ∈ α, b ∈ β, c ∈ γ ⇒ a ≤ A ≤ b ≤ B ≤ c. 
--- (???though the b<B may not work to me as if B is 10, A is 8 b is 11 to)   
however thought it seems to be that b in BST should be the b need to be explicitly b is between A nnd B   

This is called right rotation
basically relation maintains 
it takes constant time - constant number of linking


#### RB Insertion

IDEA: 
1: Insert x in tree. Color x red.(so does not violate property 4) 
2: Only redblack property 3 might be violated - if parent is red... Move the
violation up the tree by recoloring until it can be fixed with rotations and recoloring

Let's see this algo in action: (see slide)

1: Find parent (or grand parent which is black 
you can recolor only black ->red so that we do not violate property 4
if any of the parents node swap to red to black it should be still maintain the depth of black node

if there is still violation onto the its parent which is red.
and stuck that we cannot recoloring anymore, try rotation
Trick here is you can rotate to change the root node too
This is needed on this case

Just stick with recoloring and roation to push the issue on the higher tree - well it would be less factor to consider I presume


    See case 1, 2, 3 on the slide

    RB-INSERT(T, x) 
      TREE-INSERT(T, x) 
      color[x] ← RED 
      while x ≠ root[T] and color[p[x]] = RED    // parent is red
        do if p[x] = left[p[p[x]]               // and parent is left node of grand parent
        then y ← right[p[p[x]]                  // y = aunt/uncle of x 
          if color[y] = RED                     // then if the antie - parent sibling is also red
          then 〈Case 1〉 
          else if x = right[p[x]] 
            then 〈Case 2〉  // this fall into case3
            〈Case 3〉 
        else 〈“then” clause with “left” and “right” swapped〉 

      color[root[T]] ← BLACK    // this increase the depth / height but still all the depth maintain the same.


[p[p[x]] grand parent
[p[x]] parent
right[p[p[x]] the right node of the parents











  
  
