import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";



@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss'],
})
export class ProductList implements OnInit{
    productList: IProduct[] = [
    {
        imageUrl: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a72-4g.jpg",
        productName: "Samsung Galaxy",
        productCode: "A-72",
        price: 300.2498
    },
    {
        imageUrl: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-m21s.jpg",
        productName: "Samsung Galaxy",
        productCode: "M-21s",
        price: 500.241489
    },
    {
        imageUrl: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-m51.jpg",
        productName: "Samsung Galaxy",
        productCode: "M-51",
        price: 250.6891
    },
    ];

ngOnInit():void{}

}