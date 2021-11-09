import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Race } from 'src/app/models/race.model';
import { Rider } from 'src/app/models/rider.model';
import { RaceService } from 'src/app/services/race.service';

@Component({
  selector: 'app-race-summary',
  templateUrl: './race-summary.component.html',
  styleUrls: ['./race-summary.component.css']
})
export class RaceSummaryComponent implements OnInit {

  @Input()
  id!: number;
  race: Race = {};

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
