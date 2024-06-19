
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Variables1 } from '../interfaces/character.interface';
import{ v4 as uuid } from 'uuid';


@Injectable({
  providedIn: 'root'
})
export class DragonbzServicios {

  //PROPIEDAD PUBLICA QUE SE LLAMA characters
  public characters: Variables1[]=
  [{
     id: uuid(),
     nombre:'RaulR1',
      poder:1000,
      edad:41
  },{
    id: uuid(),
      nombre:'David2',
      poder:9500,
      edad:42
    },{
      id: uuid(),
      nombre:'David3',
      poder:9500,
      edad:43
    },{
      id: uuid(),
      nombre:'David4',
      poder:9500,
      edad:44
    }];

    // UN METODO PUBLICO QUE SE LLAMA NuevoRegistro
    NuevoRegistro(character: Variables1): void {
     // Añadiendo un nuevo registro al final de la lista
       const newRegistro: Variables1={id:uuid(),...character} ;
       this.characters.push(newRegistro);

    }


@Output()
 public Eliminar: EventEmitter<string>=new EventEmitter();
    ElimninarRegistro(id:string): void {

        this.characters=this.characters.filter(characters=>characters.id!==id);
    }



}
