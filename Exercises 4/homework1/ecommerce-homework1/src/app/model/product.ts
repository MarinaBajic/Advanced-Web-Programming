export class Product {
    public quantity: number;

    constructor(
        public name: string,
        public imageUrl: string,
        public price: number,
        public onSale: boolean,
    ){
        this.quantity = 0;
    };
}
