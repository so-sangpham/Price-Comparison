import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CompetitorService, Competitor } from '../../services/competitor.service';

const MOCK_COMPETITORS: Competitor[] = [
  { _id: 'comp-1', competitorName: 'Amazon',   url: 'https://www.amazon.com',   createdDateUtc: '2025-06-01T00:00:00Z' },
  { _id: 'comp-2', competitorName: 'Walmart',  url: 'https://www.walmart.com',  createdDateUtc: '2025-07-15T00:00:00Z' },
  { _id: 'comp-3', competitorName: 'Staples',  url: 'https://www.staples.com',  createdDateUtc: '2025-08-20T00:00:00Z' },
  { _id: 'comp-4', competitorName: 'Target',   url: 'https://www.target.com',   createdDateUtc: '2025-09-10T00:00:00Z' },
  { _id: 'comp-5', competitorName: 'Best Buy', url: 'https://www.bestbuy.com',  createdDateUtc: '2025-10-05T00:00:00Z' },
  { _id: 'comp-6', competitorName: 'Office Depot', url: 'https://www.officedepot.com', createdDateUtc: '2025-11-01T00:00:00Z' },
];

@Component({
  selector: 'app-competitor-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './competitor-list.component.html',
  styleUrl: './competitor-list.component.scss'
})
export class CompetitorListComponent implements OnInit {
  competitors: Competitor[] = [];
  loading = true;
  error = false;

  constructor(
    private competitorService: CompetitorService,
    private router: Router
  ) {}

  ngOnInit() {
    this.competitorService.getCompetitors().subscribe({
      next: (response) => {
        if (response.success && response.data) {
          this.competitors = response.data;
        } else {
          this.competitors = MOCK_COMPETITORS;
        }
        this.loading = false;
      },
      error: () => {
        this.error = true;
        this.competitors = MOCK_COMPETITORS;
        this.loading = false;
      }
    });
  }

  viewCompetitor(id: string) {
    this.router.navigate(['/competitor', id]);
  }

  getDomain(url: string): string {
    try {
      return new URL(url).hostname.replace('www.', '');
    } catch {
      return url;
    }
  }

  getInitial(name: string): string {
    return name?.charAt(0)?.toUpperCase() || '?';
  }

  formatDate(dateStr: string): string {
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric', month: 'short', day: 'numeric'
    });
  }
}
