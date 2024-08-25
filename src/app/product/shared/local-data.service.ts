import { Injectable } from "@angular/core";
import { products } from "src/app/products";
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

// angular の決まりとして、serviceを使う場合は、@Injectable()を付ける必要がある
@Injectable()
export class LocalDataService{

    getProducts() {
         return products
    }

    getProductById(productId: number){
        return products[productId];
    }

}