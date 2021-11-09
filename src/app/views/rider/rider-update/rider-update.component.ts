import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { RiderMock } from 'src/app/data-mocks/rider-mock';
import { Category } from 'src/app/models/category.model';
import { Rider } from 'src/app/models/rider.model';
import { RiderService } from 'src/app/services/rider.service';

@Component({
  selector: 'app-rider-update',
  templateUrl: './rider-update.component.html',
  styleUrls: ['./rider-update.component.css']
})
export class RiderUpdateComponent implements OnInit {

  id: number = 0;

  category: Category = {name:"ZAK"}

  riderMock: RiderMock = new RiderMock();
  rider: Rider = {firstName: "", lastName: "", licenseNo: "", category: this.category};

  constructor(
    private route: ActivatedRoute,
    private locate: Location,
    private riderService: RiderService
  ) { }

  ngOnInit(): void { 
    this.route.paramMap.subscribe(
      (params: ParamMap) => {
        this.id = Number(params.get('id'));
        console.log("ID from RiderUpdateComponent : " + this.id);
        if (this.id !== null && this.id !== 0) {
          console.log('RiderUpdateComponent: ID is not null');
          this.riderService.getRiderById(this.id).subscribe(
            rider => this.rider = rider)
        } 
      }
    )
  }

  onBack(): void {
    this.locate.back();
  }

  onSave(): void {
    this.riderService.saveRider(this.rider).subscribe(
      rider => this.locate.back()
    )
  }
}
