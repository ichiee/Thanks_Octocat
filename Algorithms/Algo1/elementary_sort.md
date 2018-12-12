
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

### Selection Sort

Moving a pointer (i) to the right,
compare to one on the right (j)
if i > j then swap 
( then if need to swap then assign i = j )






### Insert Sort

### Sherllsort

### Stuffing

### Convex

    
