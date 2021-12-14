import { Component, Input, OnInit } from '@angular/core';
import { Accomodation } from 'src/app/models/accomodation.model';
import { Address } from 'src/app/models/address.model';
import { Journey } from 'src/app/models/journey.model';
import { JourneyService } from 'src/app/services/journey.service';

@Component({
  selector: 'app-race-accomodation',
  templateUrl: './race-accomodation.component.html',
  styleUrls: ['./race-accomodation.component.css']
})
export class RaceAccomodationComponent implements OnInit {

  @Input()
  id!: number;

  isNewItemForm: boolean = false;
  isEditable = false;

  @Input()
  journey!: Journey;
  address: Address = {id : 0};
  accomodation: Accomodation = {}

  constructor(private journeyService: JourneyService) { }

  ngOnInit(): void {
    if (this.journey.accomodation?.address !== undefined) {
        this.address = this.journey.accomodation?.address!;
      }
    if (this.journey.accomodation !== undefined) {
        this.accomodation = this.journey.accomodation;
      }
  }

  openFormForNewItem() {
    this.isNewItemForm = true;
  }

  onCreate() {
    this.journey.accomodation = this.accomodation;
    this.journey.accomodation!.address = this.address;
    this.journeyService.saveJourney(this.journey, this.id).subscribe(
      journey => {
        this.journey = journey;
        this.address = journey.accomodation?.address!;
        this.isEditable = false;
      }
    )
  }

  onEdit() {
    this.isEditable = true;
  }

  isAddressExist(): boolean{
    return ((this.address.id === undefined) || (this.address.id === null))
  }
}
