import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { EquipmentMock } from 'src/app/data-mocks/equipment-mock';

import { Equipment } from 'src/app/models/equipment.model';
import { EquipmentService } from 'src/app/services/equipment.service';

@Component({
  selector: 'app-equipment-update',
  templateUrl: './equipment-update.component.html',
  styleUrls: ['./equipment-update.component.css']
})
export class EquipmentUpdateComponent implements OnInit {

  id: number = 0;

  equipmentMock: EquipmentMock = new EquipmentMock();
  equipment: Equipment = {id: 0, type: "", isa: "", mark: "", model: "", refNo: ""};

  constructor(
    private route: ActivatedRoute,
    private locate: Location,
    private equipmentService: EquipmentService
  ) { }

  ngOnInit(): void { 
    this.route.paramMap.subscribe(
      (params: ParamMap) => {
        this.id = Number(params.get('id'));
        if (this.id !== null && this.id !== 0) {
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
    this.equipmentService.saveEquipment(this.equipment).subscribe(
      equipment => this.equipment = equipment
    )
  }


}
