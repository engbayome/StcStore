import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  model = {} as Product;

  saving = false;
  constructor(
    private _productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.model = new Product();
    console.log(this.model);
  }

  onSubmit() {
    this.saving = true;
    console.log(this.model);

    this._productService.AddProduct(this.model).subscribe((res: Product) => {
      this.saving = false;
      this.model = new Product();
      this.router.navigateByUrl('/products/list');
      console.log(res);
    });
  }
}
