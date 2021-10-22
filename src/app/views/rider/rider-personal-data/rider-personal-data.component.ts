import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { RiderMock } from 'src/app/models/rider-mock';
import { Rider } from 'src/app/models/rider.model';

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
    private location: Location
    ) { }

  ngOnInit(): void {
    console.log("ID from RiderPersonalDataComponent : " + this.id);
    this.route.paramMap.subscribe(
      (params: ParamMap) => {
        this.id = Number(params.get('id'));
        this.rider = this.riderMock.riders[this.id - 1];
      }

    )}

    onBack(): void {
      this.location.back();
    }

}
