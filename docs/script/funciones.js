//Funcion para el filtrado hacia la siguiente pagina
const cargarDatos = function(){
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