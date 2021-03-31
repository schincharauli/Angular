import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";



@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss'],
})
export class ProductList implements OnInit{
    private _filterValue: string = ''; 

    showImages: boolean = false;
    imageHeight: number = 100;
    filteredProducts: IProduct[] = [];
    productList: IProduct[] = [
    {
        imageUrl: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a72-4g.jpg",
        productName: "Samsung Galaxy",
        productCode: "A-72",
        price: 300.2498
    },
    {
        imageUrl: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-m21s.jpg",
        productName: "Samsung Gear",
        productCode: "M-21s",
        price: 500.241489
    },
    {
        imageUrl: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-m51.jpg",
        productName: "Samsung Sigma",
        productCode: "M-51",
        price: 250.6891
    },
    ];

    constructor(){
        this.filterValue = "gala";
    }

ngOnInit():void{}


get filterValue(): string{
    return this._filterValue;
}

set filterValue(value:string){
    this._filterValue = value;
    if(this._filterValue) {
        this.filteredProducts = this.productList.filter((p) => {
        return p.productName
        .toLowerCase()
        .includes(this._filterValue.toLowerCase());
    });
    } else {
        this.filteredProducts = this.productList.slice();
    }
}

toggleImages():void {
    this.showImages = !this.showImages; 
}

}