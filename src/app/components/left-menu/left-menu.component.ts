import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ProductListComponent } from '../../pages/product-list/product-list.component';
import { CompetitorService } from '../../services/competitor.service';

export interface MenuItem {
  id: string;
  label: string;
  icon: string;
  route?: string;
  children?: MenuItem[];
  isExpanded?: boolean;
}

@Component({
  selector: 'app-left-menu',
  standalone: true,
  imports: [CommonModule, FormsModule, ProductListComponent, RouterOutlet],
  templateUrl: './left-menu.component.html',
  styleUrl: './left-menu.component.scss'
})
export class LeftMenuComponent implements OnInit {
  selectedMenuItem: string = 'dashboard';
  isLoadingCompetitors = false;

  menuItems: MenuItem[] = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: 'pi-home',
      route: '/'
    },
    {
      id: 'competitor',
      label: 'Competitor',
      icon: 'pi-building',
      route: '/competitors',
      isExpanded: false,
      children: []
    },
    {
      id: 'report',
      label: 'Report',
      icon: 'pi-file-pdf',
      route: '/report'
    }
  ];

  constructor(
    private router: Router,
    private competitorService: CompetitorService
  ) {}

  ngOnInit() {
    this.syncActiveFromUrl(this.router.url);

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.syncActiveFromUrl(event.urlAfterRedirects);
      });

    this.loadCompetitors();
  }

  private syncActiveFromUrl(url: string) {
    if (url === '/' || url === '') {
      this.selectedMenuItem = 'dashboard';
    } else if (url.startsWith('/competitor') || url.startsWith('/competitors')) {
      this.selectedMenuItem = 'competitor';
      const competitorItem = this.menuItems.find(i => i.id === 'competitor');
      if (competitorItem) competitorItem.isExpanded = true;
    } else if (url.startsWith('/report')) {
      this.selectedMenuItem = 'report';
    }
  }

  private readonly MOCK_MENU_COMPETITORS = [
    { _id: 'comp-1', competitorName: 'Amazon' },
    { _id: 'comp-2', competitorName: 'Walmart' },
    { _id: 'comp-3', competitorName: 'Staples' },
    { _id: 'comp-4', competitorName: 'Target' },
    { _id: 'comp-5', competitorName: 'Best Buy' },
    { _id: 'comp-6', competitorName: 'Office Depot' },
  ];

  private loadCompetitors() {
    this.isLoadingCompetitors = true;
    this.competitorService.getCompetitors().subscribe({
      next: (response) => {
        const data = (response.success && response.data?.length > 0)
          ? response.data
          : this.MOCK_MENU_COMPETITORS;
        this.setCompetitorChildren(data);
        this.isLoadingCompetitors = false;
      },
      error: () => {
        this.setCompetitorChildren(this.MOCK_MENU_COMPETITORS);
        this.isLoadingCompetitors = false;
      }
    });
  }

  private setCompetitorChildren(list: { _id: string; competitorName: string }[]) {
    const competitorItem = this.menuItems.find(item => item.id === 'competitor');
    if (competitorItem) {
      competitorItem.children = list.map(c => ({
        id: c._id,
        label: c.competitorName,
        icon: 'pi-briefcase',
        route: `/competitor/${c._id}`
      }));
    }
  }

  selectMenuItem(item: MenuItem) {
    this.selectedMenuItem = item.id;

    if (item.route) {
      this.router.navigate([item.route]);
    }

    if (item.children !== undefined) {
      item.isExpanded = !item.isExpanded;
    }
  }

  selectSubItem(subItem: MenuItem) {
    this.selectedMenuItem = subItem.id;
    if (subItem.route) {
      this.router.navigate([subItem.route]);
    }
  }

  isMenuItemActive(itemId: string): boolean {
    return this.selectedMenuItem === itemId;
  }
}
