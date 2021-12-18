import { Component, OnInit } from '@angular/core';
import { Bike } from 'src/app/models/bike.model';
import { BikeService } from 'src/app/services/bike.service';

@Component({
  selector: 'app-bike',
  templateUrl: './bike.component.html',
  styleUrls: ['./bike.component.css']
})
export class BikeComponent implements OnInit {

  columnsToDisplay = ['id', 'referenceNumber', 'mark', 'model', 'actions'];

  bikes: Bike[] = []

  constructor(private bikeService: BikeService) { }

  ngOnInit(): void {
    this.bikeService.getAllBikes().subscribe(bikes => this.bikes = bikes)
  }

}
