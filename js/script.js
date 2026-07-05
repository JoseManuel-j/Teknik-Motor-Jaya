function formatRupiah(number) {

    return new Intl.NumberFormat(
        "id-ID",
        {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0
        }
    ).format(number);

}


function createProductCard(product) {

    const lowestPrice = Math.min(
        ...product.variants.map(
            variant => variant.price
        )
    );


    return `
        <div class="product-card">

            <div class="product-image">

                <img
                    src="../${product.image}"
                    alt="${product.name}"
                >

                ${
                    product.featured
                        ? `
                            <span class="featured-badge">
                                Produk Pilihan
                            </span>
                        `
                        : ""
                }

            </div>


            <div class="product-info">

                <span class="product-category">
                    ${product.category}
                </span>

                <h3>
                    ${product.name}
                </h3>

                <p class="product-price">

                    Mulai dari
                    ${formatRupiah(lowestPrice)}

                </p>


                <a
                    href="detail-produk.html?id=${product.id}"
                    class="product-button"
                >

                    Lihat Detail

                </a>

            </div>

        </div>
    `;

}


function updateCartCount() {

    const cart = JSON.parse(
        localStorage.getItem("cart")
    ) || [];


    const totalItems = cart.reduce(
        (total, item) => {
            return total + item.quantity;
        },
        0
    );


    const cartCount =
        document.getElementById("cart-count");


    if (cartCount) {

        cartCount.textContent =
            totalItems;

    }

}


function createWhatsAppButton() {

    const whatsappButton =
        document.createElement("a");


    whatsappButton.href =
        "https://wa.me/6281234567890";


    whatsappButton.target =
        "_blank";


    whatsappButton.className =
        "whatsapp-button";


    whatsappButton.innerHTML = `
        <span class="whatsapp-icon">
            ☎
        </span>

        <span class="whatsapp-text">
            Chat WhatsApp
        </span>
    `;


    document.body.appendChild(
        whatsappButton
    );

}


function setActiveNavigation() {

    const currentPage =
        window.location.pathname
            .split("/")
            .pop();


    const navigationLinks =
        document.querySelectorAll(
            ".navbar nav a"
        );


    navigationLinks.forEach(link => {

        const linkPage =
            link.getAttribute("href");


        link.classList.remove("active");


        if (linkPage === currentPage) {

            link.classList.add("active");

        }

    });

}


updateCartCount();

createWhatsAppButton();

setActiveNavigation();