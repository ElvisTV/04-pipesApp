import { Component } from '@angular/core';

import {MenuItem} from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  nombre: string = "Elvi Arturo Tezén Villanueva";
  valor: number = 1000;
  obj = {
    nombre: 'Fernando'
  }

  mostrarNombre() {
    console.log(this.nombre);
  }

  title = 'pipesApp';

}

