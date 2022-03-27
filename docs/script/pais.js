let pais = localStorage.getItem('nombre');
localStorage.removeItem('nombre');

fetch('https://restcountries.com/v2/name/'+pais)
.then(res => res.json())
.then(data=>{
    console.log(data);
    
})
