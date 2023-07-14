import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { RegisterCarsComponent } from './components/register-cars/register-cars.component';
import { RegisterAddCarsComponent } from './components/register-add-cars/register-add-cars.component';



@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    RegisterCarsComponent,
    RegisterAddCarsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    HomeComponent
  ]
})
export class HomeModule { }
