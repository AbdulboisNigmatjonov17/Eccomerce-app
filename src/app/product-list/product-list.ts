import { ProductService } from './../servvices/product.service';
import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ProductCard } from '../components/card/product-card/product-card';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-product-list',
  imports: [MatGridListModule, ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
  standalone: true
})
export class ProductList {
  ProductService = inject(ProductService);

  productList = toSignal(this.ProductService.getProducts(), {
    initialValue: []
  });
}
