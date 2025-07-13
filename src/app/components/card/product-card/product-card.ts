import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { TruncatePipe } from '../../../pipes/truncate-pipe';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-product-card',
  imports: [MatCardModule, MatGridListModule, TruncatePipe],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
  standalone: true
})
export class ProductCard {
  @Input() item!: Product

}
