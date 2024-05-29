document.addEventListener('DOMContentLoaded', function () {
    navegacionFija()
    crearGaleria()
})

function navegacionFija() {
    const header = document.querySelector('.header')
    const sobreFestival = document.querySelector('.sobre-festival')

    //Agregamos un escucha del evento scroll
    document.addEventListener('scroll', function () {
        //ejecuta codigo si la cordenada actual es menor a 1 
        if (sobreFestival.getBoundingClientRect().bottom < 1) {
            header.classList.add('fixed')
        } else {
            header.classList.remove('fixed')
        }

    })

}

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

    //Generar Modal
    const modal = document.createElement('DIV')
    modal.classList.add('modal')
    modal.onclick = cerrarModal

    //Boton cerrarModal
    const cerrarModalBtn = document.createElement('BUTTON')
    cerrarModalBtn.textContent = 'X'
    cerrarModalBtn.classList.add('btn-cerrar')
    cerrarModalBtn.onclick = cerrarModal

    //Agregar boton cerrar
    modal.appendChild(cerrarModalBtn)

    //Agregar la imagen
    modal.insertBefore(imagen, cerrarModalBtn)
    //Agregar al Html
    const body = document.querySelector('body')
    body.classList.add('overflow-hidden')
    body.appendChild(modal)
}

function cerrarModal() {
    const modal = document.querySelector('.modal')
    modal.classList.add('fadeOut')
    const body = document.querySelector('body')


    setTimeout(() => {
        modal?.remove()
        body.classList.remove('overflow-hidden')

    }, 500);

}

