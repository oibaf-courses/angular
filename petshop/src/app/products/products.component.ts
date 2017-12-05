import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ttt-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: any[] = [
    { name: 'Ração Pedigree', description: 'A melhor ração de todas!', id: 1},
    { name: 'Gaiola de Hamster', description: 'Uma prisão de luxo!', id: 2},
    { name: 'Arranhador para gatos', description: 'Arranhador duradouro!', id: 3},
    { name: 'Casinha de cachorro', description: 'Casa com dois andares!', id: 4},
  ];

  constructor() { }

  ngOnInit() {
  }

}
