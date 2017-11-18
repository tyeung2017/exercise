ES 6 tail recursion optimization will not be implemented.

Source : https://stackoverflow.com/questions/42788139/es6-tail-recursion-optimisation-stack-overflow

```
const h = num => {console.log(num); return h(num - 1)}
//this is tail recursion and should not exceed stack size; instead should trap in infinite loop
//Yet output RangeError: Maximum call stack size exceeded at around 17 k iteration
//node version v8.2.1
```

```
const factorial = (n, acc = 1) => n <= 1 ? acc : factorial(n - 1, n * acc)
console.log( factorial(100000) )
//Also output RangeError: Maximum call stack size exceeded in node REPL
```
