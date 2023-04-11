// Example of interface

interface Shape {
    // Fields
    area: number;
    radius?: number; // optional field

    // Methods
    getArea(): number;
}

// Example of class implementing interface
class Circle implements Shape {
    area: number = 0; // we need to initialize field
    radius: number; 

    constructor(radius: number) {
        this.radius = radius;
    }

    // implemented method from interface
    getArea(): number {
        const area = Math.PI * this.radius ** 2;
        this.area = area;
        return area;
    }
}

// Example of class implementing interface
class Square implements Shape {
    area: number = 0; // we need to initialize field
    side: number;

    constructor(side: number) {
        this.side = side;
    }

    // implemented method from interface
    getArea(): number {
        const area = this.side ** 2;
        this.area = area;
        return area;
    }
}

// Instantiating objects
const circle = new Circle(5);
console.log(`Circle area: ${circle.getArea()}`); 

const square = new Square(5);
console.log(`Square area: ${square.getArea()}`); 

// Example of polymorphism
let shape: Shape = new Square(10);
shape = new Circle(2);
