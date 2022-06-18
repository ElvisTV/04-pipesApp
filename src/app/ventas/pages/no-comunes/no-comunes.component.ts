import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent  {

  // i18nSelect
  nombre: string = 'Alisson';
  genero: string = 'femenino'; 
  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino' : 'invitarla',
  }

  // i18nPlurarl
  clientes: string[] = ['Maria','Pedro','Juan','Elvis','Arturo'];
  clientesMapa = {
    '=0': 'no hay algun cliente esperando',
    '=1': 'tenemos un cliente esperado',
    '=2': 'tenemos 2 clientes esperando',
    'other': 'tenemos # clientes esperando'
  }

  cambiarCliente() {
    this.nombre = 'Elvis';
    this.genero = 'masculino';
  }

  borrarCliente() {
    this.clientes.pop();
  }

  persona = {
    nombre: 'elvis',
    edad: 35,
    direccion: 'Chiclayo, Peru'
  }

  // JsonPipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true,
    },
    {
      nombre: 'Robin',
      vuela: false,
    },
    {
      nombre: 'Aquaman',
      vuela: false,
    }
  ]
  // Async Pipe
  miObservable =  interval(1000); // imprime 1,2,3,4...

  valorPromesa = new Promise ((resolve, reject) => {
    setTimeout( () => {
      resolve('Tenemos data de promesa');
    }, 3500);
  });

}
