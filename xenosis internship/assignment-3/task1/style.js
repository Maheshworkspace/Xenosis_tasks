// Function to change main product image based on thumbnail click
function changeImage(imageUrl) {
    document.getElementById('main-image').src = imageUrl;
}



// Function to add product to cart
function addToCart() {
    const quantity = document.getElementById('quantity').value;
    const size = document.getElementById('size').value;
    // Implement your cart logic here (e.g., using localStorage or a backend service)
    console.log(`Added ${quantity} of size ${size} to cart`);
    alert("item is added")
}

// Function to submit a review
function submitReview(event) {
    event.preventDefault(); // Prevent form from submitting

    const name = document.getElementById('name').value;
    const rating = document.getElementById('rating').value;
    const comment = document.getElementById('comment').value;

    // Create review HTML
    const reviewHTML = `
        <div class="review">
            <p><strong>${name}</strong> rated this product ${rating} stars:</p>
            <p>${comment}</p>
        </div>
    `;

    // Append review to reviews list
    const reviewsList = document.getElementById('reviews-list');
    reviewsList.innerHTML += reviewHTML;

    // Clear form inputs
    document.getElementById('name').value = '';
    document.getElementById('rating').value = '5';
    document.getElementById('comment').value = '';
}
