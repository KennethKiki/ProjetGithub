var toggle = document.getElementById('toggle');
var menu = document.getElementById('menu');

function affiche(){
    if (toggle.className == "bi bi-x-lg toggle") {
        toggle.className = "bi bi-list toggle"
        menu.className = "menu"
    }else{
        toggle.className = "bi bi-x-lg toggle"
        menu.className = "menu activeMenu"
    }
}