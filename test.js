var clearObject = require("./")
console.log(clearObject({a: 1, b: 2}, 2));
console.log(clearObject({a: 1, b: 2}, [2]));
console.log(clearObject([1,2], [2]));
console.log(clearObject([1,2], 2));