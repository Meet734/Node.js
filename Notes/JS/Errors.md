*Managing errors successfully is very important in terms of improving the quality of the application.*
*Managing errors correctly plays an important role in the security of the application.*

### 1. Try-catch for Error handling:
- Codes that are likely to cause errors are run in the **try** block, and these errors are caught in the **catch** block.
```
#Syntax: 
try {  
	let x = y + 10;  
} catch (error) {  
	console.log("Error: " + error.message);  
}
```
### 2. Throwing Errors (using Throw):
- We use the **throw** statement in JavaScript to raise and handle an error under certain conditions.
- 