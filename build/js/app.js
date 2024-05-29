document.addEventListener('DOMContentLoaded', function () {
    crearGaleria()
})

function crearGaleria() {
    const galeria = document.querySelector('.galeria-imagenes') // Corregir este selector según corresponda

    const CANTIDAD_IMAGENES = 16
    for (let i = 1; i <= CANTIDAD_IMAGENES; i++) {
        const imagen = document.createElement('IMG')
        imagen.src = `src/img/gallery/full/${i}.jpg` // Utilizar comillas invertidas aquí
        imagen.alt = 'Imagen Galeria'

        //Event Handler
        imagen.onclick = function () {
            mostrarImagen(i)
        }

        galeria.appendChild(imagen)
    }
}

function mostrarImagen(i) {
    const imagen = document.createElement('IMG')
    imagen.src = `src/img/gallery/full/${i}.jpg` // Utilizar comillas invertidas aquí
    imagen.alt = 'Imagen Galeria'

    //General Modal
    const modal = document.createElement('DIV')
    modal.classList.add('modal')
    modal.onclick = cerrarModal
    //Agregar la imagen
    modal.appendChild(imagen)
    //Agregar al Html
    const body = document.querySelector('body')
    body.appendChild(modal)

}

function cerrarModal() {
    const modal = document.querySelector('.modal')
    modal.classList.add('fadeOut')
    setTimeout(() => {
        modal?.remove()

    }, 500);

}

