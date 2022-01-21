import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  Products: Product[] = [];
  constructor(private _productService: ProductService) {}

  ngOnInit(): void {
    this.ListProducts();
  }

  ListProducts() {
    this._productService.ListProducts().subscribe((res) => {
      this.Products = res;
    });
  }
}
