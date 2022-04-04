if(localStorage.getItem('dark')){
    dark_mode();
}else{
    lightmode();
}
document.querySelector('#dark-mode').addEventListener('click', () => {
    
    if(localStorage.getItem('dark')){
        localStorage.removeItem('dark');
        lightmode();
    }else{
        localStorage.setItem('dark', true)
        dark_mode()
    }

})
