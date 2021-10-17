import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { TrainingCampMock } from 'src/app/models/training-camp-mock';
import { TrainingCamp } from 'src/app/models/training-camp.model';

@Component({
  selector: 'app-training-camp-details',
  templateUrl: './training-camp-details.component.html',
  styleUrls: ['./training-camp-details.component.css']
})
export class TrainingCampDetailsComponent implements OnInit {

  trainingCampMock: TrainingCampMock = new TrainingCampMock();
  trainingCamp: TrainingCamp = this.trainingCampMock.trainingCamps[0];
  id: number = 0;

  constructor(
    private route: ActivatedRoute,
    private location: Location
    
    ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params: ParamMap) => {
        this.id = Number(params.get('id'));
        this.trainingCamp = this.trainingCampMock.trainingCamps[this.id - 1];
      }

    )}

    onBack(): void {
      this.location.back();
    }

}
