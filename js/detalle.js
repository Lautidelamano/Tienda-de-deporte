document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    const categoria = urlParams.get('categoria');

    const volverButton = document.getElementById('link-anterior');
    
    volverButton.addEventListener('click', () => redirigirACategoria(categoria));
    
    function redirigirACategoria(categoria) {
        window.location.href = `categorias.html?categoria=${categoria}`;
    }

    const BuyButton = document.getElementById('btn-buy');

    BuyButton.addEventListener('click', () => showInfo());

    function showInfo(){
     const info = document.getElementById('card-info');
     info.innerHTML = '';
     const cardMessage = document.createElement('div');
     cardMessage.classList.add('alert', 'alert-info', 'text-center', 'me-2');
     cardMessage.innerHTML = 'Gracias por comprar';
     info.appendChild(cardMessage); 
     setTimeout(() => {
        cardMessage.remove();
    }, 1500);
    }



    if (categoria) {
        fetch('../js/productos.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Recargue la página ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                const productos = data[categoria] || [];
                if (productos.length === 0) {
                    throw new Error('No hay productos para esa categoría ' + categoria);
                } else {
                    const producto_seleccionado = productos.find(prod => prod.id == productId);
                    if (producto_seleccionado) {
                        document.getElementById('titulo-card').innerText = producto_seleccionado.nombre;
                        document.getElementById('descripcion-card').innerText = producto_seleccionado.descripcion;
                        document.getElementById('categoria-card').innerText = categoria.charAt(0).toUpperCase() + categoria.slice(1);
                        document.getElementById('precio-card').innerText = producto_seleccionado.precio;
                        document.getElementById('imagen1').src = producto_seleccionado.imagen1;
                        document.getElementById('imagen2').src = producto_seleccionado.imagen2; // Añade imágenes adicionales si es necesario
                        document.getElementById('imagen3').src = producto_seleccionado.imagen3; // Añade imágenes adicionales si es necesario
                    }
                }
            })
            .catch(error => {
                const contenido = document.getElementById('contenido'); // Asegúrate de tener un elemento con este ID en tu HTML
                contenido.innerHTML = `<p>Error al cargar los productos: ${error.message}</p>`;
                console.error('Error al cargar los productos:', error);
            });
    }
});


