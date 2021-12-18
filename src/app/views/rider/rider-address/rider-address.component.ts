import { Component, Input, OnInit } from '@angular/core';
import { AddressMock } from 'src/app/data-mocks/address-mock';
import { Achievement } from 'src/app/models/achievement.model';
import { Address } from 'src/app/models/address.model';
import { AddressService } from 'src/app/services/address.service';

@Component({
  selector: 'app-rider-address',
  templateUrl: './rider-address.component.html',
  styleUrls: ['./rider-address.component.css']
})
export class RiderAddressComponent implements OnInit {

  @Input()
  id: number = 0;

  @Input()
  address: Address = {buildingNumber: "",city:"",id:0,postalCode:"",street:"",voivodeship:""};

  addressMock: AddressMock = new AddressMock();

  isEditable: boolean = false;

  constructor(private addressService: AddressService) { }

  ngOnInit(): void {
  }


  onSave(){
    this.addressService.save(this.address).subscribe(
      address => {
        this.address = address;
        this.isEditable = !this.isEditable;
      }
    )
  }

  onEdit(){
    this.isEditable = !this.isEditable;
  }


}
