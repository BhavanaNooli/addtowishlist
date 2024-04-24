// script.js
function changeColor(selectedColor) {
    const productImage = document.getElementById('productImage');
    switch (selectedColor) {
        case 'red':
            productImage.src = 'red_product.jpg';
            break;
        case 'blue':
            productImage.src = 'blue_product.jpg';
            break;
        // Add more cases for other colors
        default:
            // Handle default behavior (e.g., show the original image)
            break;
    }
}
