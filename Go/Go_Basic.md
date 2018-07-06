# Go Basic

to do:  
 Quickly go with sendax video - pick some stuff up on it
 https://www.youtube.com/watch?v=S11VFAMEs6E   (probably 3 hours)

bit like C with JS function

### Syntax

`func` - function

**type** declaration comes after variable or func name & args

`:=` declare the type and assign at the same time

Operator is the same as C

no need `;` (can do)

Func `main` - run in terminal as `go run filename.go`

    switch var{
        case varValue1 : doWhatever()
        case varValue2 : doWhatever()
    }

    var favNums[5] float64  // type float 65, 5 elemets of array decleared

    var favNums := [5]float64 {1, 2, 3, 4, 5} // type float64, 5 elements assigned on array

for loop bit like python, i as the element id, value is the value of the element  
you can put _ instead of i then it disregard that so you can fdo fmt.Printlin(value)  

    for i, value := range favNums { }  

[:] **slice**  no function name, just that

    sliceNum := `[]` int `{`1, 2, 3, 4, 5`}`

newSliceNum = numslice [3:5]

Slice without the set of value - assign 0 as default

    sliceNum2 := make ([]int, 5, 10)   
    // 5 elements, up till 10 elements I guess just declar for memory allocation 

    copy(sliceNum2, sliceNum)           // [1, 2, 3, 4, 5]
    sliceNum2[0]                        // 1
    sliceNum2 = `append`(sliceNum2, 0, -1)  
    // [1, 2, 3, 4, 5, 0, -1] @param1 what array append onto, then values         

    a := make ([]int, 5)    // len(a)=5 [0, 0, 0, 0, 0]  
    b := make([]int, 0, 5)  // []  
    c := b[:2]              // [0, 0]  



`map` function - key value

    peopleAge := make(map[string] int)
    peopleAde["Tom"] = 10
    dmt.println(peopleAge["tom"]) //10 
    
`closure` exisits - the scope is (probably???) function 

You can **return multiple WOW**

    func main{
        num1, num2 := givemeTwo(3)
    }
    func givemeTwo (number int)(int, int){
        return number_1, number
    }

**Spread Syntx Like ES6**
func addAll (arg ...int){}

`difer` - use for function and then excute after the function within finish excute
so you can see things linke end of function


`difer` function and recover function within - it catch if ther is any errors
if you put below within outher finction and call it  


    func safeDiv(num1, num2 int) int{
        difer func(){
          fmt.println(recover())
        }()
      solution := num1 / num2
      return solution
    }


then call them within main

    fmt.PrintLn(safeDiv(3, 0))
    fmt.PrintLn(safeDiv(3, 2))


so if there is any error like one of args is 0 it will throw error but keep excuting

    runtime error: integer devide by zer0
    0
    <nil>
    1
    
So that error message will be excute but still runing the second  fmt.PrintLn(safeDiv(3, 2))
If you delete the fmt.println of fmt.println(recover())
They just return 

    0
    1

So even if you have error, it keeps excuting. 

there is anothe one called `panic`

    func demPanic(num1, num2 int) int{
        difer func(){
          fmt.println(recover())
        }()
      panic("PANIC")
    }

it is like throw exception. it will print the (str) out

## POINTER!

Similar to C

    func changeVal(x int){
      x = 12
    }

    func changeRef(x *int){
      *x = 12
    }

change the value at the memory address referenced by the pointer
So within main you pass

    changeRef(&x)
    
### `*x` I(x) am the pointer! this is what P is point at - so it will be value not address
### `&x` I am the address where the variable(x) 's value stored!

https://www.callicoder.com/golang-pointers/

yPtr := new(int)
`new` can be used to allocate values such as integers, &int is illegal:
why not using var yPtr int ???? need to dig a bit

`new` allocates zeroed storage for a new item or type whatever and then returns a pointer to it. I don't think it really matters on if you use new vs short variable declaration := type{} it's mostly just preference



#### Struct - bit like C
a composite data type (or record) declaration that defines a physically grouped list of variables
Think the way of constructor (of class)

    func main(){
     rect1 := {x:2, y:5, height: 10, width: 20}
     // or rect1 := {2, 5, 10, 20}    
    }
    
    type Rectangle struct {
        X float64
        Y float64
        height float64
        width float64
    }
    
    type Rectangle struct {
    length, width int
}

    func (r Rectangle) Area_by_value() int {
        return r.length * r.width
    }

    func (r *Rectangle) Area_by_reference() int {
        return r.length * r.width
    }

    func main() {
        r1 := Rectangle{4, 3}
        fmt.Println("Rectangle is: ", r1)
        fmt.Println("Rectangle area is: ", r1.Area_by_value())
        fmt.Println("Rectangle area is: ", r1.Area_by_reference())
        fmt.Println("Rectangle area is: ", (&r1).Area_by_value())
        fmt.Println("Rectangle area is: ", (&r1).Area_by_reference())
    }

    Rectangle is: {4 3}
    Rectangle area is: 12
    Rectangle area is: 12
    Rectangle area is: 12
    Rectangle area is: 12

In the above code, we have defined two similar functions, one which takes the Rectangle instance as a pointer and one that takes it by value. We have called each of the functions, via a value r1 and once as an address &r1. The results however are all the same since Go performs appropriate conversions. 

Just to extend the example, let’s do one more function that works on the same type. In the below example, we ‘attach’ a function to calculate the perimeter of the Rectangle type. 

Really not sure the difference need better example

    func (r Rectangle) Area_by_value() int {
        return r.length * r.width
    }

    func (r *Rectangle) Area_by_reference() int {
        return r.length * r.width
    }

    func main() {
        r1 := Rectangle{4, 3}
        fmt.Println("Rectangle is: ", r1)
        fmt.Println("Rectangle area is: ", r1.Area_by_value())
        fmt.Println("Rectangle area is: ", r1.Area_by_reference())
        fmt.Println("Rectangle area is: ", (&r1).Area_by_value())
        fmt.Println("Rectangle area is: ", (&r1).Area_by_reference())
        // it all print 12
    }

interface

    type Shape interface { area() float64 }

then you can define area function out side the interface

    func (r Rectangle)area() float64{ return width * height }
    // this is method as it denotes what type the method acts on
    func getArea (shape Shape) float64 {
        shape.area()
    }
    // so you can  write
    func main (){
        r1 := Rectangle{4, 3}      
        fmt.println (getArea(r1))
    }

interface is 
interface tight things together - interface need to use the area() which is 
impliment in a method using the Rectangle struct. 
Then a func can take interface within the function to use it, and the param will also take instanciated struct(?) as param.

I think interface is holding method wuth defined data type for struct
struct holds object(? or whatever it's called)

area method can be define with using another Struct such as Circle in the i.e. above
so method can be called depends on what receiver is denoted.
https://medium.com/@gianbiondi/interfaces-in-go-59c3dc9c2d98


https://www.youtube.com/watch?v=CF9S4QZuV30&t=1091s
https://code.tutsplus.com/tutorials/how-to-define-and-implement-a-go-interface--cms-28962

Pretty cool. 
you can call same methd name but it would behaves depends on the struct
there is no inheritance but you can impliment interchangebly instead of hirechy / tree / inheritance way to see it.
no need to trace back and impliment each method which need to ovwrwrite parent Class etc.

### Let's see string functions

import (fmt
"strings"
"sort"
"os"
"log"
"io/iotil"
"strconv"
"net/http"
"time"

    func main (){
        str1 := "Hello World"
        fmt.Println(strings.Containts(str1, "lo"))  // true
        fmt.Println(strings.Index(str1, "lo"))      // 3
        fmt.Println(strings.Count(str1, "l"))       // 3
        fmt.Println(strings.Replace(str1, "l", "x", 3)) // Hexxo Woxd (only first 3)

        csvStr := "1,2,3,4,5,6"
        fmt.Println(strings.Split (csvString, ",")) // [1 2 3 4 5 6] 
        listOfLetters := []string{"c", "a", "b"}    // (need "sort" lib)

        sort.Strings(listOfLetters)
        fmt.Println(listOfLetters) //[a b c]

        listOfNums := strings.join([]string {"3`", "2", "1"}, ", ")
        fmt.Println(listOfNums)     // 3, 2, 1
        
        file, err := os.Create("samp.txt")
        if err !=nil {
            log.fatal(err)
        }
        
        file.WriteString("this is it")
        file.Close()
        
        stream, err := ioutil.ReadFile("sample.txt")
                if err !=nil {
            log.fatal(err)
        }
        
        radStr := string(stream)  
        fmt.Println(readString) // this is it             
    }

    func main(){

        randInt := 5
        randFloat :=10.5
        randString :="100"
        randString2 := "250.5"

        fmt.Println(float64(randInt))   // 5
        fmt.Println(int(randFloat))     // 10
        newInt, _ := strconv.ParseInt(randString, 0, 64) // 100 -none on err
        fmt.Println(newInt)

        newFloat, _ := strconv.ParseFloat(randString, 64) // 250.5 -none on err
        fmt.Println(newfloat)
        
    }
### HTTP
    func main() {
        http.HandleFunc("/", handler)    // "/" anytime you go to your server call handler func
        
        http.HandleFunc("/moon", handler2) 
        
        http.listenAndServe(":8080", nil)
       

    }

    func handler(w http.ResponseWriter, r *http.Request){
        fmt.Fprintf(w, "Hello World\n")
    }
    func handler2(w http.ResponseWriter, r *http.Request){
        fmt.Fprintf(w, "Hello Moon\n")
    }

### goroutine 

    func count(id int){
        for i := 0; i < 10; i++{
            fmt.Println(id, ":" i) // it prints 
                                   // 0:0
                                   // 1:0 and so on

            time.Sleep(time.Millisecond * 1000)  // wait till excute
        }
    }
    func main() {
        for i := 0; i < 10; i++{
            go count(i)
        }

        time,Sleep(time.Millisecond * 11000)
    }

    // it prints 
    // 0:0
    // 1:0 and so on
    // then
    // 0:1
    // 1:1 and so on
    
### Hey Wait use sync
https://www.youtube.com/watch?v=HRKfVjCB3lM
need impliment differ panic to catch the error incade done is not called.

    var wg sync.WaitGroup       // sync.WaitGroup type

    func say(s string) {
            for i := 0; i < 3; i++{
            fmt.Println(s)
            time.Sleep(time.milisecound * 100)
        }
        wg.done()
    }
    func.main() {
        wg.Add(1)           // Add one to the wait group befor going to goroutine
        go say("Hey")
        wg.Add(1)
        go say ("There")
        wg.wait()           // wait till it's done -> where declare done(D

        wg.Add(1)
        go say("Hola")
        wg.wait()
    }
    // Hey
    // There
    // Hey
    // There
    // Hey
    // There
    // Hola
    // Hola
    // Hola
    
### channel
pass data between go routine


