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


### Core data types


`fn` for function

fn main (){} 

`let <variable>:<type> = <value>;`

example :

`let a:u8 = 123;` // 8bits  unsigned

if i8 then it would be signed 

`println!` for printing

Example:

`println!("a = {}", a); ` // it is like literal string on vcl

RUST is everything is IMMUTABLE

you must specify if you wanna change the value.

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


let d = 'x'; //. let d:char = 'x';

println!(" d = {}, size = {} bytes", d, mem::size_of_val (&z));




## Operators

Pretty standard - +-*/ then %

they do not support ++ --
but they can   
`a += 1;  ` 


there is no pow you need to do

`let a_cubed =i32::pow(a, 3);`. / a * a * a

you need specify the data type when you use pow fn 


let b = 2.5;

`let b_cubed = f64::powi(b, 3); `        //powi is power with int data type only whole number
`let b_to_pi = f64::powf(b, std::f64::consts::PI);`  // condsts is capital power of pi

`println!("{} cubed = {}, {}^pi = {}", b, b_cubed, b, b_to_pi);`


### bitwise - just like C

let c = 1|2; // | OR & AND ^ XOR !NOR. // XOR is like 
// this is 01 OR 10 = 11= 3_10

### Logical operaterts - usual

`let pi_less_4 = std::f64::consts::PI < 4.0` // true

>= 
<= 
==

```
let x = 5
let x_is_5 = x == 5; //true
```

### Scope

 variable only lives in {}











