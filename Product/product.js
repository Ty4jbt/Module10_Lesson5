
// Task 1: Create products array
let products = [
    { name: "Laptop", price: 999.99, description: "Powerful computing on the go" },
    { name: "Smartphone", price: 699.99, description: "Stay connected wherever you are" },
    { name: "Headphones", price: 149.99, description: "Immersive audio experience" }
];

// Task 2: Function to display products
function displayProducts() {
    const productsContainer = document.getElementById('productsContainer');
    
    // Clear existing content
    productsContainer.innerHTML = '';
    
    // Create and append product cards
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        productCard.innerHTML = `
            <h2 class="product-name">${product.name}</h2>
            <p class="product-description">${product.description}</p>
            <p class="product-price">$${product.price.toFixed(2)}</p>
        `;
        
        productsContainer.appendChild(productCard);
    });
}

// Task 3: Add event listener for page load
document.addEventListener('DOMContentLoaded', displayProducts);