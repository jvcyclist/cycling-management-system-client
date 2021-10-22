import { Component, Input, OnInit } from '@angular/core';
import { MedicalCardMock } from 'src/app/models/medical-card-mock';
import { MedicalCard } from 'src/app/models/medical-card.model';

@Component({
  selector: 'app-rider-medical-card',
  templateUrl: './rider-medical-card.component.html',
  styleUrls: ['./rider-medical-card.component.css']
})
export class RiderMedicalCardComponent implements OnInit {

  @Input()
  id: number = 0;

  medicalCardsMock: MedicalCardMock = new MedicalCardMock();
  medicalCards: MedicalCard[] = [];

  constructor() { }

  ngOnInit(): void {
    console.log("ID from RiderMedicalCardComponent : " + this.id);
    this.medicalCards = this.medicalCardsMock.getMedicalCardsByRiderId(this.id);
  }

}
