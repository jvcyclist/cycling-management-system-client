import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiderPersonalDataComponent } from './rider-personal-data.component';

describe('RiderPersonalDataComponent', () => {
  let component: RiderPersonalDataComponent;
  let fixture: ComponentFixture<RiderPersonalDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiderPersonalDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiderPersonalDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
