import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
    public entidad: string='CORPOAMAZONIA';
    public nombre: string='Raul';
    public edad: number=43;


    get capitalizado():string // este es un metodo de clase pero se usa como una propiedad.
    {
      return this.nombre.toLocaleUpperCase();//covertir a mayusculas
      // los get se ven como si fueran propiedades
    }

    // AHORA CREAMOS UN METODO PARA JUNTAR EL NOMBRE Y EL GET
// LAS PROPIEDADES APARECEN EN AZUL Y EL METODO EM AZUL
// LOS METODOS SE INVOCAN O PARENTESIS.

getHeroDescripcion_metodo():string{

return `${this.nombre}-${this.edad}`;
}

changenHero(): void{
 this.nombre= 'David';
}


changenEdad(): void{
this.edad=21;

}

resetForm(): void{
  this.edad=43;
  this.nombre='Raul';

  document.querySelector('h1')!.innerHTML='<h1>Dedes Angular</h1>';

  }

}
