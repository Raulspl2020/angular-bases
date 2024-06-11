import { Component } from '@angular/core';

@Component({

  selector: 'app-contadores',
  template: `
            <h1>PRUEBA</h1>
            <h3>{{contador}}</h3>
            <button (click)="incrementar(+1)">+1</button>
            <button (click)="incrementar(-1)">-1</button>
            <button (click)="incrementar(10)">Reset</button>`,
})

export class ContadorComponent
  {

    public contador: number=10;
    incrementar(valor:number):void{
      this.contador+=valor;
    if(valor==10)this.contador=valor;
    }
  }
