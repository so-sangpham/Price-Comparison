import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ReportService, ReportData } from '../../services/report.service';

@Component({
  selector: 'app-report',
  standalone: true,
  imports: [CommonModule, FormsModule, TableModule],
  templateUrl: './report.component.html',
  styleUrl: './report.component.scss'
})
export class ReportComponent implements OnInit {
  reports: ReportData[] = [];
  filteredReports: ReportData[] = [];
  competitorNames: string[] = [];
  isLoading = false;
  error: string | null = null;
  searchKeyword: string = '';

  constructor(private reportService: ReportService) { }

  ngOnInit() {
    this.loadReports();
  }

  loadReports() {
    this.isLoading = true;
    this.error = null;

    this.reportService.getComparisonData().subscribe({
      next: (response) => {
        if (response.success && response.data) {
          this.reports = response.data;
          this.filteredReports = [...this.reports];
          // Extract unique competitor names from the first report
          if (this.reports.length > 0) {
            this.competitorNames = Object.keys(this.reports[0].competitors);
          }
        }
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error loading reports:', err);
        this.error = 'Failed to load reports. Please try again later.';
        this.isLoading = false;
      }
    });
  }

  /**
   * Get the price for a specific competitor and report
   */
  getCompetitorPrice(report: ReportData, competitorName: string): string | number {
    const competitor = report.competitors[competitorName];
    return competitor ? competitor.price : '';
  }

  /**
   * Filter reports based on search keyword
   */
  onSearchChange(keyword: string) {
    this.searchKeyword = keyword;
    this.filterReports();
  }

  private filterReports() {
    if (!this.searchKeyword.trim()) {
      this.filteredReports = [...this.reports];
      return;
    }

    const keyword = this.searchKeyword.toLowerCase();
    this.filteredReports = this.reports.filter(report => {
      // Search in SKU
      if (report.sku.toLowerCase().includes(keyword)) {
        return true;
      }
      // Search in Product Name
      if (report.productName.toLowerCase().includes(keyword)) {
        return true;
      }
      // Search in competitor prices and names
      for (const competitorName of Object.keys(report.competitors)) {
        if (competitorName.toLowerCase().includes(keyword)) {
          return true;
        }
        const price = report.competitors[competitorName].price;
        if (price && price.toString().includes(keyword)) {
          return true;
        }
      }
      return false;
    });
  }

  exportReport() {
    this.reportService.exportDataAsExcel(1000).subscribe({
      next: (blob: Blob) => {
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);
        
        link.setAttribute('href', url);
        link.setAttribute('download', `reports-${new Date().toISOString().split('T')[0]}.xlsx`);
        link.style.visibility = 'hidden';
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Clean up the object URL
        URL.revokeObjectURL(url);
      },
      error: (err) => {
        console.error('Error exporting report:', err);
        alert('Failed to export report. Please try again.');
      }
    });
  }

  private generateCSV(): string {
    const headers = ['SKU', 'Product Name', ...this.competitorNames];
    const rows = this.reports.map(report => [
      report.sku,
      report.productName,
      ...this.competitorNames.map(competitorName => {
        const price = this.getCompetitorPrice(report, competitorName);
        return price === 'N/A' ? 'N/A' : price.toString();
      })
    ]);

    return [headers, ...rows].map(row => row.join(',')).join('\n');
  }
}
