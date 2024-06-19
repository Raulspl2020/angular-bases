import { Component, EventEmitter, Output } from '@angular/core';
import { Variables1 } from '../../interfaces/character.interface';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent
{
  //ESTE ES UN OBJETO   CON SUS PROPIEDADES
    public character: Variables1=
      {
        nombre:'',
        poder:0,
        edad:0,
      };



  // ASI CREAMOS NUESTRA INSTACIA DE ESTE  EMISOR DE EVENTOS
   @Output()
   public Nuevo: EventEmitter<Variables1>= new EventEmitter();


// Nuevo metodo para emitir variables
    NuevoRegistro(): void {
          console.log(this.character);
          if(this.character.nombre.length===0) return;
          this.Nuevo.emit(this.character);
          this.character.nombre='';
          this.character.poder=0;
          this.character.edad=0;
    }

}
