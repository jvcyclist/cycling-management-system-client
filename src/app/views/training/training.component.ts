import { Component, OnInit } from '@angular/core';
import { TrainingMock } from 'src/app/data-mocks/training-mock';

import { Training } from 'src/app/models/training.model';
import { TrainingService } from 'src/app/services/training.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {

  trainingMock: TrainingMock = new TrainingMock();
  trainingArray: Training[] = [];
  
  columnsToDisplay = ['id', 'date', 'type', 'kind', 'distance', 'description', 'actions'];

  constructor(private trainingService: TrainingService) { }

  ngOnInit(): void {
    this.trainingService.getAllTrainings().subscribe(
      trainings => this.trainingArray = trainings 
    )
  }
}
