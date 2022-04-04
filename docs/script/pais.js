let pais = localStorage.getItem('pais');

//compilando handlebars
const template = document.querySelector('#template').innerHTML;
console.log(template)
const compilar = Handlebars.compile(template);
const imprimir = document.querySelector('#handlebar');

document.querySelector('#regresar').addEventListener('click', ()=>{
    window.location.href = 'index.html'
    localStorage.removeItem('pais');
})

//API Fetch
fetch('https://restcountries.com/v2/name/'+pais)
.then(res => res.json())
.then(data=>{
    console.log(data);
    data.forEach(element => {
        handl(element);
        console.log(element.name);
    });
})
