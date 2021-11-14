import { Component, Input, OnInit } from '@angular/core';
import { Address } from 'src/app/models/address.model';
import { Journey } from 'src/app/models/journey.model';
import { ServiceCandidate } from 'src/app/models/service-candidate.model';
import { ServiceType } from 'src/app/models/service-type.model';
import { ServicesResponse } from 'src/app/models/services-response.model';


import { NearestServicesService } from 'src/app/services/nearest-services.service';

@Component({
  selector: 'app-nearest-services',
  templateUrl: './nearest-services.component.html',
  styleUrls: ['./nearest-services.component.css']
})
export class NearestServicesComponent implements OnInit {

  constructor(private nearestService: NearestServicesService) { }

  servicesResponsePetrolStation: ServicesResponse = {};
  serviceCandidateListPetrolStation: ServiceCandidate[] = [];

  servicesResponseHotel: ServicesResponse = {};
  serviceCandidateListHotel: ServiceCandidate[] = [];

  servicesResponseParking: ServicesResponse = {};
  serviceCandidateListParking: ServiceCandidate[] = [];

  servicesResponseGroceryShop: ServicesResponse = {};
  serviceCandidateListGroceryShop: ServiceCandidate[] = [];

  servicesResponseRestaurants: ServicesResponse = {};
  serviceCandidateListRestaurants: ServiceCandidate[] = [];

  
  @Input()
  journey!: Journey;

  address!: Address;

  ngOnInit(): void {
    this.address = this.journey.accomodation!.address!;
    
    this.nearestService.getNearestServices(this.address, ServiceType.PETROL_STATION).subscribe(servicesResponse => {
      this.servicesResponsePetrolStation = servicesResponse
      this.serviceCandidateListPetrolStation = this.sortByRatingAndMax(servicesResponse.results!, 3);
    });
  
    this.nearestService.getNearestServices(this.address, ServiceType.HOTEL).subscribe(servicesResponse => {
      this.servicesResponseHotel = servicesResponse
      this.serviceCandidateListHotel = this.sortByRatingAndMax(servicesResponse.results!, 3);
    });

    this.nearestService.getNearestServices(this.address, ServiceType.PARKING).subscribe(servicesResponse => {
      this.servicesResponseParking = servicesResponse
      this.serviceCandidateListParking = this.sortByRatingAndMax(servicesResponse.results!, 3);
    });

    this.nearestService.getNearestServices(this.address, ServiceType.GROCERY_STORE).subscribe(servicesResponse => {
      this.servicesResponseGroceryShop = servicesResponse
      this.serviceCandidateListGroceryShop = this.sortByRatingAndMax(servicesResponse.results!, 3);
    });

    this.nearestService.getNearestServices(this.address, ServiceType.RESTAURANT).subscribe(servicesResponse => {
      this.servicesResponseRestaurants = servicesResponse
      this.serviceCandidateListRestaurants = this.sortByRatingAndMax(servicesResponse.results!, 3);
    });
  

  }

  sortByRatingAndMax(serviceCandidateList: ServiceCandidate[], max: number){
    
    max = serviceCandidateList.length > 3 ? max : serviceCandidateList.length

    return  serviceCandidateList.sort(
      (a : ServiceCandidate, b :ServiceCandidate) => {
        return b.user_ratings_total! - a.user_ratings_total!;
      }
    ).slice(0, max);
      
  }
}
