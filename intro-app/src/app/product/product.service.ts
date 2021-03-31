import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { IProduct, ITodo } from './product';
import {Observable} from 'rxjs'

@Injectable({
    providedIn: 'root',
})

export class ProductService {
    private _baseURL = "https://jsonplaceholder.typicode.com";
    constructor(private http: HttpClient){}

    getProducts(): IProduct[] {
        return [
            {
                imageUrl: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a72-4g.jpg",
                productName: "Samsung Galaxy",
                productCode: "A-72",
                price: 300.2498,
                rating: 5,
            },
            {
                imageUrl: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-m21s.jpg",
                productName: "Samsung Gear",
                productCode: "M-21s",
                price: 500.241489,
                rating: 4,
            },
            {
                imageUrl: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-m51.jpg",
                productName: "Samsung Sigma",
                productCode: "M-51",
                price: 250.6891,
                rating: 2,
            },
        ];
    }

    getTodos(): Observable<ITodo[]> {
        return this.http.get<ITodo[]>(`${this._baseURL}/todos?_start=0&_limit=10`);

    }
}