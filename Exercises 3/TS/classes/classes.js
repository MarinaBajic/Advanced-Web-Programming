// Example class
var Car = /** @class */ (function () {
    function Car() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        // Public fields
        this.engineName = "Mercedoes";
        this.gears = 5;
        // Private fields
        this.speed = 0;
        if (args.length == 0) {
            // this is first contructor declarition
            this.engineName = "Mercedoes";
            this.gears = 5;
            this.speed = 0;
        }
        else if (args.length == 1) {
            // this is second contructor declaration
            // use double pipe operator || if false value is provided
            this.speed = args[0] || 0;
        }
        else if (args.length >= 3) {
            // this is third contructor declarition
            this.engineName = args[0] || "Not known";
            this.gears = args[1] || 1;
            this.speed = args[2] || 0;
        }
    }
    // Note that typescript does not support multiple constructors,
    // but you can create more constructor declarations and only one 
    // that is also implemented
    // Methods
    Car.prototype.accelerate = function () {
        this.speed++;
    };
    Car.prototype.throttle = function () {
        this.speed--;
    };
    // Getters and setters
    Car.prototype.getSpeed = function () {
        return this.speed;
    };
    Car.prototype.setSpeed = function (speed) {
        this.speed = speed;
    };
    // Static methods
    Car.numberOfWheels = function () {
        return Car.wheels;
    };
    Car.wheels = 4;
    return Car;
}());
// Creating objects
var car1 = new Car(5);
// or simpler
var car2 = new Car(7);
var car3 = new Car("Volkswagen", 6, 50);
// Using objects
console.log(car1.getSpeed());
car1.accelerate();
console.log(car1.getSpeed());
console.log(Car.numberOfWheels());
car3.engineName = "Reanault";
console.log(car3.engineName);
