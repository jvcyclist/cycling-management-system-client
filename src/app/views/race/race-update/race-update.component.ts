import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { RaceMock } from 'src/app/data-mocks/race-mock';

import { Race } from 'src/app/models/race.model';
import { RaceService } from 'src/app/services/race.service';

@Component({
  selector: 'app-race-update',
  templateUrl: './race-update.component.html',
  styleUrls: ['./race-update.component.css']
})
export class RaceUpdateComponent implements OnInit {

  id: number = 0;

  raceMock: RaceMock = new RaceMock();
  race: Race = {id: 0, title: "", startDate: new Date(Date.now.toString()), endDate: new Date(Date.now.toString()), url: "" }
  constructor(
    private route: ActivatedRoute,
    private locate: Location,
    private raceSerice: RaceService
  ) { 

  }

  ngOnInit(): void { 
    this.route.paramMap.subscribe(
      (params: ParamMap) => {
        this.id = Number(params.get('id'));
        console.log("ID from RaceUpdateComponent : " + this.id);
        if (this.id !== null && this.id !== 0) {
          console.log('RaceUpdateComponent: ID is not null');
          this.raceSerice.getRaceById(this.id).subscribe(
            race => this.race = race
          )
        } else {
          this.race = new Race();
        }
      }
    )
  }

  onBack(): void {
    this.locate.back();
  }

  onSave(): void {
    console.log('RaceUpdateComponent:onSave works !')
  }

}
