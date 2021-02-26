function logLabel(labeledObj) {
    console.log(labeledObj.label);
    if (labeledObj.max) {
        console.log(labeledObj.max);
    }
}
const lbObject = { max: 10, label: 'Sally' };
logLabel(lbObject);
const p1 = { x: 10, y: 20 };
console.log(p1);
const a = [1, 2, 3];
const b = a;
console.log(b);
function createDog(dog) {
    return {
        name: dog.name || "Dog",
        age: dog.age || 0
    };
}
const myDog = { namem: 'Sally', age: 1 };
console.log(createDog(myDog));
const myFunc = (source, subString) => {
    const result = source.search(subString);
    return result > -1;
};
console.log(myFunc("Hello, World!", "Hello"));
class Clock {
    constructor(h, m) {
        this.currentTime = new Date();
    }
    setTime(d) {
        this.currentTime = d;
    }
}
