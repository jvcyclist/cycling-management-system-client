import { Component, OnInit } from '@angular/core';
import { TrainingMock } from 'src/app/data-mocks/training-mock';

import { Training } from 'src/app/models/training.model';
import { TrainingService } from 'src/app/services/training.service';

import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {

  trainingMock: TrainingMock = new TrainingMock();
  trainingArray: Training[] = [];
  
  columnsToDisplay = ['id', 'date', 'type', 'kind', 'distance', 'actions'];

  constructor(private trainingService: TrainingService) { }

  ngOnInit(): void {
    this.trainingService.getAllTrainings().subscribe(
      trainings => this.trainingArray = trainings 
    )
  }

  processReport(){
    var doc = new jsPDF('l', 'mm', [305, 250]);
    doc.text('Data raportu: ' + new Date().toLocaleString(), 200, 15)
    doc.text('Treningi', 15, 15)
    autoTable(doc, {html: '#trainings', startY: 30})
    doc.save('Treningi ' + new Date().toLocaleString().replace(',','') + '.pdf')
  }
}
