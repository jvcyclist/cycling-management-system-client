import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { TrainingCampMock } from 'src/app/models/training-camp-mock';
import { TrainingCamp } from 'src/app/models/training-camp.model';

@Component({
  selector: 'app-training-camp-update',
  templateUrl: './training-camp-update.component.html',
  styleUrls: ['./training-camp-update.component.css']
})
export class TrainingCampUpdateComponent implements OnInit {

  id: number = 0;

  trainingCampMock: TrainingCampMock = new TrainingCampMock();
  trainingCamp: TrainingCamp = {id: 0, title: "", startDate: new Date(Date.now()), endDate: new Date(Date.now())}
  constructor(
    private route: ActivatedRoute,
    private locate: Location
  ) { }

  ngOnInit(): void { 
    this.route.paramMap.subscribe(
      (params: ParamMap) => {
        this.id = Number(params.get('id'));
        console.log("ID from TrainingCampUpdateComponent : " + this.id);
        if (this.id !== null && this.id !== 0) {
          console.log('TrainingCampUpdateComponent: ID is not null');
          this.trainingCamp = this.trainingCampMock.trainingCamps[this.id - 1];
        } else {
          this.trainingCamp = new TrainingCamp();
        }
      }
    )
  }

  onBack(): void {
    this.locate.back();
  }

  onSave(): void {
    console.log('TrainingCampUpdateComponent:onSave works');
  }
}
