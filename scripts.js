alert("deu bom");
console.log("feito por Natan rcs");

// Menu celular
const menuMobiles = document.getElementById("menuMobiles");
const menuBtn = document.getElementById("menuBtn");

menuBtn.addEventListener("click", () => {
  menuMobiles.classList.toggle("active");
});

// mudar divs
const images = document.querySelectorAll(".conteiner div");
let index = 0;

function mudarDiv() {
  images.forEach(img => img.classList.remove("active"));
  images[index].classList.add("active");

  index++;

  if (index >= images.length) {
    index = 0;
  }
}

setInterval(mudarDiv, 3500);



