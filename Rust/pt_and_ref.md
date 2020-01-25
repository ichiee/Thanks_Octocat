## Pointer and referesnce


Some resouces;
https://doc.rust-lang.org/book/ch04-02-references-and-borrowing.html


see the above if you like to know more


-----

Type of Pointers

1: Samrt Pointer
2: Reference

https://doc.rust-lang.org/book/ch15-00-smart-pointers.html

Smart ponter is a pointer which contents more data such as capacity and length.
It lives in stack and point at the value in heap (which is growable)
Reference is another pointer which simply point at the value on heap.
A Rust slice is always used through a reference and doesn't own its data.

Example of smart pointer is Box, String, Vec, Rc, Arc


Side note:

There are two type of reference 

1: mutable reference
2: Imuatable reference - it is under shared ownership

-----

### String

```
let s1 = String::from("hello");
```

so s1 is a String

if we pass &s1 into a function

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

in this case 
`&String s` is pointing at String s1. s1 have ptr (point at the value of the string), len and capacity)

Note: The opposite of referencing by using & is dereferencing

So & is like referencing

### Let's recap of str

Module std::str


A basic string declaration of `&str` type:

```
let hello_world = "Hello, World!";Run
```

Here we have declared a string literal, also known as a string slice

this is the same as below

```
let hello_world: &'static str = "Hello, world!";
```

The str type, also called a 'string slice', 
is the most primitive string type. 
It is usually seen in its borrowed form, &str. 
It is also the type of string literals, &'static str.




Let's clear it out here

String is String type

&String is a ptr

&str is static &str type 

```
fn main() {


    // 「String型」の場合
    let my_string = String::from("hello world");

    println!("{}", first_word(&my_string)); // <- スライスして渡す
    println!("{}", my_string); 
    // 「文字列リテラル」の場合
    let my_string_literal = "hello world";

   println!("{}",  first_word(&my_string_literal[..])); // <- スライスして渡す

   println!("{}",  first_word(&my_string_literal)); // スライスなのでそのまま渡してoK

  
}

fn first_word(s: &str) -> &str {
    let bytes = s.as_bytes();

    for (i, &item) in bytes.iter().enumerate() {
        if item == b' ' {
            return &s[0..i];
        }
    }

    &s[..]
}
```




