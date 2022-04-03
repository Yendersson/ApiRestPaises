let pais = localStorage.getItem('pais');

let click = 0;

const template = document.querySelector('#template').innerHTML;
console.log(template)
const compilar = Handlebars.compile(template);
const imprimir = document.querySelector('#handlebar');

document.querySelector('#regresar').addEventListener('click', ()=>{
    window.location.href = 'index.html'
    localStorage.removeItem('pais');
})

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

fetch('https://restcountries.com/v2/name/'+pais)
.then(res => res.json())
.then(data=>{
    console.log(data);
    data.forEach(element => {
        handl(element);
        console.log(element.name);
    });
})
