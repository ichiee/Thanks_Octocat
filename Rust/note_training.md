### training 


documentation
https://doc.rust-lang.org/beta/book/title-page.html

edition docs
https://doc.rust-lang.org/edition-guide/


Cheat sheet:
https://cheats.rs/

Writing chat in rust:
https://nbaksalyar.github.io/2015/07/10/writing-chat-in-rust.html

search library (unoffitial)
https://lib.rs/


conquer of completion

https://github.com/neoclide/coc.nvim



match example:

```
main(){
    //example
    match pending.wait (){
        
        Ok(resp) if resp.status == 200 =>{
            
        },
        Ok(resp) if resp.status == 500 =>{
            
        },
        Err(e) =>{},     
    }    
}
```
