import { Component, OnDestroy, OnInit } from '@angular/core';
import { IProduct, ITodo } from './product';
import { ProductService } from './product.service';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss'],
})
export class ProductList implements OnInit, OnDestroy {
    private _filterValue: string = '';

    showImages: boolean = false;
    imageHeight: number = 100;
    filteredProducts: IProduct[] = [];
    productList: IProduct[] = [];
    todoList: ITodo[] = [];

    constructor(private _productService: ProductService) { }

    ngOnInit(): void {
        this.productList = this._productService.getProducts();
        this.filterValue = '';

        this._productService.getTodos().subscribe((data: ITodo[]) => {
            this.todoList = data;
        });
    }
 
    get filterValue(): string {
        return this._filterValue;
    }

    set filterValue(value: string) {
        this._filterValue = value;
        if (this._filterValue) {
            this.filteredProducts = this.productList.filter((p) => {
                return p.productName
                    .toLowerCase()
                    .includes(this._filterValue.toLowerCase());
            });
        } else {
            this.filteredProducts = this.productList.slice();
        }
    }

    toggleImages(): void {
        this.showImages = !this.showImages;
    }

    onRatingChange(message: number): void{
        console.log(message);
    }

    ngOnDestroy(): void { }
}
