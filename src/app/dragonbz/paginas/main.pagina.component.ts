import { Component} from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dragobz-main-pagina',
  templateUrl: './main.pagina.component.html'
})

export class DragonbzComponent
{
// Arreglo de personajes
// hay que definir en la interfas los tipo de datos en este caos
// es Character
// ESTA ES LA INFORMACION DEL PADRE LA QUE STOY MOSTRANDO EN EL NAVEGADOR
  public characters: Character[]=
  [{
      nombre:'RaulR1',
      poder:1000
  },{
      nombre:'David2',
      poder:9500
    },{
      nombre:'David3',
      poder:9500
    },{
      nombre:'David4',
      poder:9500
    }];

}
