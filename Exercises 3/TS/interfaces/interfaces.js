// Example of interface
// Example of class implementing interface
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.area = 0; // we need to initialize field
        this.radius = radius;
    }
    // implemented method from interface
    Circle.prototype.getArea = function () {
        var area = Math.PI * Math.pow(this.radius, 2);
        this.area = area;
        return area;
    };
    return Circle;
}());
// Example of class implementing interface
var Square = /** @class */ (function () {
    function Square(side) {
        this.area = 0; // we need to initialize field
        this.side = side;
    }
    // implemented method from interface
    Square.prototype.getArea = function () {
        var area = Math.pow(this.side, 2);
        this.area = area;
        return area;
    };
    return Square;
}());
// Instantiating objects
var circle = new Circle(5);
console.log("Circle area: ".concat(circle.getArea()));
var square = new Square(5);
console.log("Square area: ".concat(square.getArea()));
// Example of polymorphism
var shape = new Square(10);
shape = new Circle(2);
