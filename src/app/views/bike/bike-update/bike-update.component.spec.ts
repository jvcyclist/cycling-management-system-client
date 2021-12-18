import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeUpdateComponent } from './bike-update.component';

describe('BikeUpdateComponent', () => {
  let component: BikeUpdateComponent;
  let fixture: ComponentFixture<BikeUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BikeUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
