import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Race } from 'src/app/models/race.model';
import { Rider } from 'src/app/models/rider.model';
import { RaceService } from 'src/app/services/race.service';
import { RiderService } from 'src/app/services/rider.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  ridersWithMedicalExpiration: Rider[]  = [];
  nearestRaces: Race[] = []

  columnsToDisplayRiders = ['category', 'firstName', 'lastName','validTo', 'actions' ];
  columnsToDisplayRaces = ['title', 'startDate', 'actions'];

  constructor(private route: Router,
              private raceService: RaceService,
              private riderService: RiderService
    ) { }

  ngOnInit(): void {
    console.log('test: ' + this.nearestRaces.length)
    this.raceService.getNearestRaces().subscribe(races => {
      this.nearestRaces = races;
    })

    this.riderService.getRidersWithSoonExpirationOfMedicalCard().subscribe(
      riders => {
        this.ridersWithMedicalExpiration = riders;
      }
    )

  }

  daysRemains(date: Date): number{
    console.log(date.toUTCString)



  //  console.log('date ' + date)
    var todayDate = new Date().valueOf() - date.valueOf();
  //  console.log('date valueo: '  + date.getTime());
    var diff = date.valueOf() - todayDate.valueOf();
 //   console.log(diff);
   // var diffDays = Math.ceil((date.valueOf() - todayDate.valueOf()) / (1000 * 3600 * 24)); 
    return 0;
  }

}
