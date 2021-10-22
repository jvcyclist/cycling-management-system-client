import { Component, Input, OnInit } from '@angular/core';
import { AddressMock } from 'src/app/models/address-mock';
import { Address } from 'src/app/models/address.model';

@Component({
  selector: 'app-rider-address',
  templateUrl: './rider-address.component.html',
  styleUrls: ['./rider-address.component.css']
})
export class RiderAddressComponent implements OnInit {

  @Input()
  id: number = 0;

  addressMock: AddressMock = new AddressMock();

  address: Address = this.addressMock.addresses[this.id];

  constructor() { }

  ngOnInit(): void {
    console.log("ID from RiderAddressComponent : " + this.id);
  }

}
