import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NearestServicesComponent } from './nearest-services.component';

describe('NearestServicesComponent', () => {
  let component: NearestServicesComponent;
  let fixture: ComponentFixture<NearestServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NearestServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NearestServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
