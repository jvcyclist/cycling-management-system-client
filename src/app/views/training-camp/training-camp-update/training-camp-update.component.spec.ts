import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingCampUpdateComponent } from './training-camp-update.component';

describe('TrainingCampUpdateComponent', () => {
  let component: TrainingCampUpdateComponent;
  let fixture: ComponentFixture<TrainingCampUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingCampUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingCampUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
