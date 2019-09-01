## Shell sort
https://www.coursera.org/learn/algorithms-part1/lecture/zPYhF/shellsort


Shell sort is roughly doing on the elements with gap

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

