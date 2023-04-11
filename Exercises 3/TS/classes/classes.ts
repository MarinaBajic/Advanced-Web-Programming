// Example class

class Car {
    // Public fields
    engineName: string = "Mercedoes";
    gears: number = 5;
    static wheels = 4;
    // Private fields
    private speed: number = 0;

    // Constructors
    constructor();
    constructor(speed: number);
    constructor(engineName: string, gears: number, speed: number);
    constructor(...args: any[]) {
        if(args.length == 0){
            // this is first contructor declarition
            this.engineName = "Mercedoes";
            this.gears = 5;
            this.speed = 0;
        } else if(args.length == 1){
            // this is second contructor declaration
            // use double pipe operator || if false value is provided
            this.speed = args[0] || 0;
        } else if(args.length >= 3){
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
    accelerate(): void {
        this.speed++;
    }

    throttle() : void {
        this.speed--;
    }

    // Getters and setters
    getSpeed(): number {
        return this.speed;
    }

    setSpeed(speed: number): void {
        this.speed = speed;
    }

    // Static methods
    static numberOfWheels(): number {
        return Car.wheels;
    }
}

// Creating objects
let car1: Car = new Car(5);
// or simpler
let car2 = new Car(7);
let car3 = new Car("Volkswagen", 6, 50);

// Using objects
console.log(car1.getSpeed());
car1.accelerate()
console.log(car1.getSpeed())
console.log(Car.numberOfWheels())
car3.engineName = "Reanault";
console.log(car3.engineName)
