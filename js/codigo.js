window.addEventListener('load', () => {
        setTimeout(() => {
            const contenedorLoader = document.querySelector('.contenedor-loader');
    contenedorLoader.style.opacity = 0;
    contenedorLoader.style.visibility = 'hidden';
        }, 1000);
   
})