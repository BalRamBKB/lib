import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { GridComponent } from './grid/grid.component';
import { ButtonComponent } from './button/button.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { PaginationComponent } from './pagination/pagination.component';
import { RadiobtnCheckboxComponent } from './radiobtn-checkbox/radiobtn-checkbox.component';
import { ColorComponent } from './color/color.component';
import { ChartComponent } from './chart/chart.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SpinnerComponent } from './spinner/spinner.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'grid', component: GridComponent },
  { path: 'button', component: ButtonComponent },
  { path: 'breadcrumb', component: BreadcrumbComponent },
  { path: 'pagination', component: PaginationComponent },
  { path: 'radio-checkbox', component: RadiobtnCheckboxComponent },
  { path: 'color', component: ColorComponent },
  { path: 'chart', component: ChartComponent },
  { path: 'progress-bar', component: ProgressBarComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'spinner', component: SpinnerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }