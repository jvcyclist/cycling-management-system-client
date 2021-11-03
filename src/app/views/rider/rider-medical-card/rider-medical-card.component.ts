import { Component, Input, OnInit } from '@angular/core';
import { MedicalCardMock } from 'src/app/data-mocks/medical-card-mock';

import { MedicalCard } from 'src/app/models/medical-card.model';

@Component({
  selector: 'app-rider-medical-card',
  templateUrl: './rider-medical-card.component.html',
  styleUrls: ['./rider-medical-card.component.css']
})
export class RiderMedicalCardComponent implements OnInit {

  @Input()
  id: number = 0;
  @Input()
  medicalCards: MedicalCard[] = [];

  medicalCardsMock: MedicalCardMock = new MedicalCardMock();
  constructor() { }

  ngOnInit(): void {
    console.log("ID from RiderMedicalCardComponent : " + this.id);
   // this.medicalCards = this.medicalCardsMock.getMedicalCardsByRiderId(this.id);
   this.medicalCards = this.medicalCards.sort(
     (a: MedicalCard, b: MedicalCard) => {
       return this.getTime(b.validTo) - this.getTime(a.validTo);
     }
   );

  }
  private getTime(date?: Date) {
    return date != null ? new Date(date).getTime() : 0;
  }
}
