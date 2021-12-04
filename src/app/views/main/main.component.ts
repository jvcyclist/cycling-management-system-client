import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MedicalCard } from 'src/app/models/medical-card.model';
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
    var valueOfDate: number = Date.parse(date.toString());
   // console.log("Date value: " + valueOfDate)

    var todayDate = new Date().valueOf();


    var diff = valueOfDate - todayDate.valueOf();
    console.log(diff.valueOf());
    var diffDays = Math.ceil((valueOfDate - todayDate) / (1000 * 3600 * 24)); 
    console.log('Diff days: ' + diffDays)
    return diffDays;
  }

  getLatestMedicalCard(medicalCards: MedicalCard[]): MedicalCard{
    var medicalCard = medicalCards.reduce(
      function(a, b) {
        return a.validTo!.valueOf() ! > b.validTo!.valueOf() ? a : b;
      }
    );
    console.log('return MedicalCard vt Date: ' + medicalCard.validTo)
      return medicalCard;
  }
}
