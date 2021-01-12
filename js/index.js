const homeLogo = document.querySelector(".home_logo");
const homeSlogan = document.querySelector(".home_slogan");
const homeSetImages = document.querySelectorAll(".home_img_container  ");

let x = 0;

setTimeout(() => {
  homeLogo.classList.add("hidden");
  homeSlogan.classList.add("hidden");
  homeSetImages[x].classList.add("showed");
  x++;
  setInterval(() => {
    if(x >= 4){
      x = 0;
    }
    if(x == 0){
      homeSetImages[3].classList.remove("showed");
    } else {
      homeSetImages[x - 1].classList.remove("showed");
    }
    homeSetImages[x].classList.add("showed");
    x++;
  }, 4000);
}, 6000);
