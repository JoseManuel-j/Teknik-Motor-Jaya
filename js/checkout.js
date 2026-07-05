const checkoutItems =
    document.getElementById("checkout-items");

const checkoutSubtotal =
    document.getElementById("checkout-subtotal");

const shippingCostElement =
    document.getElementById("shipping-cost");

const checkoutTotal =
    document.getElementById("checkout-total");

const shippingOptions =
    document.querySelectorAll(
        'input[name="shipping"]'
    );

const paymentOptions =
    document.querySelectorAll(
        'input[name="payment"]'
    );

const checkoutForm =
    document.getElementById("checkout-form");


let shippingCost = 0;


function getCheckoutCart() {

    return JSON.parse(
        localStorage.getItem("cart")
    ) || [];

}


function displayCheckoutItems() {

    const cart = getCheckoutCart();


    if (cart.length === 0) {

        checkoutItems.innerHTML = `

            <div class="checkout-empty">

                <p>
                    Tidak ada produk dalam pesanan.
                </p>

                <a
                    href="produk.html"
                    class="btn-primary"
                >
                    Pilih Produk
                </a>

            </div>

        `;


        checkoutSubtotal.textContent =
            formatRupiah(0);


        shippingCostElement.textContent =
            formatRupiah(0);


        checkoutTotal.textContent =
            formatRupiah(0);


        return;

    }


    checkoutItems.innerHTML =
        cart.map(item => {

            const itemTotal =
                item.price * item.quantity;


            return `

                <div class="checkout-item">

                    <div class="checkout-item-image">

                        <img
                            src="../${item.image}"
                            alt="${item.name}"
                        >

                    </div>


                    <div class="checkout-item-info">

                        <h4>
                            ${item.name}
                        </h4>

                        <p>
                            Varian:
                            ${item.variant}
                        </p>

                        <p>
                            ${item.quantity}
                            ×
                            ${formatRupiah(item.price)}
                        </p>

                    </div>


                    <strong>

                        ${formatRupiah(itemTotal)}

                    </strong>

                </div>

            `;

        }).join("");


    calculateCheckoutTotal();

}


function calculateCheckoutSubtotal() {

    const cart = getCheckoutCart();


    return cart.reduce(
        (total, item) => {

            return total +
                (
                    item.price *
                    item.quantity
                );

        },
        0
    );

}


function calculateCheckoutTotal() {

    const subtotal =
        calculateCheckoutSubtotal();


    const total =
        subtotal + shippingCost;


    checkoutSubtotal.textContent =
        formatRupiah(subtotal);


    shippingCostElement.textContent =
        formatRupiah(shippingCost);


    checkoutTotal.textContent =
        formatRupiah(total);

}


shippingOptions.forEach(option => {

    option.addEventListener(
        "change",
        function () {

            shippingCost =
                Number(this.dataset.price) || 0;


            calculateCheckoutTotal();

        }
    );

});


checkoutForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const cart =
            getCheckoutCart();


        if (cart.length === 0) {

            alert(
                "Keranjang Anda masih kosong."
            );

            return;

        }


        const selectedShipping =
            document.querySelector(
                'input[name="shipping"]:checked'
            );


        const selectedPayment =
            document.querySelector(
                'input[name="payment"]:checked'
            );


        if (!selectedShipping) {

            alert(
                "Silakan pilih metode pengiriman."
            );

            return;

        }


        if (!selectedPayment) {

            alert(
                "Silakan pilih metode pembayaran."
            );

            return;

        }


        const customerName =
            document.getElementById(
                "customer-name"
            ).value;


        const customerPhone =
            document.getElementById(
                "customer-phone"
            ).value;


        const customerAddress =
            document.getElementById(
                "customer-address"
            ).value;


        const subtotal =
            calculateCheckoutSubtotal();


        const total =
            subtotal + shippingCost;


        const order = {

            orderNumber:
                "TMJ-" + Date.now(),

            customer: {

                name:
                    customerName,

                phone:
                    customerPhone,

                address:
                    customerAddress

            },

            items:
                cart,

            shipping: {

                name:
                    selectedShipping.value,

                cost:
                    shippingCost

            },

            payment:
                selectedPayment.value,

            subtotal:
                subtotal,

            total:
                total,

            status:
                "Pesanan Diproses",

            date:
                new Date().toLocaleString(
                    "id-ID"
                )

        };


        localStorage.setItem(
            "lastOrder",
            JSON.stringify(order)
        );


        localStorage.removeItem("cart");


        window.location.href =
            "pesanan.html";

    }
);


displayCheckoutItems();