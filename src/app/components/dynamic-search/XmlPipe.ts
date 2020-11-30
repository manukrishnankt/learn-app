import * as vkbeautify from 'vkbeautify';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'xml'
})
export class XmlPipe implements PipeTransform {
    transform(value: string): string {
        let stringg = '';
        try{
            stringg = vkbeautify.xml(value);
        }catch (err){
            // console.log(err);
        }
        return stringg;
    }
}
