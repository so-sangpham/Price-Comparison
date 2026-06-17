import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CompetitorService, Competitor } from '../../services/competitor.service';

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
        }
        this.loading = false;
      },
      error: () => {
        this.error = true;
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
