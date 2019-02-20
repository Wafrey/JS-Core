class Rectangle {
    constructor(height, width, color) {
        this.height = height;
        this.width = width;
        this.color = color;
    }

    caclArea() {
        return this.height*this.height;
    }
}

let sum = new Rectangle(10, 20)
console.log(sum);