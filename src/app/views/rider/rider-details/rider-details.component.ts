import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Achievement } from 'src/app/models/achievement.model';
import { Address } from 'src/app/models/address.model';
import { MedicalCard } from 'src/app/models/medical-card.model';
import { Rider } from 'src/app/models/rider.model';
import { RiderService } from 'src/app/services/rider.service';

@Component({
  selector: 'app-rider-details',
  templateUrl: './rider-details.component.html',
  styleUrls: ['./rider-details.component.css']
})
export class RiderDetailsComponent implements OnInit {

  viewName: string = 'PERSONAL-DATA';
  rider: Rider = new Rider();
  address: Address = this.rider.address!
  achievements: Achievement[] = [];
  medicalCards: MedicalCard[] = [];

  id: number = 0;
  constructor(
    private route: ActivatedRoute,
    private riderService: RiderService
    ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params: ParamMap) => {
        this.id = Number(params.get('id'));
        this.riderService.getRiderById(this.id).subscribe(
          rider => {
            this.rider = rider;
            this.address = rider.address!
            this.achievements = rider.achievements!
            this.medicalCards = rider.medicalCards!
          
          }
        )
      }
    )}

    onChangeView(viewName: string){
      this.viewName = viewName;
    }

}
