import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './card/card.component';



@NgModule({
    declarations: [
        ButtonsComponent,
        CardsComponent
    ],
    exports: [
        ButtonsComponent,
        CardsComponent
    ],
    imports: [
        CommonModule
    ]
})
export class SharedModule { }
