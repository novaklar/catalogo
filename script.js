// Colores personalizados corregidos
const platformColors = {
    // Streaming
    "Netflix": "#E50914",
    "HBO Max": "#00040C",
    "Disney+ Estándar": "linear-gradient(135deg, #022336, #19BAC6)",
    "Disney+ Premium": "linear-gradient(135deg, #022336, #19BAC6)",
    "Prime Video": "#0779FF",
    "Paramount+": "#0665FE",
    "Rakuten Viki": "#0C9BFF",
    "DirecTV Go": "#021327",
    "IPTV Premium": "#4E37E5",
    "YouTube Premium": "#ED1D24",
    "Crunchyroll": "#FF5F01",
    "VIX+": "linear-gradient(135deg, #FF8448, #FF3D79)",
    "Universal+": "#FBCC11",
    "Plex Premium": "#000000",
    "Apple TV+": "#000000",
    
    // Juegos - Roblox
    "Roblox 40 Robux": "#3C5CF2",
    "Roblox 80 Robux": "#3C5CF2",
    "Roblox 120 Robux": "#3C5CF2",
    "Roblox 160 Robux": "#3C5CF2",
    "Roblox 240 Robux": "#3C5CF2",
    "Roblox 426 Robux": "#3C5CF2",
    "Roblox 480 Robux": "#3C5CF2",
    "Roblox Premium 450": "#3C5CF2",
    "Roblox Premium 1000": "#3C5CF2",
    "Roblox Premium 2200": "#3C5CF2",
    
    // Juegos - Free Fire
    "Free Fire 110 Diamantes": "#000000",
    "Free Fire 341 Diamantes": "#000000",
    "Free Fire 451 Diamantes": "#000000",
    "Free Fire 572 Diamantes": "#000000",
    "Free Fire 1166 Diamantes": "#000000",
    "Free Fire 2398 Diamantes": "#000000",
    "Free Fire 6160 Diamantes": "#000000",
    "Free Fire Tarjeta Semanal": "#000000",
    "Free Fire Tarjeta Mensual": "#000000",
    
    // Aplicaciones
    "ChatGPT": "#10A27F",
    "Duolingo": "#00CF01",
    "Canva Mensual": "linear-gradient(135deg, #12BACD, #7C2AE6)",
    "Canva Anual": "linear-gradient(135deg, #12BACD, #7C2AE6)",
    "CapCut Mensual": "#000000",
    "CapCut Trimestral": "#000000",
    
    // Adobe
    "Photoshop": "#001e36",
    "Premiere Pro": "#00005b",
    "Illustrator": "#330000",
    "After Effects": "#00005b",
    "Animate": "#00005b"
};

// Datos de productos actualizados con planes individualizados
const products = [
    // Streaming
    {
        id: 1,
        title: "Netflix",
        description: "Perfil individual en cuenta compartida con acceso completo al catálogo. Máxima calidad de video.",
        price: "$14.000/mes",
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
        price: "$11.500/mes",
        category: "streaming",
        image: "https://raw.githubusercontent.com/novaklar/catalogo/refs/heads/main/Inec/3.png"
    },
    {
        id: 4,
        title: "Disney+ Premium",
        description: "Perfil individual con calidad 4K UHD, HDR y Dolby Atmos. Todo el contenido en máxima calidad.",
        price: "$14.500/mes",
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
        description: "Perfil individual con acceso a series exclusivas, películas y contenido de CBS, MTV and Nickelodeon.",
        price: "$10.000/mes",
        category: "streaming",
        image: "https://raw.githubusercontent.com/novaklar/catalogo/refs/heads/main/Inec/5.png"
    },
    {
        id: 7,
        title: "Rakuten Viki",
        description: "Perfil individual con acceso ilimitado a dramas asiáticos y contenido exclusivo sin anuncios.",
        price: "$11.500/mes",
        category: "streaming",
        image: "https://raw.githubusercontent.com/novaklar/catalogo/refs/heads/main/Inec/6.png"
    },
    {
        id: 8,
        title: "DirecTV Go",
        description: "Perfil individual con acceso a canales en vivo y contenido on demand desde cualquier dispositivo.",
        price: "$15.000/mes",
        category: "streaming",
        image: "https://raw.githubusercontent.com/novaklar/catalogo/refs/heads/main/Inec/7.png"
    },
    {
        id: 9,
        title: "IPTV Premium",
        description: "Acceso individual a servicio IPTV con más de 10,000 canales internacionales y contenido VOD.",
        price: "$12.500/mes",
        category: "streaming",
        image: "https://raw.githubusercontent.com/novaklar/catalogo/refs/heads/main/Inec/8.png"
    },
    {
        id: 10,
        title: "YouTube Premium",
        description: "Perfil individual con música sin anuncios, reproducción en segundo plano y contenido exclusivo.",
        price: "$12.500/mes",
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
        description: "Perfil individual con acceso to telenovelas y series originales en español sin anuncios.",
        price: "$10.000/mes",
        category: "streaming",
        image: "https://raw.githubusercontent.com/novaklar/catalogo/refs/heads/main/Inec/11.png"
    },
    {
        id: 13,
        title: "Universal+",
        description: "Perfil individual con acceso a películas y series exclusivas de los estudios Universal.",
        price: "$11.000/mes",
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
        price: "$15.000/mes",
        category: "streaming",
        image: "https://raw.githubusercontent.com/novaklar/catalogo/refs/heads/main/Inec/14.png"
    },
    
    // Juegos - Roblox
    {
        id: 1801,
        title: "Roblox 40 Robux",
        description: "Explora mundos, crea y compra Robux para personalizar tu juego.",
        price: "$6.500",
        category: "games",
        image: "https://raw.githubusercontent.com/novaklar/catalogo/refs/heads/main/Inec/15.png"
    },
    {
        id: 1802,
        title: "Roblox 80 Robux",
        description: "Explora mundos, crea y compra Robux para personalizar tu juego.",
        price: "$8.800",
        category: "games",
        image: "https://raw.githubusercontent.com/novaklar/catalogo/refs/heads/main/Inec/15.png"
    },
    {
        id: 1803,
        title: "Roblox 120 Robux",
        description: "Explora mundos, crea y compra Robux para personalizar tu juego.",
        price: "$12.500",
        category: "games",
        image: "https://raw.githubusercontent.com/novaklar/catalogo/refs/heads/main/Inec/15.png"
    },
    {
        id: 1804,
        title: "Roblox 160 Robux",
        description: "Explora mundos, crea y compra Robux para personalizar tu juego.",
        price: "$14.500",
        category: "games",
        image: "https://raw.githubusercontent.com/novaklar/catalogo/refs/heads/main/Inec/15.png"
    },
    {
        id: 1805,
        title: "Roblox 240 Robux",
        description: "Explora mundos, crea y compra Robux para personalizar tu juego.",
        price: "$19.500",
        category: "games",
        image: "https://raw.githubusercontent.com/novaklar/catalogo/refs/heads/main/Inec/15.png"
    },
    {
        id: 1806,
        title: "Roblox 426 Robux",
        description: "Explora mundos, crea y compra Robux para personalizar tu juego.",
        price: "$26.500",
        category: "games",
        image: "https://raw.githubusercontent.com/novaklar/catalogo/refs/heads/main/Inec/15.png"
    },
    {
        id: 1807,
        title: "Roblox 480 Robux",
        description: "Explora mundos, crea y compra Robux para personalizar tu juego.",
        price: "$32.500",
        category: "games",
        image: "https://raw.githubusercontent.com/novaklar/catalogo/refs/heads/main/Inec/15.png"
    },
    {
        id: 1808,
        title: "Roblox Premium 450",
        description: "Membresía Premium de Roblox con 450 Robux mensuales.",
        price: "$29.500",
        category: "games",
        image: "https://raw.githubusercontent.com/novaklar/catalogo/refs/heads/main/Inec/15.png"
    },
    {
        id: 1809,
        title: "Roblox Premium 1000",
        description: "Membresía Premium de Roblox con 1000 Robux mensuales.",
        price: "$52.500",
        category: "games",
        image: "https://raw.githubusercontent.com/novaklar/catalogo/refs/heads/main/Inec/15.png"
    },
    {
        id: 1810,
        title: "Roblox Premium 2200",
        description: "Membresía Premium de Roblox con 2200 Robux mensuales.",
        price: "$110.500",
        category: "games",
        image: "https://raw.githubusercontent.com/novaklar/catalogo/refs/heads/main/Inec/15.png"
    },
    
    // Juegos - Free Fire
    {
        id: 1901,
        title: "Free Fire 110 Diamantes",
        description: "Recarga diamantes y obtén skins, armas y pases para destacar en cada partida.",
        price: "$8.500",
        category: "games",
        image: "https://raw.githubusercontent.com/novaklar/catalogo/refs/heads/main/Inec/16.png"
    },
    {
        id: 1902,
        title: "Free Fire 341 Diamantes",
        description: "Recarga diamantes y obtén skins, armas y pases para destacar en cada partida.",
        price: "$16.500",
        category: "games",
        image: "https://raw.githubusercontent.com/novaklar/catalogo/refs/heads/main/Inec/16.png"
    },
    {
        id: 1903,
        title: "Free Fire 451 Diamantes",
        description: "Recarga diamantes y obtén skins, armas y pases para destacar en cada partida.",
        price: "$22.500",
        category: "games",
        image: "https://raw.githubusercontent.com/novaklar/catalogo/refs/heads/main/Inec/16.png"
    },
    {
        id: 1904,
        title: "Free Fire 572 Diamantes",
        description: "Recarga diamantes y obtén skins, armas y pases para destacar en cada partida.",
        price: "$24.500",
        category: "games",
        image: "https://raw.githubusercontent.com/novaklar/catalogo/refs/heads/main/Inec/16.png"
    },
    {
        id: 1905,
        title: "Free Fire 1166 Diamantes",
        description: "Recarga diamantes y obtén skins, armas y pases para destacar en cada partida.",
        price: "$43.500",
        category: "games",
        image: "https://raw.githubusercontent.com/novaklar/catalogo/refs/heads/main/Inec/16.png"
    },
    {
        id: 1906,
        title: "Free Fire 2398 Diamantes",
        description: "Recarga diamantes y obtén skins, armas y pases para destacar en cada partida.",
        price: "$85.500",
        category: "games",
        image: "https://raw.githubusercontent.com/novaklar/catalogo/refs/heads/main/Inec/16.png"
    },
    {
        id: 1907,
        title: "Free Fire 6160 Diamantes",
        description: "Recarga diamantes y obtén skins, armas y pases para destacar en cada partida.",
        price: "$200.500",
        category: "games",
        image: "https://raw.githubusercontent.com/novaklar/catalogo/refs/heads/main/Inec/16.png"
    },
    {
        id: 1908,
        title: "Free Fire Tarjeta Semanal",
        description: "Tarjeta semanal de diamantes para Free Fire.",
        price: "$12.500",
        category: "games",
        image: "https://raw.githubusercontent.com/novaklar/catalogo/refs/heads/main/Inec/16.png"
    },
    {
        id: 1909,
        title: "Free Fire Tarjeta Mensual",
        description: "Tarjeta mensual de diamantes para Free Fire.",
        price: "$53.000",
        category: "games",
        image: "https://raw.githubusercontent.com/novaklar/catalogo/refs/heads/main/Inec/16.png"
    },
    
    // Aplicaciones
    {
        id: 20,
        title: "ChatGPT",
        description: "Accede a la versión Pro del asistente más potente del mundo, ideal para estudiar, crear y trabajar.",
        price: "$20.500/mes",
        category: "apps",
        image: "https://raw.githubusercontent.com/novaklar/catalogo/refs/heads/main/Inec/17.png"
    },
    {
        id: 21,
        title: "Duolingo",
        description: "Aprende idiomas de forma divertida y gamificada.",
        price: "Sin stock",
        category: "apps",
        image: "https://raw.githubusercontent.com/novaklar/catalogo/refs/heads/main/Inec/26.png"
    },
    {
        id: 2201,
        title: "Canva Mensual",
        description: "Diseña como un profesional con miles de plantillas y herramientas premium.",
        price: "$12.500/mes",
        category: "apps",
        image: "https://raw.githubusercontent.com/novaklar/catalogo/refs/heads/main/Inec/18.png"
    },
    {
        id: 2202,
        title: "Canva Anual",
        description: "Diseña como un profesional con miles de plantillas y herramientas premium.",
        price: "$36.500/año",
        category: "apps",
        image: "https://raw.githubusercontent.com/novaklar/catalogo/refs/heads/main/Inec/18.png"
    },
    {
        id: 2301,
        title: "CapCut Mensual",
        description: "Herramientas de edición de video avanzadas y efectos premium sin marca de agua.",
        price: "$21.500/mes",
        category: "apps",
        image: "https://raw.githubusercontent.com/novaklar/catalogo/refs/heads/main/Inec/19.png"
    },
    {
        id: 2302,
        title: "CapCut Trimestral",
        description: "Herramientas de edición de video avanzadas y efectos premium sin marca de agua.",
        price: "$60.500/trimestre",
        category: "apps",
        image: "https://raw.githubusercontent.com/novaklar/catalogo/refs/heads/main/Inec/19.png"
    },
    
    // Adobe
    {
        id: 2401,
        title: "Photoshop",
        description: "Archivo descargable en versión 2023 del programa. Incluye tutorial de descarga.",
        price: "$12.000",
        category: "adobe",
        image: "https://raw.githubusercontent.com/novaklar/catalogo/refs/heads/main/Inec/27.png"
    },
    {
        id: 2402,
        title: "Premiere Pro",
        description: "Archivo descargable en versión 2023 del programa. Incluye tutorial de descarga.",
        price: "$12.000",
        category: "adobe",
        image: "https://raw.githubusercontent.com/novaklar/catalogo/refs/heads/main/Inec/28.png"
    },
    {
        id: 2403,
        title: "Illustrator",
        description: "Archivo descargable en versión 2023 del programa. Incluye tutorial de descarga.",
        price: "$12.000",
        category: "adobe",
        image: "https://raw.githubusercontent.com/novaklar/catalogo/refs/heads/main/Inec/29.png"
    },
    {
        id: 2404,
        title: "After Effects",
        description: "Archivo descargable en versión 2023 del programa. Incluye tutorial de descarga.",
        price: "$12.000",
        category: "adobe",
        image: "https://raw.githubusercontent.com/novaklar/catalogo/refs/heads/main/Inec/30.png"
    },
    {
        id: 2405,
        title: "Animate",
        description: "Archivo descargable en versión 2023 del programa. Incluye tutorial de descarga.",
        price: "$12.000",
        category: "adobe",
        image: "https://raw.githubusercontent.com/novaklar/catalogo/refs/heads/main/Inec/31.png"
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
                <p>Prueba con otra categoría o término de búsqueda.</p>
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
                <h3 class="product-title">${product.title}</h3>
                <div class="product-price">${product.price}</div>
            </div>
            <div class="product-details">
                <button class="close-details">&times;</button>
                <span class="product-category">${getCategoryName(product.category)}</span>
                <div class="product-description">${product.description}</div>
            </div>
        `;
        
        // Establecer color de fondo personalizado
        const detailsElement = productCard.querySelector('.product-details');
        const platformColor = platformColors[product.title] || '#00128F';
        detailsElement.style.background = platformColor;
        
        // Añadir evento de clic para mostrar detalles
        productCard.addEventListener('click', function(e) {
            if (!e.target.classList.contains('close-details')) {
                document.querySelectorAll('.product-card.active').forEach(card => {
                    if (card !== this) card.classList.remove('active');
                });
                this.classList.add('active');
            }
        });
        
        // Añadir evento para cerrar detalles
        const closeBtn = productCard.querySelector('.close-details');
        closeBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            productCard.classList.remove('active');
        });
        
        catalog.appendChild(productCard);
    });
}

// Función para obtener el nombre de la categoría
function getCategoryName(category) {
    const categories = {
        'streaming': 'Streaming',
        'games': 'Juegos',
        'apps': 'Aplicaciones',
        'adobe': 'Adobe'
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
        
        if (filter !== 'all') {
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

// Cerrar detalles al hacer clic fuera
document.addEventListener('click', function(e) {
    if (!e.target.closest('.product-card')) {
        document.querySelectorAll('.product-card.active').forEach(card => {
            card.classList.remove('active');
        });
    }
});

// Inicializar catálogo
document.addEventListener('DOMContentLoaded', () => {
    renderProducts(products);
});
