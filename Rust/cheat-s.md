Rust cheat sheet


### Result<()>
https://doc.rust-lang.org/std/result/

A specialized `Result` TYPE  for I/O operations.    

Result<T, E> is the type used for returning and propagating errors. It is an enum with the variants, Ok(T), representing success and containing a value, and Err(E), representing error and containing an error value.

This type is broadly used across `std::i`o for any operation which may produce an `error`.
This typedef is generally used to avoid writing out io::Error directly and is otherwise a direct mapping to Result.



```
use std::io;

fn get_string() -> io::Result<String> {
    let mut buffer = String::new();

    io::stdin().read_line(&mut buffer)?;

    Ok(buffer)
}
```

// Option -> Some(v) | None

```
Let result =
  if y != 0.0 {some (x/y) else{None};
```

#### unwrap

unwrap
pub fn unwrap(self) -> T

very good read here
https://stackoverflow.com/questions/39385218/why-does-not-using-unwrap-result-in-an-error


In Rust, when you have an operation that may either return a T or fail, 
you will have a value of type Result<T,E> or Option<T> (E will be the error condition in case of an interesting error).

The function unwrap(self) -> T will give you (the value of) the embedded T if there is one. If instead there is not a T but an E or None then it will panic.

 the alternative to unwrap() is to use the ? operator. 
 
 When you are not positively sure that you don't have an error, usually it is better either pattern-match the error or use the  ? operator to forward the error.
 
https://stackoverflow.com/questions/36362020/what-is-unwrap-in-rust-and-what-is-it-used-for
 

```
let x = Some("air");
assert_eq!(x.unwrap(), "air");
```


convert str to int -> `my_string.parse::<i32>().unwrap();`
https://stackoverflow.com/questions/27043268/convert-a-string-to-int-in-rust


```
let my_string = "27".to_string();  // `parse()` works with `&str` and `String`!
let my_int = my_string.parse::<i32>().unwrap();
```

### Vec 
A contiguous growable array type
https://doc.rust-lang.org/std/vec/struct.Vec.html


You can instanciate straight

```
let mut v = vec!();
```
Struct vec has so many function any type of sort / ascii / chunks / rotation
reasons of many function is you need to have 

you can also make it to string from vec by using `join`


### String

This is `TYPE`

#### Simple way of creating String

1: String::from("s");

```
let hello = String::from("Hello, world!");
```

2: "s".to_string();
```
"This is String".to_string();
```

3: String::new() and s.push

```
let mut s = String::new();
s.push("This is String");
```

4: using vec!()

```
let mut s = vec!();

s.push("This is");
s.push("String");
let newstr = s.join(" ");
```
here, s.join(" ") is becoming &str so if you need String


#### Format!
https://doc.rust-lang.org/std/macro.format.html

The first argument format! receives is a format string. This must be a string literal. The power of the formatting string is in the {}s contained.

Additional parameters passed to format! replace the {}s within the formatting string in the order given unless named or positional parameters are used; 

A common use for format! is concatenation and interpolation of strings. The same convention is used with print! and write! macros, depending on the intended destination of the string.

Example

```
format!("hello {}", "world!");
```


### Misc

#### interater on for loop

you can reverse it by using .rev()
https://doc.rust-lang.org/std/iter/trait.Iterator.html#method.rev

```
for x in (0..100).rev() {
    println!("{}", x);
}
```



