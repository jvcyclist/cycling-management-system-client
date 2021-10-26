import { Component, OnInit } from '@angular/core';
import { RiderMock } from 'src/app/models/rider-mock';
import { Rider } from 'src/app/models/rider.model';
import { RiderService } from 'src/app/services/rider.service';

@Component({
  selector: 'app-rider',
  templateUrl: './rider.component.html',
  styleUrls: ['./rider.component.css']
})
export class RiderComponent implements OnInit {

  riderMock: RiderMock = new RiderMock();
  riderArray: Rider[] = [];


  columnsToDisplay = ['category', 'firstName', 'lastName', 'licenseNo', 'actions'];


  constructor(private riderService: RiderService) { }

  ngOnInit(): void {
    this.riderService.getAllRiders().subscribe(
      riders => this.riderArray = riders
    );

  }

}
