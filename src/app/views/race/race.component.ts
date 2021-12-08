import { Component, OnInit } from '@angular/core';
import { RaceMock } from 'src/app/data-mocks/race-mock';

import { Race } from 'src/app/models/race.model';
import { RaceService } from 'src/app/services/race.service';

import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.css']
})
export class RaceComponent implements OnInit {

  raceMock: RaceMock = new RaceMock(); 
  races: Race[] = [];

  columnsToDisplay = ['id', 'title', 'startDate', 'actions'];

  constructor(private raceService: RaceService) { }

  ngOnInit(): void {
    this.raceService.getAllRaces().subscribe(
      races => this.races = races
    )
  }

  processReport(){
    var doc = new jsPDF('l', 'mm', [305, 250]);
    doc.text('Data raportu: ' + new Date().toLocaleString(), 200, 15)
    doc.text('Wyscigi', 15, 15)
    autoTable(doc, {html: '#races', startY: 30})
    doc.save('Wyscigi ' + new Date().toLocaleString().replace(',','') + '.pdf')
  }

}
