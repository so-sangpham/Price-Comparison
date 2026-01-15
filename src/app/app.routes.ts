import { Routes } from '@angular/router';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ActivateComponent } from './pages/activate/activate.component';
import { ActivateDetailComponent } from './pages/activate/activate-detail.component';
import { ActivateEditComponent } from './pages/activate/activate-edit.component';
import { ReportComponent } from './pages/report/report.component';

export const routes: Routes = [
  { path: '', component: ActivateComponent },
  { path: 'activate', component: ProductListComponent },
  { path: 'activate/detail', component: ActivateDetailComponent },
  { path: 'activate/edit', component: ActivateEditComponent },
  { path: 'competitor/:competitorId', component: ProductDetailComponent },
  { path: 'report', component: ReportComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: '**', redirectTo: '' }
];
