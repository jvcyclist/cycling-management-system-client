import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceRidersComponent } from './race-riders.component';

describe('RaceRidersComponent', () => {
  let component: RaceRidersComponent;
  let fixture: ComponentFixture<RaceRidersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaceRidersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaceRidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
