import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { RiderMock } from 'src/app/models/rider-mock';
import { Rider } from 'src/app/models/rider.model';

@Component({
  selector: 'app-rider-update',
  templateUrl: './rider-update.component.html',
  styleUrls: ['./rider-update.component.css']
})
export class RiderUpdateComponent implements OnInit {

  id: number = 0;

  riderMock: RiderMock = new RiderMock();
  rider: Rider = {category: "INIT_CATEGORY", firstName: "", lastName: "", licenseNo: ""};

  constructor(
    private route: ActivatedRoute,
    private locate: Location
  ) { }

  ngOnInit(): void { 
    this.route.paramMap.subscribe(
      (params: ParamMap) => {
        this.id = Number(params.get('id'));
        console.log("ID from RiderUpdateComponent : " + this.id);
        if (this.id !== null && this.id !== 0) {
          console.log('RiderUpdateComponent: ID is not null');
          this.rider = this.riderMock.riders[this.id - 1];
        } else {
          this.rider = new Rider();
        }
      }
    )
  }

  onBack(): void {
    this.locate.back();
  }

  onSave(): void {
    this.riderMock.save(this.rider);
  }
}
