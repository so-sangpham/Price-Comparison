import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LeftMenuComponent } from './components/left-menu/left-menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet, LeftMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'price-comparison';
}
