<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Catálogo Streaming</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="styles.css">
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

            <!-- Prime Video (5) -->
            <div class="product-card prime" onclick="openModal('prime')">
                <div class="product-logo">
                    <img src="https://raw.githubusercontent.com/novaklar/catalogo/refs/heads/main/catalogos/5.png" alt="Prime Video">
                </div>
                <div class="product-price">$8.990</div>
            </div>

            <!-- Star+ (6) -->
            <div class="product-card starplus" onclick="openModal('starplus')">
                <div class="product-logo">
                    <img src="https://raw.githubusercontent.com/novaklar/catalogo/refs/heads/main/catalogos/6.png" alt="Star+">
                </div>
                <div class="product-price">$9.990</div>
            </div>

            <!-- Paramount+ (7) -->
            <div class="product-card paramount" onclick="openModal('paramount')">
                <div class="product-logo">
                    <img src="https://raw.githubusercontent.com/novaklar/catalogo/refs/heads/main/catalogos/7.png" alt="Paramount+">
                </div>
                <div class="product-price">$7.990</div>
            </div>

            <!-- IPTV (8) -->
            <div class="product-card iptv" onclick="openModal('iptv')">
                <div class="product-logo">
                    <img src="https://raw.githubusercontent.com/novaklar/catalogo/refs/heads/main/catalogos/8.png" alt="IPTV">
                </div>
                <div class="product-price">$12.000</div>
            </div>

            <!-- YouTube Premium (9) -->
            <div class="product-card youtube" onclick="openModal('youtube')">
                <div class="product-logo">
                    <img src="https://raw.githubusercontent.com/novaklar/catalogo/refs/heads/main/catalogos/9.png" alt="YouTube Premium">
                </div>
                <div class="product-price">$11.990</div>
            </div>

            <!-- VIX (10) -->
            <div class="product-card vix" onclick="openModal('vix')">
                <div class="product-logo">
                    <img src="https://raw.githubusercontent.com/novaklar/catalogo/refs/heads/main/catalogos/10.png" alt="VIX">
                </div>
                <div class="product-price">$5.990</div>
            </div>

            <!-- Crunchyroll (11) -->
            <div class="product-card crunchyroll" onclick="openModal('crunchyroll')">
                <div class="product-logo">
                    <img src="https://raw.githubusercontent.com/novaklar/catalogo/refs/heads/main/catalogos/11.png" alt="Crunchyroll">
                </div>
                <div class="product-price">$8.990</div>
            </div>

            <!-- Universal+ (12) -->
            <div class="product-card universal" onclick="openModal('universal')">
                <div class="product-logo">
                    <img src="https://raw.githubusercontent.com/novaklar/catalogo/refs/heads/main/catalogos/12.png" alt="Universal+">
                </div>
                <div class="product-price">$6.990</div>
            </div>

            <!-- Apple TV+ (13) -->
            <div class="product-card appletv" onclick="openModal('appletv')">
                <div class="product-logo">
                    <img src="https://raw.githubusercontent.com/novaklar/catalogo/refs/heads/main/catalogos/13.png" alt="Apple TV+">
                </div>
                <div class="product-price">$9.990</div>
            </div>

            <!-- DirecTV Go (15) -->
            <div class="product-card directv" onclick="openModal('directv')">
                <div class="product-logo">
                    <img src="https://raw.githubusercontent.com/novaklar/catalogo/refs/heads/main/catalogos/15.png" alt="DirecTV Go">
                </div>
                <div class="product-price">$15.990</div>
            </div>
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

    <script src="script.js"></script>
</body>
</html>
