
class Circle {
    constructor(color) {
        this.color = color;
    }

    drawCircle(ctx, x, y, radius) {
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}

class Square {
    constructor(color) {
        this.color = color;
    }

    drawSquare(ctx, x, y, side) {
        ctx.fillStyle = this.color;
        ctx.fillRect(x, y, side, side);
    }
}

class ShapeAdapter {
    constructor(shape) {
        this.shape = shape;
    }

    draw(ctx, x, y, size) {
        if (this.shape instanceof Circle) {
            this.shape.drawCircle(ctx, x, y, size);
        } else if (this.shape instanceof Square) {
            this.shape.drawSquare(ctx, x, y, size);
        }
    }
}

const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');
const shapeSelect = document.getElementById('shape');
const colorSelect = document.getElementById('color');

canvas.addEventListener('click', (event) => {
    const shape = shapeSelect.value;
    const color = colorSelect.value;
    const x = event.clientX - canvas.getBoundingClientRect().left;
    const y = event.clientY - canvas.getBoundingClientRect().top;
    const size = 50;

    let drawingShape;

    if (shape === 'circle') {
        drawingShape = new ShapeAdapter(new Circle(color));
    } else if (shape === 'square') {
        drawingShape = new ShapeAdapter(new Square(color));
    }

    drawingShape.draw(ctx, x, y, size);
});
