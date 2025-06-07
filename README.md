<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Catálogo Streaming</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        :root {
            --color-bg: #ffffff;
            --font-main: 'Roboto', sans-serif;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: var(--font-main);
            background-color: var(--color-bg);
        }

        /* Header */
        header {
            padding: 1rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: white;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }

        .logo {
            font-size: 1.5rem;
            font-weight: bold;
            color: #333;
        }

        .menu-toggle {
            font-size: 1.5rem;
            cursor: pointer;
        }

        /* Product Grid */
        .products {
            padding: 1rem;
        }

        .product-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 1rem;
        }

        .product-card {
            height: 80px;
            border-radius: 8px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 1rem;
            color: white;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }

        .product-logo {
            width: 50%;
            display: flex;
            align-items: center;
        }

        .product-logo img {
            max-height: 50px;
            width: auto;
        }

        .product-price {
            font-weight: bold;
            font-size: 1.1rem;
            background-color: rgba(0,0,0,0.15);
            padding: 0.3rem 0.8rem;
            border-radius: 5px;
        }

        /* Colores por plataforma */
        .netflix { 
            background: linear-gradient(135deg, #E50914 0%, #B00710 100%);
        }
        .hbo { 
            background: linear-gradient(135deg, #000000 0%, #222222 100%);
        }
        .disney-standard { 
            background: linear-gradient(135deg, #113CCF 0%, #0A2A9C 100%);
        }
        .disney-premium {
            background: linear-gradient(135deg, #1938D1 0%, #102DA3 100%);
        }
        .prime { 
            background: linear-gradient(135deg, #00A8E1 0%, #0087B9 100%);
        }
        .starplus { 
            background: linear-gradient(135deg, #040C2C 0%, #1A2B6B 100%);
        }
        .paramount { 
            background: linear-gradient(135deg, #0066FF 0%, #0038A8 100%);
        }
        .iptv { 
            background: linear-gradient(135deg, #FF6600 0%, #CC5200 100%);
        }
        .youtube { 
            background: linear-gradient(135deg, #FF0000 0%, #CC0000 100%);
        }
        .vix { 
            background: linear-gradient(135deg, #FF3366 0%, #CC0044 100%);
        }
        .crunchyroll { 
            background: linear-gradient(135deg, #FFCC00 0%, #FF9900 100%);
        }
        .universal { 
            background: linear-gradient(135deg, #0033A0 0%, #001F6B 100%);
        }
        .appletv { 
            background: linear-gradient(135deg, #000000 0%, #333333 100%);
        }
        .directv { 
            background: linear-gradient(135deg, #00AEEF 0%, #0088CC 100%);
        }

        /* Modal */
        .modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.9);
            z-index: 1000;
            justify-content: center;
            align-items: center;
        }

        .modal-content {
            background-color: white;
            width: 90%;
            max-width: 400px;
            border-radius: 10px;
            padding: 1.5rem;
            text-align: center;
        }

        .close-modal {
            position: absolute;
            top: 1rem;
            right: 1rem;
            font-size: 1.5rem;
            cursor: pointer;
            color: white;
        }

        /* Footer */
        footer {
            padding: 1.5rem;
            text-align: center;
            color: #666;
            font-size: 0.9rem;
        }

        /* Responsive */
        @media (min-width: 600px) {
            .product-grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        @media (min-width: 900px) {
            .product-grid {
                grid-template-columns: repeat(3, 1fr);
            }
            
            .product-card {
                height: 100px;
            }
            
            .product-logo img {
                max-height: 60px;
            }
        }

        @media (min-width: 1200px) {
            .product-grid {
                grid-template-columns: repeat(4, 1fr);
            }
            
            .product-card {
                height: 120px;
            }
            
            .product-logo img {
                max-height: 70px;
            }
        }
    </style>
</head>
<body>
    <!-- Header -->
    <header>
        <div class="logo">STREAM<span style="color: #E50914;">CAT</span></div>
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

            <!-- Apple TV+ (14) - Nota: Según tu lista es Apple TV Plus otra vez, quizás hay un error -->
            <div class="product-card appletv" onclick="openModal('appletv')">
                <div class="product-logo">
                    <img src="https://raw.githubusercontent.com/novaklar/catalogo/refs/heads/main/catalogos/14.png" alt="Apple TV+">
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

    <!-- Modal (solo informativo) -->
    <div class="modal" id="productModal">
        <div class="modal-content">
            <span class="close-modal" onclick="closeModal()">&times;</span>
            <h2 id="modal-title" style="margin-bottom: 1rem;"></h2>
            <p id="modal-price" style="font-weight: bold;"></p>
        </div>
    </div>

    <!-- Footer -->
    <footer>
        <p>¿Necesitas ayuda? contacto@streamcat.com</p>
    </footer>

    <script>
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
    </script>
</body>
</html>
