## Bash script

quick notes:

note to my self - some scripts locate here `cd Projects/Private/Bash`

### rules

> #!/bin/bash

Every bash shell script starts with a shebang: #! which is not read as a comment. use this
`#!/usr/bin/env bash` on the first line so that it will excute with basj with `./` at the front of the script file like `./myscript.sh` 

>.sh

does not need to be but often people use this for the eile exenstion

> =

no space each side this is for varible assignment, no need for colon

> $

to hold variables
`$` and `${}` are the same

```
a="hello world"
echo $a
hello world`
echo ${a}
hello world
```

When you are suing {} you can ick up some chars

>{}
This is similar to aeeay and also some simple function regsub type {variable/string-to-be-find/string-replaced-with

> ()

Thsi sis similar to scope in an odd way, almost imilar to promise if ypou use it in the way `$()`
### command

> this is command

`this is example return`

> which bash

`/bin/bash`

to find out where is your Bash interpreter located 


> chmod +x hello_world.sh

make it exculabel

> ./hello_world.sh 

`Hello World`

To run bash file the same as `bash hello_world.sh`

> echo {1..3}

`1 2 3`

> touch file_{1..3}{1..c}.txt

This creates 9 files. Almost work as if array

> a="hello there"

> echo ${a:6:3}

`the`

so this is echoing the out put pf 6th char pon teh string for 3 chars.

> echo ${a/there/everyone}

`hello everyone`

This to replace the first nstance of the strings to the second argues 

> echo ${a//e/_}

`h_llo th_r_`

// is like regsuball 


> echo "$(python3 -c 'print("hello from python!")')"

`hello from python!`



> echo $((2+3))

`5`

Arithmatic caculation

note: only int onlt 


> eco hello

no need to have `""` to wrap for strings 

if you sue single quote `'` it takes it string literal

if us doube quote "" it still can find keyword to work what it shold work as

> \ 

you can use escape for any special character to be as string leyterL

> echo

it contents new line

> echo; echo boo; echo;

this `;` contents to the next nexcution. you do noe need to have it one one line eexcution but maight good to have it



> -n

turn off new line

> declare -l a="Hello World"

declaring varible strings all in lower case. like lower(str)

>  declare -u a="Hello World"

declaring varible strings all in lower case. like upper(str)


> [ -d ~ ]
> echo $?


`0` id for true and `1` for falso. it wa stesting is you were in home directky




> [ "cat"="cat" ]
> echo $?


>[ 4 -lt 5 ]; echo $?

`0`

`-lt` lower than

`-le` less than equal to

`-qt` greater than 

`-qe` greater than equal to

`-eq` equal to

`-ne` not equal to




> [[... ]]

maeans you using `&&` `||`

so it is ofen used with if condition

```
if [[ $digit =~ [0-9] ]]; then
    echo "$digit is a digit"
else
    echo "oops"
fi
```

`oop`

> -e

we can specify control charactors with letters

> echo -e "Name\t\tNumber";

`Name		Number`

`\t` is tab


> printf "Open issues: %s\nClosed issues: %s\n" "34" "65"

```
Open issues: 34
Closed issues: 65
```

> declare -a test_array

declare command to define an Array

> test_array=(apple orange lemon)

or simply assgin

> test_array=(apple orange lemon)

> echo ${test_array[0]}

`apple`

> echo ${test_array[@]}

`apple orange lemon`

To print all elements of an Array using @ or * instead of the specific index number.

> test_array+=(mango banana)

append

> echo ${test_array[@]}

`apple orange lemon mango banana`




