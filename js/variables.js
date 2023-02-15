let carritoIcon = document.querySelector('#icono-carrito')
let cart = document.querySelector('.cart')
let closeCart = document.querySelector('#close-cart');

class ObjetoCompradoSessionStorage {
    constructor(nombreProductoComprado, costo, img, cantidadComprada) {
        this.nombre = nombreProductoComprado;
        this.costo = costo;
        this.img = img;
        this.cantidad = cantidadComprada;
    }
    
}


