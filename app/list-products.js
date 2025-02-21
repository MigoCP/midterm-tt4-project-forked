document.addEventListener("DOMContentLoaded", function () {
    const products = [
        { title: "Lipstick", desc: "Long-lasting matte finish", price: "$12.99", img: "assets/images/pexels-828860-2587370.jpg" },
        { title: "Handbag", desc: "Stylish designer bag", price: "$49.99", img: "assets/images/pexels-enginakyurt-4458519.jpg" },
        { title: "Soap Bar", desc: "Organic handmade soap", price: "$8.99", img: "assets/images/pexels-eprism-studio-108171-335257.jpg" },
        { title: "Mountain View", desc: "Scenic photography print", price: "$19.99", img: "assets/images/pexels-laryssa-suaid-798122-1667088.jpg" },
        { title: "Camera", desc: "Professional DSLR Camera", price: "$599.99", img: "assets/images/pexels-madebymath-90946.jpg" },
        { title: "Laptop", desc: "Modern sleek laptop", price: "$999.99", img: "assets/images/pexels-pixabay-4158.jpg" },
        { title: "Teapot Set", desc: "Elegant ceramic teapot set", price: "$29.99", img: "assets/images/pexels-pixabay-248412(1).jpg" },
        { title: "Coffee Mug", desc: "Minimalist coffee mug", price: "$14.99", img: "assets/images/pexels-pixabay-248412.jpg" },
        { title: "Vintage Watch", desc: "Luxury mechanical watch", price: "$199.99", img: "assets/images/pexels-pixabay-258244.jpg" },
        { title: "Modern Watch", desc: "Classic wristwatch", price: "$149.99", img: "assets/images/pexels-quang-viet-nguyen-107013384-9561297.jpg" },
        { title: "Makeup Kit", desc: "Complete beauty set", price: "$39.99", img: "assets/images/pexels-suzyhazelwood-2533266.jpg" },
        { title: "Makeup Brushes", desc: "Premium brush collection", price: "$24.99", img: "assets/images/pexels-suzyhazelwood-2536965.jpg" }
    ];

    const productContainer = document.getElementById("product-container");

    products.forEach(product => {
        const card = `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="${product.img}" class="card-img-top" alt="${product.title}">
                    <div class="card-body">
                        <h5 class="card-title">${product.title}</h5>
                        <p class="card-text">${product.desc}</p>
                        <p class="price">${product.price}</p>
                        <button class="btn btn-primary">Add to Cart</button>
                    </div>
                </div>
            </div>
        `;
        productContainer.innerHTML += card;
    });
});
