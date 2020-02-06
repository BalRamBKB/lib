import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule} from './app-routing.module'; 

import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';
import { ButtonComponent } from './button/button.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { PaginationComponent } from './pagination/pagination.component';
import { RadiobtnCheckboxComponent } from './radiobtn-checkbox/radiobtn-checkbox.component';
import { ColorComponent } from './color/color.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, GridComponent, ButtonComponent, NavigationComponent, BreadcrumbComponent, PaginationComponent, RadiobtnCheckboxComponent, ColorComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
