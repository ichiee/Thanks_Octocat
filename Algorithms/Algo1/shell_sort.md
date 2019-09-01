## Shellsort
https://www.coursera.org/learn/algorithms-part1/lecture/zPYhF/shellsort



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


----- 

Example in C is 

        /* shellsort: sort v[0]...v[n-1] into increasing order*/ 

        void shellsort(int v[], int n) 
        {
          int gap, i, j, temp;
          for (gap = n/2; gap> 0; gap 1= 2) 
            for (i = gap; i < n; i++)
              for (j=i-gap; j>=O && v[j]>v[j+gap]; j-=gap){ 
                temp = v[j];
                v[j] = v[j+gap];
                v[j+gap] = temp;
              }
          }

On above example, v[j]>v[j+gap] will be checked each time so that lesser elements will be swapped.

