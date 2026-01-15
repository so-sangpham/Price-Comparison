import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
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
      isExpanded: true,
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
    this.loadCompetitors();
  }

  private loadCompetitors() {
    this.isLoadingCompetitors = true;
    this.competitorService.getCompetitors().subscribe({
      next: (response) => {
        if (response.success && response.data) {
          const competitorItem = this.menuItems.find(item => item.id === 'competitor');
          if (competitorItem) {
            competitorItem.children = response.data.map(competitor => ({
              id: competitor._id,
              label: competitor.competitorName,
              icon: 'pi-briefcase',
              route: `/competitor/${competitor._id}`
            }));
          }
        }
        this.isLoadingCompetitors = false;
      },
      error: (err) => {
        console.error('Error loading competitors:', err);
        this.isLoadingCompetitors = false;
      }
    });
  }

  selectMenuItem(item: MenuItem) {
    this.selectedMenuItem = item.id;
    
    if (item.route) {
      this.router.navigate([item.route]);
    }

    if (item.children) {
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

