import { Component, OnInit } from '@angular/core';
import { RiderMock } from 'src/app/models/rider-mock';
import { Rider } from 'src/app/models/rider.model';

@Component({
  selector: 'app-rider',
  templateUrl: './rider.component.html',
  styleUrls: ['./rider.component.css']
})
export class RiderComponent implements OnInit {

  riderMock: RiderMock = new RiderMock();
  riderArray: Rider[] = this.riderMock.riders;


  columnsToDisplay = ['category', 'first_name', 'last_name', 'license_no', 'actions'];


  constructor() { }

  ngOnInit(): void {
  }

}
