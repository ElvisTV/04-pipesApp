import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }


  // nombre: string = "Elvi Arturo Tezén Villanueva";
  // valor: number = 1000;
  // obj = {
  //   nombre: 'Fernando'
  // }

  // mostrarNombre() {
  //   console.log(this.nombre);
  // }

  // title = 'pipesApp';

}

