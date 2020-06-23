import { Injectable } from '@angular/core';
import { CarPlate } from '../models/carPlate.model';
import myData from '../../assets/data.json';


@Injectable()
export class CarPlateService {
    private listCarPlates: CarPlate [] = myData;

    getCarPlates(): CarPlate [] {
        return this.listCarPlates;
    }

    getCarPlate(id: number): CarPlate {
        return this.listCarPlates.find(e => e.id === id);
    }

    save(carPlate: CarPlate){
        this.listCarPlates.push(carPlate);
    }

    getLength(): number {
        let i: number;
        let maxValue = this.listCarPlates[0];
        let max = maxValue.id;
        for (i = 1; i < this.listCarPlates.length; i++) {
            let element = this.listCarPlates[i]; 
            if (maxValue.id < element.id) {
                max=element.id;
            } 
        }
        return max;
    }

    deleteCarPlate(id: number) {
        const i = this.listCarPlates.findIndex(e => e.id === id);
        if (i != -1) {
            this.listCarPlates.splice(i, 1);
        }
    }

    update(carPlate: CarPlate){
        this.listCarPlates[carPlate.id-1]=carPlate;
    }
}