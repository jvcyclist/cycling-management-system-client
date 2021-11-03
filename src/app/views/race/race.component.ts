import { Component, OnInit } from '@angular/core';
import { RaceMock } from 'src/app/data-mocks/race-mock';

import { Race } from 'src/app/models/race.model';
import { RaceService } from 'src/app/services/race.service';

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.css']
})
export class RaceComponent implements OnInit {

  raceMock: RaceMock = new RaceMock();
  races: Race[] = [];

  columnsToDisplay = ['id', 'title', 'startDate', 'endDate','url' , 'actions'];

  constructor(private raceService: RaceService) { }

  ngOnInit(): void {
    this.raceService.getAllRaces().subscribe(
      races => this.races = races
    )
  }

}
