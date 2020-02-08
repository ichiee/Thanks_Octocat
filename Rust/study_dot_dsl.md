Good solution:

https://exercism.io/tracks/rust/exercises/dot-dsl/solutions/c4f0945fb17a4e668901dd2654af5387

This is the easiest understand as structures.

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

    impl Graph {
        pub fn new() -> Self {
            Graph {
                nodes: vec![],
                edges: vec![],
                attrs: hashmap![],
            }
        }

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

todo:

1:

I am not sure why the function cannot be defined on its own instead of using macro. 
is there way to write global fn?


2: check limitation of hash map - can take only unifies data type for each entry?

3: what is the pro and con of each data strictures - vec, array, hashmap, tuples, struct.
consider mutabilities and time of compile and run as well as nature of the data structure.

4: practice some manupiration of hash map data 
