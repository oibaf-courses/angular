export interface IProduct {
    id: number;
    name: string;
    description: string;
    price: number;
    url: string;
}

export class Product implements IProduct {
    id: number;
    name: string;
    description: string;
    price: number;
    url: string;
}
