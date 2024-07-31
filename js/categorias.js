function getParameterByName(name) {
	name = name.replace(/[\[\]]/g, '\\$&');
	const url = window.location.href;
	const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
	const results = regex.exec(url);
	if (!results) return null;
	if (!results[2]) return '';
	return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

const categoria = getParameterByName('categoria');
const contenido = document.getElementById('contenido');

if (categoria) {
	fetch('../js/productos.json')
		.then((response) => {
			if (!response.ok) {
				throw new Error('Recargue la pagina ' + response.statusText);
			}
			return response.json();
		})
		.then((data) => {
			const productos = data[categoria] || [];
			if (productos.length === 0) {
				throw new Error('No hay productos para esa categoria ' + categoria);
			}

			let displayCategoria = categoria;
			if (categoria === 'ninos') {
				displayCategoria = 'niños';
			}

			let html = `<h1>Ropa y Accesorios para ${
				displayCategoria.charAt(0).toUpperCase() + displayCategoria.slice(1)
			}</h1><div class="row" style="justify-content: center;">`;

			productos.forEach((producto) => {
				html += `
                    <div class="card m-2" style="width: 18rem;">
                        <img class="card-img-top" src="${producto.imagen1}" alt="${producto.nombre}">
                        <div class="card-body">
                            <h5 class="card-title">${producto.nombre}</h5>
                            <p class="card-text">${producto.descripcion}</p>
                            <p style="color:#000">${producto.precio}</p>
                            <a href="producto-seleccionado.html?id=${producto.id}&categoria=${categoria}" class="btn btn-primary">Ver más</a>
                        </div>
                    </div>`;
			});

			html += `</div>`;
			contenido.innerHTML = html;
		})
		.catch((error) => {
			contenido.innerHTML = `<p>Error al cargar los productos: ${error.message}</p>`;
			console.error('Error al cargar los productos:', error);
		});
} else {
	contenido.innerHTML =
		'<p>Selecciona una categoría del menú para ver contenido.</p>';
}
