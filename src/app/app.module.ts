import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ListCarPlatesComponent } from './carPlates/list-car-plates/list-car-plates.component';
import { CreateCarPlateComponent } from './carPlates/create-car-plate/create-car-plate.component';
import { CarPlateService } from './carPlates/carPlate.service';
import { EditCarPlateComponent } from './carPlates/edit-car-plate/edit-car-plate.component';
import { CarPlateFilterPipe } from './carPlates/car-plate-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListCarPlatesComponent,
    CreateCarPlateComponent,
    EditCarPlateComponent,
    CarPlateFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CarPlateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
