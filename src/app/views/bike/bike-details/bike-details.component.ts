import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Bike } from 'src/app/models/bike.model';
import { BikeService } from 'src/app/services/bike.service';

@Component({
  selector: 'app-bike-details',
  templateUrl: './bike-details.component.html',
  styleUrls: ['./bike-details.component.css']
})
export class BikeDetailsComponent implements OnInit {

  id: number = 0
  bike: Bike = {}

  constructor(private route: ActivatedRoute,
    private locate: Location,
    private bikeService: BikeService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params: ParamMap) => {
        this.id = Number(params.get('id'));
        if (this.id !== null && this.id !== 0) {
          this.bikeService.getBikeById(this.id).subscribe(
            bike => this.bike = bike
          )
        } else {
          this.bike = new Bike();
        }
      }
    )
  }

  onBack() {
    this.locate.back();
  }
}
