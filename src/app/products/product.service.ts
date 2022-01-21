import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private _http: HttpClient) {}

  ListProducts() {
    return this._http.get<Product[]>(environment.apiUrl + '?limit=10');
  }

  ProductDetails(Product_ID: string) {
    return this._http.get<Product>(environment.apiUrl + '/' + Product_ID);
  }

  AddProduct(data: Product) {
    return this._http.post(environment.apiUrl + '/', data);
  }
}
