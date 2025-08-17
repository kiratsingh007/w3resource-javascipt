/* practise based 
let divs =document.querySelectorAll(".heading");
let idx=1;
for(div of divs){
    div.innerText=`new unique no ${idx}`;
    idx++;
} ++++++++++++++++++++++++++++++++++++++++++++++++++*/
/* there are some properties for dom manuplation 
  @ tagName       @innerHTML
  @ innerText     @innercontext*/


/* query selectors+++++++++++++++++++++++++++++++++=
 let divs =document.querySelectorAll(".heading");// classname it contain all classes of heading
console.log(divs);

 let element =document.querySelector("#heading");// classname it contain all classes of heading
console.log(element);
*/

/* for get attribute +++++++++++++++++++++++++++++++++++++++
let dic=document.querySelector("#box");
console.log(dic);

 let val=dic.getAttribute("id");
 console.log(val);

 let par1=document.querySelector("p");
console.log(par1.getAttribute("class"));*/

/* for  set attribute ++++++++++++++++++++++++++++++++++++++++
 let par=document.querySelector("p");
console.log(par.setAttribute("class","newclass"));
  ++++++++++++++++++++++++++++++++++++++++++++++++++++*/

/*  for node style ++++++++++++++++++++++++++++++++++++
  let div=document.querySelector("#box");
  console.log(div);

  div.style.backgroundColor= "red";// their are minar changes in js property as compare to css

  div.style.fontSize= "30px";
  div.style.width="150px";

  div.style.visibility="hidden"; // in this  property first is in small letter
  */

  /* creating the element and then insert it using command:
      let el=document.createElement("button");
  el.innerText="click me!";  
  console.log(el);

  let div=document.querySelector("#box");
  insert commands :-
  //div.append(el); 
 // div.prepend(el);
 //div.before(el);
// div.after(el);*/
