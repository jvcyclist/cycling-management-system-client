import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceNavigationComponent } from './race-navigation.component';

describe('RaceNavigationComponent', () => {
  let component: RaceNavigationComponent;
  let fixture: ComponentFixture<RaceNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaceNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaceNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
