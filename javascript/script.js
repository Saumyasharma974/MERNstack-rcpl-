//interpreted ,scripted language , weekly type , dynamically type =javascript
   /*  document.querySelector(".btn1").addEventListener("click", () => {
    document.querySelector(".heading").innerText = "shiv";
   
    document.body.style.backgroundColor = "red";  // corrected to backgroundColor
    
    
 });
 document.querySelector(".btn2").addEventListener("click", () => {
    document.querySelector(".heading").innerText = "price";
   
    document.body.style.backgroundColor = "blue";  // corrected to backgroundColor
    
    
 });
 document.querySelector(".btn3").addEventListener("click", () => {
    document.querySelector(".heading").innerText = "chandu";
   
    document.body.style.backgroundColor = "yellow";  // corrected to backgroundColor
    
    
 });
 document.querySelector(".btn4").addEventListener("click", () => {
    document.querySelector(".heading").innerText = "rahul";
   
    document.body.style.backgroundColor = "green";  // corrected to backgroundColor
    
    
 });
 let dog="BOB"
 console.log(dog.toLocaleLowerCase())
 let str="    age     "
 console.log(str.trim())

 let a=5;
 let b=7;
 let ans=a*b;
 console.log(ans);

 let str=Math.random();
 console.log(str);
 console.log(Math.max(1,2,4,5,3))
 console.log(Math.min(1,2,4,5,3))
 console.log(Math.floor(Math.random()*10)+1)
 console.log(Math.pow(2,3))
 console.log(Math.round(10.5))
 let mat="";
 for(let i=0;i<5;i++){
    mat+=(Math.floor(Math.random()*10)+1)
   
 }
 console.log(mat)
 AIzaSyCxnsQktOTTOzLIw2nZyCEBaG7oV9tJt7Q
//Object is unordered data structure
 let person={
    name:"saumya",
    age:24,
    city:"delhi",
    getDetails:()=>{
        return `name:${this.name},age:${this.age},city:${this.city}`
    }
 }
console.log(person.getDetails())
console.log(person.name)
console.log(person.age)

person.age=17
console.log(person)
person.gender="male"
console.log(person)

//T3BlbkFJZPzlGm7wYbFQ67Aj0TOlwYNpyN3rf5SI27LNrnBdcA

let arr=[1,2,3,[1,2,3],e,f,[1,2,4],{'name':"John",'age':24}]
console.log(arr[3][1])
arr.push(1,true,undefined)
console.log(arr)
arr.unshift(1,true,undefined)

//for of 
let arr=[1,2,3,4]
for(let i of arr){
   console.log(arr)
}

// for in
let obj={
   name:"saumya",
   age:26,
   ismale:true

}

for(let key in obj){
   console.log(key,obj[key])
   console.log(obj[key])
}

function fun(a,b){
   let ans =a+b
   return ans;
}

let newAns=fun(3,6)
console.log(newAns);



function a(b){
   console.log("i m inside a ");
   b();

}
function b(){
   console.log("i m inside b ");
}

function a(){
   console.log("i m inside a ");
   function b(){
      console.log("i m inside b ");
   }
return b;
}
let ans=a();

function user(){
   return ("i m function")
}
let ans=user()
console.log(ans);
function User(name, mail){
   this.namm=name;
   this.email=mail

}
let user=new User("rahul","rahul@gmail.com");
let user1=new User("riya","riya@gmail.com");
console.log(user);
console.log(user1);

//weekly type
let a=10;
a="rahul"
a=true
a=undefined
a="nav"
console.log(a)
setTimeout(()=>{
   console.log(user)
},4000)
console.log("user")*/
//console.log(document)

//let h1=document.getElementsByTagName("h1")
//h1.forEach((e)=>e.style.color='red')

/*let h2=document.querySelector('#nayaa');
console.log(h2);
h2.style.backgroundColor="blue";
let para =document.querySelectorAll(".parra");
console.log(para);
const h1=document.querySelector("h1");
console.log(h1.innerText);
console.log(h1.textContent);
console.log(h1.innerHTML)
h1.innerHTML="maine kuchh add kiya"

const anchor = document.getElementsByTagName("a");

// Adding the "nayaa" class using setAttribute
//for (let i = 0; i < anchor.length; i++) {
   // anchor[i].setAttribute("class", "nayaa");

    // Adding the "special" class using classList.add()
  //  anchor[i].classList.add("special");
//}
const sec = document.querySelector(".section");

// Create h1 and set its innerText
let h1 = document.createElement("h1");
h1.innerText = "Saumya";

// Create h2 and set its innerText
let h2 = document.createElement("h2");
h2.innerText = "Prince";

// Append h1 and h2 to the section
sec.append(h1,h2);*/

axios.get("https://api.tvmaze.com/search/shows?q=girls")
.then((data)=>{
   return data;
}).then((res)=>{
   console.log(res);
}).catch((err)=>{
   console.error(err);
})