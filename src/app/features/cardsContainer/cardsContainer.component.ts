import { Component, OnInit } from '@angular/core';
import {Products} from "../../modules/products";

const ELEMENTDATA: Products [] = [
  {name: 'oreo', category: 'biscotti', price: 1},
  {name: 'gocciole', category: 'biscotti', price: 3},
  {name: 'nascondini', category: 'biscotti', price: 5}
]

@Component({
  selector: 'app-cardsContainer',
  templateUrl: './cardsContainer.component.html',
  styleUrls: ['./cardsContainer.component.scss']
})
export class CardsContainerComponent implements OnInit {

  ListaCarte = ELEMENTDATA;

  constructor() { }

  ngOnInit(): void {
  }

}
