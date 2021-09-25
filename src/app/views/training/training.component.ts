import { Component, OnInit } from '@angular/core';
import { TrainingMock } from 'src/app/models/training-mock';
import { Training } from 'src/app/models/training.model';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {

  trainingMock: TrainingMock = new TrainingMock();
  trainingArray: Training[] = this.trainingMock.trainings;
  
  columnsToDisplay = ['id', 'date', 'type', 'kind', 'distance', 'description'];

  constructor() { }

  ngOnInit(): void {
  }

}
