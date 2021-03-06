import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MedicalCardMock } from 'src/app/data-mocks/medical-card-mock';

import { MedicalCard } from 'src/app/models/medical-card.model';
import { MedicalCardService } from 'src/app/services/medical-card.service';

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
  isEditable: boolean[] = [];
  isNewItemForm: boolean = false;
  newMedicalCard: MedicalCard = {};

  medicalCardsMock: MedicalCardMock = new MedicalCardMock();
  constructor(private medicalCardService: MedicalCardService,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
   this.sortMedicalCardsByValidToDesc();
   this.medicalCards.forEach(element => {
     this.isEditable.push(false);
   });

  }

  private sortMedicalCardsByValidToDesc() {
    this.medicalCards = this.medicalCards.sort(
      (a: MedicalCard, b: MedicalCard) => {
        return this.getTime(b.validTo) - this.getTime(a.validTo);
      }
    );
  }

  private getTime(date?: Date) {
    return date != null ? new Date(date).getTime() : 0;
  }

  onEdit(index: number){
    this.isEditable[index] = true;
  }

  onSave(index: number, medicalCard: MedicalCard){
    this.medicalCardService.update(medicalCard).subscribe(
      medicalCard => this.isEditable[index] = false
    )
  }

  openFormForNewItem(){
    this.isNewItemForm = true;
  }

  onCreate(){
    this.medicalCardService.save(this.newMedicalCard, this.id).subscribe(
      medicalCard => {
        this.medicalCards.push(medicalCard);
        this.isEditable = [];
        this.medicalCards.forEach(element => {
          this.isEditable.push(false);
        });
        this.sortMedicalCardsByValidToDesc();
        this.isNewItemForm = false;
        //add snackbar 
        this._snackBar.open('Dodano pomy??lnie kart??', 'X', { duration: 2500,  panelClass: ['white-snackbar']})
      }
    )
  }

  onDelete(id: number) {
    this.medicalCardService.delete(this.medicalCards[id].id!).subscribe(response => {
      this.medicalCards = this.medicalCards.filter(mc => mc !== this.medicalCards[id])
    })
  }


}
