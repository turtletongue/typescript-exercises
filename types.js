const isEmpty = false;
const age = 10;
const hello = 'Hello';
const big = 100n;
const arr = [];
arr.push(1);
console.log(arr, big);
const names = ['John', 'Mary', 'Bob'];
console.log(names[2]);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Yellow"] = 2] = "Yellow";
})(Color || (Color = {}));
const color = Color.Yellow;
console.log(color);
console.log(Color[0]);
const someValue = 5;
if (typeof someValue === 'number') {
    const num = someValue;
    console.log(num);
}
function getVoid() {
    return;
}
console.log(getVoid());
const some = "Hello, world!";
const len = some.length;
console.log(len);
