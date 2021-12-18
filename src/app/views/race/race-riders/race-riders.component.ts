import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RaceMock } from 'src/app/data-mocks/race-mock';
import { RiderMock } from 'src/app/data-mocks/rider-mock';
import { Category } from 'src/app/models/category.model';
import { Journey } from 'src/app/models/journey.model';
import { Rider } from 'src/app/models/rider.model';
import { JourneyService } from 'src/app/services/journey.service';
import { RaceService } from 'src/app/services/race.service';
import { RiderService } from 'src/app/services/rider.service';

@Component({
  selector: 'app-race-riders',
  templateUrl: './race-riders.component.html',
  styleUrls: ['./race-riders.component.css']
})
export class RaceRidersComponent implements OnInit {
 
  riderMock: RiderMock = new RiderMock();

  selectedRiderId: number = 0
  ridersToAdd: Rider[] = this.riderMock.riders
  

  isNewItemForm: boolean = false;
  isEditable = false;

  @Input()
  id!: number;

  @Input()
  journey!: Journey;

  @Input()
  categories!: Category[]
  
  addedRiders: Rider[] = []

  ridersToSelect: Rider[] = [];

  constructor(private journeyService: JourneyService,
              private riderService: RiderService,
              private raceService: RaceService,
              private route: Router
    ) { }

  ngOnInit(): void {
                  this.riderService.getRidersByCategories(
                    this.categories.map(c => {return c.name!})
                    ).subscribe(
                      riders => {
                      this.addedRiders = this.journey.riders!
                      if(this.addedRiders.length > 0) {
                        this.ridersToAdd = riders.filter(rider => !this.addedRiders.map(r => r.id).includes(rider.id))
                      }
                      
                    }
                      
                      )
  }

  onEdit() {
    this.isEditable = true;
  }

  onCreate(){
    this.journey.riders = this.addedRiders;

    this.journeyService.saveJourney(this.journey, this.id).subscribe(
      journey => {
        this.journey = journey
        this.isEditable = false;
      }
    )
  }

  addRider() {
    if(this.selectedRiderId != 0 && this.selectedRiderId != undefined){
    this.addedRiders.push(this.ridersToAdd.filter(rider => {return rider.id == this.selectedRiderId})[0])
    this.ridersToAdd = this.ridersToAdd.filter(rider => {return rider.id != this.selectedRiderId})
    this.selectedRiderId = 0;
    this.addedRiders = this.sortRidersByCategoryId(this.addedRiders)
    }
  }

  deleteRider(id: number | undefined) {
    if(id != undefined){
    this.ridersToAdd.push(this.addedRiders.filter(rider => { return rider.id == id})[0])
    this.addedRiders = this.addedRiders.filter(rider => {return rider.id != id})
    this.ridersToAdd = this.sortRidersByCategoryId(this.ridersToAdd);
    }
  }

  updateRiders() {
    this.raceService.updateRiders(this.id, this.addedRiders).subscribe(res => {
      this.route.navigateByUrl('/race/' + this.id)
    }

    )
  }

  sortRidersByCategoryId(riders: Rider[]): Rider[] {
    return riders.sort((a, b) => a.category?.id! - b.category?.id!)
  }

}
