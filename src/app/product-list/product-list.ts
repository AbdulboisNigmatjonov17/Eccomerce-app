import { ProductService } from './../servvices/product.service';
import { Component, inject, signal } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {
  products = signal<Product[]>([]);
  ProductService = inject(ProductService);

  constructor() {
    this.ProductService.getProducts().subscribe({
      next: (products) => {
        this.products.set(products);
      }, error: (err) => {
        console.log('Fetch Error', err);
      }
    })
  }
}
