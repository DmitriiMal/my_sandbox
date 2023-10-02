
// ////////////////////// //
// //// Menu Toggler //// //
// ////////////////////// //

let menuStatus = false;

document.getElementById("menu").style.marginLeft = "-350px";

function menuToggle() {
  if(menuStatus == false){
    document.getElementById('menu').style.marginLeft = '0px';
    document.getElementById('menu').style.transition = '1s';
    menuStatus = true;
  } else {
    document.getElementById("menu").style.marginLeft = "-350px";
    menuStatus = false;
  }
}

document.getElementById("menu-btn").addEventListener("click",menuToggle);




