const cartProducts =
    document.getElementById("cart-products");

const totalItemsElement =
    document.getElementById("total-items");

const cartSubtotalElement =
    document.getElementById("cart-subtotal");

const cartTotalElement =
    document.getElementById("cart-total");

const checkoutButton =
    document.getElementById("checkout-button");


/* ============================= */
/* AMBIL DATA KERANJANG */
/* ============================= */

function getCart() {

    return JSON.parse(
        localStorage.getItem("cart")
    ) || [];

}


/* ============================= */
/* SIMPAN DATA KERANJANG */
/* ============================= */

function saveCart(cart) {

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    updateCartCount();

}


/* ============================= */
/* TAMPILKAN KERANJANG */
/* ============================= */

function displayCart() {

    const cart = getCart();


    if (cart.length === 0) {

        cartProducts.innerHTML = `

            <div class="empty-cart">

                <div class="empty-cart-icon">
                    🛒
                </div>

                <h2>
                    Keranjang Masih Kosong
                </h2>

                <p>
                    Belum ada produk di keranjang Anda.
                </p>

                <a
                    href="produk.html"
                    class="btn-primary"
                >
                    Mulai Belanja
                </a>

            </div>

        `;


        totalItemsElement.textContent = 0;

        cartSubtotalElement.textContent =
            formatRupiah(0);

        cartTotalElement.textContent =
            formatRupiah(0);

        checkoutButton.style.display =
            "none";

        return;

    }


    checkoutButton.style.display =
        "block";


    cartProducts.innerHTML =

        cart.map(

            (item, index) => `

                <div class="cart-item">


                    <div class="cart-item-image">

                        <img
                            src="../${item.image}"
                            alt="${item.name}"
                        >

                    </div>


                    <div class="cart-item-info">

                        <span class="product-category">

                            Produk Teknik Motor Jaya

                        </span>


                        <h3>

                            ${item.name}

                        </h3>


                        <p>

                            Varian:

                            <strong>

                                ${item.variant}

                            </strong>

                        </p>


                        <span class="cart-item-price">

                            ${formatRupiah(
                                item.price
                            )}

                        </span>

                    </div>


                    <div class="cart-quantity">


                        <button
                            onclick="
                                decreaseCartQuantity(
                                    ${index}
                                )
                            "
                        >

                            −

                        </button>


                        <span>

                            ${item.quantity}

                        </span>


                        <button
                            onclick="
                                increaseCartQuantity(
                                    ${index}
                                )
                            "
                        >

                            +

                        </button>


                    </div>


                    <div class="cart-item-total">

                        ${formatRupiah(

                            item.price *
                            item.quantity

                        )}

                    </div>


                    <button
                        class="remove-cart-button"

                        onclick="
                            removeCartItem(
                                ${index}
                            )
                        "
                    >

                        Hapus

                    </button>


                </div>

            `

        ).join("");


    calculateCartTotal(cart);

}


/* ============================= */
/* HITUNG TOTAL KERANJANG */
/* ============================= */

function calculateCartTotal(cart) {

    const totalItems =

        cart.reduce(

            (total, item) => {

                return (

                    total +
                    Number(item.quantity)

                );

            },

            0

        );


    const subtotal =

        cart.reduce(

            (total, item) => {

                return (

                    total +

                    (
                        Number(item.price) *
                        Number(item.quantity)
                    )

                );

            },

            0

        );


    totalItemsElement.textContent =
        totalItems;


    cartSubtotalElement.textContent =
        formatRupiah(subtotal);


    cartTotalElement.textContent =
        formatRupiah(subtotal);

}


/* ============================= */
/* TAMBAH JUMLAH PRODUK */
/* ============================= */

function increaseCartQuantity(index) {

    const cart = getCart();


    cart[index].quantity =
        Number(cart[index].quantity) + 1;


    saveCart(cart);


    displayCart();

}


/* ============================= */
/* KURANGI JUMLAH PRODUK */
/* ============================= */

function decreaseCartQuantity(index) {

    const cart = getCart();


    if (
        Number(cart[index].quantity) > 1
    ) {

        cart[index].quantity =
            Number(cart[index].quantity) - 1;

    }


    saveCart(cart);


    displayCart();

}


/* ============================= */
/* HAPUS PRODUK */
/* ============================= */

function removeCartItem(index) {

    const cart = getCart();


    const productName =
        cart[index].name;


    const confirmDelete =
        confirm(
            `Hapus ${productName} dari keranjang?`
        );


    if (!confirmDelete) {

        return;

    }


    cart.splice(
        index,
        1
    );


    saveCart(cart);


    displayCart();

}


/* ============================= */
/* LANJUT CHECKOUT */
/* ============================= */

if (checkoutButton) {

    checkoutButton.addEventListener(

        "click",

        function (event) {

            const cart = getCart();


            if (cart.length === 0) {

                event.preventDefault();


                alert(
                    "Keranjang masih kosong."
                );


                return;

            }


            localStorage.setItem(

                "checkoutCart",

                JSON.stringify(cart)

            );

        }

    );

}


/* ============================= */
/* JALANKAN HALAMAN KERANJANG */
/* ============================= */

displayCart();