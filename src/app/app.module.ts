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
import { MatTableModule} from '@angular/material/table';
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader"
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NearestRacesComponent } from './views/nearest-races/nearest-races.component';
import { RiderDetailsComponent } from './views/rider/rider-details/rider-details.component';
import { RaceDetailsComponent } from './views/race/race-details/race-details.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { EquipmentDetailsComponent } from './views/equipment/equipment-details/equipment-details.component';
import { LoginComponent } from './views/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';

import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RiderPersonalDataComponent } from './views/rider/rider-personal-data/rider-personal-data.component';
import { RiderNavigationComponent } from './views/rider/rider-navigation/rider-navigation.component';
import { RiderAddressComponent } from './views/rider/rider-address/rider-address.component';
import { RiderAchievementsComponent } from './views/rider/rider-achievements/rider-achievements.component';
import { RiderMedicalCardComponent } from './views/rider/rider-medical-card/rider-medical-card.component';
import { RiderUpdateComponent } from './views/rider/rider-update/rider-update.component';
import { RaceUpdateComponent } from './views/race/race-update/race-update.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { TrainingDetailComponent } from './views/training/training-detail/training-detail.component';
import { TrainingUpdateComponent } from './views/training/training-update/training-update.component';
import { EquipmentUpdateComponent } from './views/equipment/equipment-update/equipment-update.component';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { RaceNavigationComponent } from './views/race/race-navigation/race-navigation.component';
import { RaceSummaryComponent } from './views/race/race-summary/race-summary.component';
import { RaceAccomodationComponent } from './views/race/race-accomodation/race-accomodation.component';
import { RaceRidersComponent } from './views/race/race-riders/race-riders.component';
import { RaceCalendarComponent } from './views/race/race-calendar/race-calendar.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CommonModule } from '@angular/common';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { NearestServicesComponent } from './views/race/nearest-services/nearest-services.component';
import { RegisterAccountComponent } from './views/admin/register-account/register-account.component';
import { UsersComponent } from './views/admin/users/users.component';
import { AdminBoardComponent } from './views/admin/admin-board/admin-board.component';
import { UserDetailsComponent } from './views/admin/user-details/user-details.component';
import { authInterceptorProviders } from './helpers/auth.interceptor';
import { AddUserComponent } from './views/admin-board/add-user/add-user.component';
import { AccountActivationComponent } from './views/account-activation/account-activation.component';
import { BikeComponent } from './views/bike/bike.component';
import { BikeUpdateComponent } from './views/bike/bike-update/bike-update.component';
import { BikeDetailsComponent } from './views/bike/bike-details/bike-details.component';
import { MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    TrainingComponent,
    TrainingDetailComponent,
    TrainingUpdateComponent,
    NavigatorComponent,
    MainComponent,
    RaceComponent,
    EquipmentComponent,
    ReportErrorComponent,
    RiderComponent,
    NearestRacesComponent,
    RiderDetailsComponent,
    RaceDetailsComponent,
    EquipmentDetailsComponent,
    LoginComponent,
    RiderPersonalDataComponent,
    RiderNavigationComponent,
    RiderAddressComponent,
    RiderAchievementsComponent,
    RiderMedicalCardComponent,
    RiderUpdateComponent,
    RaceUpdateComponent,
    EquipmentUpdateComponent,
    RaceNavigationComponent,
    RaceSummaryComponent,
    RaceAccomodationComponent,
    RaceRidersComponent,
    RaceCalendarComponent,
    NearestServicesComponent,
    RegisterAccountComponent,
    UsersComponent,
    AdminBoardComponent,
    UserDetailsComponent,
    AddUserComponent,
    AccountActivationComponent,
    BikeComponent,
    BikeUpdateComponent,
    BikeDetailsComponent
  ],
  imports: [
    NgbModalModule,
    CommonModule,
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
    }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      registrationStrategy: 'registerImmediately'
    }),

    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatOptionModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    MatSnackBarModule
  ],
  providers: [ { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } }, authInterceptorProviders, {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2500}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
