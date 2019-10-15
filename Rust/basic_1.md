### Rust

Play ground:
https://play.rust-lang.org/


How to start --- setting up the project

get in the VS code


This makes hello_world folder and src folder with main,rs as well as cargo.toml

```
cargo new hello_world --bin
```


You could also cargo init which use the actial folder you are init, and also create git ignoire file on it as wll


You can run it by

`cargo run`. 

This meands compile and run


### Syntax


`fn` for function
fn main (){} 

`let <variable>:<type> = <value>;`

example 

let a:u8 = 123; // 8bits  unsigned

if i8 then it would be signed 

`println!` for printing

Example:

println!("a = {}", a);  // it is like literal string on vcl

RUST is everything is IMMUTABLE

you must specify if you wanna cahnge the value.

`let mut b:i8 = 0`

you can het rust to figure out what data typw it would be

so if you do below it will guess that wouldbe a bout u32

`let mut c = 123456;`

Let's print out size:


`println!("c = {}, size = {} bytes",c, mem::size_of_val(&c));` // mem is memory

to use the function do this above the main

`use std::mem`


```
let z:isize = 123; //isize/usize
let size_of_z = mem::size_of_val(&z);
println!(" z = {}, takes up to {} bytes, {}-bit os", z, size_of_z, size_of_z * 8);
```


## Operators

Pretty standard - +-*/ then %

they do not support ++ --
but they can   
`a += 1;  ` 


there is no pow you neeed

let a_cubed =123::pow(2, 3);







