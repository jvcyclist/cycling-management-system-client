import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { RiderMock } from 'src/app/models/rider-mock';
import { Rider } from 'src/app/models/rider.model';

@Component({
  selector: 'app-rider-details',
  templateUrl: './rider-details.component.html',
  styleUrls: ['./rider-details.component.css']
})
export class RiderDetailsComponent implements OnInit {

  riderMock: RiderMock = new RiderMock()
  rider: Rider = this.riderMock.riders[0];
  id: number = 0;
  constructor(
    private route: ActivatedRoute,
    private location: Location
    ) { }

  ngOnInit(): void {
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
