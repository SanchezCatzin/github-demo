
//abrir el carrito
carritoIcon.onclick = () => {
    cart.classList.add('active');
};

//cerrar el carrito
closeCart.onclick = () => {
    cart.classList.remove('active');

};

//Cargar los eventListeners
if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready);
} else{
    ready();
};


function ready(){
    let removeCartButtons = document.getElementsByClassName('cart-remove')
    for(let i = 0; i < removeCartButtons.length; i++){
        let button = removeCartButtons[i];
        button.addEventListener('click', removeCarItem)
    };
    //cambio de cantidad 
    let cantidadInputs = document.getElementsByClassName('cart-quantity')
    for(let i = 0; i < cantidadInputs.length; i++){
        let entrada = cantidadInputs[i]
        entrada.addEventListener('change', quantityChanged)
    };
    //agregar al carrito YA NO SE USA PERO SE DEJO A MANERA DE REPASO PARA FUTURAS CONSULTAS
    /*let addCart = document.getElementsByClassName('add-cart')
    for(let i = 0; i < addCart.length; i++){
        let button = addCart[i]
        button.addEventListener('click', addCartCliked)
    } */

    //Boton de compra
    document.getElementsByClassName('btn-buy')[0].addEventListener('click', buyButtonCliked);

    //Boton de verificar compra anterior
    document.getElementsByClassName('btn-verCompraAnterior')[0].addEventListener('click', verificarCompraAnterior);
}
// buyButtuonCliked funcion
function buyButtonCliked(){
    tomarItemsDeCarritoDeCompra()
    sessionStorage.clear()
    agregarItemEnSessionStorage();
    limpiarCarrito()
    updatetotal()
}

//limpiar carrito al finalizar compra o para verificar compra anterior
function limpiarCarrito(){
    let cartContent = document.getElementsByClassName('cart-contenedor')[0]
    while (cartContent.hasChildNodes()){
        cartContent.removeChild(cartContent.firstChild)
    }
}

//Remover elementos del carrito
function removeCarItem(event){
    let buttonCliked = event.target
    buttonCliked.parentElement.remove()
    updatetotal();
}

//Cambios de cantidad
function quantityChanged(event){
    let input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    } 
    updatetotal();
}
//add un cart item a carrito
function addCartCliked(event){
    let button = event.target;
    let productosDeTienda = button.parentElement
    let titulo = productosDeTienda.getElementsByClassName('producto-title')[0].innerHTML
    let precio = productosDeTienda.getElementsByClassName('price')[0].innerHTML;
    let productoImagen = productosDeTienda.getElementsByClassName('imagen-producto')[0].src;
    addProductoACarrito(titulo,precio,productoImagen,1);
    updatetotal();
}

function addProductoACarrito(titulo,precio,productoImagen,cantidad){

    let  productosDeTiendaBox = document.createElement('div');
    productosDeTiendaBox.classList.add("cart-box");
    let cartItems = document.getElementsByClassName('cart-contenedor')[0]
    let cartItemsNombres = cartItems.getElementsByClassName('cart-product-title');
    
    for(i = 0; i < cartItemsNombres.length; i++) {
      if (cartItemsNombres[i].innerHTML == titulo){
        mostrarTostify()
        return;
        } 
            
    }

    let cartBoxConten = `                        
                        <img src="${productoImagen}" alt="producto 1" class="imagen-carrito">
                        <div class="detail-box">
                            <div class="cart-product-title">${titulo}</div>
                            <div class="cart-price">${precio}</div>
                            <input type="number" value="${cantidad}" class="cart-quantity">
                        </div>
                        <!-- remove Cart -->
                        <i class="bi bi-trash cart-remove"></i>`


productosDeTiendaBox.innerHTML = cartBoxConten;   
cartItems.prepend(productosDeTiendaBox);
productosDeTiendaBox.getElementsByClassName("cart-remove")[0].addEventListener('click', removeCarItem);
productosDeTiendaBox.getElementsByClassName("cart-quantity")[0].addEventListener('change', quantityChanged); 
}



//Actualizar el total
function updatetotal(){
    let cartContent = document.getElementsByClassName('cart-contenedor')[0];
    let cartBoxes = cartContent.getElementsByClassName('cart-box');
    let total = 0
   if (cartBoxes.length > 0 ) {
        for (let i = 0; i < cartBoxes.length; i++) {
            let cartBox = cartBoxes[i];
            let priceElement = cartBox.getElementsByClassName('cart-price')[0];
            let cantidadDeElemento = cartBox.getElementsByClassName('cart-quantity')[0];
            let price = parseFloat(priceElement.innerHTML.replace("$",""));
            let cantidad = cantidadDeElemento.value;
            
            
            total = total + (price*cantidad);
            total = Math.round(total * 100) / 100
            document.getElementsByClassName('total-price')[0].innerText = "$"+total;
        }
   } else {
        total = 0 
        document.getElementsByClassName('total-price')[0].innerText = "$" + 0;
   }
}
