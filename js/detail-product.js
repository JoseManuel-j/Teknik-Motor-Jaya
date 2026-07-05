const productDetail =
    document.getElementById("product-detail");


const urlParameters =
    new URLSearchParams(
        window.location.search
    );


const productId =
    Number(
        urlParameters.get("id")
    );


const selectedProduct =
    products.find(product => {

        return product.id === productId;

    });


let selectedVariant = null;



function displayProductDetail() {

    if (!selectedProduct) {

        productDetail.innerHTML = `

            <div class="product-not-found">

                <h1>

                    Produk Tidak Ditemukan

                </h1>


                <p>

                    Produk yang Anda cari
                    tidak tersedia.

                </p>


                <a
                    href="produk.html"
                    class="btn-primary"
                >

                    Kembali ke Produk

                </a>

            </div>

        `;


        return;

    }


    selectedVariant =
        selectedProduct.variants[0];


    productDetail.innerHTML = `

        <div class="detail-image">

            <img
                src="../${selectedProduct.image}"
                alt="${selectedProduct.name}"
            >

        </div>


        <div class="detail-information">


            <span class="product-category">

                ${selectedProduct.category}

            </span>


            <h1>

                ${selectedProduct.name}

            </h1>


            ${
                selectedProduct.featured

                    ? `

                        <span class="detail-featured">

                            Produk Pilihan

                        </span>

                    `

                    : ""

            }


            <div
                class="detail-price"
                id="detail-price"
            >

                ${formatRupiah(
                    selectedVariant.price
                )}

            </div>


            <div class="detail-description">

                <h3>

                    Deskripsi Produk

                </h3>


                <p>

                    ${selectedProduct.description}

                </p>

            </div>


            <div class="variant-section">

                <h3>

                    Pilih Varian

                </h3>


                <div class="variant-container">

                    ${

                        selectedProduct.variants

                            .map(

                                (
                                    variant,
                                    index
                                ) => `

                                    <button

                                        class="
                                            variant-button
                                            ${
                                                index === 0
                                                    ? "active"
                                                    : ""
                                            }
                                        "

                                        data-index="${index}"

                                    >

                                        <span>

                                            ${variant.name}

                                        </span>


                                        <strong>

                                            ${formatRupiah(
                                                variant.price
                                            )}

                                        </strong>

                                    </button>

                                `

                            )

                            .join("")

                    }

                </div>

            </div>


            <div class="quantity-section">

                <h3>

                    Jumlah

                </h3>


                <div class="quantity-control">

                    <button id="decrease-quantity">

                        −

                    </button>


                    <span id="quantity">

                        1

                    </span>


                    <button id="increase-quantity">

                        +

                    </button>

                </div>

            </div>


            <button
                class="add-cart-button"
                id="add-to-cart"
            >

                Tambah ke Keranjang

            </button>


            <div class="detail-benefits">

                <div>

                    ✓ Produk Berkualitas

                </div>


                <div>

                    🚚 Pengiriman JNE, J&T dan SiCepat

                </div>


                <div>

                    💳 Transfer Bank, QRIS dan COD

                </div>

            </div>


        </div>

    `;


    activateVariantButtons();


    activateQuantityButtons();


    activateAddCartButton();

}



function activateVariantButtons() {

    const variantButtons =
        document.querySelectorAll(
            ".variant-button"
        );


    variantButtons.forEach(button => {

        button.addEventListener(
            "click",
            function () {

                variantButtons.forEach(btn => {

                    btn.classList.remove(
                        "active"
                    );

                });


                this.classList.add(
                    "active"
                );


                const variantIndex =
                    Number(
                        this.dataset.index
                    );


                selectedVariant =
                    selectedProduct
                        .variants[variantIndex];


                document
                    .getElementById(
                        "detail-price"
                    )
                    .textContent =
                        formatRupiah(
                            selectedVariant.price
                        );

            }
        );

    });

}



function activateQuantityButtons() {

    const quantityElement =
        document.getElementById(
            "quantity"
        );


    const decreaseButton =
        document.getElementById(
            "decrease-quantity"
        );


    const increaseButton =
        document.getElementById(
            "increase-quantity"
        );


    let quantity = 1;


    decreaseButton.addEventListener(
        "click",
        function () {

            if (quantity > 1) {

                quantity--;

                quantityElement.textContent =
                    quantity;

            }

        }
    );


    increaseButton.addEventListener(
        "click",
        function () {

            quantity++;

            quantityElement.textContent =
                quantity;

        }
    );

}



function activateAddCartButton() {

    const addCartButton =
        document.getElementById(
            "add-to-cart"
        );


    addCartButton.addEventListener(
        "click",
        function () {

            const quantity =
                Number(
                    document
                        .getElementById(
                            "quantity"
                        )
                        .textContent
                );


            addProductToCart(quantity);

        }
    );

}



function addProductToCart(quantity) {

    const cart =
        JSON.parse(
            localStorage.getItem("cart")
        ) || [];


    const existingProduct =
        cart.find(item => {

            return (

                item.id ===
                    selectedProduct.id

                &&

                item.variant ===
                    selectedVariant.name

            );

        });


    if (existingProduct) {

        existingProduct.quantity +=
            quantity;

    }

    else {

        cart.push({

            id:
                selectedProduct.id,

            name:
                selectedProduct.name,

            image:
                selectedProduct.image,

            variant:
                selectedVariant.name,

            price:
                selectedVariant.price,

            quantity:
                quantity

        });

    }


    localStorage.setItem(

        "cart",

        JSON.stringify(cart)

    );


    updateCartCount();


    alert(

        `${selectedProduct.name} berhasil ditambahkan ke keranjang!`

    );

}



displayProductDetail();