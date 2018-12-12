
### Merge Sort
2 sorted halves check veryleft of each halves then smaller value to add on to new array.  
[cs50 merge sort](https://www.youtube.com/watch?v=Pr2Jf83_kG0)

- Java sort for objects.    
- Perl, C++ stable sort, Python stable sort, Firefox JavaScript, ...    


Basic plan.
- Divide array into two halves - both are sorted   
- Recursively sort each half.   
- Merge two halves.   

So check values on very left side of each halves
which even low number will go to the value of the first on a new array
going through one by one

you can move the pointer (let's say i and j) to move once the value are assined to a new array

    private static void merge(Comparable[] a, Comparable[] aux, int lo, int mid, int hi)
    {
       assert isSorted(a, lo, mid); // precondition: a[lo..mid] sorted
       assert isSorted(a, mid+1, hi); // precondition: a[mid+1..hi] sorted
       
       for (int k = lo; k <= hi; k++)
       aux[k] = a[k];
       
       int i = lo, j = mid+1;
       for (int k = lo; k <= hi; k++)
       {
         if (i > mid) a[k] = aux[j++];
         else if (j > hi) a[k] = aux[i++];
         else if (less(aux[j], aux[i])) a[k] = aux[j++];
         else a[k] = aux[i++];
     }
     assert isSorted(a, lo, hi); // postcondition: a[lo..hi] sorted
    } 




Assertion. Statement to test assumptions about your program.
・Helps detect logic bugs.
・Documents code.

Java assert statement. Throws exception unless boolean condition is true.

assert isSorted(a, lo, hi)

Can enable or disable at runtime. ⇒ No cost in production code.

java -ea MyProgramme. // enable assert
java -da MyProgramme  // disable



Best practices. Use assertions to check internal invariants;
assume assertions will be disabled in production code.



    public class Merge
    {
         private static void merge(...)
         { /* as before */ }

         private static void sort(Comparable[] a, Comparable[] aux, int lo, int hi)
         {
           if (hi <= lo) return;
           int mid = lo + (hi - lo) / 2;
           sort(a, aux, lo, mid);
           sort(a, aux, mid+1, hi);
           merge(a, aux, lo, mid, hi);
         }
         public static void sort(Comparable[] a)
         {
           aux = new Comparable[a.length];
           sort(a, aux, 0, a.length - 1);
         }
    }
    

you can use this merge function to solve a large problems
Such as checking 2 char each then merge to 4 and so one.
This is very effective sorting algorithm



Running time estimates:

- Laptop executes 108 compares/second.
- Supercomputer executes 1012 compares/second.

Bottom line. Good algorithms are better than supercomputers.

### Mergesort: number of compares and array accesses

Proposition. Mergesort uses at most N lg N compares and 6 N lg N array
accesses to sort any array of size N.


Pf sketch. The number of compares C(N) and array accesses A (N)
to mergesort an array of size N satisfy the recurrences:

 C(N) ≤ C(⎡N / 2⎤) + C(⎣N/ 2⎦) + N for N > 1, with C(1) = 0.
 
 A (N) ≤ A (⎡N / 2⎤) + A (⎣N/ 2⎦) + 6N for N > 1, with A (1) = 0.
 
 
We solve the recurrence when N is a power of 2.

 D (N) = 2 D (N/ 2) + N, for N > 1, with D (1) = 0. 



    
    
