https://d3c33hcgiwev3.cloudfront.net/_9e4b178fa46f2b27f7beefbc5b1d2727_14AnalysisOfAlgorithms.pdf?Expires=1541376000&Signature=SREJKQWYNQaSzKaTmqaOXjkzxxBdg71iBRPhRADk7YMYjRuwRS989Gbp7pNYQtopeBh48uZPksHuYAUOWPg5n-z4pKIM007K9Nzhk7qu2QCsNIeHfgQsqGHc~unc2WZbxUqI4FJ~9gCOY82HQUKruMEeKJ8rQVCZknhZ9GeP6TI_&Key-Pair-Id=APKAJLTNE6QMUY6HBC5A

### Scientific method applied to analysis of algorithms

A framework for predicting performance and comparing algorithms.
Scientific method. 
・Observe some feature of the natural world.  
・Hypothesize a model that is consistent with the observations.  
・Predict events using the hypothesis.  
・Verify the predictions by making further observations.  
・Validate by repeating until the hypothesis and observations agree.  


### Principles. 
・Experiments must be reproducible.  
・Hypotheses must be falsifiable.  
  
### Feature of the natural world. 
Computer itself.

## three Sum examples
3-SUM. Given N distinct integers, how many triples sum to exactly zero?

**brute-force algorithm** is simple three loop to compare if the sum is 0 to return

#### Measuring the running time

Q. How to time a program?
A1. Manual.
(i.e on command)
% java ThreeSum 1Kints.txt

A2. Automatic.

public class Stopwatch (part of stdlib.jar )
  Stopwatch()   // create a new stopwatch
  double elapsedTime()  //time since creation (in seconds)

public static void main(String[] args)
{
  int[] a = In.readInts(args[0]);
  Stopwatch stopwatch = new Stopwatch();
  StdOut.println(ThreeSum.count(a));
  double time = stopwatch.elapsedTime();
}

#### Empirical analysis

Run the program for various input sizes and measure running time.

### Data analysis

Plot running time T (N) vs. input size N.
 running time T (N) 
 Input size N
 
 
 
 
 
 
 
 If you do it as a lg, lg plot very often you'll get a straight line. - this will ge lg T(N) on y, lg(N) on X
 And the slope of the straight line is the key to what's going on. 
 In this case, the slope of the straight line is three and so you can run what's called a regression to fit a late, 
 the straight line through the data points. 
 And then, it's not difficult to show to do the math to show that 
 if you get a straight line and the slope is B, - in this case 3
 
 then your function is proportional to A, N^B (N to the B). 
 propotional - y = kx  => k = y/x



 That's called the **power law**. 
 And that's true of many, many scientific problems including most algorithms. 
 So here's a little bit of the math for that. 
 So the straight line means that since we did a lg, lg plot with powers of two, 
 that lg(T(N)) = B lg N + C. 
 And we have our empirical values of B and C and then if you raise both sides of 
 that equation to two to that power then you get T(N) = a constant times N^B. 
 So right away just from observation we have a pretty good model for the running time for our program, 
 we can figure and do the math and figure out that it seems as though the running time is about ten^-10 N^3 seconds. 
 We can use that hypothesis to go ahead and make predictions. Just plug in for different values of N 
 and it says it will take us 400 seconds for 16,000. 400 seconds is plenty of time 
 but now we can go ahead and invest and run that experiment and sure enough we're pretty close to 
 that 408 seconds when we run it. And now we can make a prediction for 32,000 or for or for whatever else we might be interested in.
 
 

     Logarithm (what is it back to school :)!)

     lg(𝑥)=log2(𝑥)

     log(𝑥)=log10(𝑥)

     ln(𝑥)=log𝑒(𝑥)

     ln(𝑥)=∫𝑥11𝑥𝑑𝑥
 
     two to the 4th power -> 2x2x2x2  
     we get to the 16 when we raise 2 to some power 
     2<sup>x</sup> = 16 
     log base 2 of 16 is equal to x - written like log<sub>2</sub>16 = x  
 
 
    log<sub>b</sub>(a)=c⟺b<sup>c</sup>=a
 


### Log-log plot. 
Plot running time T (N) vs. input size N using log-log scale.

lg(T (N)) = b lg N + c  // just adding (multiplying) lg on to the both side b is the how steep it is (3) c is starting point
b = 2.999
c = -33.2103
T (N) = a N <sup>b</sup>, where a = 2 c


### Theory of Algorithm 

    Goals  
    ・Establish “difficulty” of a problem.
    ・Develop “optimal” algorithms.
    Approach  
    ・Suppress details in analysis: analyze “to within a constant factor”.
    ・Eliminate variability in input model by focusing on the worst case.
    Optimal algorithm  
    ・Performance guarantee (to within a constant factor) for any input.
    ・No algorithm can provide a better performance guarantee.



The approach that the computer scientist use for this is to try to suppress as many details as possible in the analysis. 
And so just analyze the running time to or within a constant factor. 
That's what order of growth is getting at and also I want to, not worry about the input model at all. 
And so we focused on worst case design and we can talk about performance of algorithms just in turn of the order of growth 
and it's actually possible, 
it's actually possible to do that in a very rigorous way that it's taught us a lot about the difficulty of solving problems.
And our goal is to find an optimal algorithm where we can guarantee to within a constant factor certain performance for 
any input cuz we discovered the worst case but we also can have approved that didn't know algorithm could provide a better performance guarantee.

Big Theta - asymptotic order of growth **Θ(N<sup>2</sup>)**

Big Oh Θ(N2) and smaller **O(N<sup>2</sup>)**

Big Omega Θ(N2) and larger **Ω(N<sup>2</sup>)**

#### when upper bound and lower bound of algorithm met then that is the optimal algorithm

**Algorithm design approach**

    Start.
    ・Develop an algorithm.
    ・Prove a lower bound.
    Gap?
    ・Lower the upper bound (discover a new algorithm).
    ・Raise the lower bound (more difficult).
    Golden Age of Algorithm Design.
    ・1970s-.
    ・Steadily decreasing upper bounds for many important problems.
    ・Many known optimal algorithms.
    Caveats.
    ・Overly pessimistic to focus on worst case?
    ・Need better than “to within a constant factor” to predict performance.


Let's focus on tilde of algorithm instead of worst case senario big oh

**Memory - Turning the crank: summary**  

    Empirical analysis.
    ・Execute program to perform experiments.
    ・Assume power law and formulate a hypothesis for running time.
    ・Model enables us to make predictions.
    Mathematical analysis.
    ・Analyze algorithm to count frequency of operations.
    ・Use tilde notation to simplify analysis.
    ・Model enables us to explain behavior.
    Scientific method.
    ・Mathematical model is independent of a particular system;
    applies to machines not yet built.
    ・Empirical analysis is necessary to validate mathematical models
    and to make predictions.



