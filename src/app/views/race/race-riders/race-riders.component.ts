import { Component, Input, OnInit } from '@angular/core';
import { Journey } from 'src/app/models/journey.model';
import { Rider } from 'src/app/models/rider.model';
import { JourneyService } from 'src/app/services/journey.service';

@Component({
  selector: 'app-race-riders',
  templateUrl: './race-riders.component.html',
  styleUrls: ['./race-riders.component.css']
})
export class RaceRidersComponent implements OnInit {

  isNewItemForm: boolean = false;
  isEditable = false;

  @Input()
  id!: number;

  @Input()
  journey!: Journey;
  addedRiders: Rider[] = [];
  ridersToSelect: Rider[] = [];

  constructor(private journeyService: JourneyService) { }

  ngOnInit(): void {
    this.addedRiders = this.journey.riders ? 
                  this.journey.riders : [];
  }

  onEdit() {
    this.isEditable = true;
  }

  onCreate(){
    this.journey.riders = this.addedRiders;

    this.journeyService.saveJourney(this.journey, this.id).subscribe(
      journey => {
        console.log('Saved !!');
        this.journey = journey
        this.isEditable = false;
      }
    )
  }


}
