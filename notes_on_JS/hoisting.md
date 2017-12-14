## Hoisting in JS

https://medium.freecodecamp.org/what-is-variable-hoisting-differentiating-between-var-let-and-const-in-es6-f1a70bb43d

https://medium.freecodecamp.org/function-hoisting-hoisting-interview-questions-b6f91dbc2be8

### Summary

+ Var and function can be hoisted
  + When hoisted, move to the top of the scope (of that function or global)
  + function declaration can be hoisted:
    ```
    hoisted() // output: "Hoisted"
    function hoisted() {
        console.log('Hoisted')
    }
    ```
    ** Note ** : Never use function declaration in if else block, unexpected behaviour

  + function expression cannot be hoisted:
    ```
    notHoisted() // TypeError: notHoisted is not a function
    const notHoisted = function() {
        console.log('foo')
    }
    ```

+ let and const are not hoisted

## Interesting hoisting questions
### Q1
```
var a = 1;
function b() {
  a = 10;
  return;
  function a() {}
}
b();
console.log(a);
```

Answer is not shown intentionally

Explanation :

```
var a = 1;
function b() {
  // Hoisted
  function a() {}
  a = 10;
  return;
}
b();
console.log(a)
```

### Q2
```
function foo(){
    function bar() {
        return 3;
    }
    return bar();
    function bar() {
        return 8;
    }
}
alert(foo());
```
Explanation:
```
function foo(){
    //Hoisted before
    function bar() {
        return 3;
    }
    // Hoisted after
    function bar() {
        return 8;
    }
    return bar();
    
}
alert(foo());
```

### Q3
```
function parent() {
    var hoisted = "I'm a variable";
    function hoisted() {
        return "I'm a function";
    }
    return hoisted(); 
}
console.log(parent());
```
Explanation:
```
function parent() {
    // Function declaration hoisted with the definition
    function hoisted() {
        return "I'm a function";
    }
    // Declaration ignored, assignment of a string
    hoisted = "I'm a variable"; 
    return hoisted(); 
}
console.log(parent());
```

### Q4
```
var myVar = 'foo';
(function() {
  console.log('Original value was: ' + myVar);
  var myVar = 'bar';
  console.log('New value is: ' + myVar);
})();
```
Output: “Original value was: undefined”, “New value is: bar”


