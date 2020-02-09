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


#### into

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
