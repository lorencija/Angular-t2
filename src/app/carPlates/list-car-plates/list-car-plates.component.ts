import { Component, OnInit } from '@angular/core';
import { CarPlate } from '../../models/carPlate.model';
import { CarPlateService } from '../../carPlates/carPlate.service';

@Component({
  templateUrl: './list-car-plates.component.html',
  styleUrls: ['./list-car-plates.component.css']
})
export class ListCarPlatesComponent implements OnInit {

carPlates: CarPlate [];

  constructor(private _carPlateservise: CarPlateService) { }

  ngOnInit(): void {
    this.carPlates = this._carPlateservise.getCarPlates();
  }

}
