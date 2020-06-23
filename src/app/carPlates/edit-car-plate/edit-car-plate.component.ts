import { Component, OnInit, Input } from '@angular/core';
import { CarPlate } from '../../models/carPlate.model';
import { CarPlateService } from '../../carPlates/carPlate.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-car-plate',
  templateUrl: './edit-car-plate.component.html',
  styleUrls: ['./edit-car-plate.component.css']
})
export class EditCarPlateComponent implements OnInit {
  private selectedCarPlateId: number;
  @Input() carplate: CarPlate;
  @Input() searchTerm: string;

  constructor(private _carPlateservise: CarPlateService,
              private _router: Router,
              private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this._route.paramMap.subscribe(parameterMap =>{
      const id = +parameterMap.get('id');
      this.getCarPlate(id);
    });
  }

  private getCarPlate(id: number) {
    if (id == 0) {
      this.carplate = {
        id: null,
        nr: null,
        name: null,
        surname: null
      }
    } else {
      this.carplate = this._carPlateservise.getCarPlate(id);

    }
  }

  saveCarPlate(): void{
    this._carPlateservise.save(this.carplate);
    this._router.navigate(['list']);
  }

  updateCarPlate(): void{
    this._carPlateservise.update(this.carplate);
    this._router.navigate(['list']);
  }
}
