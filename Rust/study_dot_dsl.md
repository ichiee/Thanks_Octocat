
DOT DSL 
Good solution:

https://exercism.io/tracks/rust/exercises/dot-dsl/solutions/c4f0945fb17a4e668901dd2654af5387

This is the easiest architect.

```
#[macro_use]
extern crate maplit;

pub mod graph {
    use graph::graph_items::edge::Edge;
    use graph::graph_items::node::Node;
    use std::collections::HashMap;

    #[derive(Default)]
    pub struct Graph {
        pub nodes: Vec<Node>,
        pub edges: Vec<Edge>,
        pub attrs: HashMap<String, String>,
    }
    
    /* they are insrructer and */
    impl Graph {
        
          /* Simple constructor */
        pub fn new() -> Self {
            Graph {
                nodes: vec![],
                edges: vec![],
                attrs: hashmap![],
            }
        }
    
        /* using itself (not &self), and Nodes strict from node module */
        /* &[T] is used for reference to the data T, here Node data can be used on nodes as Vec */
        pub fn with_nodes(self, nodes: &[Node]) -> Self {
            Graph {
                nodes: Vec::from(nodes),
                ..self
            }
        }

        pub fn with_edges(self, edges: &[Edge]) -> Self {
            Graph {
                edges: Vec::from(edges),
                ..self
            }
        }
        
        /* &str is referencing (still a pointer to the value)*/
        pub fn with_attrs(self, attrs: &[(&str, &str)]) -> Self {
            Graph {
                attrs: attrs
                    .iter()
                    .map(|(n, v)| (String::from(*n), String::from(*v)))
                    .collect(),
                ..self
            }
        }

        pub fn get_node(&self, name: &str) -> Option<Node> {
            self.nodes.iter().find(|n| n.get_name() == name).cloned()
        }
    }

    pub mod graph_items {
        pub mod edge {
            use std::collections::HashMap;

            #[derive(PartialEq, Eq, Clone, Debug)]
            pub struct Edge {
                start: String,
                end: String,
                attrs: HashMap<String, String>,
            }

            impl Edge {
                pub fn new(start: &str, end: &str) -> Edge {
                    Edge {
                        start: String::from(start),
                        end: String::from(end),
                        attrs: hashmap![],
                    }
                }

                pub fn with_attrs(self, attrs: &[(&str, &str)]) -> Self {
                    Edge {
                        attrs: attrs
                            .iter()
                            .map(|(n, v)| (String::from(*n), String::from(*v)))
                            .collect(),
                        ..self
                    }
                }
            }
        }

        pub mod node {
            use std::collections::HashMap;

            #[derive(PartialEq, Eq, Clone, Debug)]
            pub struct Node {
                name: String,
                attrs: HashMap<String, String>,
            }

            impl Node {
                pub fn new(name: &str) -> Node {
                    Node {
                        name: String::from(name),
                        attrs: hashmap![],
                    }
                }

                pub fn with_attrs(self, attrs: &[(&str, &str)]) -> Self {
                    Node {
                        attrs: attrs
                            .iter()
                            .map(|(n, v)| (String::from(*n), String::from(*v)))
                            .collect(),
                        ..self
                    }
                }

                pub fn get_name(&self) -> &str {
                    &self.name
                }

                pub fn get_attr(&self, name: &str) -> Option<&str> {
                    self.attrs.get(name).map(|s| s.as_str())
                }
            }
        }
    }
}
```

This can be optimise using `macro rules!` for repeat functions

```
macro_rules! with_attrs {
    () => {
        pub fn with_attrs(self, attrs: &[(&str, &str)]) -> Self {
            Self {
                attrs: attrs
                    .iter()
                    .map(|(n, v)| (String::from(*n), String::from(*v)))
                    .collect(),
                    ..self
            }
        }
    }
}
```

-----

### 1: let's get back to impl what to pass it is all confusing $self, self etc

in impl, `(&self)` means nothing, ot is accessing to the struct, so you do not passing anything
it would look like this. since it is accessiong the value of struct so the return woul ne like

`$self`.elemets_of_struct


`structname`.`implname`()

```
struct Val {
    val: f64,
}


// impl of Val
impl Val {
    fn value(&self) -> &f64 {
        &self.val
    }
}

fn main() {
    // creating Val struct
    let x = Val { val: 3.0 };
    // that is how to access
    println!("{}, {}", x.value());
}
```

This is for generic type <t>
    
struct add`<T>` at the end and describe deta type as `T` on teh emelemnts. 

add `<T>` on impl and the after the name of impl. 

again pass `&self` and return would be &T as we do not know

    
```
struct GenVal<T> {
    gen_val: T,
}

// impl of GenVal for a generic type `T`
impl<T> GenVal<T> {
    fn value(&self) -> &T {
        &self.gen_val
    }
}

fn main() {

    let y = GenVal { gen_val: 3i32 };

    println!("{}", y.value());
}
```

Ertror handling often you can use 
https://stevedonovan.github.io/rust-gentle-intro/6-error-handling.html

```
Result<T,Box<Error>>;
```

-----

Hashmap useage

```
use std::collections::HashMap;

fn main (){
    
    let mut shape = HashMap::new();
    shape.insert(String::from("triangle"), 3);
    // this is just conversting &str to String using into()
    println!("{}", shape["triangle".into()]);
    
    // this will look for String "curcle" other wise create and add 1 as value
    shape.entry("circle".into()).or_insert(1);
    
     println!("{}", shape["circle".into()]);
}
```

todo:

1:

I am not sure why the function cannot be defined on its own instead of using macro. 
is there way to write global fn?


2: check limitation of hash map - can take only unifies data type for each entry?

3: what is the pro and con of each data strictures - vec, array, hashmap, tuples, struct.
consider mutabilities and time of compile and run as well as nature of the data structure.

4: practice some manupiration of hash map data 


it is just depends on the satatype on the key an value.
Hashmap useage

```
use std::collections::HashMap;

fn main (){
    
    let mut shape = HashMap::new();
    shape.insert(String::from("triangle"), 3);
    // this is just conversting &str to String using into()
    println!("{}", shape["triangle".into()]);
    
    // this will look for String "curcle" other wise create and add 1 as value
    shape.entry("circle".into()).or_insert(1);
    
     println!("{}", shape["circle".into()]);
}

```
