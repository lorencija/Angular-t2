import { Injectable } from '@angular/core';
import { CarPlate } from '../models/carPlate.model';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import myData from '../../assets/data.json';
import { Observable } from 'rxjs';



@Injectable()
export class CarPlateService {

    constructor(private httpClient: HttpClient) {}
    baseUrl = 'http://localhost:3000/carPlate';
    private listCarPlates: CarPlate [] = myData;

    getCarPlates(): Observable<CarPlate[]> {
        return this.httpClient.get<CarPlate[]>(this.baseUrl);
    }

    getCarPlate(id: number): Observable<CarPlate> {
        return this.httpClient.get<CarPlate>(`${this.baseUrl}/${id}`)
    }

    addCarPlate(carPlate: CarPlate): Observable<CarPlate>{
        if(carPlate.id === null) {
            return this.httpClient.post<CarPlate>(this.baseUrl,carPlate, {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json'
                })
            })
        }
        this.listCarPlates.push(carPlate);
    }

    refresh(): void {
        window.location.reload();
    }

    deleteCarPlate(id: number): Observable<void> {
        return this.httpClient.delete<void>(`${this.baseUrl}/${id}`)
        }

    update(carPlate: CarPlate): Observable<void>{
        return this.httpClient.put<void>(`${this.baseUrl}/${carPlate.id}`,carPlate, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        })
    }
}