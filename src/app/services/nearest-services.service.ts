import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Address } from '../models/address.model';
import { ServiceType } from '../models/service-type.model';
import { ServicesResponse } from '../models/services-response.model';


@Injectable({
  providedIn: 'root'
})
export class NearestServicesService {

  private googleApiUrl = environment.googleFindPlaceApiUrl;
  private googleApiKey = environment.googleApiKey;

  constructor(private http: HttpClient) { }

  getNearestServices(address: Address, serviceType: ServiceType): Observable<ServicesResponse>{
    let keyword: string = '';
    let type: string = ''
    switch(serviceType) {
      case ServiceType.RESTAURANT: {
        keyword = 'restauracja';
        type = 'restaurant'
        break;
      }
      case ServiceType.HOTEL: {
        keyword = 'hotel';
        type = 'lodging'
        break;
      }
      case ServiceType.PARKING: {
        keyword = 'parking';
        type = 'parking'
        break;
      }
      case ServiceType.PETROL_STATION: {
        keyword = 'stacja%20benzynowa';
        type = 'gas_station'
        break;
      }
      case ServiceType.GROCERY_STORE: {
        keyword = 'sklep%20spozywczy';
        type = 'convenience_store'
        break;
      }
      default: {
        keyword = ''
        break;
      }
    }

    let requestUrl = (this.googleApiUrl + 'json?' 
                      + 'input=' +  this.inputTextApiBuilder(address, keyword)
                      + '&fields=' + this.fields.join('%2C')
                      + '&type=' + type
                      + '&rankBy=user_ratings_total' 
                      + '&inputtype=textquery'
                      + '&key=' + this.googleApiKey);

    return this.http.get(requestUrl);
                          
  }

  fields: string[] = [
    'formatted_address',
    'name',
    'rating',
    'opening_hours',
  ]

  inputTextApiBuilder(address: Address, keyword: string){
    let inputTextList: string[] = [
      keyword,
      address.city!,
      address.street!
    ];
    return this.tokenizeStrings(inputTextList)
  }

  tokenizeStrings(stringList: string[]): string{
    let tokenized: string = ''; 
    stringList.forEach(element => tokenized = tokenized + '%20' + element);
    tokenized = tokenized.slice(3, tokenized.length)
    return tokenized;
  }

}
