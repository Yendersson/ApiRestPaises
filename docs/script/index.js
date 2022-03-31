const template = document.querySelector('#template').innerHTML;
console.log(template)
const compilar = Handlebars.compile(template);
const imprimir = document.querySelector('#templates-countries');
let buscar = document.querySelector('#buscador');

let desplegar = document.querySelector('#filtrar');
let click = 0;

//darkMode
document.querySelector('#dark-mode').addEventListener('click', () => {

    click++;

    switch (click) {
        case 1:
            document.body.style.backgroundColor = 'hsl(207, 26%, 17%)';
            document.body.style.color = 'white'
            document.querySelector('#moon').src = `img/moon-outline.svg`;
            document.querySelector('header').style.backgroundColor = 'hsl(209, 23%, 22%)';
            break;

        case 2:
            document.body.style.backgroundColor = 'white';
            document.body.style.color = 'black'
            document.querySelector('header').style.backgroundColor = 'white'
            document.querySelector('#moon').src = `img/moon.svg`
            click = 0;
            break;
    }
})

//Funcion Handlebars
const handl = function (paramtero) {
    imprimir.innerHTML = compilar(paramtero);
}

//Funcion para el filtrado hacia la siguiente pagina
const cargarDatos = function(){
    document.querySelectorAll('h2').forEach(element => {
        element.addEventListener('click', (e) => {
            //console.log(e.target);
            contenidoCard = e.target
            localStorage.setItem('pais', contenidoCard.innerHTML);
            window.location.href = 'pais.html';
        })
    });
}

let contenidoCard;

//API REST
fetch('https://restcountries.com/v2/all')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        const datos = { data };
        console.log(datos);
        handl(datos);

        //Select filtrar por region
        desplegar.addEventListener('change', () => {
            let data = datos.data.filter(pais => pais.region == desplegar.value);
            let objSelect = { data };
            handl(objSelect)

            cargarDatos();

        })
        //Buscador
        buscar.addEventListener('input', () => {
            if (!buscar.value == '') {
                let data = datos.data.filter(pais => pais.name == buscar.value || pais.nativeName == buscar.value );
                let obj = { data };
                handl(obj);

                cargarDatos();

            } else {
                handl(datos);
            }

        });

        cargarDatos();
    })
