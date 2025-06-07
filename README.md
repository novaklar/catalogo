<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Catálogo Streaming</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <!-- Rutas garantizadas para GitHub Pages -->
    <link rel="stylesheet" href="./styles.css">
    <script src="./script.js" defer></script>
</head>
<body>
    <!-- Header -->
    <header>
        <div class="logo">STREAM<span>CAT</span></div>
        <div class="menu-toggle">
            <i class="fas fa-bars"></i>
        </div>
    </header>

    <!-- Product Grid -->
    <section class="products">
        <div class="product-grid">
            <!-- Netflix (1) -->
            <div class="product-card netflix" onclick="openModal('netflix')">
                <div class="product-logo">
                    <img src="https://raw.githubusercontent.com/novaklar/catalogo/refs/heads/main/catalogos/1.png" alt="Netflix">
                </div>
                <div class="product-price">$13.000</div>
            </div>

            <!-- HBO Max (2) -->
            <div class="product-card hbo" onclick="openModal('hbo')">
                <div class="product-logo">
                    <img src="https://raw.githubusercontent.com/novaklar/catalogo/refs/heads/main/catalogos/2.png" alt="HBO Max">
                </div>
                <div class="product-price">$14.990</div>
            </div>

            <!-- Resto de las tarjetas... (mantén el mismo formato que las anteriores) -->
            <!-- Disney+ Estándar (3) -->
            <div class="product-card disney-standard" onclick="openModal('disney-standard')">
                <div class="product-logo">
                    <img src="https://raw.githubusercontent.com/novaklar/catalogo/refs/heads/main/catalogos/3.png" alt="Disney+ Estándar">
                </div>
                <div class="product-price">$7.990</div>
            </div>

            <!-- Disney+ Premium (4) -->
            <div class="product-card disney-premium" onclick="openModal('disney-premium')">
                <div class="product-logo">
                    <img src="https://raw.githubusercontent.com/novaklar/catalogo/refs/heads/main/catalogos/4.png" alt="Disney+ Premium">
                </div>
                <div class="product-price">$11.990</div>
            </div>

            <!-- Continúa con las demás plataformas... -->
        </div>
    </section>

    <!-- Modal -->
    <div class="modal" id="productModal">
        <div class="modal-content">
            <span class="close-modal" onclick="closeModal()">&times;</span>
            <h2 id="modal-title"></h2>
            <p id="modal-price"></p>
        </div>
    </div>

    <!-- Footer -->
    <footer>
        <p>¿Necesitas ayuda? contacto@streamcat.com</p>
    </footer>
</body>
</html>
