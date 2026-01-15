import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

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
  imports: [CommonModule],
  templateUrl: './activate.component.html',
  styleUrl: './activate.component.scss'
})
export class ActivateComponent implements OnInit {
  activityTables: ActivityTable[] = [];

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
  }
}
