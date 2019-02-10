## A Guide to Parsing: Algorithms and Terminology

Better understanding by presenting the consept and algorithms.
So that you can build parser. Practical rather full deep understanding.

https://tomassetti.me/guide-parsing-algorithms-terminology/

Parsing is anlaysing with the rule of grammer

## Overall Big picture

### Structure of Parser

there are two components on parsing process regarding to the author.

1: Lexing : tokenising (grouping)
2: real parser: generate abstruct syntax tree

On the other hand scannerless parser process directly the original text (not tokenised producrts).   
-> it does the both (lexing  & real pasing) combined.   

### Grammer

a grammar describes a language, 
but this description pertains only the syntax of the language 
and not the semantics

Backus-Naur Form (BNF)

    The most used format to describe grammars

    (many vaians - see below)

    Extended Backus-Naur Form   
    has the advantage of including a simple way to denote repetitions. 

    Augmented Backus-Naur Form   
    mostly used to describe bidirectional communications protocols.
    
typical rule in a Backus-Naur grammar looks like this:

 > $symbol ::= __expression__

A rule can also be called production rule. 
Technically it defines a transformation between the nonterminal and the set of nonterminals and terminals on the right.

$symbol: a nonterminal can be replaced to __expression__   
__expression__ : other nonterminal symbols or terminal ones  

### Types of Grammars

regular languages are simpler than context-free languages

> 1: regular grammars (defines a regular language)

> 2: context-free grammars (define context-free language) 

A context-free grammar is a set of recursive rules used to generate patterns of strings.
Pushdown automata (NFA with stack)
https://brilliant.org/wiki/context-free-languages/
https://brilliant.org/wiki/context-free-grammars/#formal-definition

> 3: Parsing Expression Grammar


### Lexer

Seq cahractors -> sequesnce of tokens
you want lexer to discard white space so that paser does not need to detect
but if the white space is relevant to the language obvioouosly not and lexer nedd to distinguish the difference.  
(i.e. if the the white space is separator of key word or as in indentation (like in python)

parsing can be different way depends on your goal
i.e.

    IPv4: [0-9]+ "." [0-9]+ "." [0-9]+ "." [0-9]+


    DOT   : "."
    OCTET : [0-9]+

    ipv4  : OCTET DOT OCTET DOT OCTET DOT OCTET


### Parser

the parser its output is an organized structure of the code

ususally tree - parse tree / AST
A parser is a fundamental part of a compiler, or an interpreter

### Syntactic vs Semantic Correctness
parse tree can also be used to check the semantics by the `compiler`.


> parser check syntactically, 
> compiler use the same code to make sense of it

    int x = 10
    int sum = x + y

Parser is happy with the code above.


> A compiler would typically traverse the parse tree a first time 
and keeps a list of all the variables that are defined.

#### Scannerless Parser

Lexer less parser. when it is difficult distinguish the job of lexer and real parser or unnecessary.
i.e. mark up language

-----

### Issues With Parsing Real Programming Languages

> #### 1: Context-sensitive Parts

should not be really but happens - bad design or other porpose - in order to symplify the languages
(feel like it will take longer run time in the end but not sure)

A typical example of context-sensitive elements are the so-called `soft keywords  

sofykeywords: str which is keywords in some places but also as identifire

> #### 2: Whitespace


i.e in PYTHON. can be just a separator or can be token IDENT

make lexing context sensitive --- need to justifiy if the white space is { or } 
more complication (i guess meaning need more justificatioto make sense)

> ####  3: Multiple Syntaxes

The language may include a few different syntax:
---> souce files including the different languages
The most famous example is the C or C++ preprocessor

Among other things they can be used to process the code before it arrives to the compiler

      They can command the annotation processor to transform the code in some way, 
      for instance to execute a specific function before executing the annotated one. 
      (like promise / closure ish way, but then where to hold that while parsing...)
      
> #### 4: Dangling Else
 

    if one
       then if two
           then two
    else ???

Where this else refer to
on C - nearest if (context sensitive) 

----

### Parsing Tree and Abstract Syntax Tree

a parse tree 
might contains all the tokens which appeared in the program and possibly a set of intermediate rules.


The AST 
instead is a polished version of the parse tree, in which only the information relevant to understanding the code is maintained

> comments and grouping symbols (i.e., parentheses) are usually not represented


### From Parse Tree to Abstract Syntax Tree

Parser tree is more detailed - rules on specific node
parser tree is trsandformed in an ASTby user

so i.e.

    // lexer
    PLUS: '+'
    WORD_PLUS: 'plus'
    NUMBER: [0-9]+

    // parser
    // the pipe | symbol indicate an alternative between the two
    sum: NUMBER (PLUS | WORD_PLUS) NUMBER

this bit can go `(PLUS | WORD_PLUS)`
on AST as on the tree `sum` would be a root and there would be only one child key word `+`

#### Graphical Representation Of A Tree :)

easy to see the tree







-----

## Grammers

Grammars are a set of rules used to describe a language,



### Typical Grammer Issues

> #### 1: missing tokens

> #### 2: Left-recursive Rules
a rule starts with a reference to itself

    addition       : expression '+' expression
    multiplication : expression '*' expression
    // an expression could be an addition or a multiplication or a number
    expression     : multiplication | addition | [0-9]+
    In this example expression contains an indirect reference to itself via the rules addition and multiplication.

if the parser not suported that, you can work around it like theat below

    expression     : addition
    addition       : multiplication ('+' multiplication)*
    multiplication : atom ('*' atom)*
    atom           : [0-9]+

### How Left-recursive Rules Are Transformed
yu ahve to parse bottoms up (is it something similar to 

The specific way in which the rules are transformed vary from one parser generator to the other,   
however the logic remains the same.   
The expressions are divided in two groups:   
the ones with an operator and two operands and the atomic ones. 
In our example the only atomic expression is a number ([0-9]+),   
but it could also be an expression between parentheses ((5 + 4)).   

This is something similar to `how to design function` theory  
https://courses.edx.org/courses/course-v1:UBCx+HtC1x+2T2017/77860a93562d40bda45e452ea064998b/

the final form of the parsing is a tree, which operates on a different principle:   
you start working on the leaves and rise up

### Predicates

syntactic or semantic predicates:  
somecial lool under if - some conditions  
allow some form of context-sensitive parsing

(i.e)
soft keyword would be key word or identifier if certain position.   
it of course slow down parsing

### Embedded Actions 
Embedded actions identify code that is executed every time the rule is matched.

they break the separation between a grammar that describes   
the language and the code that manipulates the results of the parsing.

### Formats

BNF & PEG

### Backus-Naur Form and Its Variants

it was even the basis of PEG

    <letter>    ::= "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h" | "i" | "j" | "k" | "l" | "m" | "n" | "o" | "p" | "q" | "r" | "s" | "t" | "u" | "v" | "w" | "x" | "y" | "z"
    <digit>     ::= "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"
    <character> ::= <letter> | <digit>

no easy way to denote optional elements or repetitions

    <text>      ::= <character> | <text> <character>
    
so here text isone or more charatoror
so that a word consists more than one charator can be described as text  

> #### Extended Backus-Naur Form

(more depth read:https://tomassetti.me/ebnf/)  

    letter    = "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h" | "i" | "j" | "k" | "l" | "m" | "n" | "o" | "p" | "q" | "r" | "s" | "t" | "u" | "v" | "w" | "x" | "y" | "z" ;
    digit     = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" ;
    character = letter | digit ;
    text      = character , { character } ;


here, using concat `,` and option `{...}` makes it easy to describe text   

> #### Augmented BNF 

developed to describe bidirectional communication protocols and formalized by the IETF with several documents
(well something looks like try to make things easier)


> #### Parsing Expression Grammar (PEG)   
echnically it derives from an old formal grammar called Top-Down Parsing Language (TDPL).   
However a simple way to describe is: EBNF in the real world.

arrow symbol (←) for assignment  

    letter    ← [a-z]
    digit     ← [0-9]
    character ← letter / digit
    text      ← character+

 CFG is a generative grammar, while PEG an analytic grammar.


#### PEG vs CFG

PEG is more closely associated to the packrat algorithm, but that is basically it.  

PEG parsers generally are scannerless parsers

If there are many possible valid ways to parse an input, a CFG will be ambiguous and thus will return an error

PEG eliminate ambiguity altogether because the first applicable choice will be chosen, thus a PEG can never be ambiguous  

The disadvantage of this approach is that you have to be more careful in listing possible alternatives, because otherwise you could have unexpected consequences. That is to say some choices could never be matched.

In the following example doge will never be matched, since dog comes first it will be picked each time.

    dog ← 'dog' / 'doge'

----

## Parsing Algorithms

- top-down parsing   
- bottom-up parsing  

top-down parsers were easier to build, but bottom-up parsers were more powerful.

> #### derivation

    expr_one = .. // stuff
    expr_two = .. // stuff
    result   = expr_one 'operator' expr_two
    
leftmost derivation you pick the first option, while for rightmost derivation you pick the second one.

bottom-up parsing you would apply `rightmost derivation`  
top-down parsing you would choose `leftmost derivation`  

### Common Elements

> #### Lokahead and Backtracking
Lookahead  check next token to decide what rule to apply  

Backtracking is a technique of an algorithm.   
It consists in finding a solution to a complex problems by trying partial solutions,   
and then keep checking the most promising one.   
If the one that is currently tested fails, then the parser backtracks   
(i.e., it goes back to the last position that was successfully parsed)   
and try another one.

They are especially relevant to `LL`, `LR` and `LALR` parsing algorithms   

(cont... wip)

















