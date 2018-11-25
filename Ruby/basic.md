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
lop4 - for index in 0..5  is the same as 6.times do |index|


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















