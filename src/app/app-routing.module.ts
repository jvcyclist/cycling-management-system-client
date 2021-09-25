import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipmentComponent } from './views/equipment/equipment.component';
import { MainComponent } from './views/main/main.component';
import { RaceComponent } from './views/race/race.component';
import { ReportErrorComponent } from './views/report-error/report-error.component';
import { RiderComponent } from './views/rider/rider.component';
import { TrainingComponent } from './views/training/training.component';

const routes: Routes = [    
  { path: 'main', component: MainComponent },
  { path: 'training', component: TrainingComponent },
  { path: 'race', component: RaceComponent },
  { path: 'rider', component: RiderComponent },
  { path: 'equipment', component: EquipmentComponent },
  { path: 'report-error', component: ReportErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }