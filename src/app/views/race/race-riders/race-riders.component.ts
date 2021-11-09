import { Component, Input, OnInit } from '@angular/core';
import { Journey } from 'src/app/models/journey.model';
import { Rider } from 'src/app/models/rider.model';

@Component({
  selector: 'app-race-riders',
  templateUrl: './race-riders.component.html',
  styleUrls: ['./race-riders.component.css']
})
export class RaceRidersComponent implements OnInit {

  @Input()
  id!: number;

  @Input()
  journey!: Journey;


  constructor() { }

  ngOnInit(): void {
  }

}
