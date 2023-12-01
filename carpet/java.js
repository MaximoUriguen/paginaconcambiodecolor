/*
button.onclick = function(){
    let swith = document.querySelector('.switch');
    

}
   swith.addEventListener("click", e => {
    swith.classList.toggle("active");
    document.body.classList.toggle("active");
})
}
document.body.classList.toggle = 'bg-light'
*/
let texto = document.querySelector('#p1')
let button = document.querySelector('button')
console.log(texto)
let textoCambiado = false
texto.textContent = 'prueba'
button.onclick = function () {
    if (textoCambiado == false) {
        texto.textContent = 'skñdkfjldjfdsljlf'
        textoCambiado = true
    } else {
        texto.innertext = 'ste mundial se fue coronada la seleccion de sudafrica superando a Inglaterra por '
        textoCambiado = false
    }
} 
