import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TrainingComponent } from './views/training/training.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavigatorComponent } from './views/navigator/navigator.component';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './views/main/main.component';
import { RaceComponent } from './views/race/race.component';
import { EquipmentComponent } from './views/equipment/equipment.component';
import { ReportErrorComponent } from './views/report-error/report-error.component';
import { RiderComponent } from './views/rider/rider.component';
import {MatTableModule} from '@angular/material/table';
import { TrainingCampComponent } from './views/training-camp/training-camp.component';
import { TrainingDeleteDialogComponent } from './views/training/training-delete-dialog.component';
import { TrainingDetailComponent } from './views/training/training-detail.component';
import { TrainingUpdateComponent } from './views/training/training-update.component';
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader"
import { HttpClient, HttpClientModule } from '@angular/common/http';

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
    RiderComponent,
    TrainingCampComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    MatTableModule,
    HttpClientModule,
    TranslateModule.forRoot(
      {
      loader: {
        provide: TranslateLoader,
        useFactory: (http:HttpClient) => {return new TranslateHttpLoader(http, './assets/i18n/', '.json');},
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
