fn main() {
    let mut s = String::from("hello world");
    let word = first_word (&s);
    println! ("{}", word);

    //s.clear();
    //let hello = &s[..word];
    //let world = &s[word+1..];

}

//fn first_word (s: &String) -> usize {
fn first_word (s: &String) -> &str {
    //https://doc.rust-lang.org/std/string/struct.String.html#method.as_bytes-1
    let bytes = s.as_bytes();

    // ascii number will be checked
    println! ("{:?}", bytes);
    for (i, &item) in bytes.iter().enumerate(){

        println!("{}", item );

        //byte literal syntax
        if item == b' '{
            return &s[0..i];
        }
    }
    &s[..]
}
