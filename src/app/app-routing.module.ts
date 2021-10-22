import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipmentDetailsComponent } from './views/equipment/equipment-details/equipment-details.component';
import { EquipmentComponent } from './views/equipment/equipment.component';
import { LoginComponent } from './views/login/login.component';
import { MainComponent } from './views/main/main.component';
import { RaceDetailsComponent } from './views/race/race-details/race-details.component';
import { RaceComponent } from './views/race/race.component';
import { ReportErrorComponent } from './views/report-error/report-error.component';
import { RiderDetailsComponent } from './views/rider/rider-details/rider-details.component';
import { RiderPersonalDataComponent } from './views/rider/rider-personal-data/rider-personal-data.component';
import { RiderUpdateComponent } from './views/rider/rider-update/rider-update.component';
import { RiderComponent } from './views/rider/rider.component';
import { TrainingCampDetailsComponent } from './views/training-camp/training-camp-details/training-camp-details.component';
import { TrainingCampComponent } from './views/training-camp/training-camp.component';
import { TrainingDetailComponent } from './views/training/training-detail.component';
import { TrainingComponent } from './views/training/training.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'main', component: MainComponent },
  { path: 'training', component: TrainingComponent },
  { path: 'training/:id', component: TrainingDetailComponent },
  { path: 'race', component: RaceComponent },
  { path: 'race/:id', component: RaceDetailsComponent },
  { path: 'training-camp', component: TrainingCampComponent },
  { path: 'training-camp/:id', component: TrainingCampDetailsComponent },
  { path: 'rider', component: RiderComponent },
  { path: 'rider/:id', component: RiderDetailsComponent },
  { path: 'rider/:id/personal-data', component: RiderPersonalDataComponent },
  { path: 'riders/new', component: RiderUpdateComponent },
  { path: 'rider/:id/edit', component: RiderUpdateComponent },
  { path: 'equipment', component: EquipmentComponent },
  { path: 'equipment/:id', component: EquipmentDetailsComponent },
  { path: 'report-error', component: ReportErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }