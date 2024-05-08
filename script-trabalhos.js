function menuShow() {
  let menuMobile = document.querySelector(".mobile-menu");
  if (menuMobile.classList.contains("open")) {
    menuMobile.classList.remove("open");
    document.querySelector(".icon").src =
      "Imagens/icons-header/Navegação-icon.svg";
  } else {
    menuMobile.classList.add("open");
    document.querySelector(".icon").src =
      "Imagens/icons-header/xbar.svg";
  }
}

let count = 1;
document.getElementById("radio1").checked = true;
setInterval(function() {
nextImage();
},5000)

function nextImage(){
  count++;
  if(count>4){
    count = 1;
  }

document.getElementById("radio"+count).checked = true;
}