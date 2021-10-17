import { Component, OnInit } from '@angular/core';
import { TrainingCampMock } from 'src/app/models/training-camp-mock';
import { TrainingCamp } from 'src/app/models/training-camp.model';

@Component({
  selector: 'app-training-camp',
  templateUrl: './training-camp.component.html',
  styleUrls: ['./training-camp.component.css']
})
export class TrainingCampComponent implements OnInit {

  columnsToDisplay = ['id', 'title', 'startDate', 'endDate', 'actions'];

  trainingCampMock: TrainingCampMock = new TrainingCampMock();
  trainingCamps: TrainingCamp[] = this.trainingCampMock.trainingCamps;

  constructor() { }

  ngOnInit(): void {
  }

}
