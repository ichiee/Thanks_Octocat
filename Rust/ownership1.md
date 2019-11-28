RUST has it's own perspective


and similar perspective to other languages


1: Scope and Shadowing


it is like C 

if nothing defined with in the acope
it goes one out side of the scope



```
{
  let a = 3;
{
  //let a = 2; if this is not exisiting, a would be 3
}
  // a would be always 3
}
```

## Ownership:

It can only live in one scope, either move or drop. can be copied if the type has `copy` trait

https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html
Rust uses a third approach: memory is managed through a system of ownership with a set of rules 
that the compiler checks at compile time. None of the ownership features slow down your program while it’s running.

All data stored on the stack must have a known, fixed size. 
Data with an unknown size at compile time or a size that might change must be stored on the heap instead

Accessing data in the heap is slower than accessing data on the stack 
because you have to follow a pointer to get there

Ownership Rules


- Each value in Rust has a variable that’s called its owner.
- There can only be one owner at a time.
- When the owner goes out of scope, the value will be dropped.

Rust calls `drop` automatically at the closing curly bracket.


----

### int

```
let x = 5; //bind the value 5 to x; 
let y = x; //then make a copy of the value in x and bind it to y

//We now have two variables, x and y, and both equal 5
```
integers are simple values with a known, fixed size, and these two 5 values are pushed onto the `stack`.


### String

```
let s1 = String::from("hello");
let s2 = s1;
```

String under the covers. 
A String is made up of three parts, 
a pointer to the memory that holds the contents of the string, a length, and a capacity

so s2 is pointing at the value of "hello" and s2 itself is `String`

It looks like shallow copy
`copying the pointer, length, and capacity without copying the data`

But in Rust what it does do is invalidate `s1` it is called `move`
(why do they do, coz it makes error to free memory twice if not)

we do want to deeply copy the heap data of the String, 
not just the stack data, we can use a common method called `clone`


`Hey` how about int? 

`Copy` trait that we can place on types like integers that are stored on the stack 
If a type has the Copy trait, an older variable is still usable after assignmen

### which types are `Copy`


- All the integer types, such as u32.
- The Boolean type, bool, with values true and false.
- All the floating point types, such as f64.
- The character type, char.
- Tuples, if they only contain types that are also Copy. For example, (i32, i32) is Copy, but (i32, String) is not.


### function is used on the same manner

```
fn main() {
    let s = String::from("hello");  // s comes into scope

    takes_ownership(s);             // s's value moves into the function...
                                    // ... and so is no longer valid here

    let x = 5;                      // x comes into scope

    makes_copy(x);                  // x would move into the function,
                                    // but i32 is Copy, so it’s okay to still
                                    // use x afterward

} // Here, x goes out of scope, then s. But because s's value was moved, nothing
  // special happens.

fn takes_ownership(some_string: String) { // some_string comes into scope
    println!("{}", some_string);
} // Here, some_string goes out of scope and `drop` is called. The backing
  // memory is freed.

fn makes_copy(some_integer: i32) { // some_integer comes into scope
    println!("{}", some_integer);
} 
```

### Returning values can also transfer ownership

```
fn main() {
    let s1 = gives_ownership();         // gives_ownership moves its return
                                        // value into s1

    let s2 = String::from("hello");     // s2 comes into scope

    let s3 = takes_and_gives_back(s2);  // s2 is moved into
                                        // takes_and_gives_back, which also
                                        // moves its return value into s3
} // Here, s3 goes out of scope and is dropped. s2 goes out of scope but was
  // moved, so nothing happens. s1 goes out of scope and is dropped.

fn gives_ownership() -> String {             // gives_ownership will move its
                                             // return value into the function
                                             // that calls it

    let some_string = String::from("hello"); // some_string comes into scope

    some_string                              // some_string is returned and
                                             // moves out to the calling
                                             // function
}

// takes_and_gives_back will take a String and return one
fn takes_and_gives_back(a_string: String) -> String { // a_string comes into
                                                      // scope

    a_string  // a_string is returned and moves out to the calling function
}
```

## References and Borrowing

Here is how you would define and use a calculate_length function that has a `reference` to an object as a parameter 
**instead of** taking ownership of **the value**:

without & (referencing)
```
fn main() {
    let s1 = String::from("hello");

    let (s2, len) = calculate_length(s1);

    println!("The length of '{}' is {}.", s2, len);
}

fn calculate_length(s: String) -> (String, usize) {
    let length = s.len(); // len() returns the length of a String

    (s, length)
}
```
with & referencing 

```
fn main() {
    let s1 = String::from("hello");

    let len = calculate_length(&s1);

    println!("The length of '{}' is {}.", s1, len);
}

fn calculate_length(s: &String) -> usize {
    s.len()
}
```

So you are NOT retuning String, you are using `&String` instead of String as param
It is referencing, the same as ptr in c

bit like this: s ptr -> s1 ptr -> pointing at 0th index of String array

so &s1 is a pointer, refer to s1's ptr

We call having references as function parameters `borrowing`


### Mutable References

```
fn main() {
    let mut s = String::from("hello");

    change(&mut s);
}

fn change(some_string: &mut String) {
    some_string.push_str(", world");
}
```

#### : you can have only one mutable reference to a particular piece of data in a particular scope

Rust can prevent data races at compile time
As always, we can use curly brackets to create a new scope, allowing for multiple mutable references, 
just not simultaneous ones:


```
let mut s = String::from("hello");

{
    let r1 = &mut s;

} // r1 goes out of scope here, so we can make a new reference with no problems.

let r2 = &mut s;
```

We also cannot have a mutable reference while we have an immutable one
multiple immutable references are okay

```
let mut s = String::from("hello");

let r1 = &s; // no problem
let r2 = &s; // no problem
let r3 = &mut s; // BIG PROBLEM

println!("{}, {}, and {}", r1, r2, r3);
```

well just think like you have sql, you don't wanna multiple people adding PUT and POST onto the same table
but ok to GET


#### This code is fine

```
let mut s = String::from("hello");

let r1 = &s; // no problem
let r2 = &s; // no problem
println!("{} and {}", r1, r2);
// r1 and r2 are no longer used after this point

let r3 = &mut s; // no problem
println!("{}", r3);

```
The scopes of the immutable references r1 and r2 end after the println! 
where they are last used, which is before the mutable reference r3 is created. These scopes don’t overlap, 
so this code is allowed.

### Dangling References

this does not work

```
fn dangle() -> &String { // dangle returns a reference to a String

    let s = String::from("hello"); // s is a new String

    &s // we return a reference to the String, s
} // Here, s goes out of scope, and is dropped. Its memory goes away.
  // Danger!
```

This works

```
fn no_dangle() -> String {
    let s = String::from("hello");

    s
}
```

more ------

----
Examples

Box is in stack but the value point at Box is on heap &val




