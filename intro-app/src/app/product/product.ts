 
 export interface IProduct {
     imageUrl: string;
     productName: string;
     productCode: string;
     price: number;
    //  addPrice (value: number): number
 }

 export class Product implements IProduct {
     imageUrl: string = "";
     productCode: string = "";
     productName: string = "";
     price: number = 0;
     
     addPrice(newPrice:number){
         return 0; 
     }

 }