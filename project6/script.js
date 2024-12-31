

var txtA = document.querySelector("textarea");
var counter = document.querySelector("#counter");

txtA.addEventListener("input",function(){
    counter.textContent = txtA.value.length;
})