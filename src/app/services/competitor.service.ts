import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Competitor {
  _id: string;
  url: string;
  competitorName: string;
  createdDateUtc: string;
}

export interface CompetitorPricing {
  _id: string;
  competitorProductId: string;
  price: number;
  createDateUtc: string;
}

export interface CompetitorProduct {
  _id: string;
  productSku: string;
  competitorId: string;
  competitorSku: string | null;
  competitorProductName: string;
  productUrl: string;
  competitorProductPrompt: string;
  createDateUtc: string;
  product: {
    _id: string;
    sku: string;
    price: number | null;
    productName: string;
  };
  competitorPricing?: CompetitorPricing;
}

export interface CompetitorProductsResponse {
  success: boolean;
  competitor: {
    id: string;
    name: string;
    url: string;
  };
  data: CompetitorProduct[];
  count: number;
}

export interface CompetitorsResponse {
  success: boolean;
  data: Competitor[];
}

@Injectable({
  providedIn: 'root'
})
export class CompetitorService {
  private apiUrl = 'http://localhost:3000/api/competitors';

  constructor(private http: HttpClient) { }

  /**
   * Fetch all competitors
   */
  getCompetitors(): Observable<CompetitorsResponse> {
    return this.http.get<CompetitorsResponse>(this.apiUrl);
  }

  /**
   * Fetch products for a specific competitor
   */
  getCompetitorProducts(competitorId: string): Observable<CompetitorProductsResponse> {
    return this.http.get<CompetitorProductsResponse>(`${this.apiUrl}/${competitorId}/products`);
  }
}
