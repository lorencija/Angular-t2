import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCarPlatesComponent } from './carPlates/list-car-plates/list-car-plates.component';
import { CreateCarPlateComponent } from './carPlates/create-car-plate/create-car-plate.component';
import { EditCarPlateComponent } from './carPlates/edit-car-plate/edit-car-plate.component';

const routes: Routes = [
  {path: 'list', component: ListCarPlatesComponent},
  {path: 'create', component: CreateCarPlateComponent },
  {path: '', redirectTo: '/list', pathMatch: 'full' },
  {path: 'edit/:id', component: EditCarPlateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
