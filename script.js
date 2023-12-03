const DOMSelectors = {
    animation: document.getElementsByClassName("animation"),
    links: document.getElementsByClassName("rlink"),
    alinks: document.getElementsByClassName("alink"),

    animation2: document.getElementsByClassName("animation2"),
}
console.log(DOMSelectors);


function changeClass(){
    for(var i = 0; i < DOMSelectors.animation.length; i++){
        var windowHeight = window.innerHeight;
        var contentTop = DOMSelectors.animation[i].getBoundingClientRect().top;
        var elementVisible = 110;
        console.log(contentTop < windowHeight-elementVisible)
        if(contentTop < windowHeight-elementVisible){
            DOMSelectors.animation[i].classList.add("active")
        } else{
            DOMSelectors.animation[i].classList.remove("active")
        }
    } 

}

function checkCurrentPage (){
   
    const currentURL = window.location.href;

    for(var i = 0; i < DOMSelectors.alinks.length; i++){
        if(DOMSelectors.alinks[i].href == currentURL){
            DOMSelectors.links[i].classList.add("active")
        } else{
            DOMSelectors.links[i].classList.remove("active")
        }
    
}

}


function changeClass2(){
    for(var i = 0; i < DOMSelectors.animation2.length; i++){
        var windowHeight = window.innerHeight;
        var contentTop = DOMSelectors.animation2[i].getBoundingClientRect().top;
        var elementVisible = 110;
        console.log(contentTop < windowHeight-elementVisible)
        if(contentTop < windowHeight-elementVisible){
            DOMSelectors.animation2[i].classList.add("active")
        } 
    } 

}


window.addEventListener("scroll", changeClass )
window.addEventListener("scroll", changeClass2 )
window.addEventListener("click" , checkCurrentPage )

changeClass()
changeClass2()
checkCurrentPage()