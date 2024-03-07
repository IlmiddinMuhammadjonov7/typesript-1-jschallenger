// 1-topshiriq
// function myFunction(a: number, b: number): number {
//   return a + b;
// }

// console.log(myFunction(3,5));

// 2-topshririq
// function myFunction(a: number, b: number): boolean {
//   return a === b;
// }

// console.log(myFunction(3,3));

// 3-topshiriq
// function myFunction(a: any): string {
//   return typeof a;
// }

// console.log(myFunction(true));

// 4-topshiriq
// function myFunction(a: string, n: number): string {
//   return a.charAt(n-1);
// }

// console.log(myFunction("gfedcba", 3));

// 5-topshiriq
// function myFunction(a:string):string {
//   return a.slice(3)
// }

// console.log(myFunction("fgedcba"));

// 6-topshiriq
// function myFunction(str: string): string {
//   return str.slice(str.length - 3);
// }

// console.log(myFunction("fgedcba"));

// 7-topshiriq
// function myFunction(a: string): string {
//   return a.slice(0,3)
// }

// console.log(myFunction("fgedcba"));

// 8-topshiriq
// function myFunction(a: string): number {
//   return a.indexOf("is")
// }

// console.log(myFunction("paris"));

// 9-topshiriq
// function myFunction(a: string): string {
//   return a.slice(0, a.length/2)
// }

// console.log(myFunction("abcdefghuy"));

// 10-topshiriq
// function myFunction(a: string): string {
//   let n: string[] = a.split("");
//   n.splice(a.length - 3, 3);
//   a = n.join("");
//   return a;
// }
// console.log(myFunction("fgedcba"));

// 11-topshiriq
// function myFunction(a:number, b:number):number {
//   return a/100*b;
// }

// console.log(myFunction(10,1));

// 12-topshiriq
// function myFunction(a:number, b:number, c:number, d:number, e:number, f:number):number {
//   return (((a+b)-c)*d/e)**f;
// }

// console.log(myFunction(2,3,6,4,2,3));

// 13-topshiriq
// function myFunction(a: string, b: string): string {
//   return a.includes(b) ? b + a : a + b;
// }

// console.log(myFunction("Java", "script"));

// 14-topshiriq
// function myFunction(a:number):boolean {
//   return a%2==0 ? true : false;
// }
// console.log(myFunction(-111));

// 15-topshiriq
// function myFunction(a: string, b: string): number {
//   let sum = 0;
//   for (let i = 0; i < b.length; i++) {
//     if (b[i] == a) {
//       sum++;
//     }
//   }
//   return sum;
// }
// console.log(
//   myFunction("h", "how many times does the character occur in this sentence?")
// );

// 16-topshiriq
// function myFunction(a: number): boolean {
//   return a % Math.trunc(a) > 0 ? false : true;
// }
// console.log(myFunction(10.48));

// 17-topshiriq
// function myFunction(a:number, b:number):number {
//   return a < b ? a / b : a * b;
// }
// console.log(myFunction(90, 45));

// 18 - topshiriq
// function myFunction(a:number):number {
//   return Number(a.toFixed(2));
// }

// console.log(myFunction(3.136));

// 19-topshiriq
// function myFunction(a: number): number[] {
//   return a
//     .toString()
//     .split("")
//     .map((item) => Number(item));
// }

// console.log(myFunction(193278));

// 20-topshiriq
// function myFunction(a:number [], n:number):number {
//   return a[n-1];
// }
// console.log(myFunction([10,9,8,7,6],5));

// 21-topshiriq
// function myFunction(a: number[]): number[] {
//   a.splice(0, 3);
//   return a;
// }

// console.log(myFunction([99,1,1]));

// 22-topshiriq
// function myFunction(a:number[]):number[] {
//   return a.slice(a.length-3);
// }
// console.log(myFunction([5,4,3,2,1,0]));

// 23-topshiriq
// function myFunction(a:number[]):number[] {
//   return a.slice(0,3);
// }
// console.log(myFunction([5,4,3,2,1,0]));

// 24-topshiriq
// function myFunction(a:number[], n:number):number[] {
//   return a.slice(-n);
// }

// console.log(myFunction([1, 2, 3, 4, 5, 6, 7, 8], 3));

// 25-topshiriq
// function myFunction(a:any[], b:any):number[] {
//   return a.filter((item)=>item!==b)
// }

// console.log(myFunction([1,2,'2',1], 1));

// 26-topshiriq
// function myFunction(a:number[]):number {
//   return a.length
// }
// console.log(myFunction([1,2,3,4,5,6,7]));

// 27-topshiriq
// function myFunction(a: number[]):number {
//   let sum = 0;
//   for (let i = 0; i < a.length; i++) {
//     if (a[i] < 0) {
//       sum++;
//     }
//   }
//   return sum;
// }

// console.log(myFunction([0, 9, 1]));

// 28-topshiriq
// function myFunction(arr:string[]):string[] {
//   return arr.sort()
// }
// console.log(myFunction(['b', 'c', 'd', 'a']));

// 29-topshiriq
// function myFunction(arr:number[]):number[] {
//   return arr.sort().reverse()
// }
// console.log(myFunction([4,2,3,1]));

// 30-topshiriq
// function myFunction(a: number[]): number {
//   return a.reduce((acc, le) => acc + le, 0);
// }
// console.log(myFunction([10,100,40]));

// 31-topshiriq
// function myFunction(arr:number[]):number {
//   return arr.reduce((acc, le) => acc + le, 0)/arr.length
// }
// console.log(myFunction([-50,0,50,200]));

// 32-topshiriq
// function myFunction(arr: string[]): string {
//   let longest = arr.reduce((a, b)=> {
//     return a.length > b.length ? a : b;
//   });
//   return longest
// }
// console.log(myFunction(["help", "me"]));

// 33-topshiriq
// function myFunction(arr:any[]):boolean {
//   return arr.every((item)=>item===arr[0])
// }
// console.log(myFunction(['test', 'test', 'tst']));

// 34-topshiriq
// function myFunction(...arrays:any):any {
//   return arrays.flat()
// }
// console.log(myFunction([true, true], [1, 2], ['a', 'b']));

// 35-topshiriq
// function myFunction(arr:any[]):object[] {
//   return arr.sort(function (a, b) {
//     return a.b - b.b;
//   });
// }
// console.log((myFunction([{a:2,b:10},{a:5,b:4}])));

