/*input
let inp1=document.querySelector(".inp1")
let inp2=document.querySelector(".inp2")
let inp3=document.querySelector(".inp3")
let inp4=document.querySelector(".inp4")

let btn=document.querySelector(".btn")

let span1=document.querySelector(".span1")
let span2=document.querySelector(".span2")
let span3=document.querySelector(".span3")
let span4=document.querySelector(".span4")

btn.addEventListener("click",()=>{
    if(inp1.value!=="" && inp2.value!=="" && inp3.value!=="" && inp4.value!==""){
    span1.innerHTML=inp1.value
    span2.innerHTML=inp2.value
    span3.innerHTML=inp3.value 
    span4.innerHTML=inp4.value 
    inp1.value=""
    inp2.value=""
    inp3.value=""
    inp4.value=""
    
    }
    else{
    alert("Xananlari zehmet olmasa doldurun")
    }
})

*/

let inp1=document.querySelector(".inp1")
let inp2=document.querySelector(".inp2")
let inp3=document.querySelector(".inp3")
let inp4=document.querySelector(".inp4")

let btn=document.querySelector(".btn")

let span1=document.querySelector(".span1")
let span2=document.querySelector(".span2")
let span3=document.querySelector(".span3")
let span4=document.querySelector(".span4")

btn.addEventListener("click",()=>{
    if(inp1.value=="" && inp2.value=="" && inp3.value=="" && inp4.value==""){
        span1.innerHTML=inp1.value
        span2.innerHTML=inp2.value
        span3.innerHTML=inp3.value
        span4.innerHTML=inp4.value
        inp1.value=""
        inp2.value=""
        inp3.value=""
        inp4.value=""
    }
})
