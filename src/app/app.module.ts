import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ListCarPlatesComponent } from './carPlates/list-car-plates/list-car-plates.component';
import { CreateCarPlateComponent } from './carPlates/create-car-plate/create-car-plate.component';
import { CarPlateService } from './carPlates/carPlate.service';
import { EditCarPlateComponent } from './carPlates/edit-car-plate/edit-car-plate.component';

@NgModule({
  declarations: [
    AppComponent,
    ListCarPlatesComponent,
    CreateCarPlateComponent,
    EditCarPlateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CarPlateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
