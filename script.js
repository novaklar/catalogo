// Datos de productos (solo streaming)
const products = [
    {
        id: 1,
        title: "Netflix",
        description: "Perfil individual en cuenta compartida con acceso completo al catálogo. Máxima calidad de video.",
        price: "$13.000/mes",
        category: "streaming",
        image: "https://raw.githubusercontent.com/novaklar/catalogo/refs/heads/main/Inec/1.png"
    },
    {
        id: 2,
        title: "HBO Max",
        description: "Perfil individual con acceso a todo el contenido exclusivo de HBO, Warner Bros, DC y más.",
        price: "$10.000/mes",
        category: "streaming",
        image: "https://raw.githubusercontent.com/novaklar/catalogo/refs/heads/main/Inec/2.png"
    },
    {
        id: 3,
        title: "Disney+ Estándar",
        description: "Perfil individual con acceso a contenido de Disney, Pixar, Marvel, Star Wars y National Geographic.",
        price: "$10.000/mes",
        category: "streaming",
        image: "https://raw.githubusercontent.com/novaklar/catalogo/refs/heads/main/Inec/3.png"
    },
    {
        id: 4,
        title: "Disney+ Premium",
        description: "Perfil individual con calidad 4K UHD, HDR y Dolby Atmos. Todo el contenido en máxima calidad.",
        price: "$13.000/mes",
        category: "streaming",
        image: "https://raw.githubusercontent.com/novaklar/catalogo/refs/heads/main/Inec/3.png"
    },
    {
        id: 5,
        title: "Prime Video",
        description: "Perfil individual con acceso a series exclusivas, películas y contenido adicional de Amazon Prime.",
        price: "$10.000/mes",
        category: "streaming",
        image: "https://raw.githubusercontent.com/novaklar/catalogo/refs/heads/main/Inec/4.png"
    },
    {
        id: 6,
        title: "Paramount+",
        description: "Perfil individual con acceso a series exclusivas, películas y contenido de CBS, MTV y Nickelodeon.",
        price: "$9.000/mes",
        category: "streaming",
        image: "https://raw.githubusercontent.com/novaklar/catalogo/refs/heads/main/Inec/5.png"
    },
    {
        id: 7,
        title: "Rakuten Viki",
        description: "Perfil individual con acceso ilimitado a dramas asiáticos y contenido exclusivo sin anuncios.",
        price: "$10.000/mes",
        category: "streaming",
        image: "https://raw.githubusercontent.com/novaklar/catalogo/refs/heads/main/Inec/6.png"
    },
    {
        id: 8,
        title: "DirecTV Go",
        description: "Perfil individual con acceso a canales en vivo y contenido on demand desde cualquier dispositivo.",
        price: "$14.000/mes",
        category: "streaming",
        image: "https://raw.githubusercontent.com/novaklar/catalogo/refs/heads/main/Inec/7.png"
    },
    {
        id: 9,
        title: "IPTV Premium",
        description: "Acceso individual a servicio IPTV con más de 10,000 canales internacionales y contenido VOD.",
        price: "$10.000/mes",
        category: "streaming",
        image: "https://raw.githubusercontent.com/novaklar/catalogo/refs/heads/main/Inec/8.png"
    },
    {
        id: 10,
        title: "YouTube Premium",
        description: "Perfil individual con música sin anuncios, reproducción en segundo plano y contenido exclusivo.",
        price: "$12.000/mes",
        category: "streaming",
        image: "https://raw.githubusercontent.com/novaklar/catalogo/refs/heads/main/Inec/9.png"
    },
    {
        id: 11,
        title: "Crunchyroll",
        description: "Perfil individual con acceso al catálogo más grande de anime y simulcasts sin anuncios.",
        price: "$10.000/mes",
        category: "streaming",
        image: "https://raw.githubusercontent.com/novaklar/catalogo/refs/heads/main/Inec/10.png"
    },
    {
        id: 12,
        title: "VIX+",
        description: "Perfil individual con acceso a telenovelas y series originales en español sin anuncios.",
        price: "$10.000/mes",
        category: "streaming",
        image: "https://raw.githubusercontent.com/novaklar/catalogo/refs/heads/main/Inec/11.png"
    },
    {
        id: 13,
        title: "Universal+",
        description: "Perfil individual con acceso a películas y series exclusivas de los estudios Universal.",
        price: "$10.000/mes",
        category: "streaming",
        image: "https://raw.githubusercontent.com/novaklar/catalogo/refs/heads/main/Inec/12.png"
    },
    {
        id: 14,
        title: "Plex Premium",
        description: "Acceso individual con funciones avanzadas incluyendo transmisión remota y sincronización móvil.",
        price: "$10.000/mes",
        category: "streaming",
        image: "https://raw.githubusercontent.com/novaklar/catalogo/refs/heads/main/Inec/13.png"
    },
    {
        id: 15,
        title: "Apple TV+",
        description: "Perfil individual con acceso a todas las series y películas originales de Apple en 4K Dolby Vision.",
        price: "$9.000/mes",
        category: "streaming",
        image: "https://raw.githubusercontent.com/novaklar/catalogo/refs/heads/main/Inec/14.png"
    }
];

// Función para renderizar productos
function renderProducts(productsToRender) {
    const catalog = document.getElementById('productCatalog');
    catalog.innerHTML = '';
    
    if (productsToRender.length === 0) {
        catalog.innerHTML = `
            <div class="empty-message">
                <h3>No hay productos disponibles en esta categoría</h3>
                <p>Actualmente solo tenemos disponibles productos de Streaming. Próximamente añadiremos más categorías.</p>
            </div>
        `;
        return;
    }
    
    productsToRender.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.dataset.category = product.category;
        
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.title}">
            </div>
            <div class="product-info">
                <span class="product-category ${'category-' + product.category}">${getCategoryName(product.category)}</span>
                <h3 class="product-title">${product.title}</h3>
                <div class="product-description">${product.description}</div>
                <div class="product-price">${product.price}</div>
            </div>
        `;
        
        catalog.appendChild(productCard);
    });
}

// Función para obtener el nombre de la categoría
function getCategoryName(category) {
    const categories = {
        'streaming': 'Streaming',
        'games': 'Juegos',
        'apps': 'Aplicaciones',
        'courses': 'Cursos'
    };
    return categories[category] || category;
}

// Filtrado por categoría
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        
        const filter = this.dataset.filter;
        let filteredProducts = products;
        
        if (filter === 'games' || filter === 'apps' || filter === 'courses') {
            filteredProducts = [];
        } else if (filter !== 'all') {
            filteredProducts = products.filter(product => product.category === filter);
        }
        
        renderProducts(filteredProducts);
    });
});

// Búsqueda de productos
document.getElementById('searchInput').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;
    
    let filteredProducts = products;
    
    if (activeFilter !== 'all') {
        filteredProducts = products.filter(product => product.category === activeFilter);
    }
    
    filteredProducts = filteredProducts.filter(product => 
        product.title.toLowerCase().includes(searchTerm) || 
        product.description.toLowerCase().includes(searchTerm)
    );
    
    renderProducts(filteredProducts);
});

// Inicializar catálogo
document.addEventListener('DOMContentLoaded', () => {
    renderProducts(products);
});
