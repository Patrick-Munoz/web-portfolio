function MenuOpen(){
    const navLinks = document.getElementById("navigation-list");
    const menu = document.getElementById("menu-btn");
    const close = document.getElementById("close-btn");
    
    navLinks.style.display = "block";
    menu.style.display = "none";
    close.style.display = "block"
}

function MenuClose(){
    const navLinks = document.getElementById("navigation-list");
    const menu = document.getElementById("menu-btn");
    const close = document.getElementById("close-btn");
    
    navLinks.style.display = "none";
    menu.style.display = "block";
    close.style.display = "none"
}