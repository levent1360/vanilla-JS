let count = 0;
const counter=document.querySelector(".counter");

const buttons=document.querySelectorAll(".btn");
const title=document.querySelector("title")

buttons.forEach(function(e) {
    e.addEventListener("click",function(btn){
        if(btn.target.classList.contains("decrease")){
            count--;
        }
        else if(btn.target.classList.contains("increase")){
            count++;
        }else{
            count=0;
        }
        counter.innerHTML=count;
        title.innerHTML=`Counter ${count}`;
    })   
});
