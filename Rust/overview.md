### Some syntax and key notes. - just intro even before basics
(https://www.youtube.com/watch?v=zF34dRivLOw)


 
use cargo, 
cargo run to run
make excutable under taget/debug folder



### Syntax:

    mod <filename without .rs> above main function

public function

      pub fn Function_name (){
      }

{:?} for tuple vector array

    printl! ("{:?}", num_array);

you can add below to omoit doing `std::mem` you can do `mem` 

    use std::mem    
    
    
run function on other files 

  <filename>::<function_name>();
  
on main

`impl Person` - implimenting the class like with deta struct
you can use &self like this.    




### String:
There are two type - one is premitive string another one is growable

normal string is like 

    let ichi = "ichi";
    let mut ichi = String::from("hello"); 
    // from is function

len is like `ichi.len`
`ichi.push` to push char  
`ichi.push_str` to push string. 

### Data types

A few interger and 2 float and stc
i32 i64 and etc   
they have both signed and unsigned




### Tuple:

max 12 elements
can be different types.  

    let person: ($str, &str, i8) = ("ichi", "London", 2);

// &str is string letteral 

access it like person.0 person.1, person.2

### Array

    let numbers : [i32; 5]=[1,2,3,4,5] ; 
    // [i32; 5] means 5 elements of i32

    let mut numbers : [i32; 5]=[1,2,3,4,5] ; 

    std::mem::size_of_val(&numbers) - stack size    

slice - 

    let slice: &[i32] = &numbers [0..2];  


### vetor 

seemes to be important. 

    let mut numbers: Vec<i32> = vec![1,2,3,4,5]   


*2 *=2;

### Condition

if.  - no need () 
else


### loop - 

for in. - like python?  in range so like

  for x in 0..10
  
you dont need to assign any value on x - straight assign on it


while --- also no (). 

### function

    fn greeting(greet: &str, name: &str)
    
 &str is data type as syntax
 
 `variable name` : `data type`
 
### pointer reference (? not sure)

  let vec1 = vec![1,2,3];
  let vec2 = &vec1;

ypu cannot directrly to it, need reference - &



### struct

just like go and c

    struct Color{
      red: u8,
      green: u8,
      blue: us,
    }
 
access it like c.red 


  let mut c = color {
   red:255
   green: 0;
   blue:0,
  }

it lookslike you nees `,` after the last element


#### enums

    enum Movement {
    // variants
    Up,
    Down,
    Left,
    Right
    }

    fn move_avatar(m: Movement){
    // this is like switc
      match m {
      Movement::Up =>    peintlm!("Avater moving up");
      Movement::Down =>    peintlm!("Avater moving down");
      Movement::Left =>    peintlm!("Avater moving Left");
      Movement::Right =>    peintlm!("Avater moving Right");
      }

    }

    pub fn run
      let avarter1 = Movement::Up;
      let avarter2 = Movement::Down;
      let avarter3 = Movement::Right;
      let avarter4 = Movement::Left;

      move_avater(avatar1);
      move_avater(avatar2);
      move_avater(avatar3);
      move_avater(avatar4);
    }
    
### CLI

how to pass param on car0
// this makes pass param

  let args: Vec<String> = std::env::args().collect();


// if you add 

   use std::env

then

  env::args().collect();

  println!("Args: {:?}, args);

then it would be like

then you can do 

  cargo run hello world

