

var body = document.querySelector("#bar");


window.addEventListener("scroll",function(){
    var srcl_top = body.scrollY || document.documentElement.scrollTop;
    var srcl_hei = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var per = (srcl_top/srcl_hei)*100;

    body.style.width = per+"%";
});