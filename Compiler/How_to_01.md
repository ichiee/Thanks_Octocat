# Creating compiler 1

series https://www.youtube.com/watch?v=eF9qWbuQLuw
This is just an example of how it works - good to understand high level of over view but what exactly can be done on the each steps

It is essentially creating a library

tl;dr

```
1: This is essentilly creating library

2: define what they do

3: Formalise it

    3-1: define key words (reserved words)
    2-3: define single or double characters for operation
    3-3: define tokens for more complex case (Identifier, Integer Literal, String Literal, End of File)
 
4: create a grammar makes graphs
    define all non terminal

5: use Parser generator (choose the grammar)
    generates C languages

```

## 1: starting with defining a language you are compiling



```

example:

statement - while if return each statements end semicolon
compound statement (in {}) does not end semi colon
function - name ()
expression
operators - +
function declaration formatting
varible declaration
pointer declaration
```

## 2: Formarization 

### defining all the atoms makes up the programme

such as

```
reserved words:
"if" "while" "return" "var"

single character or double character operations: 
"("  ")"  "||" "&&" ";" "!" and etc

tokens: (for more complex that fixed charactor sequence
Identifier - naming variable and function
Integer Literal - 
String Literal - begin and end with double quote
End of File

White space are not tokens does not affect structure of programming

```


all parsers, regardless of how they are implemented, they are stream of tokens
it essentially works on a tokens streama and try to make a sense out of it

so how does it happen

## 3: Time to get the grammar done
Grammar specification:
need to define all non terminal 


Example: All can be shown on graph and it would be easier to understand
if visualise it

Programme in this language (library) is comprised of 0 or more function and end of file

```

function is 
beginning with identifier (function name), 
then another identifier or ;, 
after identifier, "," or ";"
(can be loop)
then statement (comprises function body)

```

here identifier, "," or ";" are **terminals** they are atoms, tokens

**statement** ** function** are **non terminal**


They need to be defined what it would contain

```
i.e.

Statement can be start with "if", "while", "return" "var"
some need have "(" + expression + ")", some end with ";" (like return)

```

Ok now lets define **expression**

```
Expressions can be the values you do your mathematics with

function parameters
function calls
assign a value to a variable

integer literal
string literal
identifier
"(" expression ")"
expression "(" expression ")"

binary expression - expression "[whatever math operator]" expression 
unary expression like ++ i;

and etc

```

gramme has done here
so mow defined how to parse any programmes


## 4: Use parser generator
(i.e. GNU Bison)

This is where you starting up coding

#### Parser generator generates code (C or whatever it can do) when you giving grammar description in txt file 

So for example, you can write some in c or c++ with some
special syntax that parsed by GNU (bison here) and converted in to **a parser engine**


### a: Process begin with listening the tokens you are gong to use

so like we have the reserved words, place folder for literals expressions and operators

token END 0
token RETURN "return" WHILE "while" IF "if"  IDENTIFIER NUMCONST STRCONST
token OR "||" AND "&&" EQ "=="  [and so on]

      this is making alias
      token OR "||" AND "&&" EQ "=="  [and so on]

### b: Move on to grammar
the grammar goal is a name of non terminal which describes the outcome of process parsing


    i.e.(This is colled **Rule**)
    statement can be return key word followed by expression followed by ;
    statement: "return" expression ';' ;


in bison, there are two concept - stack and state machine


two kinds of state action - reduce and shift

so now one you will need to define all 

```
library;   function;
function;   Identifier parameters ";" stmt
            #empty
            
here function can be one or more functions - check the syntax of recursion to create that
here depends which grammar you are using such as BNF and PEG           

```

more details of grammar is here
https://github.com/ichiLamuchy/Thanks_Octocat/blob/master/Parse/over_view_guide_parsing_tomasetti.md
























