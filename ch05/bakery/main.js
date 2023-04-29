import BakeryItem from './BakeryItem.js';
import ShoppingCart from './ShoppingCart.js';

const bakeryItems = [
    new BakeryItem('Croissant', 'images/croissant.jpg', 2.50),
    new BakeryItem('Cupcake', 'images/cupcake.jpg', 3.00),
    new BakeryItem('Donut', 'images/donut.jpg', 1.50),
    new BakeryItem('Macaron', 'images/macaron.jpg', 2.00),
    new BakeryItem('Tart', 'images/tart.jpg', 4.00),
];

const shoppingCart = new ShoppingCart();
document.getElementById('shopping-cart').innerHTML = 0;

document.getElementById('bakery-items-container').innerHTML = bakeryItems.map(item => item.render()).join('');

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (event) => {
        const index = parseInt(event.target.dataset.index);
        shoppingCart.addItem(bakeryItems[index]);
        shoppingCart.render();
    });
});
