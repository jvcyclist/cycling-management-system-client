import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { RaceMock } from 'src/app/models/race-mock';
import { Race } from 'src/app/models/race.model';

@Component({
  selector: 'app-race-details',
  templateUrl: './race-details.component.html',
  styleUrls: ['./race-details.component.css']
})
export class RaceDetailsComponent implements OnInit {

  raceMock: RaceMock = new RaceMock();
  race: Race = this.raceMock.races[0];
  id: number = 0;


  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params: ParamMap) => {
        this.id = Number(params.get('id'));
        this.race = this.raceMock.races[this.id - 1];
      });
  }

  onBack(): void {
    this.location.back();
  }

  

}
