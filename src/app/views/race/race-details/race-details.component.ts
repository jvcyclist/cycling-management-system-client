import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { RaceMock } from 'src/app/data-mocks/race-mock';

import { Race } from 'src/app/models/race.model';
import { RaceService } from 'src/app/services/race.service';

@Component({
  selector: 'app-race-details',
  templateUrl: './race-details.component.html',
  styleUrls: ['./race-details.component.css']
})
export class RaceDetailsComponent implements OnInit {

  raceMock: RaceMock = new RaceMock();
  race: Race = {};
  id: number = 0;


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
          race => this.race = race
        )
      });
  }

  onBack(): void {
    this.location.back();
  }

  

}
