https://d3c33hcgiwev3.cloudfront.net/_3293220668bef735d367a188452c32dc_13StacksAndQueues.pdf?Expires=1543968000&Signature=ChaiPrdDWbpwO0XWQxmEPjonjJ6hGqF97DWYc~FLRm~FJESy5vNqNpGXwoyG-6xupcbOZViPU~-vPK5zFjNaL9RdgH2aIZO7iAR3vAYIM0svX8nlycq0~-UzLAXA9xSwkZlIpQr~iyFHBRCOwYIBrKwp1o3cvfdR~MFYPBjctsg_&Key-Pair-Id=APKAJLTNE6QMUY6HBC5A


Stack: amortized cost of adding to a stack 
Stack: resizing-array implementation

Q. How to shrink array?
Efficient solution.

・push(): double size of array s[] when array is full.

・pop(): halve size of array s[] when array is one-quarter full.  

Stack resizing-array implementation: memory usage

Proposition. Uses between ~ 8 N and ~ 32 N bytes to represent a stack
with N items.
・~ 8 N when full.
・~ 32 N when one-quarter full.



Remark. This accounts for the memory for the stack
(but not the memory for strings themselves, which the client owns)


### Stack implementations: resizing array vs. linked list

Tradeoffs. Can implement a stack with either resizing array or linked list;     
client can use interchangeably. Which one is better?   

Linked-list implementation.   

・Every operation takes constant time in the worst case. 
・Uses extra time and space to deal with the links.  

Resizing-array implementation.    
・Every operation takes constant amortized time. 
・Less wasted space. 


### Stack applications

- Parsing in a compiler.YAY*****
- Java virtual machine.
- Undo in a word processor.
- Back button in a Web browser.
- PostScript language for printers.
- Implementing function calls in a compiler.


How a compiler implements a function.

    Function call: push local environment and return address.
    Return: pop return address and local environment.
    
Recursive function. Function that calls itself.
Note: Can always use an explicit stack to remove recursion.



*****

## Arithmetic expression evaluation

Goal. Evaluate infix expressions.   
Two-stack algorithm. [E. W. Dijkstra]   

        - Value: push onto the value stack.   
        - Operator: push onto the operator stack.   
        - Left parenthesis: ignore.   
        - Right parenthesis: pop operator and two values (oprand);    
        push the result of applying that operator   
        to those values onto the operand(value) stack.    
        Context. An interpreter!    





it is easy to convince yourself that it computes the proper value: any time the algorithm
encounters a subexpression consisting of two operands separated by an operator,
all surrounded by parentheses, it leaves the result of performing that operation
on those operands on the operand stack. The result is the same as if that value
had appeared in the input instead of the subexpression,
so we can think of replacing the
subexpression by the value to get an expression
that would yield the same result. We can apply
this argument again and again until we get a
single value. For example, the algorithm computes
the same value of all of these expressions:

Evaluate (PROGRAM 4.3.5) is an implementation
of this method. This code is a simple
example of an interpreter: a program that interprets
the computation specified by a given
string and performs the computation to arrive
at the result. A compiler is a program that
converts the string into code on a lower-level
machine that can do the job. This conversion
is a more complicated process than the stepby-step
conversion used by an interpreter, but
it is based on the same underlying m


*****

operand - like int
operator like * +














