//compilando Handlebars
const template = document.querySelector('#template').innerHTML;
console.log(template)
const compilar = Handlebars.compile(template);
const imprimir = document.querySelector('#templates-countries');

//etiquetas
let buscar = document.querySelector('#buscador');

let desplegar = document.querySelector('#filtrar');

let contenidoCard;

//API REST
fetch('https://restcountries.com/v2/all')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        //const datos = { data };
        handl(data);

        //Select filtrar por region
        desplegar.addEventListener('change', () => {
            let datos = data.filter(pais => pais.region == desplegar.value);
            //let objSelect = datos;
            handl(datos)

            cargarDatos()
            
        })
        //Buscador
        buscar.addEventListener('click', ()=> alert('Al filtrar un pais la primera letra debe estar en mayusculas. Ejemplo: "Argentina"'))
        buscar.addEventListener('input', () => {
            if (!buscar.value == '') {
                let datos = data.filter(pais => pais.name == buscar.value || pais.nativeName == buscar.value || pais.alpha2Code == buscar.value);
                //let obj = { data };
                handl(datos);

                cargarDatos();

            } else {
                handl(data);
            }

        });

        cargarDatos();
    })
