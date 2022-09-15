import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsContainerComponent } from './cardsContainer/cardsContainer.component';
import {TablesModule} from "./tables/tables.module";


@NgModule({
  declarations: [
    CardsContainerComponent
  ],
  exports: [
    CardsContainerComponent
  ],
  imports: [
    TablesModule,
    CommonModule
  ]
})

export class FeaturesModule { }
