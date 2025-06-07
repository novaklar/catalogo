function openModal(platform) {
    const modal = document.getElementById('productModal');
    
    switch (platform) {
        case 'netflix':
            document.getElementById('modal-title').textContent = 'Netflix Plan Estándar';
            document.getElementById('modal-price').textContent = 'Precio: $13.000/mes';
            break;
        case 'hbo':
            document.getElementById('modal-title').textContent = 'HBO Max Completo';
            document.getElementById('modal-price').textContent = 'Precio: $14.990/mes';
            break;
        case 'disney-standard':
            document.getElementById('modal-title').textContent = 'Disney+ Plan Estándar';
            document.getElementById('modal-price').textContent = 'Precio: $7.990/mes';
            break;
        case 'disney-premium':
            document.getElementById('modal-title').textContent = 'Disney+ Plan Premium';
            document.getElementById('modal-price').textContent = 'Precio: $11.990/mes';
            break;
        case 'prime':
            document.getElementById('modal-title').textContent = 'Prime Video';
            document.getElementById('modal-price').textContent = 'Precio: $8.990/mes';
            break;
        case 'starplus':
            document.getElementById('modal-title').textContent = 'Star+';
            document.getElementById('modal-price').textContent = 'Precio: $9.990/mes';
            break;
        case 'paramount':
            document.getElementById('modal-title').textContent = 'Paramount+';
            document.getElementById('modal-price').textContent = 'Precio: $7.990/mes';
            break;
        case 'iptv':
            document.getElementById('modal-title').textContent = 'IPTV Premium';
            document.getElementById('modal-price').textContent = 'Precio: $12.000/mes';
            break;
        case 'youtube':
            document.getElementById('modal-title').textContent = 'YouTube Premium';
            document.getElementById('modal-price').textContent = 'Precio: $11.990/mes';
            break;
        case 'vix':
            document.getElementById('modal-title').textContent = 'VIX+';
            document.getElementById('modal-price').textContent = 'Precio: $5.990/mes';
            break;
        case 'crunchyroll':
            document.getElementById('modal-title').textContent = 'Crunchyroll';
            document.getElementById('modal-price').textContent = 'Precio: $8.990/mes';
            break;
        case 'universal':
            document.getElementById('modal-title').textContent = 'Universal+';
            document.getElementById('modal-price').textContent = 'Precio: $6.990/mes';
            break;
        case 'appletv':
            document.getElementById('modal-title').textContent = 'Apple TV+';
            document.getElementById('modal-price').textContent = 'Precio: $9.990/mes';
            break;
        case 'directv':
            document.getElementById('modal-title').textContent = 'DirecTV Go';
            document.getElementById('modal-price').textContent = 'Precio: $15.990/mes';
            break;
    }

    modal.style.display = 'flex';
}

function closeModal() {
    document.getElementById('productModal').style.display = 'none';
}

// Cerrar al hacer clic fuera
window.onclick = function(event) {
    if (event.target === document.getElementById('productModal')) {
        closeModal();
    }
};