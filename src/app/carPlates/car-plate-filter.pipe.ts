import { PipeTransform, Pipe } from '@angular/core';
import { CarPlate } from '../models/carPlate.model';

@Pipe({
    name: 'carPlateFilter'
})

export class CarPlateFilterPipe implements PipeTransform {
    transform(carPlates: CarPlate [], searchTerm: string): CarPlate[] {
        if (!carPlates || !searchTerm){
            return carPlates
        }
        return carPlates.filter(carPlate =>
            carPlate.nr.toLocaleUpperCase().indexOf(searchTerm.toLocaleUpperCase()) !== -1);
    }
}