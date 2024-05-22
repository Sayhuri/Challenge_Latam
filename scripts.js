document.getElementById('add-product-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener valores del formulario
    const name = document.getElementById('product-name').value;
    const price = document.getElementById('product-price').value;
    const imageInput = document.getElementById('product-image');
    const imageFile = imageInput.files[0];

    // Validar que el campo de precio solo contenga números enteros o decimales
    if (!/^\d+(\.\d{1,2})?$/.test(price)) {
        alert('El precio debe ser un número entero o decimal con hasta dos decimales.');
        return;
    }


    if (imageFile) {
        const reader = new FileReader();

        reader.onload = function(e) {
            // Crear tarjeta de producto
            const productCard = document.createElement('div');
            productCard.className = 'product-card';

            productCard.innerHTML = `
                <img src="${e.target.result}" alt="${name}">
                <h3>${name}</h3>
                <p>$${price}</p>
                <button onclick="this.parentElement.remove()">🗑️</button>
            `;

            // Agregar tarjeta de producto a la lista de productos
            document.getElementById('product-list').appendChild(productCard);

            // Limpiar formulario
            document.getElementById('add-product-form').reset();
        };

        reader.readAsDataURL(imageFile);
    }
});
