let mainText = document.querySelector("h1")

window.addEventListener('scroll',function(){
    let value = window.scrollY;
    console.log("scrollY",value);

    if(value>300){
        mainText.style.animation= "disappear 1s ease-out forwards" ;
    } else {
        mainText.style.animation= "slide 1s ease-out";
    }
});
