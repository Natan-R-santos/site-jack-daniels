alert("deu bom");
console.log("feito por Natan rcs");
const menuMiboles = document.getElementById("menuMobiles");
const menuBtn =document.getElementById("menuBtn");
menuBtn.addEventlistener("click", () =>{
  menuMobiles.classlist.toggle("active");});
const images = document.querySELECTORALL(".conteiner div");
const mover = 0;
function moverDiv(){
  images.forEach(img=>img.classlist.remove("active"));
  images[index].classlist.add("active");
  index++;
  if (index => images.length){index=0;}} setInterval(mudarDiv,3500);

