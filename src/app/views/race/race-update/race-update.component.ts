import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { RaceMock } from 'src/app/models/race-mock';
import { Race } from 'src/app/models/race.model';

@Component({
  selector: 'app-race-update',
  templateUrl: './race-update.component.html',
  styleUrls: ['./race-update.component.css']
})
export class RaceUpdateComponent implements OnInit {

  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    // Only highligh dates inside the month view.
    if (view === 'month') {
      const date = cellDate.getDate();

      // Highlight the 1st and 20th day of each month.
      return (date === 1 || date === 20) ? 'example-custom-date-class' : '';
    }

    return '';
  }


  id: number = 0;

  raceMock: RaceMock = new RaceMock();
  race: Race = {id: 0, title: "", startDate: new Date(Date.now.toString()), endDate: new Date(Date.now.toString()), url: "" }
  constructor(
    private route: ActivatedRoute,
    private locate: Location
  ) { 

  }

  ngOnInit(): void { 
    this.route.paramMap.subscribe(
      (params: ParamMap) => {
        this.id = Number(params.get('id'));
        console.log("ID from RaceUpdateComponent : " + this.id);
        if (this.id !== null && this.id !== 0) {
          console.log('RaceUpdateComponent: ID is not null');
          this.race = this.raceMock.races[this.id - 1];
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
