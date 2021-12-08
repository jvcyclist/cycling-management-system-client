import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { RiderMock } from 'src/app/data-mocks/rider-mock';
import { Rider } from 'src/app/models/rider.model';
import { RiderService } from 'src/app/services/rider.service';

import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'

@Component({
  selector: 'app-rider',
  templateUrl: './rider.component.html',
  styleUrls: ['./rider.component.css']
})
export class RiderComponent implements OnInit {
  


  riderMock: RiderMock = new RiderMock();
  riderArray: Rider[] = [];


  columnsToDisplay = ['category', 'firstName', 'lastName', 'actions'];


  constructor(private riderService: RiderService) {
    

   }

  ngOnInit(): void {
    this.riderService.getAllRiders().subscribe(
      riders => this.riderArray = riders
    );

  }

  processReport(){
    var doc = new jsPDF('l', 'mm', [305, 250]);
    doc.text('Data raportu: ' + new Date().toLocaleString(), 200, 15)
    doc.text('Zawodnicy', 15, 15)
    autoTable(doc, {html: '#riders', startY: 30})
    doc.save('Zawodnicy ' + new Date().toLocaleString().replace(',','') + '.pdf')
  }

}
