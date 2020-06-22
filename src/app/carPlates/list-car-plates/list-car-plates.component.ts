import { Component, OnInit } from '@angular/core';
import { CarPlate } from '../../models/carPlate.model';
import myData from '../../../assets/data.json';

@Component({
  templateUrl: './list-car-plates.component.html',
  styleUrls: ['./list-car-plates.component.css']
})
export class ListCarPlatesComponent implements OnInit {

carPlates: CarPlate [] = myData;

  constructor() { }

  ngOnInit(): void {
  }

}
