import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { EquipmentMock } from 'src/app/models/equipment-mock';
import { Equipment } from 'src/app/models/equipment.model';

@Component({
  selector: 'app-equipment-details',
  templateUrl: './equipment-details.component.html',
  styleUrls: ['./equipment-details.component.css']
})
export class EquipmentDetailsComponent implements OnInit {

  equipmentMock: EquipmentMock = new EquipmentMock();
  equipment: Equipment = this.equipmentMock.equipments[0];
  id: number = 0;

  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params: ParamMap) => {
        this.id = Number(params.get('id'));
        this.equipment = this.equipmentMock.equipments[this.id - 1];
      }
    )}

    onBack(): void {
      this.location.back();
    }
}
