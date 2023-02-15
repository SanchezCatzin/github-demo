
function tomarItemsDeCarritoDeCompra(){
    let lista = document.getElementsByClassName('cart-box');
    let arregloParaAlert = []

    class ItemParaPresentarEnAlerta {
        constructor(nombre, costo, cantidad) {
            this.nombre = nombre;
            this.costo = costo;
            this.cantidad = cantidad;
        }
    }

    for(i = 0; i < lista.length; i++){
        let nombreitem = lista[i].getElementsByClassName('cart-product-title')[0].innerText
        let costoItem = lista[i].getElementsByClassName('cart-price')[0].innerText
        let cantidadItem = lista[i].getElementsByClassName('cart-quantity')[0].value
        let itemParaAlert = new ItemParaPresentarEnAlerta (nombreitem, costoItem,cantidadItem)
        arregloParaAlert.push(itemParaAlert)
    }
    
    let texto = ""
    for (i = 0; i < arregloParaAlert.length ; i++){
        texto = texto + `<br> ${arregloParaAlert[i].cantidad} pares de ${arregloParaAlert[i].nombre} con un costo de ${arregloParaAlert[i].costo};`;
    }
    

    Swal.fire({
        icon: 'success',
        html: 'Gracias por comprar lo siguiente: <br>'+ texto,    
    }) 
}

function mostrarTostify(){
Toastify({
    text: "Este elemento ya se encuentra en su carrito de compra",
    duration: 3000,
    /* destination: "https://github.com/apvarun/toastify-js", */
    newWindow: false,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    /* backgroundColor: "#D58BFF", */
    style: {
      color: "#282829",
      background: "linear-gradient(to left, #faf2f2, #D58BFF)",
    },
    onClick: () => {cart.classList.add('active')} // Callback after click
  }).showToast();}
