const productList =
    document.getElementById("product-list");


const filterButtons =
    document.querySelectorAll(".filter-button");


function displayProductList(productData) {

    if (!productList) {

        console.error(
            "Element product-list tidak ditemukan"
        );

        return;

    }


    if (
        typeof products === "undefined"
    ) {

        console.error(
            "Data products tidak ditemukan"
        );

        return;

    }


    productList.innerHTML =
        productData
            .map(product => {

                return createProductCard(product);

            })
            .join("");

}


filterButtons.forEach(button => {

    button.addEventListener(
        "click",
        function () {

            filterButtons.forEach(btn => {

                btn.classList.remove("active");

            });


            this.classList.add("active");


            const selectedCategory =
                this.dataset.category;


            if (
                selectedCategory === "Semua"
            ) {

                displayProductList(products);

                return;

            }


            const filteredProducts =
                products.filter(product => {

                    return (
                        product.category ===
                        selectedCategory
                    );

                });


            displayProductList(
                filteredProducts
            );

        }
    );

});


displayProductList(products);