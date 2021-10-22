import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiderMedicalCardComponent } from './rider-medical-card.component';

describe('RiderMedicalCardComponent', () => {
  let component: RiderMedicalCardComponent;
  let fixture: ComponentFixture<RiderMedicalCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiderMedicalCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiderMedicalCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
