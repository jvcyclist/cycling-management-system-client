import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { TrainingCampMock } from 'src/app/models/training-camp-mock';
import { TrainingMock } from 'src/app/models/training-mock';
import { Training } from 'src/app/models/training.model';

@Component({
  selector: 'app-training-detail',
  templateUrl: './training-detail.component.html',
  styleUrls: ['./training-detail.component.css']
})
export class TrainingDetailComponent implements OnInit {
  trainingMock: TrainingMock = new TrainingMock();
  training: Training = this.trainingMock.trainings[0];
  id: number = 0;

  constructor(
    private route: ActivatedRoute,
    private location: Location
    ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params: ParamMap) => {
        this.id = Number(params.get('id'));
        this.training = this.trainingMock.trainings[this.id - 1];
      });
  }

  onBack(): void {
    this.location.back();
  }

}
