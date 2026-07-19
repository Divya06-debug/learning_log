// console.log("Hello")
// 1 se 100 tak sabhi numbers print karo
// 1 se 50 tak sirf even numbers print karo
// 1 se N tak sabhi numbers ka sum nikalo
// Kisi bhi number ka factorial nikalo (loop use karke)
// // 1 se N tak sabhi numbers reverse order me print karo (N, N-1, ... 1)
// for(let i=1;i<=100;i++){
//     console.log(i);
// }
// for(let i=2;i<=50;i=i+2){
//     console.log(i);
// }
// let s=0;
// let n=8;
// for(let i=1;i<=n;i++){
//     s+=i;
// }
// console.log(s);
// let n=6;
// let m=1;
// for(let i=1;i<=n;i++){
//     m*=i;
// }
// console.log(m);
// let n=10;
// for(let i=n;i>=1;i--){
//     console.log(i);
// }
// for(let i=1;i<=100;i++){
//     if(i%3==0 && i%5==0){
//         console.log("FizzBuzz");
//     }
//     else if(i%3==0){
//         console.log("Fizz");
//     }else if(i%5==0){
//         console.log("Buzz");
//     }else{
//         console.log(i);
//     }
// }
// for(let i=1;i<=100;i++){
//     let f=0;
//     for(let k=2;k<=i/2;k++){
//         if(i%k==0){
//             f=1;
//             break;
//         }
//     }
// if(!f){
//     console.log(i);
// }
// }
// let n=128;
// let p=n;
// let s=0;
// while(n>0){

//     let k=n%10;
//     s=s*10+k;
//     n=Math.floor(n/10);
// }
// if(p==s){
//     console.log("ispalindrome");
// }else{
//     console.log("not palindrome");
// }
//🔹 Problem 10 — Factors of a Number
//  let n=150;
// for(let i=1;i<n;i++){
//     if(n%i==0){
//         console.log(i);
//     }
// }
//🔹 Problem 11 — Sum of Digits
//  let f=76870;
//  let s=0;
//  while(f>0){
//     s+=f%10;
//     f=Math.floor(f/10);
//  }
//  console.log(s);
//🔹 Problem 12 — Count Digits
// let n=986959;
// let c=0;
// while(n>0){
//     c++;
//     n=Math.floor(n/10);
// }
// console.log(c);
//🔹 Problem 13 — Armstrong Number
//  let n=153;
//  let p=n;
//  let s=0;
// while(n>0){
//     s+=(n%10)**3;
//     n=Math.floor(n/10);
// }
// if(p==s){
//     console.log("angstrom");
// }else{
//     console.log("not amrstrong");
// }
//🔹 Problem 15 — Power of a number (bina Math.pow)
// let b=2;
// let h=4;
// let s=1;
// for(let i=1;i<=h;i++){
//     s=s*b;
// }
// console.log(s);
//🔹 Level 3 — Pattern Printing (nested loops, bahut important)
// let n=5;
// for(let i=1;i<=n;i++){
//     let p="";
//     for(let k=1;k<=n;k++){
//         p+="* ";
//     }
//     console.log(p);
// }
//Problem 17 — Right Triangle
// let n=5;
// for(let i=1;i<=n;i++){
//     let p="";
//     for(let k=1;k<=i;k++){
//         p+="* ";
//     }
//     console.log(p);
// }
//Problem 18 — Number Pyramid
// let n=5;
// for(let i=1;i<=n;i++){
//     let p="";
//     for(let k=1;k<=i;k++){
//         p+=k+" ";
//     }
//     console.log(p);
// }
//GCD;
// let a=20;
// let b=32;
// while(b!=0){
//     let temp=b;
//     b=a%b;
//     a=temp;
// }
// console.log(a);
// let a=[1,2,3,4,5];
// let s=a.reduce((ac,n)=>ac+=n);
// console.log(s);
//Sum of array elements
// let k=[21,34,56,76];
// let s=0;
// for(let i=0;i<k.length;i++){
//     s+=k[i];
// }
// console.log(s)
// Max & Min
// let k=[21,98,56,76];
// let min=k[0];
// let max=k[0];
// for(let i=0;i<k.length;i++){
//     if(k[i]<min){
//         min=k[i];
//     }
//     if(k[i]>max){
//         max=k[i];
//     }
// }
// console.log(min);
// console.log(max);
// Count even/odd
//  let k=[21,98,56,76,37,71,78];
//  let e=0;let o=0;
//  for(let i=0;i<k.length;i++){
//     if(k[i]%2==0){
//         e++;
//     }else{
//         o++;
//     }
//  }
//  console.log(e);
//  console.log(o);
// Reverse array
// let k=[21,98,56,76,37,71,78];
// for(let i=k.length-1;i>=0;i--){
//     console.log(k[i]);
// }
// Second largest

// let k=[21,98,56,76,37,71,78];
//  let l=-Infinity;
//  let sl=-Infinity;
// for(let i=0;i<k.length;i++){
//     if(k[i]>l){
//        sl=l;
//        l=k[i];
//     }
//     else if(k[i]>sl){
//         sl=k[i];
//     }
// }
// console.log(sl);
// Problem 1: Array [1,2,3,4,5] ke har element ka square nikalo (map)
// let a=[1,2,3,4,5] ;
// let d=a.map((n)=>n*n);
// console.log(d);

// Problem 2: Array [12, 5, 8, 21, 3, 17] me se sirf 10 se bade numbers nikalo (filter)
// let a=[12, 5, 8, 21, 3, 17];
// let d=a.filter((n)=>n>10);
// console.log(d);
// Problem 3: Array [5, 10, 15, 20] ke saare elements ka product nikalo (reduce)
// let a=[5, 10, 15, 20];
// let d=a.reduce((ac,n)=>ac*=n);
// console.log(d);
// Problem 4: Array ["apple", "banana", "kiwi", "fig"] me se sirf 4 letters ya usse chhoti strings nikalo (filter)
// let a=["apple", "banana", "kiwi", "fig"];
// let d=a.filter((a[n])=>a[n].size<=0);
// console.log(d);
// Problem 5 (combo — thoda tricky): Array [1,2,3,4,5,6,7,8,9,10] me se pehle even numbers filter karo, phir unko
//  map se double karo — ek chain me (.filter().map())
// let a=[1,2,3,4,5,6,7,8,9,10];
// let d= a.filter((n)=>n%2==0);
// let p=d.map((n)=>n*=n);
// console.log(p);
//: Ek object banao student jisme name, age, marks ho. Print karo dono tarike se — dot notation (student.name) 
// aur bracket notation (student["name"]).
// let student={
//     name:"Divya",
//     age:34,
//     marks:90
// };
// console.log(student.name);
// console.log(student['name']);
// Q2: Object diya hai:
// javascriptlet user = { name: "Aman", age: 21, city: "Pune", country: "India" };
// Destructuring use karke name aur city nikal ke print karo.
// let d={ name: "Aman", age: 21, city: "Pune", country: "India" };
// let { name,city}=d;
// console.log(name,city);
//Q3: Do objects diye hain:
// javascriptlet defaults = { theme: "dark", fontSize: 14 };
// let userPrefs = { fontSize: 18 };
// Spread operator (...) use karke finalSettings object banao jisme userPrefs ki values defaults ko override karein.
//  let d1= { theme: "dark", fontSize: 14 };
// let d2 = { ...d1,fontSize: 18 };
// console.log(d2);
//Q4: Array of objects diya hai:
// let students = [
//  { name: "A", marks: 80 },
//    { name: "B", marks: 45 },
//   { name: "C", marks: 90 },
//    { name: "D", marks: 30 }
//  ];
//  let d=students.filter((n)=>n.marks>=50);
//  console.log(d);
// Sirf unke naam print karo jinke marks >= 50 hain.
//Q5: Object diya hai:
// javascriptlet user = { id: 1, name: "Sam", password: "12345", email: "sam@x.com" };
// Rest operator (...) use karke password ko hata ke baaki sab ek naye object safeUser me daalo.
// let (password,...rest) = { id: 1, name: "Sam", password: "12345", email: "sam@x.com" };
// console.log(rest);
// Q6 (extra): Object me kisi property ka exist hona check karo:
// javascriptlet obj = { a: 1, b: 2 };
// "a" aur "c" dono ke liye check karo ki wo obj me hain ya nahi (in operator ya hasOwnProperty use kar sakte ho).
// let obj = { a: 1, b: 2 };
// console.log("a" in obj);
// console.log("c" in obj);
//Q7 (extra): Object ke saare keys, saare values, aur saare key-value pairs ko print karo:
// javascriptlet obj = { name: "Riya", age: 25, city: "Jaipur" };
// (Hint: Object.keys(), Object.values(), Object.entries() — inko search kar lena, kaam aayenge)
// let obj = { name: "Riya", age: 25, city: "Jaipur" };
// for(keys in obj){
//     console.log(keys);
// }
// for(keys in obj){
//     console.log(obj[keys]);
// }
// for(keys in obj){
//     console.log(keys,obj[keys]);
// }
// 🔹 Practice
// Q1: Ek function multiply(a, b) teeno tareeke se banao — declaration, expression, arrow (teeno alag naam se).
// Q2: Function greetUser(name, callback) banao jo pehle "Welcome " + name print kare, phir callback() ko call kare.
//  callback me kuch bhi print karwao (jaise "Enjoy your session!").
// Q3 (closure): Ek function createBankAccount(initialBalance) banao jo ek object return kare with 2 functions — 
// deposit(amount) aur checkBalance(). Balance variable closure ke through private rehna chahiye (bahar se directly access na ho sake).
// javascriptlet account = createBankAccount(1000);
// account.deposit(500);
// account.checkBalance(); // 1500
// Q4 (closure — classic interview question): Ek function makeMultiplier(x) banao jo ek function return kare jo kisi bhi 
// number ko x se multiply kar de.
// javascriptlet double = makeMultiplier(2);
// let triple = makeMultiplier(3);
// console.log(double(5)); // 10
// console.log(triple(5)); // 15
// function mul(a,b){
//     return a*b;
// }
// let d=mul(3,2);
// console.log(d);
// let mmul=function(a,b){
// console.log(a*b);
// };
// // mmul(3,2);
// const mil = (a, b) => a* b;
// console.log(mil(3, 4));
//q2
// function greetuser(name,callback){
//     console.log("HELLO"+name);
//     function callback(){
//         console.log("Enjoy your session");
//     }
// }
// greetuser("Divya");
//q3
// function createBankAccount(initialBalance){
//     return obj={
//     function deposit(amount),
//     function checkBalance()
//     };
// }
// function createBankAccount(initialBalance) {
//     let balance = initialBalance;   // ye closure me "lock" ho jayega

//     return {
//         deposit: function(amount) {
//             balance += amount;
//         },
//         checkBalance: function() {
//             console.log(balance);
//         }
//     };
// }

// let account = createBankAccount(1000);
// account.deposit(500);
// account.checkBalance(); // 1500
// function makemultiplier(x){
//    return function(num){
//         return num*x;
//     }
// }
// let double=makemultiplier(2);
// let triple=makemultiplier(3);
// console.log(double(5));
// console.log(triple(5));
// Ek function createBankAccount(initialBalance) banao jo ek object return
//  kare with 2 functions — deposit(amount) aur checkBalance(). 
//  Balance variable closure ke through private rehna chahiye
//   (bahar se directly access na ho sake).
// function createBankAccount(initialBalance){
//     return {
        
//     }
// }
// let myPromise = new Promise((resolve, reject) => {
//   let success = true;

//   if (success) {
//     resolve("Work done!");
//   } else {
//     reject("Error occurred!");
//   }
// });