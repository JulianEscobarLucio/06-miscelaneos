import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gn-style',
  template: `
    <p [style.fontSize.px]="tamano">
      Hola mundo.... esta es una etiqueta hml
    </p>
    <button class="btn btn-primary" (click)="tamano = tamano + 5">
       <i class="fa fa-plus"></i>
    </button>
    
    <button class="btn btn-primary" (click)="tamano = tamano - 5">
       <i class="fa fa-minus"></i>
    </button>
  `,
  styles: []
})
export class GnStyleComponent implements OnInit {

  tamano = 20;

  constructor() { }

  ngOnInit() {
  }

}
