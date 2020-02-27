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
import { ChartComponent } from './chart/chart.component';
import { ChartSvgComponent } from './chart-svg/chart-svg.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { HomeComponent } from './home/home.component';
import { CustomButtonComponent } from './custom-button/custom-button.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { FooterComponent } from './footer/footer.component';
import { GridCssComponent } from './grid-css/grid-css.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, GridComponent,  ButtonComponent, 
  NavigationComponent, BreadcrumbComponent, 
  PaginationComponent, RadiobtnCheckboxComponent, 
  ColorComponent, ChartComponent, ChartSvgComponent,
  ProgressBarComponent,
  HomeComponent,
  CustomButtonComponent,
  NavbarComponent,
  SpinnerComponent,
  FooterComponent,
  GridCssComponent
   ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
