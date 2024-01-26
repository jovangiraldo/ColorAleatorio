
const color = document.getElementById('color')
const boton = document.querySelector('button')


function generarcolorAleatorio(){

let digitos = '0123456789ABCDEF';
let colorhex = '#';

for(let i = 0;i<6;i++){

    let indicealeatorio = Math.floor(Math.random()*16)

    colorhex +=digitos[indicealeatorio];
}

return colorhex


}

boton.addEventListener('click',function(){
  
    let colorAleatorio = generarcolorAleatorio();
    color.textContent = colorAleatorio;
    document.body.style.backgroundColor = colorAleatorio;

})