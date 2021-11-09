import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { RaceMock } from 'src/app/data-mocks/race-mock';
import { Address } from 'src/app/models/address.model';
import { Journey } from 'src/app/models/journey.model';

import { Race } from 'src/app/models/race.model';
import { Rider } from 'src/app/models/rider.model';
import { RaceService } from 'src/app/services/race.service';

@Component({
  selector: 'app-race-details',
  templateUrl: './race-details.component.html',
  styleUrls: ['./race-details.component.css']
})
export class RaceDetailsComponent implements OnInit {

  viewName: string = 'SUMMARY';

  raceMock: RaceMock = new RaceMock();
  race: Race = {};
  id: number = 0;

  riders: Rider[]= [];
  journey: Journey = {};

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private raceService: RaceService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params: ParamMap) => {
        this.id = Number(params.get('id'));
        this.raceService.getRaceById(this.id).subscribe(
          race => {
          this.race = race;
          this.journey = race.journey!;
        }
        )
      });
  }

  onBack(): void {
    this.location.back();
  }

  onChangeView(viewName: string){
    this.viewName = viewName;
  }

}
