import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragonbzComponent } from './paginas/main.pagina.component';
import { ListaComponent } from './components/lista/lista.component';
import { FormularioComponent } from './components/formulario/formulario.component';



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
    CommonModule
  ]
})
export class DragonbzModule { }
