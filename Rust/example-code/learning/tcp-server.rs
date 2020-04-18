//https://ferrous-systems.github.io/teaching-material/assignments/result-option-assignment.html

use std::collections::VecDeque;
use std::io;
use std::io::prelude::*;
use std::io::BufReader;
use std::net::{TcpListener, TcpStream};

fn handle_client(mut stream: TcpStream, messages: &mut VecDeque<String>) -> Result<(), io::Error> {
    let mut buf = BufReader::new(&stream);
    let mut read_data = String::new();
    buf.read_line(&mut read_data)?;

    // println!("{}", read_data.len());

    if read_data.trim().is_empty() {
        let out = messages.pop_front();
        match out {
            Some(s) => stream.write(s.as_bytes())?,
            None => stream.write(b"No messages")?,
        };
    } else {
        messages.push_back(read_data);
    };

    Ok(())
}

fn main() -> io::Result<()> {
    let listener = TcpListener::bind("127.0.0.1:8080")?;

    let mut storage = VecDeque::new();

    // accept connections and process them serially
    for stream in listener.incoming() {
        handle_client(stream?, &mut storage)?;
    }
    Ok(())
}
