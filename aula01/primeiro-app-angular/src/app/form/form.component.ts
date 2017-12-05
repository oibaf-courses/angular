import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ttt-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  private count = 0;

  constructor() { }

  ngOnInit() {
  }

  send() {
    console.log('Clicou ' + (++this.count) + ' vezes, parabéns!');
    return false;
  }

}
