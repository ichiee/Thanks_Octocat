

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

### three Sum 
 running time T (N) 
 
 If you do it as a lg, lg plot very often you'll get a straight line. 
 And the slope of the straight line is the key to what's going on. 
 In this case, the slope of the straight line is three and so you can run what's called a regression to fit a late, 
 the straight line through the data points. 
 And then, it's not difficult to show to do the math to show that 
 if you get a straight line and the slope is B, 
 
 then your function is proportional to A, N^B (N to the B). 
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
 
 
 
 Logarithm
 
 lg(𝑥)=log2(𝑥)
 
 log(𝑥)=log10(𝑥)
 
 ln(𝑥)=log𝑒(𝑥)
 
 ln(𝑥)=∫𝑥11𝑥𝑑𝑥
 
 two to the 4th power -> 2x2x2x2  
 we get to the 16 when we raise 2 to some power 
 2<sup>x</sup> = 16 
 log base 2 of 16 is equal to x - written like log<sub>2</sub>16 = x  
 
 
 
 
