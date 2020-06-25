import { Component, OnInit, Input } from '@angular/core';
import { CarPlate } from '../../models/carPlate.model';
import { CarPlateService } from '../../carPlates/carPlate.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './list-car-plates.component.html',
  styleUrls: ['./list-car-plates.component.css']
})
export class ListCarPlatesComponent implements OnInit {
  searchTerm: string;
  carPlates: CarPlate [];
@Input() carplate: CarPlate;

  constructor(private _carPlateServise: CarPlateService,
              private _router: Router) { }

  ngOnInit(): void {
    this._carPlateServise.getCarPlates().subscribe(empList => this.carPlates = empList);
  }

  editCarPlate(carPlateID: number) {
    this._router.navigate(['/edit',carPlateID]);
  }

  deleteCarPlate(carPlateID: number) {
    this._carPlateServise.deleteCarPlate(carPlateID).subscribe(
      () => console.log(`Car number plate ID = ${carPlateID} deleted`)
    );
    this._carPlateServise.refresh();
  }
}
