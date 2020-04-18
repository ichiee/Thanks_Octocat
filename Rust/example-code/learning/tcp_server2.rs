
use std::net::{TcpListener, TcpStream};
use std::io::prelude::{BufRead, Write};
use std::io;
use std::io::BufReader;

/*
Task
Accept TCP connections on port 127.0.0.1:8080

Read all incoming data as String

Print the data to the console

Echo it back to the client
*/
   
// tcp need to have buffer to read type Bufreader because 
    // reading to buffer from TCP stream
    let mut reader = BufReader::new(&stream);
    // instanciate String
    let mut data = String::new();
    // read a line into the data so taht you can print out
    reader.read_line(&mut data)?;


    println!("{}", data);
    let s = String::from(&stream);
    stream.write_all(&data.as_bytes())?;
    Ok(());

    Ok(())
}

fn main() -> io::Result<()> {
    let listener = TcpListener::bind("127.0.0.1:8080")?;

    // accept connections and process them serially
    for stream in listener.incoming() {
        handle_client(stream?);
    }
    Ok(())
}
