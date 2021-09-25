import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TrainingComponent } from './views/training/training.component';
import { TrainingDeleteDialogComponent } from './views/training-delete-dialog/training-delete-dialog.component';
import { TrainingDetailComponent } from './views/training-detail/training-detail.component';
import { TrainingUpdateComponent } from './views/training-update/training-update.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavigatorComponent } from './views/navigator/navigator.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './views/main/main.component';
import { RaceComponent } from './views/race/race.component';
import { EquipmentComponent } from './views/equipment/equipment.component';
import { ReportErrorComponent } from './views/report-error/report-error.component';
import { RiderComponent } from './views/rider/rider.component';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    TrainingComponent,
    TrainingDeleteDialogComponent,
    TrainingDetailComponent,
    TrainingUpdateComponent,
    NavigatorComponent,
    MainComponent,
    RaceComponent,
    EquipmentComponent,
    ReportErrorComponent,
    RiderComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
