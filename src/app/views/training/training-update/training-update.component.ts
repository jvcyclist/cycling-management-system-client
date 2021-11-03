import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { TrainingMock } from 'src/app/data-mocks/training-mock';
import { Training } from 'src/app/models/training.model';
import { TrainingService } from 'src/app/services/training.service';

@Component({
  selector: 'app-training-update',
  templateUrl: './training-update.component.html',
  styleUrls: ['./training-update.component.css']
})
export class TrainingUpdateComponent implements OnInit {

  id: number = 0;

  trainingMock: TrainingMock = new TrainingMock();
  training: Training = {id: 0, type: "", kind: "", distance: 0.0, description: "", date: new Date(Date.now.toString())}

  constructor(
    private route: ActivatedRoute,
    private locate: Location,
    private trainingService: TrainingService
  ) { }

  ngOnInit(): void { 
    this.route.paramMap.subscribe(
      (params: ParamMap) => {
        this.id = Number(params.get('id'));
        console.log("ID from TrainingUpdateComponent : " + this.id);
        if (this.id !== null && this.id !== 0) {
          console.log('TrainingUpdateComponent: ID is not null');
          this.trainingService.getTrainingById(this.id).subscribe(
            training => this.training = training
          )
        } else {
          this.training = new Training();
        }
      }
    )
  }

  onBack(): void {
    this.locate.back();
  }

  onSave(): void {
    console.log('TrainingUpdateComponent:onSave works');
  }

}
