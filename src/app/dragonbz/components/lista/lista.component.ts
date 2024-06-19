import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Variables1 } from '../../interfaces/character.interface';

//aqui amarra todo el componente
// este componente es llamado por un modulo
@Component({
  selector: 'app-lista-lista',// este nombre es el que se llama en el html donde se quiera mostrar todo el  componente                             //
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {

  @Input()
  public charactarLista: Variables1[]=[{// ESTE ES EL HIJO LA INFORMACION
    nombre:'Juan',
    poder:3000,
    edad:42
},{
    nombre:'Pedro',
    poder:9500,
    edad:42
  },{
    nombre:'Carlos',
    poder:2000,
    edad:42
  }];

    @Output()
    public Eliminar:EventEmitter<string>= new EventEmitter();

    EliminaRegistro(id?: string):void
    {
      if(!id) return;
      console.log({id});
      this.Eliminar.emit(id);
    }

}
