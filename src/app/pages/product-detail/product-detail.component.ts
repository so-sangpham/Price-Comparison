import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { CompetitorService, CompetitorProduct } from '../../services/competitor.service';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, AccordionModule, ButtonModule, TableModule, DialogModule],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductDetailComponent implements OnInit {
  product: Product | null = null;
  competitorProducts: CompetitorProduct[] = [];
  competitor: { id: string; name: string; url: string } | null = null;
  loading = true;
  isCompetitorView = false;
  detailDialogVisible = false;
  selectedProduct: CompetitorProduct | null = null;

  constructor(
    private productService: ProductService,
    private competitorService: CompetitorService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      // Check if we're viewing competitor products
      const competitorId = params['competitorId'];
      if (competitorId) {
        this.isCompetitorView = true;
        this.loadCompetitorProducts(competitorId);
      } else {
        // Original product detail view
        const productId = params['id'];
        this.isCompetitorView = false;
        if (productId) {
          this.productService.getProductById(productId).subscribe((product) => {
            this.product = product || null;
            this.loading = false;
          });
        }
      }
    });
  }

  private loadCompetitorProducts(competitorId: string) {
    this.loading = true;
    this.competitorService.getCompetitorProducts(competitorId).subscribe({
      next: (response) => {
        if (response.success) {
          this.competitorProducts = response.data;
          this.competitor = response.competitor;
        }
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading competitor products:', err);
        this.loading = false;
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/']);
  }

  goToStore(sellerName: string): void {
    alert(`Redirecting to ${sellerName}...`);
  }

  getRatingStars(): number[] {
    const rating = Math.floor(this.product?.rating || 0);
    return Array(5)
      .fill(0)
      .map((_, i) => (i < rating ? 1 : 0));
  }

  getSellerHeader(seller: any): string {
    const price = `$${seller.price.toFixed(2)}`;
    const availability = seller.availability;
    return `${seller.name} - ${price} - ${availability}`;
  }

  getMaxPrice(): number {
    if (!this.product || this.product.sellers.length === 0) return 0;
    return Math.max(...this.product.sellers.map((s) => s.price));
  }

  /**
   * Show detail dialog for a competitor product
   */
  showProductDetail(product: CompetitorProduct): void {
    this.selectedProduct = product;
    this.detailDialogVisible = true;
  }

  /**
   * Close detail dialog
   */
  closeDetailDialog(): void {
    this.detailDialogVisible = false;
    this.selectedProduct = null;
  }

  /**
   * Get the price from competitor pricing
   */
  getCompetitorPrice(product: CompetitorProduct): number | string {
    return product.competitorPricing?.price ?? 'N/A';
  }

  /**
   * Handle get price action
   */
  getPrice(product: CompetitorProduct): void {
    const price = this.getCompetitorPrice(product);
    if (price !== 'N/A') {
      alert(`Price for ${product.product.productName}: $${price}`);
    } else {
      alert('Price not available for this product');
    }
  }
}
