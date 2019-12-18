Rust cheat sheet


### Result<()> 
A specialized `Result` type  for I/O operations.    
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

```
let x = Some("air");
assert_eq!(x.unwrap(), "air");
```


convert str to int
https://stackoverflow.com/questions/27043268/convert-a-string-to-int-in-rust

```
let my_string = "27".to_string();  // `parse()` works with `&str` and `String`!
let my_int = my_string.parse::<i32>().unwrap();
```


