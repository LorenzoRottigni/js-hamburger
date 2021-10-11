const hamburgerMenuIcon = document.querySelector('i.fa-bars');
const collapseIcon = document.querySelector('i.fa-times');
const hamburgerMenuContainer = document.querySelector('div.hamburger-menu');

hamburgerMenuIcon.addEventListener("click",
    function(){
        hamburgerMenuContainer.style.display = "block";
    })
    
collapseIcon.addEventListener("click", 
    function(){
        hamburgerMenuContainer.style.display = "none";
    })