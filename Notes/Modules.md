- *modules play an important role in organizing, structuring, and reusing code efficiently.*
- *A module is a self-contained block of code that can be ****exported**** and ****imported**** into different parts of an *application*.
- *A NodeJS module is a separate file containing code that can be imported and reused in other parts of the application.*

### Types of modules in Node.js:
1. ECMAScript modules (ESMs): 
	- Uses import to import modules.
	- Uses export to export functions, objects, or variables.
	- Modules are loaded asynchronously, allowing better performance.
	- Requires “type”: “module” in package.json.

| Use cases                           | Description                                                                                                                                                                                                                     |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Default Export and Import           | The default export allows a module to export a single function, object, or class as its main functionality. When importing, the name can be customized, making it more flexible than named exports.                             |
| Named Exports with Aliases          | Named exports allow multiple functions, objects, or variables to be exported from a single module. Named exports must be imported using the exact name they were exported with, unless an alias is provided during import.      |
| Dynamic Imports                     | Dynamic imports allow JavaScript to load modules at runtime, rather than at the start of execution. This is useful for optimizing performance, reducing initial load times, and conditionally loading modules only when needed. |
| Combining Default and Named Exports | ES6 modules allow exporting both default and named exports in the same module.                                                                                                                                                  |
2. CommonJS Modules (CJS):
	- CommonJS is the default module system used in Node.js.
	- Uses require() to import modules.
	- Uses module.exports to export functions, objects, or variables.
	- Modules are loaded synchronously, meaning execution waits until the module is fully loaded.
	- It is default in NodeJS, but not natively supported in browsers.
	- Each module runs in its own scope, preventing variable conflicts.


> [!NOTE] Module Caching in NodeJS
> When a module is loaded using require(), NodeJS caches it, preventing repeated loading and improving performance.
>```require('./greet'); // First time - Loads module```
>```require('./greet'); // Second time - Uses cached version```
> ---
> ****To clear cache, use****
>```delete require.cache[require.resolve('./greet')];```
>

#### Advantages of using Modules:
- ****Separation of Concerns:**** Keeps code modular and well-structured.
- ****Reusability:**** Code can be reused across multiple files or projects.
- ****Encapsulation:**** Avoids global scope pollution by keeping variables local.
- ****Maintainability:**** Smaller, independent modules make debugging easier.
- ****Performance Optimization:**** Cached modules improve execution speed.


| Core Modules                                  | Local Modules                                                                                     |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| you can use without any further installation. | custom module created in an application.                                                          |
|                                               | specific to the project and are used to organize and reuse your code.                             |
|                                               | encapsulate related code within a single file.                                                    |
|                                               | reducing code duplication.                                                                        |
|                                               | promote modularity, enabling you to build applications with well-defined, independent components. |

### 1. Buffer
- The buffers module provides a way of handling streams of binary data.
- Buffer object is a global object in Node.js, no need to import using ==**require**== keyword.

![[Pasted image 20250305100022.png]]


### 2. cluster
*To split a single Node process into multiple processes*
- The cluster module provides a way of creating child processes that runs simultaneously and share the same server port.
- the Cluster module allows you to easily create child processes that each runs on their own single thread, to handle the load.

![[Pasted image 20250305162220.png]]

