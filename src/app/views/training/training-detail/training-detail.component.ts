import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { TrainingMock } from 'src/app/data-mocks/training-mock';
import { Training } from 'src/app/models/training.model';
import { TrainingService } from 'src/app/services/training.service';

@Component({
  selector: 'app-training-detail',
  templateUrl: './training-detail.component.html',
  styleUrls: ['./training-detail.component.css']
})
export class TrainingDetailComponent implements OnInit {
  trainingMock: TrainingMock = new TrainingMock();
  training: Training = {};
  id: number = 0;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private trainingService: TrainingService
    ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params: ParamMap) => {
        this.id = Number(params.get('id'));
        this.trainingService.getTrainingById(this.id).subscribe(
          training => this.training = training
        )
      });
  }

  onBack(): void {
    this.location.back();
  }

}
