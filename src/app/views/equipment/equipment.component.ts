import { Component, OnInit } from '@angular/core';
import { EquipmentMock } from 'src/app/data-mocks/equipment-mock';

import { Equipment } from 'src/app/models/equipment.model';
import { EquipmentService } from 'src/app/services/equipment.service';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  equipmentMock: EquipmentMock = new EquipmentMock();
  equipmentArray: Equipment[] = this.equipmentMock.equipments;
  particularEquipmentArray: Equipment[] = [];

  columnsToDisplay = ['refNo', 'mark', 'model', 'type', 'actions'];

  changeTo(equipmentType: string): void {
    switch(equipmentType) {
      case "Wheels" : {
        this.particularEquipmentArray = this.equipmentArray.filter( e => e.isa == "WHEELS");
        break;
      }
      case "Bikes" : {
        this.particularEquipmentArray = this.equipmentArray.filter( e => e.isa == "BIKE");
        break;
      }
    }
  }

  constructor(private equipmentService: EquipmentService) { }

  ngOnInit(): void {
   
  }

}
