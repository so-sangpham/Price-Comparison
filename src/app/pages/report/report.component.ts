import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ReportService, ReportData } from '../../services/report.service';

export interface ActivityItem {
  id: string;
  category: string;
  status: string;
  date: string;
  description: string;
}

const ACTIVITY_DATA: ActivityItem[] = [
  { id: 'act-1',  category: 'Art Supply',            status: 'Active',   date: '2026-01-14', description: 'Compare products in Art Supply' },
  { id: 'act-2',  category: 'AV Carts',              status: 'Inactive', date: '2026-01-13', description: 'Compare products in AV Carts' },
  { id: 'act-3',  category: 'Bookcases',             status: 'Inactive', date: '2026-01-12', description: 'Compare products in Bookcases' },
  { id: 'act-4',  category: 'Cafeteria Tables',      status: 'Active',   date: '2026-01-11', description: 'Compare products in Cafeteria Tables' },
  { id: 'act-5',  category: 'Charging Stations',     status: 'Inactive', date: '2026-01-10', description: 'Compare products in Charging Stations' },
  { id: 'act-6',  category: 'Collaborative Desks',   status: 'Inactive', date: '2026-01-09', description: 'Compare products in Collaborative Desks' },
  { id: 'act-7',  category: 'Collaborative Tables',  status: 'Active',   date: '2026-01-08', description: 'Compare products in Collaborative Tables' },
  { id: 'act-8',  category: 'Computer Tables',       status: 'Inactive', date: '2026-01-07', description: 'Compare products in Computer Tables' },
  { id: 'act-9',  category: 'Crib & Nap Mats',       status: 'Inactive', date: '2026-01-06', description: 'Compare products in Crib & Nap Mats' },
  { id: 'act-10', category: 'Desks - Student',       status: 'Active',   date: '2026-01-05', description: 'Compare products in Desks - Student' },
  { id: 'act-11', category: 'Folding Chairs',        status: 'Inactive', date: '2026-01-04', description: 'Compare products in Folding Chairs' },
  { id: 'act-12', category: 'Folding Tables',        status: 'Inactive', date: '2026-01-03', description: 'Compare products in Folding Tables' },
  { id: 'act-13', category: 'Hirsh (Steel)',         status: 'Active',   date: '2026-01-02', description: 'Compare products in Hirsh (Steel)' },
  { id: 'act-14', category: 'Lanterns & Podiums',    status: 'Inactive', date: '2026-01-01', description: 'Compare products in Lanterns & Podiums' },
  { id: 'act-15', category: 'Library Shelving',      status: 'Inactive', date: '2025-12-31', description: 'Compare products in Library Shelving' },
  { id: 'act-16', category: 'Metal Storage Cabinets',status: 'Active',   date: '2025-12-30', description: 'Compare products in Metal Storage Cabinets' },
  { id: 'act-17', category: 'Open front Desks',      status: 'Inactive', date: '2025-12-29', description: 'Compare products in Open front Desks' },
  { id: 'act-18', category: 'Outdoor Benches',       status: 'Inactive', date: '2025-12-28', description: 'Compare products in Outdoor Benches' },
  { id: 'act-19', category: 'Picnic Tables',         status: 'Active',   date: '2025-12-27', description: 'Compare products in Picnic Tables' },
];

const MOCK_REPORT_DATA: ReportData[] = [
  { sku: 'ART-001', productName: 'Crayola Art Kit 64pc',         competitors: { 'Amazon': { price: 24.99, url: null, productName: null }, 'Walmart': { price: 22.49, url: null, productName: null }, 'Staples': { price: 25.99, url: null, productName: null } } },
  { sku: 'AVC-001', productName: 'Luxor AV Cart Pro',            competitors: { 'Amazon': { price: 189.00, url: null, productName: null }, 'Walmart': { price: 175.00, url: null, productName: null }, 'Staples': { price: 195.00, url: null, productName: null } } },
  { sku: 'BOK-001', productName: 'Sauder 3-Shelf Bookcase',      competitors: { 'Amazon': { price: 79.99, url: null, productName: null }, 'Walmart': { price: 74.99, url: null, productName: null }, 'Staples': { price: 84.99, url: null, productName: null } } },
  { sku: 'CAF-001', productName: 'Rectangular Cafeteria Table',  competitors: { 'Amazon': { price: 249.00, url: null, productName: null }, 'Walmart': { price: 235.00, url: null, productName: null }, 'Staples': { price: 259.00, url: null, productName: null } } },
  { sku: 'CHG-001', productName: 'Tripp Lite 30-Port Charging Station', competitors: { 'Amazon': { price: 149.99, url: null, productName: null }, 'Walmart': { price: 139.99, url: null, productName: null }, 'Staples': { price: 154.99, url: null, productName: null } } },
  { sku: 'COD-001', productName: 'Collaborative Desk 48"',       competitors: { 'Amazon': { price: 199.00, url: null, productName: null }, 'Walmart': { price: 185.00, url: null, productName: null }, 'Staples': { price: 209.00, url: null, productName: null } } },
  { sku: 'COT-001', productName: 'Collaborative Round Table',    competitors: { 'Amazon': { price: 299.00, url: null, productName: null }, 'Walmart': { price: 279.00, url: null, productName: null }, 'Staples': { price: 315.00, url: null, productName: null } } },
  { sku: 'COM-001', productName: 'Computer Table with Drawer',   competitors: { 'Amazon': { price: 119.99, url: null, productName: null }, 'Walmart': { price: 109.99, url: null, productName: null }, 'Staples': { price: 124.99, url: null, productName: null } } },
  { sku: 'STD-001', productName: 'Student Desk with Shelf',      competitors: { 'Amazon': { price: 89.99, url: null, productName: null }, 'Walmart': { price: 84.99, url: null, productName: null }, 'Staples': { price: 94.99, url: null, productName: null } } },
  { sku: 'FOC-001', productName: 'Folding Chair Padded Seat',    competitors: { 'Amazon': { price: 29.99, url: null, productName: null }, 'Walmart': { price: 27.49, url: null, productName: null }, 'Staples': { price: 31.99, url: null, productName: null } } },
  { sku: 'FOT-001', productName: '6ft Folding Table',            competitors: { 'Amazon': { price: 69.99, url: null, productName: null }, 'Walmart': { price: 64.99, url: null, productName: null }, 'Staples': { price: 74.99, url: null, productName: null } } },
  { sku: 'LIB-001', productName: 'Library Shelving Unit 7-Tier', competitors: { 'Amazon': { price: 349.00, url: null, productName: null }, 'Walmart': { price: 325.00, url: null, productName: null }, 'Staples': { price: 365.00, url: null, productName: null } } },
];

@Component({
  selector: 'app-report',
  standalone: true,
  imports: [CommonModule, FormsModule, TableModule],
  templateUrl: './report.component.html',
  styleUrl: './report.component.scss'
})
export class ReportComponent implements OnInit {
  // Activity table
  activityItems: ActivityItem[] = ACTIVITY_DATA;
  filteredActivity: ActivityItem[] = [...ACTIVITY_DATA];
  activitySearch = '';
  activityStatusFilter = '';

  // Price comparison table
  reports: ReportData[] = [];
  filteredReports: ReportData[] = [];
  competitorNames: string[] = [];
  isLoading = false;
  searchKeyword = '';

  constructor(private reportService: ReportService) {}

  ngOnInit() {
    this.loadReports();
  }

  loadReports() {
    this.isLoading = true;
    this.reportService.getComparisonData().subscribe({
      next: (response) => {
        if (response.success && response.data && response.data.length > 0) {
          this.reports = response.data;
          if (this.reports.length > 0) {
            this.competitorNames = Object.keys(this.reports[0].competitors);
          }
        } else {
          this.useMockData();
        }
        this.filteredReports = [...this.reports];
        this.isLoading = false;
      },
      error: () => {
        this.useMockData();
        this.filteredReports = [...this.reports];
        this.isLoading = false;
      }
    });
  }

  private useMockData() {
    this.reports = MOCK_REPORT_DATA;
    this.competitorNames = Object.keys(MOCK_REPORT_DATA[0].competitors);
  }

  // Activity table filter
  filterActivity() {
    this.filteredActivity = this.activityItems.filter(item => {
      const matchSearch = !this.activitySearch ||
        item.category.toLowerCase().includes(this.activitySearch.toLowerCase());
      const matchStatus = !this.activityStatusFilter || item.status === this.activityStatusFilter;
      return matchSearch && matchStatus;
    });
  }

  getActivityInitial(category: string): string {
    return category.charAt(0).toUpperCase();
  }

  // Price comparison filter
  onSearchChange(keyword: string) {
    this.searchKeyword = keyword;
    this.filterReports();
  }

  private filterReports() {
    if (!this.searchKeyword.trim()) {
      this.filteredReports = [...this.reports];
      return;
    }
    const kw = this.searchKeyword.toLowerCase();
    this.filteredReports = this.reports.filter(r =>
      r.sku.toLowerCase().includes(kw) ||
      r.productName.toLowerCase().includes(kw) ||
      Object.keys(r.competitors).some(name => name.toLowerCase().includes(kw))
    );
  }

  getCompetitorPrice(report: ReportData, competitorName: string): string | number {
    const competitor = report.competitors[competitorName];
    return competitor ? competitor.price : '';
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
        URL.revokeObjectURL(url);
      },
      error: () => alert('Failed to export report. Please try again.')
    });
  }
}
