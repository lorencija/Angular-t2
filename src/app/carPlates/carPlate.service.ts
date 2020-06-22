import { Injectable } from '@angular/core';
import { CarPlate } from '../models/carPlate.model';
import myData from '../../assets/data.json';


@Injectable()
export class CarPlateService {
    private listCarPlates: CarPlate [] = myData;

    getCarPlates(): CarPlate [] {
        return this.listCarPlates;
    }

    save(carPlate: CarPlate){
        this.listCarPlates.push(carPlate);
    }

    getLength(): number {
        return this.listCarPlates.length;
    }
}