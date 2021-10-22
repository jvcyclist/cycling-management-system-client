import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiderAddressComponent } from './rider-address.component';

describe('RiderAddressComponent', () => {
  let component: RiderAddressComponent;
  let fixture: ComponentFixture<RiderAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiderAddressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiderAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
