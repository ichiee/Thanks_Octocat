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


extersiese 7

```
#[macro_use]
extern crate http_guest;
extern crate serde;

#[macro_use]
extern crate serde_derive;
extern crate serde_json;

use http_guest::{Request, Response, RequestExt};

#[derive(Serialize,Deserialize)]
struct  Profile {
    name: String,
    age: u32,
    address:Address,
    phone: Vec<u16>
}

#[derive(Serialize,Deserialize)]
struct Address {
    street: String,
    city: String   
}

pub fn sending_json (req: &Request<Vec<u8>>) -> Response<Vec<u8>>  {

  match *req.method() {
    http::Method::POST => {

      let parsed_person = serde_json::from_slice::<Profile>(req.body());
      //let serialized = serde_json::to_string(&req.body).unwrap();
      match parsed_person {

        Ok(p) =>{
          Response::builder()
            .status(200)
            .body(Vec::from("OK"))
            .unwrap()
        },
        Err(e) => {
          Response::builder()
            .status(404)
            .body(Vec::from (format!("{}", e)))
            .unwrap()
        }
      }
    },

    _=> {
      Response::builder()
            .status(405)
            .body(Vec::from("Method Not Allowed"))
            .unwrap()
    }
  }
}

guest_app!(sending_json);

```


<T> is a bit like macro, there are varity of the functions existing on the different type
