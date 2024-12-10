async function cargarProducto() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    
    if (!productId) {
        document.getElementById('producto-container').innerHTML = '<h1>Producto no encontrado</h1>';
        return;
    }

    try {
        const respuesta = await fetch(`http://localhost:4000/api/products/${productId}`);
        if (!respuesta.ok) throw new Error('Producto no encontrado');
        const producto = await respuesta.json();

        document.getElementById('producto-container').innerHTML = `
            <div class="product">
                <img src="${producto.urlImg}" alt="${producto.name}">
                <div class="product-txt">
                    <h1>${producto.name}</h1>
                    <h2>$${producto.price}</h2>
                    <p>${producto.description}</p>
                </div>
            </div>
            <div class="producto-sizes">
                <p class="producto-sizes-label">Seleccionar Talla</p>
                <div class="producto-sizes-grid">
                    <button class="producto-size-btn">21CM<span class="cmmx">MX</span></button>
                    <button class="producto-size-btn">22CM<span class="cmmx">MX</span></button>
                    <button class="producto-size-btn">23CM<span class="cmmx">MX</span></button>
                    <button class="producto-size-btn">24CM<span class="cmmx">MX</span></button>
                    <button class="producto-size-btn">25CM<span class="cmmx">MX</span></button>
                    <button class="producto-size-btn">26CM<span class="cmmx">MX</span></button>
                    <button class="producto-size-btn">27CM<span class="cmmx">MX</span></button>
                    <button class="producto-size-btn">28CM<span class="cmmx">MX</span></button>
                    <button class="producto-size-btn">29CM<span class="cmmx">MX</span></button>
                    <button class="producto-size-btn">30CM<span class="cmmx">MX</span></button>
                </div>
            </div>
        `;
    } catch (error) {
        console.error('Error al cargar el producto:', error);
        document.getElementById('producto-container').innerHTML = '<h1>Error al cargar el producto</h1>';
    }
}

document.addEventListener('DOMContentLoaded', cargarProducto);