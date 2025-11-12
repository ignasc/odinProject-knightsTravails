## Odin Project-Knights Travails
The task is to build a function knightMoves that shows the shortest possible way to get from one square to another by outputting all squares the knight will stop on along the way

## Program structure

Main data structure used: adjacency list containing all positions on chess board as nodes.

Node structure:
* Distance is the number of steps needed to get to this node from the starting node,

* Neighbours are all nodes, to which knight piece can travel to from current position,

The program is divided into a few sections/steps:

* Every possible position is checked, to which knight piece can go to from current position: current position is saved as a node, that contains distance and all its neighbours.

* Once all positions are visited, we find end position and back-track to starting position, by picking neighbour nodes in each backtracked node with the smallest distance.

## Personal experience

This was by far the most challenging task I have ever done. And I made so many newbie mistakes, which became more obvious towards the end of the project, a few to name:

* Started coding immediately, without spending enough time to understand and break down the problem into smaller pieces.

* Skipped through provided material too quickly, without trying to understand on a deeper level, hence why I did not incorporate adjacency list from the beginning.

Despite that, every time I had to rewrite the code, brought me closer to the result as I kept figuring how I should NOT write certain things or finding stuff that does not work. And with every mistake the overall picture got more and more clear, what needs to be done.
