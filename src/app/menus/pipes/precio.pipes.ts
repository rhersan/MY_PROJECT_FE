import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'precio'
})
export class PrecioPipe implements PipeTransform{
    transform(value:number) {
        return '$ ' + value + '.00'
    }
}