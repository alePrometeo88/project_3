import { Component, OnInit } from '@angular/core';
import {Products} from "../../modules/products";


const ELEMENTDATA: Products [] = [
  {name: 'oreo', category: 'biscotti', price: 1},
  {name: 'gocciole', category: 'biscotti', price: 3},
  {name: 'nascondini', category: 'biscotti', price: 5}
]

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})

export class TablesComponent implements OnInit {

  ListaProdotti = ELEMENTDATA;

  constructor() { }

  ngOnInit(): void {
  }

}
