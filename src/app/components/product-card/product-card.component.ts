import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Output() compareClicked = new EventEmitter<Product>();

  constructor(private router: Router) {}

  onCompareClick(): void {
    this.compareClicked.emit(this.product);
  }

  navigateToDetails(): void {
    this.router.navigate(['/product', this.product.id]);
  }

  getRatingStars(): number[] {
    const rating = Math.floor(this.product.rating || 0);
    return Array(5)
      .fill(0)
      .map((_, i) => (i < rating ? 1 : 0));
  }
}
