# Big O

#### Time Complexity:

- arithmetic operations = O(1)  
- variable assignments = O(1)  
- access array element by index O(1)  
- loop over array = O(n)  
- *n* nested loops = O(n^*n*)  
- objects:
    - insertion = O(1)  
    - removal = O(1)  
    - searching = O(n)  
    - access = O(1)  
- object methods:
    - Object.keys = O(n)
    - Object.values = O(n)
    - Object.entries = O(n)
    - Object.hasOwnProperty = O(1)
- arrays:
    - insertion:
        - beginning = O(n) `unshift`
        - end = O(1) `push`
    - removal:
        - beginning = O(n) `shift`
        - end = O(1) `pop`
    - searching = O(n)  
    - access = O(1)  
- array methods:
    - .push = O(1)
    - .pop = O(1)
    - .shift = O(n)
    - .unshift = O(n)
    - .concat = O(n)
    - .slice = O(n)
    - .splice = O(n)
    - .sort = O(n * log n)
    - .forEach/map/filter/reduce/etc. = O(n)


#### Space Complexity:

 
