class Shape {
    constructor(drawAPI) {
        this.drawAPI = drawAPI;
    }

    draw() {
        this.drawAPI.drawShape(this);
    }
}

class Circle extends Shape {
    constructor(drawAPI, radius) {
        super(drawAPI);
        this.radius = radius;
    }
}

class Square extends Shape {
    constructor(drawAPI, sideLength) {
        super(drawAPI);
        this.sideLength = sideLength;
    }
}

class DrawAPI {
    drawShape(shape) {
        throw new Error('Method not implemented.');
    }
}

class ColorSizeDrawAPI extends DrawAPI {
    constructor(color, size) {
        super();
        this.color = color;
        this.size = size;
    }

    drawShape(shape) {
        const element = document.createElement('div');
        element.className = 'shape';
        element.style.backgroundColor = this.color;
        element.style.width = `${this.size}px`;
        element.style.height = `${this.size}px`;

        if (shape instanceof Circle) {
            element.style.borderRadius = '50%';
        }

        document.getElementById('shapesContainer').appendChild(element);
    }
}

// Create shapes with different colors and sizes
const redCircle = new Circle(new ColorSizeDrawAPI('red', 100), 50);
const blueSquare = new Square(new ColorSizeDrawAPI('blue', 150), 75);

// Draw shapes
redCircle.draw();
blueSquare.draw();