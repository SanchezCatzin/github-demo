/* let catalogoDeProducotos = []; */

//Se simula un objeto tomado de un JSON usando fetch
let promesaDeProductos = fetch('/productos.json')
.then((respuesta) => respuesta.json()) 

 promesaDeProductos.then((data) => {    
    for(i = 0; i < data.length; i++){
        let {nombre, precio, img} = data[i] //Uso de sintaxis avanzada 
        insertarCatalogoDeProductos(img, nombre, precio, i);
    }
})

//agregar los productos de JSON
function insertarCatalogoDeProductos(img,productoNombre,precio,numerodeproducto){
    let  productosDeTiendaBox = document.createElement('div');
    productosDeTiendaBox.classList.add("product-box");
    let contenidoTienda = document.getElementsByClassName('shop-contenido')[0];
    let catalogoDeProducotosItem =`            
                <img src=${img} alt="producto ${numerodeproducto}" class="imagen-producto">
                <h2 class="producto-title">${productoNombre}</h2>
                <span class="price">$${precio}</span>
                <i class="bi bi-bag-plus-fill add-cart"></i>`;
    productosDeTiendaBox.innerHTML = catalogoDeProducotosItem
    contenidoTienda.append(productosDeTiendaBox)
    productosDeTiendaBox.getElementsByClassName("add-cart")[0].addEventListener('click', addCartCliked);
}

