//Uso de JSON para volver un objeto string y agregarlo a SessionStorage

function agregarItemEnSessionStorage() {

    let elementosComprados = document.getElementsByClassName('cart-box');
    
    for (i = 0; i < elementosComprados.length; i++){
        
        let nombreProductoComprado = elementosComprados[i].getElementsByClassName('cart-product-title')[0].innerText;
        let img = elementosComprados[i].getElementsByClassName('imagen-carrito')[0].src;
        let costo = elementosComprados[i].getElementsByClassName('cart-price')[0].innerHTML;
        let cantidadComprada = parseFloat(elementosComprados[i].getElementsByClassName('cart-quantity')[0].value);
        let productSeccionStorage = new ObjetoCompradoSessionStorage(nombreProductoComprado, costo, img, cantidadComprada);
        
        sessionStorage.setItem(nombreProductoComprado, JSON.stringify(productSeccionStorage));
    }
}

function verificarCompraAnterior(){
    limpiarCarrito()
    for(let i = 0; i < sessionStorage.length; i++){
        let clave = sessionStorage.key(i);
        
        if(clave == 'IsThisFirstTime_Log_From_LiveServer'){
            console.log('clave')
        } else{
        let itemAVerificar = JSON.parse(sessionStorage.getItem(clave));
        addProductoACarrito(itemAVerificar.nombre,itemAVerificar.costo, itemAVerificar.img, itemAVerificar.cantidad)
        }

    }
    updatetotal()
}
