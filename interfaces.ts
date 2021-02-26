interface LabeledObject {
  label: string;
  max?: number;
}

function logLabel(labeledObj: LabeledObject) {
  console.log(labeledObj.label);
  if (labeledObj.max) {
    console.log(labeledObj.max);
  }
}

const lbObject = { max: 10, label: 'Sally' };

logLabel(lbObject);

interface Point {
  readonly x: number;
  readonly y: number;
  readonly z?: number;
}

const p1: Point = { x: 10, y: 20 };
console.log(p1);

const a: ReadonlyArray<number> = [1, 2, 3];
const b: Array<number> = a as Array<number>;

console.log(b);

interface Dog {
  name?: string;
  age?: number;
  [propName: string]: any;
}

function createDog(dog: Dog): { name: string, age: number } {
  return {
    name: dog.name || "Dog",
    age: dog.age || 0
  };
}

const myDog = { namem: 'Sally', age: 1 };

console.log(createDog(myDog));

interface searchFunc {
  (source: string, subString: string): boolean;
}

const myFunc: searchFunc = (source, subString) => {
  const result: number = source.search(subString);
  return result > -1;
};

console.log(myFunc("Hello, World!", "Hello"));

interface ClockInterface {
  currentTime: Date;
  setTime(d: Date): void;
}

class Clock implements ClockInterface {
  currentTime: Date = new Date();
  setTime(d: Date) {
    this.currentTime = d;
  }
  constructor(h: number, m: number) {}
}