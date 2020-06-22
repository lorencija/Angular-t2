import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CarPlate } from '../../models/carPlate.model';
import { CarPlateService } from '../carPlate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-car-plate',
  templateUrl: './create-car-plate.component.html',
  styleUrls: ['./create-car-plate.component.css']
})
export class CreateCarPlateComponent implements OnInit {

  listNumber=this.getListNumber();

  carPlate: CarPlate ={
    id: this.listNumber,
    nr: null,
    name: null,
    surname: null
  } 

  constructor(private _carPlateService: CarPlateService,
              private _router: Router) { }

  ngOnInit(): void {
  }

  saveCarPlate(): void{
    this._carPlateService.save(this.carPlate);
    this._router.navigate(['list']);
  }

  getListNumber(): any {
   return this._carPlateService.getLength() + 1;
  }

}
