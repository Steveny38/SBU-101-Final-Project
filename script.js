const DOMSelectors = {
    animation: document.getElementsByClassName("animation"),
    links: document.getElementsByClassName("rlink"),
    alinks: document.getElementsByClassName("alink"),
}
console.log(DOMSelectors);


function changeClass(){
    for(var i = 0; i < DOMSelectors.animation.length; i++){
        var windowHeight = window.innerHeight;
        var contentTop = DOMSelectors.animation[i].getBoundingClientRect().top;
        var elementVisible = 100;
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
        console.log(currentURL, DOMSelectors.alinks[i].href)
        if(DOMSelectors.alinks[i].href == currentURL){
            DOMSelectors.links[i].classList.add("active")
        } else{
            DOMSelectors.links[i].classList.remove("active")
        }
    
}

}

window.addEventListener("scroll", changeClass )
window.addEventListener("click" , checkCurrentPage )

changeClass()
checkCurrentPage()