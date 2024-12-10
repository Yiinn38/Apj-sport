async function cargarProductos() {
    try {
        const respuesta = await fetch('http://localhost:4000/api/products');
        const productos = await respuesta.json();

        const contenedor = document.getElementById('contenedor-productos');
        
        const grid = document.createElement('div');
        grid.classList.add('products-grid');

        productos.forEach(producto => {
            const enlace = document.createElement('a');
            enlace.href = `producto.html?id=${producto._id}`;
            enlace.classList.add('product-card');
            enlace.innerHTML = `
            <div class="product-image">
                <img src="${producto.urlImg}" alt="${producto.name}">
            </div>
            <div class="product-text">
                <h3>${producto.name}</h3>
                <h6>$${producto.price}</h6>
                <p>${producto.description}</p>
            </div>
            `;

            grid.appendChild(enlace);
        });

        contenedor.appendChild(grid);
    } catch (error) {
        console.error('Error al cargar productos:', error);
    }
}

document.addEventListener('DOMContentLoaded', cargarProductos);
