import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceAccomodationComponent } from './race-accomodation.component';

describe('RaceAccomodationComponent', () => {
  let component: RaceAccomodationComponent;
  let fixture: ComponentFixture<RaceAccomodationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaceAccomodationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaceAccomodationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
