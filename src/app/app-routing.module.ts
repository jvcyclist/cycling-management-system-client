import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';
import { AccountActivationComponent } from './views/account-activation/account-activation.component';
import { AdminBoardComponent } from './views/admin/admin-board/admin-board.component';
import { RegisterAccountComponent } from './views/admin/register-account/register-account.component';
import { UserDetailsComponent } from './views/admin/user-details/user-details.component';
import { UsersComponent } from './views/admin/users/users.component';

import { EquipmentDetailsComponent } from './views/equipment/equipment-details/equipment-details.component';
import { EquipmentUpdateComponent } from './views/equipment/equipment-update/equipment-update.component';
import { EquipmentComponent } from './views/equipment/equipment.component';
import { LoginComponent } from './views/login/login.component';
import { MainComponent } from './views/main/main.component';
import { RaceCalendarComponent } from './views/race/race-calendar/race-calendar.component';
import { RaceDetailsComponent } from './views/race/race-details/race-details.component';
import { RaceUpdateComponent } from './views/race/race-update/race-update.component';
import { RaceComponent } from './views/race/race.component';
import { ReportErrorComponent } from './views/report-error/report-error.component';
import { RiderDetailsComponent } from './views/rider/rider-details/rider-details.component';
import { RiderPersonalDataComponent } from './views/rider/rider-personal-data/rider-personal-data.component';
import { RiderUpdateComponent } from './views/rider/rider-update/rider-update.component';
import { RiderComponent } from './views/rider/rider.component';
import { TrainingDetailComponent } from './views/training/training-detail/training-detail.component';
import { TrainingUpdateComponent } from './views/training/training-update/training-update.component';
import { TrainingComponent } from './views/training/training.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },

  { path: 'training', component: TrainingComponent, canActivate: [AuthGuardService] },
  { path: 'training/:id', component: TrainingDetailComponent, canActivate: [AuthGuardService] },
  { path: 'trainings/new', component: TrainingUpdateComponent, canActivate: [AuthGuardService] },
  { path: 'training/:id/edit', component: TrainingUpdateComponent, canActivate: [AuthGuardService] },

  { path: 'race', component: RaceComponent, canActivate: [AuthGuardService] },
  { path: 'race/calendar', component: RaceCalendarComponent, canActivate: [AuthGuardService] },
  { path: 'race/:id', component: RaceDetailsComponent,canActivate: [AuthGuardService] },
  { path: 'races/new', component: RaceUpdateComponent,canActivate: [AuthGuardService] },
  { path: 'race/:id/edit', component: RaceUpdateComponent,canActivate: [AuthGuardService] },
  
  { path: 'rider', component: RiderComponent, canActivate: [AuthGuardService] },
  { path: 'rider/:id', component: RiderDetailsComponent, canActivate: [AuthGuardService] },
  { path: 'rider/:id/personal-data', component: RiderPersonalDataComponent, canActivate: [AuthGuardService] },
  { path: 'riders/new', component: RiderUpdateComponent, canActivate: [AuthGuardService] },
  { path: 'rider/:id/edit', component: RiderUpdateComponent, canActivate: [AuthGuardService] },

  { path: 'equipment', component: EquipmentComponent, canActivate: [AuthGuardService] },
  { path: 'equipment/:id', component: EquipmentDetailsComponent, canActivate: [AuthGuardService] },
  { path: 'equipments/new', component: EquipmentUpdateComponent, canActivate: [AuthGuardService] },
  { path: 'equipment/:id/edit', component: EquipmentUpdateComponent, canActivate: [AuthGuardService] },

  { path: 'admin', component: AdminBoardComponent, canActivate: [AuthGuardService] },
  { path: 'admin/register-account', component: RegisterAccountComponent, canActivate: [AuthGuardService]},
  { path: 'admin/users/:id', component: UserDetailsComponent, canActivate: [AuthGuardService]},

  { path: 'account-activation', component: AccountActivationComponent},

  { path: 'report-error', component: ReportErrorComponent  },
  { path: 'main', component: MainComponent, canActivate: [AuthGuardService] },
  { path: '', component: MainComponent, canActivate: [AuthGuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }