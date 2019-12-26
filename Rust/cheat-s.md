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

you can do

`vec.iter().any(<it is like true and false>)`

example

```
  (1..limit).
    filter(
      |x| factors.iter().any(
        |f| f != &0 && x % f == 0
      )
    ).
    sum()
}
```

### iter

iter is trail

it also have impl sum


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

5: use format!

```
let j = "sss";
   
let s = format!("ichi {}", j);
```
here j is $str s is std::string::String


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

#### Range
Struct std::ops::Range

It is astruct .. showing the range of the number

```
assert_eq!((3..5), std::ops::Range { start: 3, end: 5 });
```




------

### some form exercism

proverb this is good

as_str()
you can use use to when explicitly extract the string slice containing the string.  
in other word, when &str does notwirk from String you can use it 
you can simply use it instead of &str

```
pub fn build_proverb(list: &[&str]) -> String {
    let mut proverb = String::new();
    let end = if list.len() > 0 {
        list.len() - 1
    } else {
        0
    };

    for i in 0..end {
        let line = make_line(list[i], list[i+1]);
        proverb.push_str(line.as_str());
        proverb.push_str("\n");
    }

    if list.len() > 0 {
        let last_line = format!("And all for the want of a {}.", list[0]);
        proverb.push_str(last_line.as_str());
    }

    proverb
}

fn make_line(first: &str, second: &str) -> String {
    format!("For want of a {0} the {1} was lost.",
        first,
        second
    )
}
```

fer did very good one too

```
pub fn build_proverb(list: &[&str]) -> String {
    match list.len() {
        0 => String::from(""),
        1 => format!("And all for the want of a {}.", list[0]),
        _ => {
            vec![list
                .windows(2)
                .map(|words| build_verse(words[0], words[1]))
                .collect::<Vec<String>>()
                .join("\n"),
                
                format!("And all for the want of a {}.", list[0])
                ].join("\n")
        }        
    }
}

pub fn build_verse(want: &str, lost: &str) -> String {

    ["For want of a ",
    want,
    " the ",
    lost,
    " was lost."].concat()

}
```
I simply like his beer solution too

```
pub fn verse(n: u32) -> String {
    match n {
        0 => {
            "No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n".to_string()
        },
        1 => {
            "1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n".to_string()
        },
        2 => {
            "2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n".to_string()
        },
        _ => {
            let mut result = n.to_string();
            result.push_str(" bottles of beer on the wall, ");
            result.push_str(&n.to_string());
            result.push_str(" bottles of beer.\nTake one down and pass it around, ");
            result.push_str(&(n-1).to_string());
            result.push_str(" bottles of beer on the wall.\n");
            
            result
        }
    }
}

pub fn sing(start: u32, end: u32) -> String {
    // unimplemented!("sing verses {} to {}, inclusive", start, end)
    let range = (end..=start).rev();
    
    let result : Vec<String> = range.map(|x| verse(x)).collect();
    
    result.join("\n")
}
```

Some math solution

```
pub fn square_of_sum(n: u32) -> u32 {
    (1..=n).sum::<u32>().pow(2)
}

pub fn sum_of_squares(n: u32) -> u32 {
    (1..=n).map(|x| x.pow(2) ).sum()
}

pub fn difference(n: u32) -> u32 {
    square_of_sum(n) - sum_of_squares(n)
}
```

I love this 
Sum of multiples

```
pub fn sum_of_multiples(limit: u32, factors: &[u32]) -> u32 {
  (1..limit).
    filter(
      |x| factors.iter().any(
        |f| f != &0 && x % f == 0
      )
    ).
    sum()
}
```

Square one

```
pub fn square_of_sum(n: u32) -> u32 {
    square((1..=n).sum())
}

pub fn sum_of_squares(n: u32) -> u32 {
    (1..=n).map(|i| square(i)).sum()
}

pub fn difference(n: u32) -> u32 {
    square_of_sum(n) - sum_of_squares(n)
}

fn square(n: u32) -> u32 {
    n.pow(2)
}
```


