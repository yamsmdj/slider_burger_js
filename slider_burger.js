// BURGER
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach( 
  function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu);
  }
)
// SLIDER
let btn = document.querySelectorAll('.btn');  //DÉFINIR btn COMME tous les éléments avec la classe "btn" 
let img = document.querySelectorAll('.slider ul li');  //DÉFINIR img COMME tous les éléments avec la classe "btn"


for (let i = 0; i < btn.length; i++) {  //POUR CHAQUE bouton dans btn FAIRE


   btn[i].addEventListener('click', (e)=>{  //LORSQUE bouton est cliqué FAIRE

    const imgActive = document.querySelector('.active');  //DÉFINIR imgActive COMME l'élément avec la classe "active"
    const curentIndex = [...img].indexOf(imgActive);  //DÉFINIR curentIndex COMME la position de imgActive dans la liste img
    const calc = btn[i].id == 'next' ? 1 : -1;   //DÉFINIR calc COMME 1 SI l'identifiant du bouton est "next", SINON DÉFINIR calc COMME -1
     let index = curentIndex + calc;  //DÉFINIR index COMME curentIndex + calc

   if(curentIndex >= img.length - 1 && btn[i].id == 'next') index = 0;  //SI curentIndex est égal à la longueur de img -1 ET l'identifiant du bouton est "next" ALORS DÉFINIR index COMME 0
   if(curentIndex == 0 && btn[i].id == 'prev') index = img.length - 1;  //SI curentIndex est 0 ET l'identifiant du bouton est "prev" ALORS DÉFINIR index COMME la longueur de img -1

     img[index].classList.add('active'); //AJOUTER la classe "active" à img[index]
     imgActive.classList.remove('active'); //RETIRER la classe "active" de imgActive
    })
  }