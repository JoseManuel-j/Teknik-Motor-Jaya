const products = [
    // =========================
    // SPAREPART MOTOR
    // =========================

    {
        id: 1,
        name: "Kampas Rem Honda",
        category: "Sparepart Motor",
        image: "assets/images/kampas-rem.jpg",
        description: "Kampas rem motor berkualitas yang dirancang untuk memberikan pengereman lebih stabil dan aman. Cocok digunakan untuk kebutuhan berkendara sehari-hari.",
        featured: true,
        variants: [
            {
                name: "Honda Beat",
                price: 45000
            },
            {
                name: "Honda Vario",
                price: 55000
            },
            {
                name: "Honda PCX",
                price: 75000
            }
        ]
    },

    {
        id: 2,
        name: "Busi NGK Motor",
        category: "Sparepart Motor",
        image: "assets/images/Busi-ngk.jpg",
        description: "Busi NGK membantu proses pembakaran mesin menjadi lebih optimal serta menjaga performa mesin motor tetap stabil.",
        featured: true,
        variants: [
            {
                name: "Standard",
                price: 25000
            },
            {
                name: "Platinum",
                price: 45000
            },
            {
                name: "Iridium",
                price: 95000
            }
        ]
    },

    {
        id: 3,
        name: "Rantai Motor DID",
        category: "Sparepart Motor",
        image: "assets/images/rantai-did.jpg",
        description: "Rantai motor berkualitas dengan material kuat dan tahan lama. Cocok digunakan untuk motor harian maupun perjalanan jarak jauh.",
        featured: false,
        variants: [
            {
                name: "420 - 100L",
                price: 125000
            },
            {
                name: "428 - 120L",
                price: 165000
            },
            {
                name: "520 - 120L",
                price: 250000
            }
        ]
    },

    {
        id: 4,
        name: "Aki Motor GS Astra",
        category: "Sparepart Motor",
        image: "assets/images/aki-motor.jpg",
        description: "Aki motor berkualitas untuk membantu sistem kelistrikan dan starter motor bekerja secara optimal.",
        featured: false,
        variants: [
            {
                name: "GTZ5S",
                price: 210000
            },
            {
                name: "GTZ6V",
                price: 275000
            },
            {
                name: "GTZ7S",
                price: 350000
            }
        ]
    },


    // =========================
    // OLI DAN PERAWATAN
    // =========================

    {
        id: 5,
        name: "Shell Advance AX7",
        category: "Oli & Perawatan",
        image: "assets/images/shell-advance.jpg",
        description: "Oli mesin motor dengan teknologi synthetic yang membantu menjaga kebersihan mesin dan memberikan performa optimal.",
        featured: true,
        variants: [
            {
                name: "800 ML",
                price: 55000
            },
            {
                name: "1 Liter",
                price: 68000
            },
            {
                name: "1.2 Liter",
                price: 80000
            }
        ]
    },

    {
        id: 6,
        name: "Castrol Power1",
        category: "Oli & Perawatan",
        image: "assets/images/castrol-power1.jpg",
        description: "Oli motor dengan Power Release Technology yang membantu meningkatkan akselerasi dan menjaga performa mesin.",
        featured: true,
        variants: [
            {
                name: "800 ML",
                price: 58000
            },
            {
                name: "1 Liter",
                price: 72000
            },
            {
                name: "1.2 Liter",
                price: 85000
            }
        ]
    },

    {
        id: 7,
        name: "Motul 5100",
        category: "Oli & Perawatan",
        image: "assets/images/motul-5100.jpg",
        description: "Oli semi synthetic berkualitas tinggi yang memberikan perlindungan maksimal terhadap mesin motor.",
        featured: false,
        variants: [
            {
                name: "1 Liter",
                price: 115000
            },
            {
                name: "1.5 Liter",
                price: 165000
            },
            {
                name: "2 Liter",
                price: 215000
            }
        ]
    },

    {
        id: 8,
        name: "Yamalube Super Matic",
        category: "Oli & Perawatan",
        image: "assets/images/yamaha-lube.jpg",
        description: "Oli motor matic yang membantu menjaga performa mesin serta memberikan perlindungan pada penggunaan harian.",
        featured: false,
        variants: [
            {
                name: "800 ML",
                price: 48000
            },
            {
                name: "1 Liter",
                price: 60000
            },
            {
                name: "1.2 Liter",
                price: 75000
            }
        ]
    },


    // =========================
    // AKSESORIS MOTOR
    // =========================

    {
        id: 9,
        name: "Helm Full Face",
        category: "Aksesoris Motor",
        image: "assets/images/helm-full-face.jpg",
        description: "Helm full face dengan desain modern yang memberikan perlindungan maksimal dan kenyamanan bagi pengendara.",
        featured: true,
        variants: [
            {
                name: "Size M",
                price: 350000
            },
            {
                name: "Size L",
                price: 375000
            },
            {
                name: "Size XL",
                price: 400000
            }
        ]
    },

    {
        id: 10,
        name: "Sarung Tangan Riding",
        category: "Aksesoris Motor",
        image: "assets/images/sarung-tangan.jpg",
        description: "Sarung tangan riding yang nyaman dengan perlindungan pada bagian jari dan telapak tangan.",
        featured: false,
        variants: [
            {
                name: "Size M",
                price: 75000
            },
            {
                name: "Size L",
                price: 85000
            },
            {
                name: "Size XL",
                price: 95000
            }
        ]
    },

    {
        id: 11,
        name: "Holder HP Motor",
        category: "Aksesoris Motor",
        image: "assets/images/holder-hp.jpg",
        description: "Holder smartphone motor yang kuat dan stabil untuk membantu penggunaan navigasi selama perjalanan.",
        featured: false,
        variants: [
            {
                name: "Standard",
                price: 65000
            },
            {
                name: "Anti Getar",
                price: 95000
            },
            {
                name: "Premium Waterproof",
                price: 145000
            }
        ]
    },

    {
        id: 12,
        name: "Jas Hujan Riding",
        category: "Aksesoris Motor",
        image: "assets/images/jas-hujan.jpg",
        description: "Jas hujan riding dengan bahan tahan air yang membantu melindungi pengendara saat berkendara dalam kondisi hujan.",
        featured: false,
        variants: [
            {
                name: "Size M",
                price: 120000
            },
            {
                name: "Size L",
                price: 135000
            },
            {
                name: "Size XL",
                price: 150000
            }
        ]
    }
];