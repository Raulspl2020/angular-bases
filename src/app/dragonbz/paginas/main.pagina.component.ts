import { Component} from '@angular/core';
import { DragonbzServicios} from '../servicios/servicios.service';

@Component({
  selector: 'app-dragobz-main-pagina',
  templateUrl: './main.pagina.component.html'
})

export class DragonbzComponent
{

  constructor (  public DragonbzServicios: DragonbzServicios){


  }




}
