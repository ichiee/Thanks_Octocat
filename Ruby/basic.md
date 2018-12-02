Ruby


https://www.youtube.com/watch?v=t_ispmWmdjY&t=5302s

## tldr

no need ;   
noneed to have () when call method with no param    
use def & end key words for method    
need use () when using variable     
cannot mix int on str, use to_s(intvar.to_s)    
you can set defaut on param like (name = "no name")   
return can be more than 1         
`and` is key word like `&&`   
`or` is key word like `|`
`!` is not    
`case` and `when` keyword - case expression - using `end`, too (use else, too)    
loop - `while` + condition    
loop2 - `for` friend in friends - like JS you can create variable during for loop   
loop3 - elements.each do |element| ... end    
loop4 - for index in 0..5  is the same as 6.times do |index|    
file = `File.open("example.txt", "r")`        
class is pretty much the same as php.     

### method 

use def and key word key word
whithin the keywords it will be a method

you will need to call the method when excute

def sayhi(name = "no name")
  put ("hi" + name)
end

sayhi("ichi")

you can set return type

    def cube (num)
      num * num * num
    end
     
    puts cube (3)

all you need is just define like `num * num * num`
you can also define like
return num * num * num

you can also two return

    def cube (num)
      return num * num * num, 70
    end

    put cube (3)[1]

return become array

### condition

use key word `if`, `elseif`, `else` and `end`

    ismale = true
    istall = true

    if ismale and is tall
      put "you are a tall male"
    elseif ismale and !istall
      put "you are a short male"
    elseif !ismale and tall
      put "you are not male but a tall"
    else
      put " You are not male and not atll"
    end

### comparation

usual 
><=   
==    
!=    

### std in

num1 = gets.comp()
this means it gets stdin

you can do .to_f to float

### case expression

use keyword when - it is the same as if elseif...

    def  get_day_name(day)

    day_name = ""

    case day
    when"mon" 
      day_name = "Monday
    when "tue"
      day_name = "Tuesday
    ...

    else
      day_name = "Invalid abbreviation"
    end
    return day_name
    end


### loop

#### while

    index = 1
    while  index <= 5
      puts index
      index += 1
    end
 


    secret_word = "ichi"
    guess = ""

    while guess != secret_word
      puts "enter guess: "
      guess = gets.chop()
    end

    puts "you won"

#### for loop

friends = ["ichi", "lala", "kevin", "tom"]

puts friends [1]

for friend in friends
end

friends.each do |friend|
friend
end


for index in 0..5.  // it means 0 to 5
puts index          // print out 6 times
end


6.times do |index|
  out index
end
  
#### example Expornent method

let's create

2 ^3
two raised to the third power

    def pow(base_num, pow_num)
      result = 1
      pow_num.times do |index|
        result = result * base_num

      return result
    end


### comment

#

=begin & =end - between will be comment out in multiple lines


### Reading files

    File.open("example.txt", "r") do |file|
      puts file.read().include? "JIM"
      puts file.readline()
      puts file.readline()

    for line in file.readline() - return line in array

    end

file = File.open("example.txt", "r") 
file.close

1st one is name of file, 2nd param is mode "r" - read
file is variable name and will store into it

end is closing the file
file. is is file variable
include? is anything include
readline is read first line of file
then secound one is reading the second line - almost the point of read is move on to the next

for line in file.readline()
it will be in storing in array in line variable
always close file so do not use memory

### Writing file

- How to append 

      File.open("example.txt", "a") do |file|
        file.write("Ichi, Writer")
      end

"a" - append, append write on the last place to be 
you can add \n to start from the next line.

- How to write

      File.open("example.txt", "w") do |file|
        file.write("Ichi, Writer")
      end

This will write the file from the beggining opposed to append

     File.open("example.html", "w") do |file|
        file.write("<h1>Hello</h1>")
      end
if not existing it will create a new one

- How to r+

      File.open("example.txt", "r+") do |file|
        file.readline()
        file.write("overriddens")
      end

this will over write on the second line - or as much as where the text will take.

      File.open("example.txt", "r+") do |file|
        file.char()
        file.write("overriddens")
      end
this will curser to only one charactor




### File mode in Ruby

Mode |  Meaning   
-----|-------------- 
 "r" | Read-only, starts at beginning of file  (default mode).   
 "r+"  | Read-write, starts at beginning of file.    
  "w"   |  Write-only, truncates existing file to zero length or creates a new file for writing.   
  "w+" |  Read-write, truncates existing file to zero length or creates a new file for reading and writing.     
  "a"  |  Write-only, starts at end of file if file exists, otherwise creates a new file for writing.   
  "a+" |  Read-write, starts at end of file if file exists,  otherwise creates a new file for reading and writing.    
   "b" |  Binary file mode (may appear with any of the key letters listed above). Suppresses EOL <-> CRLF conversion on Windows. And sets external encoding to ASCII-8BIT unless explicitly specified.    
   "t" |  Text file mode (may appear with any of the key letters listed above except "b").    


### Handling errors

So ruby gives error, so how you can handling it
We wanna catch the error


#### Rescure

Basic structure

      begin

      rescue

      end

Example

    begin
      num = 10/0
    rescue
      puts "division by zero error"
    end

Instead of Ruby throw the error, it will throw error
if there are more than one code to break the code,
so how to specify the error

    lucky_nums = [1,2,4,5]
    begin
      lucky_nums ["dogs"]
      num = 10/0
    rescue ZeroDivisionError
      puts "division by zero error"
    rescure TypeError
      puts "wrong Type"
    end
    
So here ther eis the condition that `ZeroDivisionError`
So only the error will be rescure - then puts the string

#### store the error on variable       
    
    lucky_nums = [1,2,4,5]
      begin
        lucky_nums ["dogs"] 
        num = 10/0
      rescue ZeroDivisionError
        puts "division by zero error"
      rescure TypeError =>e
        puts e
      end


### Data Type - Class

Allow to create own data types
it is called class :)

    class Book
      attr_accessor :title, :authoor, :pages
    end

    book1 = Book.new()
    book1.title = :Harry Potter"
    book1.autor = "JK ROwling" 

    puts book1.title

class is custom data type
you can define what it is

attr_accessor - attribute the class have
An object is instance of class
Everything is object in Ruby
All stulff like string and int are also defined in class in ruby

#### Initialise method in class

initialise is like instanciate 

    class Student
      attr_accessor :name, :major, :gpa
      def initialize(name, major, gpa)
        @name = name
        @major = major
        @gpa = gpa      
      end
      
      def has_honors
        if @gpa >= 3.0
          return true
        end
        return false
      end
    end

new is a method that call initialize

so 

    student1 = Book.new("pam", "business", 3.6)
    puts student1.has_honors
    

### Building a quiz

    Class Questions
      sttr_accessor :prompr, :answer
      def intialize (prompr, answer)
        @prompt = prompt
        @answer = answer
      end
    end
    
    
    p1= "What color are apples?\n(a)red\n(b)yellow\n(c)green"
    p1= "What color are bananas?\n(a)red\n(b)yellow\n(c)green"
    p1= "What color are pears?\n(a)red\n(b)yellow\n(c)green"

create array of questions

    questions =[
      Question.new (p1, "a"),
      QUestion.new (p2, "b"),
      Question.new (p3, "c")
    ]

create runtest method

    def run_test (questions)
      answer = ""
      score = 0
      for question in questions
        puts question.prompt
        answer = gets.chomp()
        if answer == question.answer
          score += 1
        end 
      end
      puts "you got "+ score.to_s + "/" +question.length().to_s
    end

    run_test(questions)

### Inheritance

extend one functionarity of one class to another class
sub class from super class

    Class Chef

    Class ItalianChef < Chef

this means all the functionality from Chef can be inheritated to ItalianVhief
you can override the method
if you create method within sub class, it will be overridden


### Modules

container to store methods
it is like sand box
pretty much for testimng purpose

    module Tools 

      def sayhi(name)
        puts "hello #{name}"
      end

      def saybye(name)
        puts "bye #{name}"
      end
    end
    
you can include the module like

    include Tools
    Tools.sayhi("Ichi")

also you can do from another file

    require_relative "tools.rb"
    include Tools

require_relative - you can pass file name (and the path)

### Ivteractive Ruby

Open terminal
IRB should be installed
irb -v to check
you can just type
irb
to start
just test like

     irb
     def sayhi
            puts "hello"
     end

then return

    => :sayhi

then

    sayhi
    
return

    hello
