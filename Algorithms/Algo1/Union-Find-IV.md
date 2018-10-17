Social network connectivity. 
Given a social network containing n members and a log file containing mm timestamps at which times pairs of members formed friendships, 
design an algorithm to determine the earliest time at which all members are connected (i.e., every member is a friend of a friend of a friend ... of a friend). 
Assume that the log file is sorted by timestamp and that friendship is an equivalence relation. 
The running time of your algorithm should m log n or better and use extra space proportional to n.


N members
M time stamps

m log n 

*****

Union-find with specific canonical element. 
Add a method \mathtt{find()}find() to the union-find data type so that \mathtt{find(i)}find(i) 
returns the largest element in the connected component containing ii. The operations, 
\mathtt{union()}union(), \mathtt{connected()}connected(), and \mathtt{find()}find() should all take logarithmic time or better.

For example, if one of the connected components is \{1, 2, 6, 9\}{1,2,6,9}, 
then the \mathtt{find()}find() method should return 99 for each of the four elements in the connected components.

*****

Successor with delete. 
Given a set of nn integers S = \{ 0, 1, ... , n-1 \}S={0,1,...,n−1} 
and a sequence of requests of the following form:

Remove xx from SS
Find the successor of xx: the smallest yy in SS such that y \ge xy≥x.
design a data type so that all operations (except construction) take logarithmic time or better in the worst case.






Log is inverse of exponentation
2**3 = 8 log2 8 = 3
