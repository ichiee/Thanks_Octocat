Pre pegjs

You can create JavaScript -> AST using things such as [Prser API](https://developer.mozilla.org/en-US/docs/Mozilla/Projects/SpiderMonkey/Parser_API#Expressions)

This gives you tree (AST) on Jason format.  

Tools that you can use: (they may be old). 
JS -> AST [esprima](http://esprima.org/). 
AST -> JS [escodegen](https://github.com/estools/escodegen). 

Peg JS using PEG ( a kind of grammer)


------
How to do



1: Define how the altLang transform to JS - i.e. if (xhr.status == 200) 
use http://esprima.org/demo/parse.html to get how AST looks like

2: Use pegJS to create the AST from your language


3: use thing like 


understand what AST you wnat and already defined grammer, you will need to write 



-----

# PEGJS:


Peg JS using PEG (a kind of grammer)
altlang-> AST

If you want 

`a equals b`

to transform to `a == b`


You can write pegjs like

```
start = left:[a-z]+ " " "equals" " " right:[a-z]+ {
  return {
    "type": "ExpressionStatement",
    "expression": {
        "type": "BinaryExpression",
        "operator": "==",
        "left": {
            "type": "Identifier",
            "name": left.join('')
        },
        "right": {
            "type": "Identifier",
            "name": right.join('')
        }
    }
  }
} 
```

on above example, where {} is called action on pegjs

you can call initilizer which contents helper method, and you acn call the methods in action then return.


-----




JP ref:
https://qiita.com/h_demon/items/0b1c68f50ae8667cdffd




