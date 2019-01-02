## PYTHON BASOC
from
https://www.youtube.com/watch?v=WEghIXs8F6c

I need to watch the video again as I skipped a few

tldr;

    <STDIN> to get stdin
    perl filename.pl to excute
    given / when / $_ / default

    Scaler my $name
    Array my $array_name
    Hash my %emploees = (
     "Sue"=>34,
     "Paul"=>43,
     "SaM=>43
    )



command
perl -e 'print "hello world\n"'


create 
`perlfile.pl`


on the file

    use dtrict;
    use warnings;
    use diagnostics;

    use future 'say';

    use v5.16;

    print "hello World\n"


then

`perl perlfile.pl`

to excute

there are 3 main type data 

scalers arrays hashes
declare variable:

### Scalers

(my sigle then name)

    my $ame = 'ichi';

variable must have letters or _ then ypou can have numbers afterword
you can put anything on scalers

you can sifn multiple varues

    my ($age, £street) = (10, `123 main street`);

if you use "" you can include \n and varibles - like php

    my $my_infor = "$name lives on \"$street\"\n";

you can over write like below you do not need to use my anymore

    $my_info = qq{$name lib=ves on "$street"\n}

qq means the same as in ""
this way you do not need to escape double quotes

this is multiple lines uptill info

    my $bunch_on_info = <<"END";
    This is a
    bunch of information
    on multiple line uptill it says end
    END


    say $bunch_on_info;


my $big_int = 1237389246793;

printf is for matted so

    # %c Character
    # %s String
    # %d Decimal
    # %u Unsigned int
    # %f Floating point (deciamal nortaton)
    # %e Floating point (scientific nortation)

Example

    printf("%u \n", $bigint + 1");
    my $big_float = .0000000011111111;
    printf("%.16f \n", $big_float + .000000002000001);

You can switch them easily like this
    
    my $first = 1;
    my $second = 2;
    ($first, $secont) = ($second, $first);

Some math function 

    say "5 + 4 =", 5 + 4;
    say "5 * 4 =", 5 * 4;
    say "5 / 4 =", 5 / 4;
    say "5 % 4 =", 5 % 4;

    say "EXT 1 =", exp 1;
    # 2.718281...
    say "HEX 10 =", hex 10;
    # 16
    say "OCT 10 =", oct 10;
    # 8
    say "INT 6.45 =", int(6.45);
    # 6
    say "LOG 2 =", log 2;
    # 0.69...
    say "Random between 1-10 =", int(rand 11);
    # 2
    say "SQRT 9 =", SQRT 9;
    # 3

short cut assignment op
just usual way

    +=
    -=
    *=

    ++
    --
    my $num = 3;

    # incremenrt after print - 3
    say "3++ =" $num++;
    # increment befor print - 5
    say "++3 =" ++$num;

    order of operation is the same as math

### conditionals

    false : undef 0 0.0 "" "0"

    == != < > <= >=

    ! && 

Example

    my $age = 80;
    my $is_not_intoxicated = 1;
    my $aga_last_exam = 16;

    if ($age < 16){
      say "don't drive";
    } elseif (!$is_not_toxicated){
      say " You can't drive";
    } else {
      say "You can drive"
    }


all the same as other languages


for strings you use this

    eq  is ==
    ne  is !=
    lt  <
    le  <=
    gt  >
    ge  >=

example

    if('a' eq 'b'){
      say "a equals b";
    }

    unless() is oppsite to if

    unless(!$is_not_intoxicated){
      say "Get Sober!";
    }

### ternaly operator

      say (($age > 18)? "CAn Vote" : "Can't Vote");

### Loop

for loop

    for (my $i = 0; $i < 10; $i++){
      say $i;
    }


While loop    

next is continue;   
last is break;   

      my $1 = 1;

      while($i < 10){
        if ($i % 2 == 0)
          $i++;

          next;
        }
        if($i == 7){last;}
        say $i;
        $i++;
      }


Do while

    my $1 = 1;
    my $lucky_num = 7;
    my $guess;

    do {
      say "Guess a Num bet 1 and 10"

      $guess = <STDIN>;
    } while $guess !=$lucky_num;

    say "You Guessed 7";


Given will check the condition of when
$_ represent the given variable - of $age_old on the example below

    my $1 = 1;
    my $age_old = 18;

    given($age_old){
      when($_  >  16){
        say "Drive";
        continue;
      }
      when($_  >  17){
        say "Go Vote";
        continue;
      } 
      default {
        say "nothing special;
      }
    }


### Array

use my@

some function such as 
split, join, reverse


### Hash:
use key to access values

Key values:

    my %emploees = (
     "Sue"=>34,
     "Paul"=>43,
     "SaM=>43
    )


### File
(56 min)


fh means file handler
'<' this means reading only 
'>>' this means append - use print to append on the file
'+<' read and write

read

    my emp_file = 'employees.txt';

    open my $fh, '<', $emp_file
      or die "Can't Open File: $_";

    while my $info = <$fh>){
      chomp($info);

      my ($emp_name, $job, $id) = split /:/, $info:
      print "$emp_name is a $job and has the id $id \n";
    }

    close $fh or die "coun not close File : $_";

Append 

    open $fh, '>>', $emp_file
      or die "can't open File: $_"

    print $fh "Mark:Sales:124\n";
    # this will append on the file

read and write

    open $fh, '+<', $emp_file
      or die "can't open File: $_"

    seel $fh, 0, 0;
    print $fh "Mark:Sales:124\n";
        # this will aadd at the top of file  
    

### Object orientated perl

I think sub routine is like method 
Class is package

    use lib 'lib';

    package Animal::Cat

    use strict;
    use warnings;

    sub new {
      my $class = shift;
      my phone $self = {
        name => shift,
        owner => shift
        bless the $self, $class;
        return $self
      };

    }


    sub getName{
      my ($self) = @_;
      return $self->{name};
    }

    sub setName {
      my ($self, $name) = $_;
      $self->{name} = $name if defined ()$name;
      return $self->{name};
    }
  
  
  
  
  
  
