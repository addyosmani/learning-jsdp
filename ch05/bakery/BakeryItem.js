export default class BakeryItem {
    constructor(name, imageUrl, price) {
        this.name = name;
        this.imageUrl = imageUrl;
        this.price = price;
    }

    render() {
        return `
            <div class="bakery-item">
                <img src="${this.imageUrl}" alt="${this.name}">
                <h2>${this.name}</h2>
                <p>Price: $${this.price.toFixed(2)}</p>
                <button class="add-to-cart" data-index="${BakeryItem.indexCounter++}">Add to cart</button>
                </div>
`;
    }
}

BakeryItem.indexCounter = 0;
