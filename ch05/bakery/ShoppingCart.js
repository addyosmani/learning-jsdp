export default class ShoppingCart {
    constructor() {
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
        this.updateCartDisplay();
        console.log(this.items);
    }

    removeItem(index) {
        this.items.splice(index, 1);
        this.updateCartDisplay();
        console.log(this.items);
    }

    updateCartDisplay() {
        const summary = this.items.reduce((acc, item) => {
            acc[item.name] = (acc[item.name] || 0) + 1;
            return acc;
        }, {});

        let cartContent = `Items: ${this.items.length}<br>`;
        cartContent += Object.entries(summary).map(([name, count]) => `${name}: ${count}`).join(', ');

        let shopCart = document.getElementById('shopping-cart');
        shopCart.innerHTML = cartContent;
        console.log(cartContent);
    }

    render() {
        this.updateCartDisplay();
    }
}
