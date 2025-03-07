
- Function statements: function f(){ //statements}
- Function expression: var f = function(){}
- Anonymous functions are used where we need function as a value.
- First-class functions can be: 
	- Assigned to variables.
	- Passed as arguments to other functions.
	- Returned from other functions.
	*simply it can be used as a value*

- Higher order function:
	- A function which can take a function as a parameter or return a function.
### 1. Callbacks
- function passed to another function as an argument is called callback function.

### 2. closure
- a function is called with its lexicographical scope.
- the scope is remembered then.
- It remembers the reference to the variables.

### 3. Arrow function
- When using arrow functions without curly braces, the expression after arrow is returned.
- When using arrow functions with curly braces, you need to explicitly use the `return` keyword to return a value.