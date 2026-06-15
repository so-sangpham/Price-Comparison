import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

export interface ActivityTable {
  id: string;
  name: string;
  category: string;
  status: string;
  date: string;
  description: string;
}

@Component({
  selector: 'app-activate',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './activate.component.html',
  styleUrl: './activate.component.scss'
})
export class ActivateComponent implements OnInit {
  activityTables: ActivityTable[] = [];
  filteredTables: ActivityTable[] = [];
  searchQuery = '';
  statusFilter = '';

  totalCategories = 0;
  activeCount = 0;
  inactiveCount = 0;
  activeRate = 0;

  activationCategories = [
    'Art Supply',
    'AV Carts',
    'Bookcases',
    'Cafeteria Tables',
    'Charging Stations',
    'Collaborative Desks',
    'Collaborative Tables',
    'Computer Tables',
    'Crib & Nap Mats',
    'Desks - Student',
    'Folding Chairs',
    'Folding Tables',
    'Hirsh (Steel)',
    'Lanterns & Podiums',
    'Library Shelving',
    'Metal Storage Cabinets',
    'Open front Desks',
    'Outdoor Benches',
    'Picnic Tables'
  ];

  ngOnInit() {
    this.loadActivityTables();
  }

  loadActivityTables() {
    this.activityTables = this.activationCategories.map((category, index) => ({
      id: `act-${index + 1}`,
      name: category,
      category: category,
      status: index % 3 === 0 ? 'Active' : 'Inactive',
      date: new Date(2026, 0, 15 - (index % 15)).toISOString().split('T')[0],
      description: `Compare products in ${category}`
    }));

    this.totalCategories = this.activityTables.length;
    this.activeCount = this.activityTables.filter(t => t.status === 'Active').length;
    this.inactiveCount = this.activityTables.filter(t => t.status === 'Inactive').length;
    this.activeRate = Math.round((this.activeCount / this.totalCategories) * 100);
    this.filteredTables = [...this.activityTables];
  }

  filterTables() {
    this.filteredTables = this.activityTables.filter(item => {
      const matchesSearch = !this.searchQuery ||
        item.category.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        item.name.toLowerCase().includes(this.searchQuery.toLowerCase());
      const matchesStatus = !this.statusFilter || item.status === this.statusFilter;
      return matchesSearch && matchesStatus;
    });
  }
}
