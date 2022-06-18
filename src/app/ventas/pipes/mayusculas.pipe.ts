import { Pipe, PipeTransform } from '@angular/core';
import { Validators } from '@angular/forms';

@Pipe({
    name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform {
    
    transform(value: any, enMayusculas: boolean = true, ...args: any[]):string {
        
        return (enMayusculas)? value.toUpperCase(): value.toLocaleLowerCase();

        // transform(): string {
        //     return 'HOLA MUNDO!';        
        // }

    }

}