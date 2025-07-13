import { ProductService } from './../servvices/product.service';
import { Component, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { TruncatePipe } from '../pipes/truncate-pipe';

@Component({
  selector: 'app-product-list',
  imports: [MatCardModule, MatGridListModule, TruncatePipe],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {
  // products = signal<Product[]>([]);
  ProductService = inject(ProductService);

  productList = toSignal(this.ProductService.getProducts(), {
    initialValue: []
  });

  // constructor() {
  //   this.ProductService.getProducts().subscribe({
  //     next: (data) => {
  //       this.products.set(data);
  //     }, error: (err) => {
  //       console.log('Fetch Error', err);
  //     }
  //   })
  // }
}
