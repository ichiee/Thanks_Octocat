## Note taking for CS50 AI - WK 0

###  Minimax - max player try to get maximum number, min player try to minimise the score

Example of tic tac toer

- -1: O to win
- 0 : draw
- 1: X to win

In this case, O is MIN and X is MAX

You can make it maximise
```
S0: # initial state
Players(s) : # returns whcih player to mobve in state s
Actions(s) : # returns legal move in state s
Result(s, a) #returns state aftr action `a` is taken
Terminal(s) : #check if state f is terminal state

Unitilty (s) : returns the value that to take a look which is defined like below

####
- -1: O to win
- 0 : draw
- 1: X to win
###
```

recursive functions comes here to figure out which value to minimise or maxmise that result depanding on the palyer 


###  Summary: Alpha-Beta Pruning
**Alpha-Beta Pruning** is an optimization technique for the Minimax algorithm, used to reduce the number of nodes evaluated in the decision tree. It eliminates branches that cannot affect the final decision, improving efficiency.

The algorithm works by maintaining two values:

Alpha: the best score the maximizing player can guarantee.
Beta: the best score the minimizing player can guarantee.
As the search progresses, if a move is found that results in a score worse than the already known best option for the opponent, further exploration of that branch is stopped. This is because the branch cannot influence the final outcome.

For example:

A maximizing player evaluates an action with a score of 4.
When exploring the next action, the minimizing player’s responses are evaluated. If one response has a score of 3 (worse than 4 for the maximizer), further exploration of that action is skipped. The maximizing player will already prefer the previously evaluated action with a score of 4.
By pruning irrelevant branches, Alpha-Beta Pruning reduces computational effort while ensuring the optimal decision is still found.

**It seems to be similar characteristic to sorting algorithm **

Anyway this is linier 

###  Summary: Depth-Limited Minimax

Depth-Limited Minimax is a variation of the Minimax algorithm designed to handle the computational infeasibility of evaluating all possible game outcomes, particularly in complex games like chess. Instead of exploring all moves to terminal states, it limits the search to a pre-defined depth.

Since the algorithm does not reach terminal states, it relies on an evaluation function to estimate the utility of non-terminal states. This function assigns a value to each state based on its favorability for a player. For example, in chess, it might consider factors such as the number and position of pieces to estimate how advantageous a board configuration is.

This approach allows Depth-Limited Minimax to make decisions efficiently, though the quality of its output heavily depends on the accuracy of the evaluation function.



