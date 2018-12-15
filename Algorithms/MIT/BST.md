[Relation of BSTs to Quicksort - Analysis of Random BST: video](

### Relation of BSTs to Quicksort - Analysis of Random BST


Good binary tree is 
anything order log n is good

Randomly build serch tree


BST sort

#### some note beore starts 

Exapmle: Binary serch tree. check where the value should be

      left child - smaller than parent, right child bigger than parent
      this way the number in array should be defined.

What is the running time of this algo

O(n) for walk
at least Ω(n log n) - well it is pretty much all sorting algoriithm
because best thing happends there is you have perfectrely balance tree
(imagine 15 node 4 depth tree)well, hey this is binary...

worst case is the depth is the number of node
takes N<sup>2</sup>

it is actually the same comparation as `quick sort` does but in the diffrent order
(like turn 90 degree :))

stable partition

Randamised BST sort

      1: pandamly permute array
      2: BST sort (A)

we pick root randomly
Time of this algo = time of random quick sort
ciz it is comparing the same time as randamised quick sort 

expectation is the same as randamised quick sort  n log n

search tree is pretty much the same as binary search array
the difference is you can update dynamicly on tree

we randomling building BST

thst is we get

tree resolting ramdom BST sort this is what you get from below
      1: pandamly permute array
      2: BST sort (A)


So what it is looking like
Time (BST sort ofn elements) is a sam over o node x of the dept of the node

Time (BST sort) = ∑ depth (x)
                  x


Expectation is n log n so what it is that 

### expected Average node depth is O(log n)

= 1/n O (n log n)
= O(log n)

need to check here
https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-introduction-to-algorithms-sma-5503-fall-2005/video-lectures/lecture-9-relation-of-bsts-to-quicksort-analysis-of-random-bst/lec9.pdf

#### expected Average node depth is O(log n) not the hight of the tree as it would be MAXIMUM of the depth

But, average node depth of a randomly built
BST = O(lg n) does not necessarily mean that its
expected height is also O(lg n) (although it is).

### Out line of proof

1: Prove Jensen’s inequality, which says that
f(E[X]) ≤ E[f(X)] for any convex function f and
random variable X. 

        A convex function is a continuous function whose value at the midpoint of every interval in its domain 
        does not exceed the arithmetic mean of its values at the ends of the interval.
        
        f(λx + (1 − λ)y) ≤ λf(x) + (1 − λ)f(y).
        if we take any two points x, y, then f evaluated at any convex
        combination of these two points should be no larger than 
        the same convex combination of f(x) and f(y).
        
        (ref: http://www.princeton.edu/~amirali/Public/Teaching/ORF523/S16/ORF523_S16_Lec7_gh.pdf)
        

2: instead of analyising Xn = r.v. of height of BST n nodees
analyze any convex function Yn = 2Xn
where Xn is the random
variable denoting the height of the BST

3: prove  E[Yn] = O(n3)

4: put the piece together

we really care is expectation of Xn - height of the tree

prove them 
E[2Xn ] = E[Yn] = O(n<sup>3</sup>) ++++++++++++++++(?)
2E[Xn] ≤ E[2Xn ] = E[Yn] = O(n<sup>3</sup>) ++++++++++++++++(?)

*****

Proving 1:

Convenx 
2 points on a curve and the inide segment should always above the curb (as the curb is like U shape)
So any value on the two point on holisontal point(αx + βy) and see the value on the where the curb and line should always 

point on line > point on curve


        So between point p and q 
        the line is  
        αp +  βq  
        α + β = 1   
        α, β > = 0.  (this force between 0 and 1)- I presume they are x and y

        then you get this line segment.
        
So instead, let's call the point p & q => f(x) & f(y)

      If the point is   
      α x 0 +  β x 1    
      and then the on on the curb would be    
      f(αx + βy)    
      Then the ones on line   
      αf(x) + βf(y)   

So    
      A function f : R → R is convex if for all
      α,β ≥ 0 such that α + β = 1, we have
      f(αx + βy) ≤ α f(x) + β f(


### Convexity lemma

Let f : R → R be a convex function,
and let α1, α2 , …, αn be >= 0 
such that ∑ k  n=1(sum k=1 to n) αk = 1 

Then, for any real numbers x1, x2, …, xn, we have

f(∑ k n=1(sum k=1 to n) αkxk) <= ∑ k n=1(sum k=1 to n) αk f(xk) --- Just see slide it's not gonna work (see video 39:20 pretty good)

Above is the general statement




#### Analysis of BST height

Let Xn be the random variable denoting
the height of a randomly built binary
search tree on n nodes, 
and let Yn = 2<sup>Xn</sup>. ( 2 to the xn is very sharp one)
be its exponential height.

If the root of the tree has rank k, then simply
Xn = 1 + max{Xk–1, Xn–k} ,

since each of the left and right subtrees
of the root are randomly built. Hence,
we have
Yn = 2· max{Yk–1, Yn–k} .

Use Indicater random vairables (https://www.youtube.com/watch?v=DaGcgPxfDoA)

Linearity of expectation.-> move E 

Independence of the rank of the root
from the ranks of subtree roots.

Use substitution to show that E[Yn] ≤ cn3
for some positive
constant c, which we
can pick sufficiently
large to handle the
initial conditions.





