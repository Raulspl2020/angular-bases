import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormularioComponent } from './components/formulario/formulario.component';

import { DragonbzComponent } from './paginas/main.pagina.component';
import { ListaComponent } from './components/lista/lista.component';




@NgModule({
  declarations: [

    DragonbzComponent,
      ListaComponent,
      FormularioComponent,

  ],
  exports:[
    DragonbzComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class DragonbzModule { }
