*A template for creating objects*
*They encapsulate data*
*Classes in JS are built on prototypes*
*Special kind of functions*

### Defining Classes:
- Just like functions a class can be defined in 2 ways: `Class expression`, `Class declaration`
- Class declarations have the same [temporal dead zone](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz) restrictions as `let` or `const` and behave as if they are [not hoisted](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_classes#class_declaration_hoisting).
```
// Declaration
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

// Expression; the class is anonymous but assigned to a variable
const Rectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
```

### Class body:
*The body of a class is the part that is in curly braces `{}`.*
- The body of a class is executed in [strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode) even without the `"use strict"` directive.
- A class element can be characterized by three aspects:
	>Kind: Getter, setter, method, or field
	>Location: Static or instance
	>Visibility: Public or private

1. Constructor: 
   *special method for creating and initializing an object created with a class.*
   - There can only be one special method with the name "constructor" in a class.
   - constructor can use the super to call the constructor of the super class.
   - You can create instance properties inside the constructor.
2. Static initialization block:
   - It contains statements to be evaluated during class initialization
   - A class can have any number of `static {}` initialization blocks
	```
	class MyClass {
	  static field1 = console.log("static field1");
	  static {
	    console.log("static block1");
	  }
	  static field2 = console.log("static field2");
	  static {
	    console.log("static block2");
	  }
	}
	```

> [!Note:]
> Note that any static initialization of a super class is performed first, before that of its sub classes.
> 	

#### 1. Get:
- The **`get`** syntax binds an object property to a function that will be called when that property is looked up.
- A getter must have exactly zero parameters.