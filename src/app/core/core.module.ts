import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import { MainComponent } from './layout/main/main.component';



@NgModule({
  declarations: [
    HeaderComponent,
    MainComponent
  ],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
