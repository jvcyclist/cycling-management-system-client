import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingCampDetailsComponent } from './training-camp-details.component';

describe('TrainingCampDetailsComponent', () => {
  let component: TrainingCampDetailsComponent;
  let fixture: ComponentFixture<TrainingCampDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingCampDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingCampDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
