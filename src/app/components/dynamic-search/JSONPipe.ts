import * as vkbeautify from 'vkbeautify';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'json'
})
export class JSONPipe implements PipeTransform {
    transform(value: string): string {
        let stringg = '';
        try{
            stringg = vkbeautify.json(value);
        }catch (err){
            // console.log(err);
        }
        return stringg;
    }
}
