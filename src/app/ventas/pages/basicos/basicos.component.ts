import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent  {

  nombreLower: string = 'elvis';
  nombreUpper: string =  'ARTURO';
  nombreCompleto: string = 'eLvIs ArTuRo';

  fecha: Date = new Date();

}
