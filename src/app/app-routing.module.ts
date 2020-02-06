import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GridComponent } from './grid/grid.component';
import { ButtonComponent } from './button/button.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { PaginationComponent } from './pagination/pagination.component';
import { RadiobtnCheckboxComponent } from './radiobtn-checkbox/radiobtn-checkbox.component';
import { ColorComponent } from './color/color.component';



const routes: Routes = [
  { path: '', component: GridComponent },
  { path: 'grid', component: GridComponent },
  { path: 'button', component: ButtonComponent },
  { path: 'breadcrumb', component: BreadcrumbComponent },
  { path: 'pagination', component: PaginationComponent },
  { path: 'radio-checkbox', component: RadiobtnCheckboxComponent },
  { path: 'color', component: ColorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }