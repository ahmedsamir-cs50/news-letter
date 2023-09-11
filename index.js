const form = document.querySelector('form');
const wrapper =document.querySelector(".wrapper")
const button2=document.querySelector(".dismiss")
const wrapper2=document.querySelector(".card2")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    wrapper.classList.add("class","hide"),
wrapper2.classList.remove("class","hide")
}

)
button2.onclick=()=>{
    wrapper2.classList.add("class","hide")
    wrapper.classList.remove("class","hide")
    ("class","hide")
}