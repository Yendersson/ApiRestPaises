//Funcion para el filtrado hacia la siguiente pagina
const cargarDatos = function () {
    document.querySelectorAll('.card').forEach(element => {
        element.addEventListener('click', (e) => {
            contenidoCard = e.currentTarget
            console.log(contenidoCard.dataset.pais);
            localStorage.setItem('pais', contenidoCard.dataset.pais);
            window.location.href = 'pais.html';
        })
    });
}

//Funcion Handlebars
const handl = function (paramtero) {
    imprimir.innerHTML = compilar(paramtero);
}


//lightmode
const lightmode = function () {
    document.body.style.backgroundColor = 'hsl(0, 0%, 98%)';
    document.body.style.color = 'hsl(200, 15%, 8%)';
    document.querySelector('header').style.backgroundColor = 'white';
    document.querySelector('#moon').src = `img/moon.svg`;
    document.querySelectorAll('.card').forEach(elemento => elemento.style.backgroundColor = 'white');
    
}

//darkmode
const dark_mode = function () {
    document.body.style.backgroundColor = 'hsl(207, 26%, 17%)'
    document.body.style.color = 'white';
    document.querySelector('#moon').src = `img/moon-outline.svg`;
    document.querySelector('header').style.backgroundColor = 'hsl(209, 23%, 22%)';
    document.querySelectorAll('.card').forEach(elementos => elementos.style.backgroundColor = 'hsl(209, 23%, 22%)');
}