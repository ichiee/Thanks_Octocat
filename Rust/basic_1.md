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

### Scope and shadowing

 variable only lives in {}

It kind of remind me C

fn scope_and_shadowing (){
  let a = 123;
  {
   let b = 345;  
   println!("inside, b = {}", b);
   
   // let a = 777; // then it become the different variable a
   println!("inside, a = {}", a);  // if the one above is not present itr will get the valure of 123
  
  }
  println!("outside, a = {}", a);n // this become a 123 in b oth way if it ahs been declared within the scope or not

}

### CONST


you can have global like out side any fnction
how to do!
`const MEANING_OF_LIFE:u8 = 42;`. // this has no fixed address

it will be just replaced to 42 so wherever you write MEANING_OF_LIFE  beccome `42`

`static z:i32 = 123;`

you can make mutable. ----- however it is not very safe

you can create unsag=fe block like

```

fn whatever(){
  unsafe
  {
  }

}
```


### Memory - construct



from bottom - stack
a bit like c stuck computation. iyt stick from bottom, 
so since it is immutable you can just stuck any variable and function from bottom, 
then it will pop when you use it so it will no need to delete the allocated memory.

#### heap

so when you using heap, it is like

`let x = Box::new(5);`

wgat is essentially soing this is that there is varible decalration of 
`let x = box` on the bottom odf stuck the box contstruct is point at the memory of top of the memory available,
then it store 5. So what it owuld happen when `prilntln!`

It will be the `println!("{}", *x);`
here `*` is dereferencing the x, so you are not printing out box, you are printing out 5
















