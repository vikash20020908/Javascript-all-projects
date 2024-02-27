let body = document.querySelector("body");
let gray = document.querySelector("#gray1");
let white = document.querySelector("#white1"); 
let blue = document.querySelector("#blue1"); 
let yellow = document.querySelector("#yellow1"); 
let curr = "default";

gray.addEventListener ("mouseover",  () =>{
    body.classList.add("gray")
    console.log("gray")
})
white.addEventListener ("mouseover", () =>{
    console.log("white")
    body.classList.add("white")
})
blue.addEventListener ("mouseover", () =>{
    console.log("blue")
    body.classList.add("blue")
})
yellow.addEventListener ("mouseover", () =>{
    console.log("yellow")
    body.classList.add("yellow")
})
