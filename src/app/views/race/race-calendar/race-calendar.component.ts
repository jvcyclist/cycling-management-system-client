import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-race-calendar',
  templateUrl: './race-calendar.component.html',
  styleUrls: ['./race-calendar.component.css']
})
export class RaceCalendarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('RACE calendar! ');
  }

}
