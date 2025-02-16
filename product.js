
// Task 1
let products = [
    { name: "Laptop", price: 999.99, description: "Powerful computing on the go." },
    { name: "Smartphone", price: 699.99, description: "Stay connected wherever you are." },
    { name: "Headphones", price: 149.99, description: "Immersive audio experience." },
];

// Task 2
function displayProducts() {
    let productContainer = document.getElementById("product-container");
    productContainer.innerHTML = "";
    products.forEach(product => {
        let productDiv = document.createElement("div");
        productDiv.innerHTML = `
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <p>Price: $${product.price}</p>`;
        productContainer.appendChild(productDiv);
    });
}

// Task 3
document.addEventListener("DOMContentLoaded", displayProducts);