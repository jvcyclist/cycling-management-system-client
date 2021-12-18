import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { RiderMock } from 'src/app/data-mocks/rider-mock';

import { Rider } from 'src/app/models/rider.model';
import { RiderService } from 'src/app/services/rider.service';

@Component({
  selector: 'app-rider-personal-data',
  templateUrl: './rider-personal-data.component.html',
  styleUrls: ['./rider-personal-data.component.css']
})
export class RiderPersonalDataComponent implements OnInit {

  @Input()
  id: number = 0;
  
  riderMock: RiderMock = new RiderMock()
  rider: Rider = this.riderMock.riders[0];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private riderService: RiderService
    ) { }

  ngOnInit(): void {
    this.rider.category = {name: "INIT"};
    this.route.paramMap.subscribe(
      (params: ParamMap) => {
        this.id = Number(params.get('id'));
       this.riderService.getRiderById(this.id).subscribe(
         rider =>{ this.rider = rider;
        if (this.rider.category === null){
          this.rider.category = {name: 'test'};
        }
        }
       )
      }

    )
  
  this.rider = this.riderMock.riders[this.id - 1];
  
  }

    onBack(): void {
      this.location.back();
    }

    onDelete(): void {
      this.riderService.deleteRiderById(this.id).subscribe(
        response => this.location.back()
      ) 
    }

}
