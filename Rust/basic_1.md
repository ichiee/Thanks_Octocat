## Rust

-----

### Quick reference


a`.`len() - accessing array function

`...` including range


`..` Excluding range


`::` accessing inside enum, or crate to mod or mod to function.  

`use <crate> ::<mod>` (i.e. std::mem)      

`<mod> :: <function>` (i.e. mem::size_of_val()). 


`<variable> : <type>` (i.e. i:u8)


`{:?}` when you do not know the type such as when println!


`"{}"` placeholder 

sp `.` 0 to access tuple data

`[]` - array. HashMap

the module system as providing name-spacing and importing.

`{}` struct

`()` tuple (different data type can be elements)

`HashMap::new();` hashmap initializing - key value

`,..` on matching struct to ignore any other elemets on struct


` -> ` in fn means return type

`{}` you can release the variable only once the {} has been close, the scope is one larger than you think


-----

Do not confused reference with C language

Rust reference (&) looks like &val this is equivelant to pointer in C (*) - almost

When you call foo.bar(), or access foo.bar, rust will automatically dereference foo if it has a type of &Foo.
So one with & is in `Stack`?





-----

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

`cargo run` 

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
`let b_to_pi = f64::powf(b, std::f64::consts::PI);`  // consts is capital power of pi

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

you can create unsafe block like

```

fn whatever(){
  unsafe
  {
  }
}
```


### Memory - construct



from bottom - stack
a bit like c stuck computation. it stucks from the bottom, 
so since it is immutable you can just stuck any variable and function from the bottom, 
then it will pop when you use it so it will no need to delete the allocated memory.

#### heap

so when you using heap, it is like

`let x = Box::new(5);`

what is essentially doing this is that there is varible decalration of 
`let x = box` on the bottom of stuck, the box contstruct is point at the memory of top of the memory available,
then it store 5. So what it would happen when `prilntln!`

It will be the `println!("{}", *x);`
here `*` is dereferencing the x, so you are not printing out box, you are printing out 5


Function duct::sh

`pub`for public function
                            

```                            
#![allow(dead_code)]
use std::mem;

struct {
  x: f64,
  y: f64
}

fn origin ()-> point
{
  point {x: 0.0, y:0.0}
}

pub fn stack_and_heap()
{
  let P1 = origin();   // this contents the point itself
  let P2 = Box:: NEW((origin()));  // this contents just Box that contents pointer to origin

  println!("p1 takes up {} bytes, mem::size_of_val(&p1);
  println!("p2 takes up {} bytes, mem::size_of_val(&p2);
  
  let p3 = *p2;  // this is following - unboxing ( may be called dereferencing)
  println!("{}, p3.x);
 
}

```

-----

## About Mod

the module system as providing name-spacing and importing.
Just like library

```
Rust has a module system that enables the reuse of code in an organized fashion. A module is a namespace that contains definitions of functions or types, and you can choose whether those definitions are visible outside their module (public) or not (private).

A crate is a project that other people can pull into their projects as a dependency.
```

https://users.rust-lang.org/t/confused-by-rust-module-system/1991/2

```
From main you would have:

mod ai;
mod ai_simple;
mod ai_complex;
mod driver;
mod driver_mio;

```

At the top of the file. This declares that these name-spaces exist at all 
- it’s how the compiler knows to compile them. 
The code for each module lives either in a file named after that module at the same place in the filesystem it is declared 
(as you have done) or in a directory with the same name, and a file named mod.rs. 
In this way, src/ai.rs and src/ai/mod.rs are equivalent.

To use code from a given module, you need to use it. This is the importing side of the equation 
- it makes the functions/structs/traits available in the current namespace. So, to use the struct SimpleAI from main, you would include:

use ai::SimpleAI;
SimpleAI::new(); // SimpleAI is available without specifying its namespace

You could also do this:

use ai;
ai::SimpleAI::new(); // SimpleAI is available because its module is imported
So, a few simple rules:

For code to be compiled it must be declared as a **mod** first, **or** explicitly **added to Cargo.toml as a creat**.
For code to be used it must be imported into the current namespace via use - either explicitly or made available through its namespace.





-----

#### Control flow

if
```
if temp > 30
{
   println!("really hot");
}
else if temp < 10
{
  println!("really cold");  
}
else{
   println!("pretty ok");
}
```

#### if statement is expression !


let day = **if** temp > 20 **{**"sunny" **else** "cloudy"**}**;

you cannot omit `{}`. It is a bit like ?:

you can even have that all on println!

#### while for loop

`cotinue;`
skip rest of it back to the top of while loop

#### loop 

`loop` is the same as while true

```
 y *=n2;
 loop {
if y == 1<<10 {break;}. // this is 10000000000 in binary == 1024 in dec
}
```

#### for loop
`

```
fn for_loop(){
  for x in 1..11  // 1 to 10 inclusive
  {
  if x = {continue;}
  if x = {break;}    // beak out
    println!("x = {}", x);
  }
  
  for (pos, y) in (30..41).enumerate().  // pos goes to 30-40, y goes to 0-9
  {
    println! ("pos is {} which is {}", pos, y);
  }
}

```

##### match

this is  bit like switch
can be used for pattern match use `=>`

```
fn match_statement();
{
  let country_code = 44;
  let country = match country_code
  {
    44 => "UK",      // otherwise
    46 => "Sweden,
    7 => "russia,
    _ => "unknown".  / catch all statement
  };
  println! ("the country with code {} id {}". country_code, country);
}
```


you can match against range

```
fn match_dtatement();
{
  let country_code = 44;
  let country = match country_code
  {
    44 => "UK",      // otherwise
    46 => "Sweden,
    7 => "russia,
    1...999 => "unknown"  // this is like else if statement - this is inclusive !!!!!!!!!!!!!!!!!!!!!!!! what?
    _ => "invalid"  // this would be like -1 or like 777777 out side range of the one above
  };
  println! ("the country with code {} id {}". country_code, country);
}
```

triple `.` is inclusive, double `.` is exclusive
you cannot use `..` in match


it will be used for patturn match 

## Data structure !!!!!

### struct

use keyword `struct`

here using `.` to access elements in struct
think data sructure as class maybe ...


```
struct point
{
  x ; f64
  y : f64
}

fn structures (){
  let p = point {x: 3.0, y:4.0}
  println! ("Point p is at {}, {}", p.x, p.y);

}
```



### enum
The `enum` keyword allows the creation of a type which may be one of a few different variants. Any variant which is valid as a struct is also valid as an enum.

accessing inside is `::`

```
use std::mem;

enum color {
  Red,
  Green,
  Blue
}
```

```
fn enum()
{
  let c:color = color::Red;  // so this is like module aka library

  match c 
  {
    color::Red => println!("r"),
    color::Green => println!("g"),
    color::Blue => println! ("b")  
  }
}
```
so essentially what it is that `enum is like data type`,
In the data type, you pick Red,here `::` is referencing

Then it check what is matching

so it is like if (c == color::Red) then print "r"
`=>` is like `{}`

if one of element above is missing rust with throw error 

You can use below to use as else

```
_=>println!("something else!");

```

you can also create a tuple under the `match` using enum
you also need the tuple under enum as well.

```
color::RGBcolor(0,0,0)=>println!("black");
```

you can also use struct here

```
enum color {
  RGBcolor(u8,u8,u8),                            // tuple
  cmykcolor{cyan:u8, magento:u8,yellow:u8, black:u8} // struct
}
```

then of course need to use

```
let c:color = color::cmyk{cyan:0, magento:128, yellow:0, black:0};
```

on match if you do not care anything you can add like `_` again

```
color::cmykcolor{cyan:_, magento:_, yellow:_, black:255} => println!("black");
```

you can all catch all to do nothing

```
_=>();
```

another example as follows

```
// Create an `enum` to classify a web event. Note how both
// names and type information together specify the variant:
// `PageLoad != PageUnload` and `KeyPress(char) != Paste(String)`.
// Each is different and independent.
enum WebEvent {
    // An `enum` may either be `unit-like`,
    PageLoad,
    PageUnload,
    // like tuple structs,
    KeyPress(char),
    Paste(String),
    // or c-like structures.
    Click { x: i64, y: i64 },
}

// A function which takes a `WebEvent` enum as an argument and
// returns nothing.
fn inspect(event: WebEvent) {
    match event {
        WebEvent::PageLoad => println!("page loaded"),
        WebEvent::PageUnload => println!("page unloaded"),
        // Destructure `c` from inside the `enum`.
        WebEvent::KeyPress(c) => println!("pressed '{}'.", c),
        WebEvent::Paste(s) => println!("pasted \"{}\".", s),
        // Destructure `Click` into `x` and `y`.
        WebEvent::Click { x, y } => {
            println!("clicked at x={}, y={}.", x, y);
        },
    }
}

fn main() {
    let pressed = WebEvent::KeyPress('x');
    // `to_owned()` creates an owned `String` from a string slice.
    let pasted  = WebEvent::Paste("my text".to_owned());
    let click   = WebEvent::Click { x: 20, y: 80 };
    let load    = WebEvent::PageLoad;
    let unload  = WebEvent::PageUnload;

    inspect(pressed);
    inspect(pasted);
    inspect(click);
    inspect(load);
    inspect(unload);
}

```

You can create alias using `type`

```
enum VeryVerboseEnumOfThingsToDoWithNumbers {
    Add,
    Subtract,
}

// Creates a type alias
type Operations = VeryVerboseEnumOfThingsToDoWithNumbers;

fn main() {
    // We can refer to each variant via its alias, not its long and inconvenient
    // name.
    let x = Operations::Add;
}

```
another alias is `self` within `impl` block

```
enum VeryVerboseEnumOfThingsToDoWithNumbers {
    Add,
    Subtract,
}

impl VeryVerboseEnumOfThingsToDoWithNumbers {
    fn run(&self, x: i32, y: i32) -> i32 {
        match self {
            Self::Add => x + y,
            Self::Subtract => x - y,
        }
    }
}
```
https://doc.rust-lang.org/rust-by-example/custom_types/enum.html

### union

we do not know what is in there so use `unsafe`
access the inside of union is `.`

for allocate piece of memory

```
union IntOrFloat 
{
  i i32,
  f: f32
}

fn main (){
  let mut iof = IntOrFloat {i:123};
  iof.i = 234
  let value = unsafe {iof.i}; // because we do not know if it ire really int was assigned
  println!("iof.i {}", value);
}
```
you could also do 
```
fn process_value(iof: IntOrFloat)
{
  unsafe {
    match iof {
      IntOrFloat {i: 42}=>{
        println!("meaning of life value");
      }
      IntOrFloat {f} => {
        println ("Value = {}",f);
      }
    }
  }
}


fn main (){
  let mut iof = IntOrFloat {i:123};
  iof.i = 234
  let value = unsafe {iof.i}; // because we do not know if it ire really int was assigned
  println!("iof.i {}", value);
  process_value (IntOrFloat{i:42});
}

```
Above it if you add something like `process_value (IntOrFloat{i:5});`

Since it does not match to the first, it will fall back to the second option of match
then create a wrong float - complete nonsense.

-----
go over again below
### option

presence or absense of value

`option<t>`
let result:option<f64> = 


`some(z) none`

you can use if let some(z) to deconstructing

### Array

you need to know how many elements


### String

```
fn strings()
{
    
    let s:&'static str = "hello!";
    println!("{}", s);
    
    for c in s.chars().rev(){
    println!("{}", c);
    
    }
        if let Some(x) = s.chars().nth(0){
        println!("last letter is {}", x);
    }
    let mut letters = String::new();
    let mut a = 'a' as u8;
    while a <= ('z' as u8){
        letters.push(a as char);
        letters.push_str(",");
        a +=1;
        println!("{}", letters);
    }
    // let ou:&str = &letters;
    
    // concat 
    // String + str is finr
    //let strings = letters + &letters;   
}

fn main (){
    strings();

}

```

### Tuple

it is abit like array but can have different data tyoe 

```
// tuple is correction of several values
// types can be different

fn sum_of_it(x:i32, y:i32)->(i32, i32){  // making tuple here
    (x+y, x*y)
}


fn tuples(){
    let x = 3;
    let y = 4;
    let sp = sum_of_it (x,y);
    
    println!("sp = {:?}", sp);  //sp = (7, 12)
    println!("{0} + {1} = {2}, {0} * {1} = {3}", x, y, sp.0, sp.1);  
    
    // destructurling
    let (a, b) = sp;
    println!("a = {}, b={}", a, b);
    
    let sp2 sum_of_it(4,7);
    let combined = (sp1, sp2);
    println! ("{:?}", conbined);
    printls! ("last elem = {}", (conbined.1).1);
    
    // destructuring again
    let ((c, d), (e.f)) = conbined;

    let foo (true, 42.0, -1i8);
    // you make tuple of single elements
    let boo = (12,) // otherwise recognised as int
}
 
  fn main(){
      
      tuples();
  }
```


### HashMapstd::collections::HashMAp


key value pair
Pretty similar to the way you access to array

```
use std::collections::HashMap;

fn main(){
    
    let mut shapes = HashMap::new();
    shapes.insert(String::from ("triangle"), 3);
    shapes.insert(String::from ("square"), 4);
    
    println!("a square has {} sides",
        // access it with []
        shapes["square".into()]);
        
        for (key, value) in &shapes {
            println!("{} has {} value", key, value);
        }
        // this is over riding
        shapes.insert("square".into(), 5);
        // it actually print out like for loops
        println!("{:?}", shapes);
}
```

### Pattern matching

```
#[allow(dead_code)]
#[allow(unused_variables)]

use std::mem;

fn how_many(x:i32) ->&'static str
{
    match x
    {
        0 => "no",
        1 | 2 => "one or two",
        12 => "dozen",
        z @ 9...11 => "lots ",
        _ if (x % 2 == 0) => "some",
        _=> "a few" // default fall back
    }
}

pub fn pattern_matching()
{
    for x in 0..13
    {
        println!("{}: I have {} oranges", x, how_many (x));
    }
    
    let point = (0,0);
    match (point){
        (0,0)=> println! ("origin"),
        (0, y) => println! ("x axis, y = {}", y),  // intialising y on here
        (x, 0) => println! ("y axis, x = {}", x),
        (ref mut x, 0) => println! ("y axis, x = {}", x),
        (x, y) => println! ("x = {}, y = {}", x, y),

    }
}


fn main (){
    pattern_matching()
}
```

### generics


you can make a point with anytype

`<T>` is generic parameter - because you do not wana specify the type
you can ise like below as type param


```
struct Point<T>
{
    x: T,
    y: T
}

fn generics (){
    let a = Point {x:0, y:0};
    
    // let a:<i32> = Point {x:0, y:0};  you can be explicit
    let a = Point {x:1.2, y:2.2};
}
```
or like

```
struct Point<T,V>
{
    x: T,
    y: V
}
fn generics (){    
    let a:<i32, u16> = Point {x:0, y:0};  you can be explicit
}
```

obviously, you can get ridf of most of explicit type and get the rust to do the job.


## Function

### function
function can take parameters

fc fcname (param: i32) -> i32





unction 

### method
you can impliment method using `impl`
you can define right after stuck using &self to refer the struct 
The impl keyword is primarily used to define implementations on types

```
struct Example {
    number: i32,
}

impl Example {
    fn boo() {
        println!("boo! Example::boo() was called!");
    }

    fn answer(&mut self) {
        self.number += 42;
    }

    fn get_number(&self) -> i32 {
        self.number
    }
}
```
### closure

Closures in Rust, also called lambda expressions or lambdas
functions that can capture the enclosing environment

function can be called and assigned to variable just like other langeges
is within it
```
let closure_inferred  = |i     |          i + 1  ;
```
so it does using || instead of () around input variables.
```
fn main() {
    // Increment via closures and functions.
    fn  function            (i: i32) -> i32 { i + 1 }

    // Closures are anonymous, here we are binding them to references
    // Annotation is identical to function annotation but is optional
    // as are the `{}` wrapping the body. These nameless functions
    // are assigned to appropriately named variables.
    let closure_annotated = |i: i32| -> i32 { i + 1 };
    let closure_inferred  = |i     |          i + 1  ;

    let i = 1;
    // Call the function and closures.
    println!("function: {}", function(i));
    println!("closure_annotated: {}", closure_annotated(i));
    println!("closure_inferred: {}", closure_inferred(i));

    // A closure taking no arguments which returns an `i32`.
    // The return type is inferred.
    let one = || 1;
    println!("closure returning one: {}", one());

}

```

on closure, if you borrow the variable from out side scope, you need to wait till the } placed pefore using back again

```
fn closures()
{
    let plus_one = |x:i32|x+1;
    let a = 6;
    println! ("{}+1 = {}", a, plus_one(a));
    
    let mut two = 2;
    { //this makes borrow_two works
        let plus_2 = |x:i32|
        {
            let mut z = x;
            z += two;
            z // return value
        };
        println! ("{}+2 = {}", a, plus_2(a));
    } // this makes bowwow two works
    let borrow_two = &mut two;
}

fn main (){
    closures();
}

```


essentially, using these are good practice

T: by value. (making a copy of it)
T& by reference
&mut &   by mutable reference

```
fn closures()
{
    let plus_three = |x:&mut i32| *x +=3; // mutable reference &mut, dereference
    let mut f = 12;
    plus_three(&mut f); 
    println!("f = {}", f);
}

fn main (){
    closures();
}
```


```
fn closures()
{
    let plus_three = |mut x: i32| x +=3; // make temporary valiable x mut
    let mut f = 12;
    plus_three(f); 
    println!("f = {}", f);
}

fn main (){
    closures();
}
```


### Strings

there are two string types

`&'static str` and `String`

&str is just a `string slice` which contains just a pointer to `a region of string bytes and the length of the region` 
The ‘static lifetime indicates that the string slice will exist throughout the duration of the program.
A string slice has a fixed size, and cannot be mutated.

"Hello there." is a string literal and its type is &'static str. A string literal is a string slice that is statically allocated, meaning that it’s saved inside our compiled program, and exists for the entire duration it runs.

so 

```
let greeting = "Hello there."; // greeting: &'static str
```
The greeting binding is a reference to this statically allocated string


while String is heapallocated contents, ptr to actual string, length, momory bytes 
- this is much more complex than a string slice.

Strings are commonly created by converting from a string slice using the to_string method.

```
let mut s = "Hello".to_string(); // mut s: String
```

Strings will coerce into &str with an &:

```
fn takes_slice(slice: &str) {
    println!("Got: {}", slice);
}

fn main() {
    let s = "Hello".to_string();  //  String
    takes_slice(&s);               // &s is $str
}
```

Cannot access in index

access like this

```
let dog = hachiko.chars().nth(1);  // kinda like hachiko[1]
```

however

You can get a slice of a string with slicing syntax:

```
let dog = "hachiko";
let hachi = &dog[0..5];
```
If you have a String, you can concatenate a &str to the end of it:

But if you have two Strings, you need an &:

```
let hello = "Hello ".to_string();
let world = "world!".to_string();

let hello_world = hello + &world;
```

This is because &String can automatically coerce to a &str

strings are not null-terminated and can contain null bytes.



### impl

define implementations on types 

```
struct Example {
    number: i32,
}

impl Example {
    fn boo() {
        println!("boo! Example::boo() was called!");
    }

    fn answer(&mut self) {
        self.number += 42;
    }

    fn get_number(&self) -> i32 {
        self.number
    }
}
```

Inherent implementations are standalone, while trait implementations are used to implement traits for types, or other traits.

so you can add like this after the code above

```
trait Thingy {
    fn do_thingy(&self);
}

impl Thingy for Example {
    fn do_thingy(&self) {
        println!("doing a thing! also, number is {}!", self.number);
    }
}
```


### trait
A trait can be implemented by multiple types, and in fact new traits can provide implementations for existing types
https://www.youtube.com/watch?v=grU-4u0Okto

Struct is perfect name and package together to make meaning group

impl is for the struct, this can be done via trait. trait
the trait can be used for more than one struct

Let's use game character as an example

you can instance of the struct 

```
let my_dwarf = Dwarf {
name:String::from("NellDwarf")"
};
```

give the constitution by trait

```
pub trait Constitution {
  fn constitution_bonus(&self)->u8;
}
```
we have now `trait` defined

we need this implimet constitution trait on our dwarf struct.
it shoulh have all the functionarity of this trait but be able to 
override a part as needed
it leave s to up to whatever struct impliments this trait 
let's impliment that trait

```
impl Constitution for Dwarf{
  fn constitution_bonus(&self)-> U8 {
   2
  } 
}
```
this gives bonus 2 whenever it called

```
my_dwarf.constitution_bones();  // 2
```

and so on,

So `Enums` and `Struct` hold Data
`Trait` holds behaviour, which can be impliment for the Data (struct)

Trait object can be hold both traditional trait (behaviour and data (pointer)
You CANNNOT ADD DATA to a trait object. It can point at one place on specific time

Check this example



This is a type of spell

```
struct Cantrip{}
struct Transmutation{}
struct Enchantment{}
struct Necromacy{}
```
avove all need to be cast

```
pub trait Cast {
  fn cast(&self);
}
```
So now need cast for each spell 

```

imple Cast for Cantrip {
  fn cast(&self){
  // details of casting a cantrip spell
  }
}

imple Cast for Transmutation {
  fn cast(&self){
  // details of casting a Transmutation spell
  }
}

...// and so on
```

we wanna store that on one place! let's call it spell book!

```
struct Spellbook{
  pub spells:Vec<Box<Cast>>.   // This means that any type that implements that on Cast trait

 // Vex<T> -> group objects of certin type
 // Box is a pointer point it at value on heap

}
```
It take severy spell on Spell book and interate over itthen acst each one afetr the other


```
impl Spellbook {
  pub fn run(&self){
    for spell in self.spells.iter(){
      spell.cast(); // this is cast spell then 
    } 
  }
}
```
let's see

```
let spell_book =  Spellbook{
                    spells: vec![               // different type of spells  as long as implemet on cast
                    Box::new(Cantrip{}),
                    Box::new(Transmutation {}),
                    Box::new(Enchantment {}),
                    Box::new(Necromacy {}),
                    ],
                  };
spell_book.run();
```

it is like this 

struct  ---> need `impl` to define fn to use it - <struct val>`.`<fn name>
struct and trait (with fn) ---- > need `imple` with the same `fn` for the trait and using <struct val>`.`<fn name> to access the impl

So here there is a `Spellbook` struct `data:Vec<Box<Cast>>`
just instanciate with any spells that will be on the Spellbook (has to implemet Cast for it).

if you use `run` on it, it will call `cast` fn defined in `trait` for each spell(struct) such as `Cantrip`.

so trait can be a binder -- even parent node to bind  each struct if they share the same Trait.
this become visible when another struct wants to call a different structs, you can call them via `trait`,
if 

### check out 10.2 and 17.2 on rust programming language 2nd edition


trait can be have default implimentation there if not compiler will be showing  error


```
trait Animal  // this is the top of tree
{
    fn name (&self)-> &'static str;
    
    fn talk(&self)
    {
        println!("{} cannot talk", self.name());
    }
    
}

struct Human // child of animal
{
    name: &'static str  // str literal
}

impl Animal for Human 
{
   fn name(&self) -> &'static str
   {
       self.name
   }
}

fn traits ()
{
    let h = Human{ name: "John"};
    h.talk();
}

fn main(){
    traits();
}
```

you can change animal to

```
impl Animal for Human 
{
   fn name(&self) -> &'static str
   {
       self.name
   }
   
   fn talk (&self)
   {
       println!("{} says hello", self.name());
   }
}
```

You can create struct Cat and then impliment for Cat


Now you can also create a ctreste function adding these

train Animal

```
fn create(name: &'static str) -> Self;
```

struct Human

```
fn create(name: &'static str) -> Human
```

fn struct

```
let h = Human::create("john");
```

however if you wanna do 

```
let h = Animal::create("john"); 
```
compiler complain as there is no data type as it is returning to Self
but you can do this below by define type - Human struct

```
let h:Human = Animal::create("john");
```

so if you are not haveing &self as argument, you can use trait as it is as long as the type defined

```
trait Animal  // this is the top of tree
{
    fn create(name: &'static str) -> Self;
    
    fn name (&self)-> &'static str;
    
    fn talk(&self)
    {
        println!("{} cannot talk", self.name());
    }
    
}

struct Human // child of animal
{
    name: &'static str  // str literal
}

impl Animal for Human 
{
    fn create(name: &'static str) -> Human // creating Human struct variable - it is self on animaltrait 
    {
        Human{name: name}
    }
    fn name(&self) -> &'static str
    {
        self.name
    }    
   
    fn talk (&self)
    {
       println!("{} says hello", self.name());
   }
}

fn traits ()
{
    //let h = Human{ name: "John"};
    let h = Human::create("john");
    h.talk();
}

fn main(){
    traits();
}
```

Anothe good syntax explanation
https://users.rust-lang.org/t/confusion-struct-impl-self-trait/3941/2



```
     +-----------------------+
     |                       |
   player.incr_health();     |
              |              |
              V              V
  Player::incr_health(&mut player);
```


### into

Trait called into

```
struct Person {
    name: String
}

impl Person 
{
    fn new(name: &str)-> Person
    {
        Person {name: name.to_string() }       
    }
}

fn main()
{
    let john = Person::new("John");
    let name: String = "Jane".to_string();     // make it as String
    let jane = Person::new (name.as_ref());   // need to bring it abck as &str
}
```

into trait - automatic conversion


```
fn new<S: Into<String>>(name: S) -> Person   // type S is converting into String
{
    Person {name: name.into()}
}
```

Another way to do is

```
fn new<S>(name: S) -> Person
    where S: Into<String>
{
    Person {name: name.into()}
}
```

### Drop

it is a distructor


```
struct Creature{
    name : String
}


impl Creature {
    
    fn new (name: &str)-> Creature
    {
        println! ("{} enters a game", name);
        Creature {name: name.into()}
    }
}


impl Drop for Creature{
    fn drop (&mut self){
        println! ("{} is dead", self.name);
    }
}


fn main(){
    let ichi = Creature::new("ichi");
    println! ("daaaa");
}
```


-----

