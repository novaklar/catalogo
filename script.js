document.addEventListener('DOMContentLoaded', function() {
    const catalogContainer = document.getElementById('catalogContainer');
    const img = document.createElement('img');
    
    img.src = 'https://raw.githubusercontent.com/novaklar/catalogo/refs/heads/main/%2413.000.png';
    img.alt = 'Catálogo de productos';
    
    img.onerror = function() {
        catalogContainer.innerHTML = '<p style="text-align:center;padding:20px;color:red">Error al cargar el catálogo</p>';
    };
    
    catalogContainer.appendChild(img);
});
