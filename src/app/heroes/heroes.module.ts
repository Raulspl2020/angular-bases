
import { NgModule } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { ListaComponent } from './lista/lista.component';
import { CommonModule } from '@angular/common';


@NgModule({
  exports:[
    HeroComponent,
    ListaComponent,
   ],
  declarations:[
    HeroComponent,
    ListaComponent,
   ],
   imports:[
    CommonModule
   ]


})
export class HeroesModule { }



