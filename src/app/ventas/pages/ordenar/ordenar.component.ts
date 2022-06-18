import { Component } from '@angular/core';
import { Color, Herore } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {
  
  enMayusculas: boolean = false;
  nombre: string = 'elvis';

  ordenarPor: string = '';

  heroes: Herore[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro,
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.verde,
    },
    {
      nombre: 'Daredevil',
      vuela: false,
      color: Color.rojo,
    },
    {
      nombre: 'Linterna Verde',
      vuela: true,
      color: Color.verde,
    }

  ]

  presionado(): void {
    this.enMayusculas = !this.enMayusculas;
  }

  cambiar():void {

  }

  cambiarOrden( valor: string ): void {
    this.ordenarPor = valor;
  }


}
