import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface CompetitorPrice {
  price: string | number;
  url: string | null;
  productName: string | null;
}

export interface ReportData {
  sku: string;
  productName: string;
  competitors: {
    [competitorName: string]: CompetitorPrice;
  };
}

export interface ReportResponse {
  success: boolean;
  data: ReportData[];
}

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private apiUrl = 'http://localhost:3000/api/reports/comparison-data';
  private exportUrl = 'http://localhost:3000/api/automation/export/excel';

  constructor(private http: HttpClient) { }

  /**
   * Fetch comparison data from the API
   */
  getComparisonData(): Observable<ReportResponse> {
    return this.http.get<ReportResponse>(this.apiUrl);
  }

  /**
   * Export data as Excel file from the API
   */
  exportDataAsExcel(limit: number = 1000): Observable<Blob> {
    return this.http.get(`${this.exportUrl}?limit=${limit}`, {
      responseType: 'blob'
    });
  }
}
