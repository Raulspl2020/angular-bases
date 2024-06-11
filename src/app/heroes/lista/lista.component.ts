import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';

@Component({
  selector: 'app-hero-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})


export class ListaComponent
{

  public NombresDeHeroes: string[]=['Spirdermas1','Spirdermas2','Spirdermas3','Spirdermas4','Spirdermas5'];
  public Heroeliminado?: string;
  //CREANDI UN METODO PARA ELIMINAR
  EliminarUltimoHeroe():void{
     this.Heroeliminado= this.NombresDeHeroes.pop();
  }


}

