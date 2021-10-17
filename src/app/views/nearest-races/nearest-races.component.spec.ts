import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NearestRacesComponent } from './nearest-races.component';

describe('NearestRacesComponent', () => {
  let component: NearestRacesComponent;
  let fixture: ComponentFixture<NearestRacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NearestRacesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NearestRacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
