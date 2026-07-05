const orderIdElement =
    document.getElementById("order-id");


const paymentInformation =
    document.getElementById("payment-information");


const shippingInformation =
    document.getElementById("shipping-information");


const orderProducts =
    document.getElementById("order-products");


const orderSubtotal =
    document.getElementById("order-subtotal");


const orderShipping =
    document.getElementById("order-shipping");


const orderPayment =
    document.getElementById("order-payment");


const orderTotal =
    document.getElementById("order-total");


const orderDate =
    document.getElementById("order-date");


const currentOrderStatus =
    document.getElementById(
        "current-order-status"
    );



function getLastOrder() {

    return JSON.parse(
        localStorage.getItem("lastOrder")
    );

}



function displayOrder() {

    const order =
        getLastOrder();


    if (!order) {

        alert(
            "Data pesanan tidak ditemukan!"
        );


        window.location.href =
            "index.html";


        return;

    }


    orderIdElement.textContent =
        `ID Pesanan: ${order.orderNumber}`;


    currentOrderStatus.textContent =
        order.status;


    orderDate.textContent =
        `Pesanan dibuat: ${order.date}`;


    displayPaymentInformation(order);


    displayShippingInformation(order);


    displayOrderProducts(order);


    displayOrderSummary(order);


    clearCart();

}



function displayPaymentInformation(order) {

    if (order.payment === "Transfer Bank") {

        paymentInformation.innerHTML = `

            <h2>
                Informasi Pembayaran
            </h2>


            <div class="payment-detail">

                <span>
                    Metode Pembayaran
                </span>

                <strong>
                    Transfer Bank
                </strong>

            </div>


            <div class="bank-information">

                <h3>
                    Bank BCA
                </h3>

                <p>
                    Nomor Rekening
                </p>

                <strong class="account-number">

                    1234567890

                </strong>


                <p>
                    Atas Nama
                </p>

                <strong>
                    Teknik Motor Jaya
                </strong>

            </div>


            <div class="payment-warning">

                Silakan transfer sebesar

                <strong>

                    ${formatRupiah(
                        order.total
                    )}

                </strong>

                ke rekening di atas.

            </div>

        `;

    }


    else if (order.payment === "QRIS") {

        paymentInformation.innerHTML = `

            <h2>
                Informasi Pembayaran
            </h2>


            <div class="payment-detail">

                <span>
                    Metode Pembayaran
                </span>

                <strong>
                    QRIS
                </strong>

            </div>


            <div class="qris-container">

                <div class="qris-placeholder">

                    QRIS

                </div>


                <p>

                    Scan QRIS menggunakan aplikasi
                    pembayaran Anda.

                </p>


                <strong>

                    ${formatRupiah(
                        order.total
                    )}

                </strong>

            </div>

        `;

    }


    else if (order.payment === "COD") {

        paymentInformation.innerHTML = `

            <h2>
                Informasi Pembayaran
            </h2>


            <div class="payment-detail">

                <span>
                    Metode Pembayaran
                </span>

                <strong>
                    COD
                </strong>

            </div>


            <div class="cod-information">

                <h3>
                    Bayar di Tempat
                </h3>


                <p>

                    Silakan siapkan pembayaran sebesar

                    <strong>

                        ${formatRupiah(
                            order.total
                        )}

                    </strong>

                    ketika pesanan diterima.

                </p>

            </div>

        `;

    }


    else {

        paymentInformation.innerHTML = `

            <h2>
                Informasi Pembayaran
            </h2>

            <p>
                Metode pembayaran:
                <strong>
                    ${order.payment || "-"}
                </strong>
            </p>

        `;

    }

}



function displayShippingInformation(order) {

    const customer =
        order.customer || {};


    const shipping =
        order.shipping || {};


    shippingInformation.innerHTML = `

        <div class="shipping-detail">


            <div>

                <span>
                    Nama Penerima
                </span>

                <strong>

                    ${customer.name || "-"}

                </strong>

            </div>


            <div>

                <span>
                    Nomor WhatsApp
                </span>

                <strong>

                    ${customer.phone || "-"}

                </strong>

            </div>


            <div>

                <span>
                    Alamat
                </span>

                <strong>

                    ${customer.address || "-"}

                </strong>

            </div>


            <div>

                <span>
                    Kurir
                </span>

                <strong>

                    ${shipping.name || "-"}

                </strong>

            </div>


        </div>

    `;

}



function displayOrderProducts(order) {

    const items =
        order.items || [];


    if (items.length === 0) {

        orderProducts.innerHTML = `

            <p>
                Produk pesanan tidak ditemukan.
            </p>

        `;


        return;

    }


    orderProducts.innerHTML =
        items.map(item => {

            const itemTotal =

                Number(item.price) *

                Number(item.quantity);


            return `

                <div class="order-product">


                    <div class="order-product-image">

                        <img

                            src="../${item.image}"

                            alt="${item.name}"

                        >

                    </div>


                    <div class="order-product-info">

                        <h3>

                            ${item.name}

                        </h3>


                        <p>

                            Varian:
                            ${item.variant}

                        </p>


                        <p>

                            ${item.quantity}

                            ×

                            ${formatRupiah(
                                item.price
                            )}

                        </p>

                    </div>


                    <strong>

                        ${formatRupiah(
                            itemTotal
                        )}

                    </strong>


                </div>

            `;

        }).join("");

}



function displayOrderSummary(order) {

    orderSubtotal.textContent =

        formatRupiah(
            Number(order.subtotal) || 0
        );


    orderShipping.textContent =

        formatRupiah(

            Number(
                order.shipping?.cost
            ) || 0

        );


    orderPayment.textContent =

        order.payment || "-";


    orderTotal.textContent =

        formatRupiah(
            Number(order.total) || 0
        );

}



function clearCart() {

    localStorage.removeItem("cart");


    if (
        typeof updateCartCount ===
        "function"
    ) {

        updateCartCount();

    }

}



displayOrder();