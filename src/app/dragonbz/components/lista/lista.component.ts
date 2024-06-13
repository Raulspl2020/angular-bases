import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

//aqui amarra todo el componente
// este componente es llamado por un modulo
@Component({
  selector: 'app-lista-lista',// este nombre es el que se llama en el html donde se quiera mostrar todo el  componente                             //
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {

  @Input()
  public charactarLista: Character[]=[{// ESTE ES EL HIJO LA INFORMACION
    nombre:'Juan',
    poder:3000
},{
    nombre:'Pedro',
    poder:9500
  },{
    nombre:'Carlos',
    poder:2000
  }];

}
