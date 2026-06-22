import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-activate',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './activate.component.html',
  styleUrl: './activate.component.scss'
})
export class ActivateComponent implements OnInit {
  totalCategories = 19;
  activeCount = 7;
  inactiveCount = 12;
  activeRate = 37;

  ngOnInit() {}
}
