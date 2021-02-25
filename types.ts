const isEmpty: boolean = false;
const age: number = 10;
const hello: string = 'Hello';
const big: bigint = 100n;
const arr: Array<number> = [];
arr.push(1);
console.log(arr, big);
const names: [string, string, string] = ['John', 'Mary', 'Bob'];
console.log(names[2]);
enum Color {
  Red,
  Green,
  Yellow
}
const color: Color = Color.Yellow;
console.log(color);
console.log(Color[0]);
const someValue: unknown = 5;
if (typeof someValue === 'number') {
  const num: number = someValue;
  console.log(num);
}
function getVoid(): void {
  return;
}
console.log(getVoid());
const some: unknown = "Hello, world!";
const len: number = (some as string).length;
console.log(len);