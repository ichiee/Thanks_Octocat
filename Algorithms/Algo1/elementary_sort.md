
https://d3c33hcgiwev3.cloudfront.net/_f03960834ff947e41e6b16e8431ab227_21ElementarySorts.pdf?Expires=1544745600&Signature=fizgVaatNLC8cxGmbaYBdfRqXrc3KL2GHj-Qpfu0HKlzXhSs1T8odk8~03qMol6PfWHv0~gUfqxjjDgeR45Uvq9e6BRYKYgZOooY~q8UCzeAU7Zjvi1Hnn1heG4HsApdFP1oxV96KoxWAjCIH2ejTYh932aSFXrzFAznY3-IYU8_&Key-Pair-Id=APKAJLTNE6QMUY6HBC5A


### Callbacks


Goal. Sort any type of data.    

Q. How can sort() know how to compare data of type Double, String, and
java.io.File without any information about the type of an item's key?

#### Callback = reference to executable code.

      ・Client passes array of objects to sort() function.
      ・The sort() function calls back object's compareTo() method as needed.
      
      
#### Implementing callbacks.

    ・Java interfaces    
    ・C: function pointers.
    ・C++: class-type functors.
    ・C#: delegates.
    ・Python, Perl, ML, Javascript: first-class functions.
    
    
Comparable interface is build in JAVA
    
    public interface Comparable<Item>
    {
      public int compareTo(Item that);
    }


    public class File

    implements Comparable<File>
    {
      ...
      pubic int compaeeTo(File b)
        ...
        return -1;
        ...
        return +1;
        ...
        return 0;
      }
    }

sort implimention


      public static void sort (Comparable[] a)
      {
        int N = a.length;
        for (int i = 0; i<n; i++){
          for (int  j= i; j > 0; j--)
          if [j].compareTo(a[j-1]) < 0)
              exch(a, j, j-1);
          else break;

      }


## Total order

must be able to put items in 

    A total order is a binary relation ≤ that satisfies:
    ・Antisymmetry: if v ≤ w and w ≤ v, then v = w.
    ・Transitivity: if v ≤ w and w ≤ x, then v ≤ x.
    ・Totality: either v ≤ w or w ≤ v or both.



violates totality: (Double.NaN <= Double.NaN) is false    
Surprising but true. The <= operator for double is not a total order. (!)



## The Comparable API

    Implement compareTo() so that v.compareTo(w)
    ・Is a total order.
    ・Returns a negative integer, zero, or positive integer
    if v is less than, equal to, or greater than w, respectively.
    ・Throws an exception if incompatible types (or either is null).



Built-in comparable types. Integer, Double, String, Date, File, ...
User-defined comparable types. Implement the Comparable interface.


*****

## Selection Sort
using quadratic time

simple double loop
check to compare one by one using pointer i and j

1 ; pointer i in position 0 of array      
2 ; compare i to one on the right (pointer j)   
3 : if i > j then swap ( position change) 
4 : then pointer j move to the right (++1)      
5 : then compare i and j back to 3  
6 : once j = length of array - i then i move to right (++1) 

mathematical analysis         
Proposition. Selection sort uses (N– 1) + (N– 2) + ... + 1 + 0 ~ N 2 / 2 compares         
and N exchanges.        



## Insertion Sort

[cs50 insertion sort](https://www.youtube.com/watch?v=O0VbBkUvriI)
dofferent way of 2 nested for loop
still quadratic time. 

Pointer i dtart from 0 
everything left to the i will be sorted
1: i move to right (++1)
2: pointer j which is chweck the values of i-1 then --1 till the first
3: if i>=j then insert it in the position else break

      public class Insertion
      {
        public static void sort(Comparable[] a)
        {
          int N = a.length;
          for (int i = 0; i < N; i++)
            for (int j = i; j > 0; j--)
              if (less(a[j], a[j-1]))
                exch(a, j, j-1);
              else break;
       }
        private static boolean less(Comparable v, Comparable w)
        { /* as before */ }
        private static void exch(Comparable[] a, int i, int j)
        { /* as before */ }
      }
Mathmatical analysis:

Proposition. To sort a randomly-ordered array with distinct keys,
insertion sort uses ~ ¼ N 2 compares and ~ ¼ N 2 exchanges on average.

## Sherllsort

This is differnet way of insertion sort.
instead of going one by one, it will check h number.
for example if it is h = 4, then every 4th element will be checked

in this way, the latter (less h value) will have more likely to need to get sorted less as it has in the way already sorted where it has been checked

Idea. Move entries more than one position at a time by h-sorting the array.
Shellsort. h-sort array for decreasing sequence of values of h.
Shellsort overview
an h-sorted array is h interleaved sorted subsequences

h sorting:
How to h-sort an array? Insertion sort, with stride length h.


### Stuffing

### Convex

    

       { /* as before */ }
