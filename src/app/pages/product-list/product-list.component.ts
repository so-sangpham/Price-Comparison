import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    CommonModule,
    ProductCardComponent,
    AccordionModule,
    ButtonModule,
  ],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  selectedProduct: Product | null = null;
  showComparison = false;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }

  onCompareClick(product: Product): void {
    this.selectedProduct = product;
    this.showComparison = true;
  }

  closeComparison(): void {
    this.showComparison = false;
    this.selectedProduct = null;
  }

  goToStore(sellerName: string): void {
    // In a real app, this would navigate to the seller's store
    alert(`Redirecting to ${sellerName}...`);
  }

  getSellerHeader(seller: any): string {
    const price = `$${seller.price.toFixed(2)}`;
    const availability = seller.availability;
    return `${seller.name} - ${price} - ${availability}`;
  }
}
