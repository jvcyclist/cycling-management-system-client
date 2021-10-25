import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { EquipmentMock } from 'src/app/models/equipment-mock';
import { Equipment } from 'src/app/models/equipment.model';

@Component({
  selector: 'app-equipment-update',
  templateUrl: './equipment-update.component.html',
  styleUrls: ['./equipment-update.component.css']
})
export class EquipmentUpdateComponent implements OnInit {

  id: number = 0;

  equipmentMock: EquipmentMock = new EquipmentMock();
  equipment: Equipment = {id: 0, type: "", isa: "", mark: "", model: "", ref_no: ""};

  constructor(
    private route: ActivatedRoute,
    private locate: Location
  ) { }

  ngOnInit(): void { 
    this.route.paramMap.subscribe(
      (params: ParamMap) => {
        this.id = Number(params.get('id'));
        console.log("ID from EquipmentUpdateComponent : " + this.id);
        if (this.id !== null && this.id !== 0) {
          console.log('EquipmentUpdateComponent: ID is not null');
          this.equipment = this.equipmentMock.equipments[this.id - 1];
        } else {
          this.equipment = new Equipment();
        }
      }
    )
  }

  onBack(): void {
    this.locate.back();
  }

  onSave(): void {
    console.log('EquipmentUpdateComponent:onSave works');
  }


}
