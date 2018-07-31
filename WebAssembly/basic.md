https://hacks.mozilla.org/2017/02/a-crash-course-in-just-in-time-jit-compilers/
# WebAssembly

to explain that,
let's check -->
## How JavaScript is run in the browser

here are generally two ways of translating to machine language  
With an `interpreter`, this translation happens pretty much line-by-line, on the fly.  

A `compiler` on the other hand doesn’t translate on the fly.   
It works ahead of time to create that translation and write it down.

con of using an interpreter comes when you’re `running the same` code more than once. 
Like a loop. Then you have to do the same translation over and over and over again.

Compiler  
It takes a little bit `more time to start up` because it has to go through that compilation step at the beginning
Another difference is that the compiler has more time to look at the code and `make edit`s to it   
so that it will run faster. These edits are called `optimizations`.


### Just-in-time compilers: the best of both worlds


They added a new part to the `JavaScript engine`, called a `monitor` (aka a profiler).   
That monitor watches the code as it runs, and makes a note of how many times it is run and what types are used.

At first, the `monitor` just runs everything `through the interpreter`.

If `the same lines of code` are run a few times, that segment of code is called warm, then `hot`

When it's getting warmerthe `JIT` will send it off to be compiled. Then it will `store` that `compilation`.

    Each line of the function is compiled to a “stub”

The stubs are indexed by line number and variable type

When a part of the code is very hot, the monitor will send it off to the `optimizing compiler`

    the optimizing compiler can assume that all objects created by a particular constructor have the same shape—that is,   
    that they always have the same property names,   
    and that those properties were added in the same order— then it can cut some corners based on that.
    
How cleaver. But ...

Surely sometimes it makes wrong assamptions
    
    So the compiled code needs to check before it runs to see whether the assumptions are valid.  
    If they are, then the compiled code runs. But if not, the JIT assumes   
    that it made the wrong assumptions and trashes the optimized code.  

Then execution goes back to the interpreter or baseline compiled version.   
This process is called `deoptimization` (or `bailing out`).

Most browsers have added limits to break out of these optimization/deoptimization cycles when they happen.   
If the JIT has made more than, say, 10 attempts at optimizing and keeps having to throw it out,   
it will just stop trying.  

#### That is the JIT in a nutshell. It makes JavaScript run faster by monitoring the code as it’s running it and sending hot code paths to be optimized. 

*****

So now we not how JS is run and get known about JIT

now let's have a look

### Assembly


how the machine’s brain parses and understands the communication coming in to it.

These different parts have names.

- 1 The part that does the thinking is the Arithmetic-logic Unit (ALU).  
- 2 The short term memory is provided by registers.  (1&2 are in CPU)
- 3 The longer term memory is the Random Access Memory (or RAM).  

The sentences in machine code are called instructions.  

    What happens when one of these instructions comes into the brain? It gets split up into different parts that mean different things.

    The way that this instruction is split up is specific to the wiring of this brain.

    For example, a brain that is wired like this might always take the first six bits and pipe that in to the ALU. The ALU will figure out, based on the location of ones and zeros, that it needs to add two things together.

    This chunk is called the “opcode”, or operation code, because it tells the ALU what operation to perform.
    
    Then this brain would take the next two chunks of three bits each to determine which two numbers it should add. These would be addresses of the registers.

> So think like ALU understand an expression - like (+ 2 3)  
> What assembly is that ADD R1 R2 (these will be from 1 and 0) it make it easier for us humans to understand what’s going on

So we don’t just have one target for our translation.   
It’s not just one language called machine code.   

It’s many different kinds of machine code. Just as we speak different languages as people,   
machines speak different languages.

In programming terms, this is like going from C, or C++, or Rust to x86 or to ARM.  

You want to be able to translate any one of these high-level programming languages down to any one of these assembly languages   
(which corresponds to the different architectures).

most compilers put at least one layer in between programming languages and assembly languages  
for efficiency. that’s called an intermediate representation (`IR`).
  
> This means the compiler can take any one of these higher-level languages and translate it to the one IR language. From there, `another part of the compiler` can take that IR and compile it down to something specific to `the target architecture`.

> The compiler’s front-end translates the higher-level programming language `to the IR`. The compiler’s backend goes `from IR` to the target architecture’s assembly code.
