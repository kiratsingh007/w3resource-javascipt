/*let name=["ram","sham","ravi","teja","vansh"];
let marks=[89,100,90,91,98,90];
console.log(marks);
console.log(marks.length);// lenght
console.log(marks[5])// indices*/
 /* looping of array
let heros=["ram","sham","ravi","teja","vansh"];
 for (let i=0; i<=heros.length; i++){
    console.log(heros[i].toUpperCase());
 } */
// practise question


 let mark=[89,100,90,98,90];
 let sum= 0;

 for (let val of mark) {
    sum+= val;
 }
 let average = sum/ mark.length;
 console.log(` avg marks of the class = ${average}`);
