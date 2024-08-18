import { Injectable } from "@angular/core";
import { products } from "src/app/products";
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

// angular の決まりとして、serviceを使う場合は、@Injectable()を付ける必要がある
@Injectable()
export class productService{

    constructor(private http: HttpClient) {}

    getProducts():Observable<any> {
         return this.http.get('/api/v1/products/');
    }

    getProductById(productId: string): Observable<any>{
        return this.http.get('/api/v1/products/'+productId);
    }

}