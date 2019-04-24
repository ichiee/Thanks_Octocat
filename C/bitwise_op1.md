# bitwise op
http://joequery.me/notes/learning-c-4/

OH MY!!!
It's important to note that the type of integer the result of ~c will be stored in affects the outcome greatly. If we were to store the result of ~c into an unsigned int, for example, the leading 0's of the unsigned int would be converted to 1s, leading to a much larger result.

```
#include <stdio.h>
int main(){
    unsigned char c = 57;
    unsigned int i;
    printf("c: %u\n", c);
    printf("~c: %u\n", (unsigned char) ~c);
    printf("~c: %u\n", (unsigned int) ~c);
    return 0;
}

```
raw source | hide output ⇑

```
c: 57
~c: 198
~c: 4294967238
```

### so be careful, all the 0 which was fille on all thous nits changed to 1 😄







-----
just few notes as I sometimes get confused
A leading 0 (zero) on an integer constant means octal

They use octet coz it is easier






