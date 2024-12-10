async function cargarProductosHome() {
    try {
        const respuesta = await fetch('http://localhost:4000/api/bestsellers');
        const productos = await respuesta.json();

        const contenedor = document.getElementById('best-sellers');

        const grid = document.createElement('div');
        grid.classList.add('products-grid');

        productos.forEach(producto => {
            const enlace = document.createElement('div');
            enlace.href = producto.linkPage;
            enlace.classList.add('product-card');
            enlace.innerHTML = `
            <div class="product-image">
                <img src="${producto.urlImg}" alt="${producto.name}">
            </div>
            <div class="product-text">
                <h3>${producto.name}</h3>
                <p>$${producto.price}</p>
            </div>
            `;

            grid.appendChild(enlace);
        });

        contenedor.appendChild(grid);

    } catch (error) {
        console.error('Error al cargar productos:', error);
    }
}

document.addEventListener('DOMContentLoaded', cargarProductosHome);