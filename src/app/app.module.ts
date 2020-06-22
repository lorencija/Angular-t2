import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewComponent } from './new/new.component';
import { FormsModule } from '@angular/forms';
import { ListCarPlatesComponent } from './carPlates/list-car-plates/list-car-plates.component';
import { CreateCarPlateComponent } from './carPlates/create-car-plate/create-car-plate.component';

@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    ListCarPlatesComponent,
    CreateCarPlateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
