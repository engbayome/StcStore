import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  productId: string = '';
  product = {} as Product;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _productService: ProductService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      if (param.get('id')) {
        this.productId = param.get('id') as string;
      } else {
        this.router.navigate(['/trainings/plans']);
      }
      this.getProductDetails();
    });
  }

  getProductDetails() {
    this._productService.ProductDetails(this.productId).subscribe((res) => {
      this.product = res;
    });
  }
}
