export class Stock {
    public favorite: boolean;

    constructor(
        public name: string,
        public code: string,
        public price: number,
        public previousPrice: number
    ){
        this.favorite = false;
    }

    isPositiveChange(){
        return this.previousPrice < this.price;
    }

}
