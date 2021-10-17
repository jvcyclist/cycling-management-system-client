import { Component, OnInit } from '@angular/core';
import { RaceMock } from 'src/app/models/race-mock';
import { Race } from 'src/app/models/race.model';

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.css']
})
export class RaceComponent implements OnInit {

  raceMock: RaceMock = new RaceMock();
  races: Race[] = this.raceMock.races;

  columnsToDisplay = ['id', 'title', 'startDate', 'endDate','url' , 'actions'];

  constructor() { }

  ngOnInit(): void {
  }

}
