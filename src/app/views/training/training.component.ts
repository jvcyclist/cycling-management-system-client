import { Component, OnInit } from '@angular/core';
import { TrainingMock } from 'src/app/data-mocks/training-mock';

import { Training } from 'src/app/models/training.model';
import { TrainingService } from 'src/app/services/training.service';

import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'
import html2canvas from 'html2canvas';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {

  isLoaded: boolean = false;
  trainingMock: TrainingMock = new TrainingMock();
  trainingArray: Training[] = [];
  
  columnsToDisplay = ['id', 'date', 'type', 'kind', 'distance', 'actions'];

  constructor(private trainingService: TrainingService) { }

  ngOnInit(): void {
    this.trainingService.getAllTrainings().subscribe(
      trainings => {this.trainingArray = trainings.length > 0 ? trainings : []
        this.isLoaded = true
      } 
      
    )
  }

  processReport(){
    let data = document.getElementById('trainings');
    html2canvas(data!).then(canvas => {
      let docWidth = 208;
      let docHeight = canvas.height * docWidth / canvas.width;
      
      const contentDataURL = canvas.toDataURL('image/png')
      let doc = new jsPDF('p', 'mm', 'a4');
      let position = 50;
      doc.text('Data raportu: ' + new Date().toLocaleString(), 200, 15)
      doc.text('Treningi', 15, 15)
      doc.addImage(contentDataURL, 'PNG', 0, position, docWidth, docHeight)
      
      doc.save('exportedPdf.pdf');

    })

   // var doc = new jsPDF('l', 'mm', [305, 250]);
  
  //autoTable(doc, {html: '#trainings', startY: 30})
  //  doc.save('Treningi ' + new Date().toLocaleString().replace(',','') + '.pdf')
  }
}
