# Data Structures and Algorithms concepts implemented in JavaScript

#### How to run:
- run `node .<path_to_file>`

<!-- Dijkstra's Explanation to follow along:
- Until all nodes have been visited,
    - Pick node with current shortest distance from A (i.e. starting node), that we haven't visited yet.
    - In 'visited' array, add this node.
    - For each of this node's neighbours, ones that we haven't visited yet, 
        - Calculate the new shortest distance of the neighbour from A.
        - (by checking the 'previous' object and going all the way back to A to calculate that node's shortest path from A)
        - If the newly calculated distance of the neighbour from A, is lesser than previously calculated distance, 
            - Update distance from A in table for this neighbour node.
            - In the 'previous' object, update the node from which this neighbour node was reached.       
- Return path by checking the 'previous' object and going all the way back to A to calculate that node's shortest path from A. 
-->
