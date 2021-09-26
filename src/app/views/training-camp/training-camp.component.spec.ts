import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingCampComponent } from './training-camp.component';

describe('TrainingCampComponent', () => {
  let component: TrainingCampComponent;
  let fixture: ComponentFixture<TrainingCampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingCampComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingCampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
