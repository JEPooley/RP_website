
function openMenu(){
    var menuStatus = document.getElementsByClassName("hamburger_menu")[0];
    var icon = document.getElementsByClassName("hamburger")[0].getElementsByTagName("i")[0];
    if (menuStatus.style.display == "none"){
        menuStatus.style.display = "flex";
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times-circle");
    }else{
        menuStatus.style.display = "none";
        icon.classList.add("fa-bars");
        icon.classList.remove("fa-times-circle");
    }
}
