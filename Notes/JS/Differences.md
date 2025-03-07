
### 1. call by value and reference

| Property               | Call by Value                               | Call by Reference                    |
| ---------------------- | ------------------------------------------- | ------------------------------------ |
| **Data Types**         | Primitive types                             | Object types                         |
| **Examples**           | Number, String, Boolean, Null, etc.         | Array, Object, etc.                  |
| **Parameter Copy**     | Value is copied                             | Reference is copied                  |
| **Effect on Original** | No effect on the original variable          | Changes affect the original object   |
| **Memory**             | Separate memory allocation                  | Shared memory allocation             |
| **Function Example**   | `function modifyValue(val) { ... }`         | `function modifyObject(o) { ... }`   |
| **Behavior**           | Changes to parameter do not affect original | Changes to parameter affect original |
