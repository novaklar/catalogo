// Colores personalizados corregidos según tu retroalimentación
const platformColors = {
    // Streaming
    "Netflix": "#E50914",
    "HBO Max": "#000000",
    "Disney+ Premium": "linear-gradient(135deg, #022336, #19BAC6)",
    "Disney+ Estándar": "linear-gradient(135deg, #022336, #19BAC6)",
    "Prime Video": "#0779FF",
    "Paramount+": "#0066FF",
    "Rakuten Viki": "#00B2FF",
    "DirecTV Go": "#021327", // CORREGIDO: Cambiado de #FF0000 a #021327
    "IPTV Premium": "#4A00E0",
    "YouTube Premium": "#FF0000",
    "Crunchyroll": "#FF5F01",
    "VIX+": "linear-gradient(135deg, #FF8448, #FF3D79)",
    "Universal+": "#FBCC11",
    "Plex Premium": "#282A2D",
    "Apple TV+": "#000000",
    "Tidal": "#000000",
    "Spotify": "#1DB954",
    
    // Combos
    "Netflix + HBO Max": "radial-gradient(circle at center, #0d4c7f, #7fcfda)",
    "Netflix + Prime Video": "radial-gradient(circle at center, #0d4c7f, #7fcfda)",
    
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
    
    // Software
    "ChatGPT": "#10A37F",
    "Duolingo": "#58CC02",
    "Canva Mensual": "linear-gradient(135deg, #03BFCD, #7A2EE7)",
    "Canva Anual": "linear-gradient(135deg, #03BFCD, #7A2EE7)",
    "CapCut Mensual": "#000000",
    "CapCut Trimestral": "#000000",
    "Photoshop": "#001E36",
    "Premiere Pro": "#00005B",
    "Illustrator": "#330000",
    "After Effects": "#00005B",
    "Animate": "#00005B"
};

// Datos de productos actualizados (igual que antes)
const products = [
    // Streaming
    {
        id: 1,
        title: "Netflix",
        description: "Perfil individual en cuenta premium. Acceso completo al catálogo con calidad 4K UHD y contenido exclusivo.",
        price: "$15.000/mes",
        category: "streaming",
        image: "https://raw.githubusercontent.com/novaklar/web/refs/heads/main/nkc/netflix.png"
    },
    {
        id: 2,
        title: "HBO Max",
        description: "Perfil individual con acceso a todo el contenido de HBO, Warner Bros, DC, y series exclusivas en calidad máxima.",
        price: "$10.000/mes",
        category: "streaming",
        image: "https://raw.githubusercontent.com/novaklar/web/refs/heads/main/nkc/hbo.png"
    },
    {
        id: 3,
        title: "Disney+ Estándar",
        description: "Plan estándar con acceso a todo el universo Disney, Marvel, Star Wars y National Geographic en calidad Full HD.",
        price: "$10.500/mes",
        category: "streaming",
        image: "https://raw.githubusercontent.com/novaklar/web/refs/heads/main/nkc/estandardisney.png"
    },
    {
        id: 4,
        title: "Disney+ Premium",
        description: "Plan premium con calidad 4K UHD, HDR10, Dolby Atmos y contenido IMAX Enhanced. La mejor experiencia Disney.",
        price: "$14.000/mes",
        category: "streaming",
        image: "https://raw.githubusercontent.com/novaklar/web/refs/heads/main/nkc/disneypremium.png"
    },
    {
        id: 5,
        title: "Prime Video",
        description: "Perfil individual con acceso a series Amazon Originals, películas exclusivas y contenido adicional sin anuncios.",
        price: "$10.000/mes",
        category: "streaming",
        image: "https://raw.githubusercontent.com/novaklar/web/refs/heads/main/nkc/prime.png"
    },
    {
        id: 6,
        title: "Paramount+",
        description: "Acceso a contenido exclusivo de Paramount, CBS, MTV, Nickelodeon y películas de estreno 45 días después del cine.",
        price: "$10.000/mes",
        category: "streaming",
        image: "https://raw.githubusercontent.com/novaklar/web/refs/heads/main/nkc/paramount.png"
    },
    {
        id: 7,
        title: "Rakuten Viki",
        description: "Perfil individual con acceso ilimitado a dramas asiáticos, K-dramas exclusivos y contenido sin anuncios.",
        price: "$11.500/mes",
        category: "streaming",
        image: "https://raw.githubusercontent.com/novaklar/web/refs/heads/main/nkc/viki.png"
    },
    {
        id: 8,
        title: "DirecTV Go",
        description: "Acceso a más de 100 canales en vivo y contenido on demand desde cualquier dispositivo. Incluye deportes y noticias.",
        price: "$15.000/mes",
        category: "streaming",
        image: "https://raw.githubusercontent.com/novaklar/web/refs/heads/main/nkc/dgo.png"
    },
    {
        id: 9,
        title: "IPTV Premium",
        description: "Servicio IPTV con más de 10,000 canales internacionales, VOD y deportes en vivo. Calidad Full HD y 4K disponible.",
        price: "$12.500/mes",
        category: "streaming",
        image: "https://raw.githubusercontent.com/novaklar/web/refs/heads/main/nkc/iptv.png"
    },
    {
        id: 10,
        title: "YouTube Premium",
        description: "YouTube sin anuncios, reproducción en segundo plano, descargas y acceso a YouTube Music Premium.",
        price: "$12.500/mes",
        category: "streaming",
        image: "https://raw.githubusercontent.com/novaklar/web/refs/heads/main/nkc/youtube.png"
    },
    {
        id: 11,
        title: "Crunchyroll",
        description: "Catálogo más grande de anime, simulcasts el mismo día de Japón, manga digital y contenido sin anuncios.",
        price: "$10.000/mes",
        category: "streaming",
        image: "https://raw.githubusercontent.com/novaklar/web/refs/heads/main/nkc/crunchyroll.png"
    },
    {
        id: 12,
        title: "VIX+",
        description: "Telenovelas exclusivas, series originales en español, películas latinas y contenido sin interrupciones.",
        price: "$10.000/mes",
        category: "streaming",
        image: "https://raw.githubusercontent.com/novaklar/web/refs/heads/main/nkc/vix.png"
    },
    {
        id: 13,
        title: "Universal+",
        description: "Acceso a películas y series exclusivas de Universal Pictures, DreamWorks, y contenido original exclusivo.",
        price: "$11.000/mes",
        category: "streaming",
        image: "https://raw.githubusercontent.com/novaklar/web/refs/heads/main/nkc/universal.png"
    },
    {
        id: 14,
        title: "Plex Premium",
        description: "Funciones avanzadas incluyendo transmisión remota, sincronización móvil y metadatos mejorados para tu biblioteca.",
        price: "$10.000/mes",
        category: "streaming",
        image: "https://raw.githubusercontent.com/novaklar/web/refs/heads/main/nkc/plex.png"
    },
    {
        id: 15,
        title: "Apple TV+",
        description: "Todas las series y películas originales de Apple en 4K Dolby Vision con Dolby Atmos. Contenido exclusivo.",
        price: "$15.000/mes",
        category: "streaming",
        image: "https://raw.githubusercontent.com/novaklar/web/refs/heads/main/nkc/apple.png"
    },
    {
        id: 16,
        title: "Tidal",
        description: "Música en calidad HiFi (lossless) y Master Quality Authenticated. Catálogo exclusivo y contenido original.",
        price: "$10.000/mes",
        category: "streaming",
        image: "https://raw.githubusercontent.com/novaklar/web/refs/heads/main/nkc/tidal.png"
    },
    {
        id: 17,
        title: "Spotify",
        description: "Música sin anuncios, descargas ilimitadas, calidad de audio mejorada y acceso a podcasts exclusivos.",
        price: "Próximamente",
        category: "streaming",
        image: "https://raw.githubusercontent.com/novaklar/web/refs/heads/main/nkc/spotify.png"
    },
    
    // Combos
    {
        id: 1001,
        title: "Netflix + HBO Max",
        description: "Combo perfecto: disfruta del mejor entretenimiento con Netflix (catálogo completo) y HBO Max (contenido exclusivo). Ahorra $5.000 mensuales.",
        price: "$20.000/mes",
        category: "combos",
        image: "https://raw.githubusercontent.com/novaklar/web/refs/heads/main/nkc/nehbo.png"
    },
    {
        id: 1002,
        title: "Netflix + Prime Video",
        description: "Doble diversión: series originales de Netflix más el catálogo de Prime Video con envíos gratis. Ahorra $5.000 mensuales.",
        price: "$20.000/mes",
        category: "combos",
        image: "https://raw.githubusercontent.com/novaklar/web/refs/heads/main/nkc/nepri.png"
    },
    
    // Juegos - Roblox
    {
        id: 1801,
        title: "Roblox 40 Robux",
        description: "Moneda virtual para personalizar avatares, comprar accesorios y acceder a contenido exclusivo en Roblox.",
        price: "$6.500",
        category: "games",
        image: "https://raw.githubusercontent.com/novaklar/web/refs/heads/main/nkc/roblox.png"
    },
    {
        id: 1802,
        title: "Roblox 80 Robux",
        description: "Moneda virtual para personalizar avatares, comprar accesorios y acceder a contenido exclusivo en Roblox.",
        price: "$8.800",
        category: "games",
        image: "https://raw.githubusercontent.com/novaklar/web/refs/heads/main/nkc/roblox.png"
    },
    {
        id: 1803,
        title: "Roblox 120 Robux",
        description: "Moneda virtual para personalizar avatares, comprar accesorios y acceder a contenido exclusivo en Roblox.",
        price: "$12.500",
        category: "games",
        image: "https://raw.githubusercontent.com/novaklar/web/refs/heads/main/nkc/roblox.png"
    },
    {
        id: 1804,
        title: "Roblox 160 Robux",
        description: "Moneda virtual para personalizar avatares, comprar accesorios y acceder a contenido exclusivo en Roblox.",
        price: "$14.500",
        category: "games",
        image: "https://raw.githubusercontent.com/novaklar/web/refs/heads/main/nkc/roblox.png"
    },
    {
        id: 1805,
        title: "Roblox 240 Robux",
        description: "Moneda virtual para personalizar avatares, comprar accesorios y acceder a contenido exclusivo en Roblox.",
        price: "$19.500",
        category: "games",
        image: "https://raw.githubusercontent.com/novaklar/web/refs/heads/main/nkc/roblox.png"
    },
    {
        id: 1806,
        title: "Roblox 426 Robux",
        description: "Moneda virtual para personalizar avatares, comprar accesorios y acceder a contenido exclusivo en Roblox.",
        price: "$26.500",
        category: "games",
        image: "https://raw.githubusercontent.com/novaklar/web/refs/heads/main/nkc/roblox.png"
    },
    {
        id: 1807,
        title: "Roblox 480 Robux",
        description: "Moneda virtual para personalizar avatares, comprar accesorios y acceder a contenido exclusivo en Roblox.",
        price: "$32.500",
        category: "games",
        image: "https://raw.githubusercontent.com/novaklar/web/refs/heads/main/nkc/roblox.png"
    },
    {
        id: 1808,
        title: "Roblox Premium 450",
        description: "Membresía Premium con 450 Robux mensuales, descuentos en compras y acceso a funciones exclusivas.",
        price: "$29.500",
        category: "games",
        image: "https://raw.githubusercontent.com/novaklar/web/refs/heads/main/nkc/roblox.png"
    },
    {
        id: 1809,
        title: "Roblox Premium 1000",
        description: "Membresía Premium con 1000 Robux mensuales, mayores descuentos y beneficios exclusivos.",
        price: "$52.500",
        category: "games",
        image: "https://raw.githubusercontent.com/novaklar/web/refs/heads/main/nkc/roblox.png"
    },
    {
        id: 1810,
        title: "Roblox Premium 2200",
        description: "Membresía Premium superior con 2200 Robux mensuales y todos los beneficios premium al máximo nivel.",
        price: "$110.500",
        category: "games",
        image: "https://raw.githubusercontent.com/novaklar/web/refs/heads/main/nkc/roblox.png"
    },
    
    // Juegos - Free Fire
    {
        id: 1901,
        title: "Free Fire 110 Diamantes",
        description: "Diamantes para comprar skins épicas, armas legendarias y pases de batalla en Free Fire.",
        price: "$8.500",
        category: "games",
        image: "https://raw.githubusercontent.com/novaklar/web/refs/heads/main/nkc/freefire.png"
    },
    {
        id: 1902,
        title: "Free Fire 341 Diamantes",
        description: "Diamantes para comprar skins épicas, armas legendarias y pases de batalla en Free Fire.",
        price: "$16.500",
        category: "games",
        image: "https://raw.githubusercontent.com/novaklar/web/refs/heads/main/nkc/freefire.png"
    },
    {
        id: 1903,
        title: "Free Fire 451 Diamantes",
        description: "Diamantes para comprar skins épicas, armas legendarias y pases de batalla en Free Fire.",
        price: "$22.500",
        category: "games",
        image: "https://raw.githubusercontent.com/novaklar/web/refs/heads/main/nkc/freefire.png"
    },
    {
        id: 1904,
        title: "Free Fire 572 Diamantes",
        description: "Diamantes para comprar skins épicas, armas legendarias y pases de batalla en Free Fire.",
        price: "$24.500",
        category: "games",
        image: "https://raw.githubusercontent.com/novaklar/web/refs/heads/main/nkc/freefire.png"
    },
    {
        id: 1905,
        title: "Free Fire 1166 Diamantes",
        description: "Diamantes para comprar skins épicas, armas legendarias y pases de batalla en Free Fire.",
        price: "$43.500",
        category: "games",
        image: "https://raw.githubusercontent.com/novaklar/web/refs/heads/main/nkc/freefire.png"
    },
    {
        id: 1906,
        title: "Free Fire 2398 Diamantes",
        description: "Diamantes para comprar skins épicas, armas legendarias y pases de batalla en Free Fire.",
        price: "$85.500",
        category: "games",
        image: "https://raw.githubusercontent.com/novaklar/web/refs/heads/main/nkc/freefire.png"
    },
    {
        id: 1907,
        title: "Free Fire 6160 Diamantes",
        description: "Diamantes para comprar skins épicas, armas legendarias y pases de batalla en Free Fire.",
        price: "$200.500",
        category: "games",
        image: "https://raw.githubusercontent.com/novaklar/web/refs/heads/main/nkc/freefire.png"
    },
    {
        id: 1908,
        title: "Free Fire Tarjeta Semanal",
        description: "Tarjeta semanal que otorga diamantes diarios durante 7 días consecutivos.",
        price: "$12.500",
        category: "games",
        image: "https://raw.githubusercontent.com/novaklar/web/refs/heads/main/nkc/freefire.png"
    },
    {
        id: 1909,
        title: "Free Fire Tarjeta Mensual",
        description: "Tarjeta mensual que otorga diamantes diarios durante 30 días consecutivos.",
        price: "$53.000",
        category: "games",
        image: "https://raw.githubusercontent.com/novaklar/web/refs/heads/main/nkc/freefire.png"
    },
    
    // Software
    {
        id: 20,
        title: "ChatGPT",
        description: "Acceso a ChatGPT Plus: respuestas más rápidas, acceso prioritario durante picos y funciones avanzadas de IA.",
        price: "$20.500/mes",
        category: "software",
        image: "https://raw.githubusercontent.com/novaklar/web/refs/heads/main/nkc/gpt.png"
    },
    {
        id: 21,
        title: "Duolingo",
        description: "Duolingo Super: sin anuncios, lecciones ilimitadas, modo offline y progreso ilimitado en idiomas.",
        price: "Próximamente",
        category: "software",
        image: "https://raw.githubusercontent.com/novaklar/web/refs/heads/main/nkc/duo.png"
    },
    {
        id: 2201,
        title: "Canva Mensual",
        description: "Canva Pro: miles de plantillas premium, herramientas de diseño avanzadas, fondo removidor y biblioteca de elementos.",
        price: "$12.500/mes",
        category: "software",
        image: "https://raw.githubusercontent.com/novaklar/web/refs/heads/main/nkc/canva.png"
    },
    {
        id: 2202,
        title: "Canva Anual",
        description: "Canva Pro anual: todas las funciones premium con ahorro del 30% comparado con el plan mensual.",
        price: "$36.500/año",
        category: "software",
        image: "https://raw.githubusercontent.com/novaklar/web/refs/heads/main/nkc/canva.png"
    },
    {
        id: 2301,
        title: "CapCut Mensual",
        description: "CapCut Pro: efectos premium, sin marca de agua, herramientas de edición avanzadas y biblioteca de música exclusiva.",
        price: "$21.500/mes",
        category: "software",
        image: "https://raw.githubusercontent.com/novaklar/web/refs/heads/main/nkc/capcut.png"
    },
    {
        id: 2302,
        title: "CapCut Trimestral",
        description: "CapCut Pro trimestral: todas las funciones premium con ahorro del 25% comparado con el plan mensual.",
        price: "$60.500/trimestre",
        category: "software",
        image: "https://raw.githubusercontent.com/novaklar/web/refs/heads/main/nkc/capcut.png"
    },
    {
        id: 2401,
        title: "Photoshop",
        description: "Adobe Photoshop 2023: archivo de instalación completo con tutorial de activación. Todas las funciones profesionales.",
        price: "$12.000",
        category: "software",
        image: "https://raw.githubusercontent.com/novaklar/web/refs/heads/main/nkc/ps.png"
    },
    {
        id: 2402,
        title: "Premiere Pro",
        description: "Adobe Premiere Pro 2023: software profesional de edición de video con efectos y transiciones avanzadas.",
        price: "$12.000",
        category: "software",
        image: "https://raw.githubusercontent.com/novaklar/web/refs/heads/main/nkc/pr.png"
    },
    {
        id: 2403,
        title: "Illustrator",
        description: "Adobe Illustrator 2023: herramienta profesional de diseño vectorial para gráficos y ilustraciones.",
        price: "$12.000",
        category: "software",
        image: "https://raw.githubusercontent.com/novaklar/web/refs/heads/main/nkc/ai.png"
    },
    {
        id: 2404,
        title: "After Effects",
        description: "Adobe After Effects 2023: software profesional para efectos visuales, motion graphics y composición.",
        price: "$12.000",
        category: "software",
        image: "https://raw.githubusercontent.com/novaklar/web/refs/heads/main/nkc/ae.png"
    },
    {
        id: 2405,
        title: "Animate",
        description: "Adobe Animate 2023: creación de animaciones interactivas para web, juegos y aplicaciones.",
        price: "$12.000",
        category: "software",
        image: "https://raw.githubusercontent.com/novaklar/web/refs/heads/main/nkc/an.png"
    }
];

// Variable para controlar el overlay activo
let activeOverlay = null;

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
    
    productsToRender.forEach((product, index) => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.dataset.category = product.category;
        productCard.style.setProperty('--order', index);
        
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.title}" loading="lazy" onerror="this.src='https://via.placeholder.com/300x150/0d4c7f/ffffff?text=${encodeURIComponent(product.title)}'">
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.title}</h3>
                <div class="product-price">${product.price}</div>
            </div>
            <div class="product-details">
                <span class="product-category">${getCategoryName(product.category)}</span>
                <div class="product-description">${product.description}</div>
            </div>
        `;
        
        // Establecer color de fondo personalizado
        const detailsElement = productCard.querySelector('.product-details');
        const platformColor = platformColors[product.title] || 
            (product.category === 'streaming' ? '#0d4c7f' :
             product.category === 'combos' ? 'radial-gradient(circle at center, #0d4c7f, #7fcfda)' :
             product.category === 'games' ? '#080a33' : '#2ECC71');
        
        detailsElement.style.background = platformColor;
        
        // Añadir evento de clic para mostrar detalles
        productCard.addEventListener('click', function() {
            // Cerrar cualquier overlay activo
            if (activeOverlay) {
                activeOverlay.classList.remove('active');
            }
            
            // Si este no es el overlay activo, abrirlo
            if (activeOverlay !== this) {
                this.classList.add('active');
                activeOverlay = this;
            } else {
                // Si ya está activo, cerrarlo
                activeOverlay = null;
            }
        });
        
        catalog.appendChild(productCard);
    });
}

// Función para obtener el nombre de la categoría
function getCategoryName(category) {
    const categories = {
        'streaming': 'Streaming',
        'combos': 'Combo Especial',
        'games': 'Juegos',
        'software': 'Software'
    };
    return categories[category] || category;
}

// Filtrado por categoría - SIN auto-scroll
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

// Búsqueda de productos con debounce
let searchTimeout;
document.getElementById('searchInput').addEventListener('input', function() {
    clearTimeout(searchTimeout);
    
    searchTimeout = setTimeout(() => {
        const searchTerm = this.value.toLowerCase().trim();
        const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;
        
        let filteredProducts = products;
        
        if (activeFilter !== 'all') {
            filteredProducts = products.filter(product => product.category === activeFilter);
        }
        
        if (searchTerm) {
            filteredProducts = filteredProducts.filter(product => 
                product.title.toLowerCase().includes(searchTerm) || 
                product.description.toLowerCase().includes(searchTerm) ||
                product.category.toLowerCase().includes(searchTerm)
            );
        }
        
        renderProducts(filteredProducts);
    }, 300);
});

// Cerrar detalles al hacer clic fuera del overlay
document.addEventListener('click', function(e) {
    if (activeOverlay && 
        !e.target.closest('.product-details') && 
        !e.target.closest('.product-card')) {
        
        activeOverlay.classList.remove('active');
        activeOverlay = null;
    }
});

// Cerrar detalles con tecla ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && activeOverlay) {
        activeOverlay.classList.remove('active');
        activeOverlay = null;
    }
});

// Inicializar catálogo con animación
document.addEventListener('DOMContentLoaded', () => {
    renderProducts(products);
    
    // Añadir animación de carga
    setTimeout(() => {
        document.body.style.opacity = '1';
        document.body.style.transition = 'opacity 0.5s ease';
    }, 100);
});
