import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiderNavigationComponent } from './rider-navigation.component';

describe('RiderNavigationComponent', () => {
  let component: RiderNavigationComponent;
  let fixture: ComponentFixture<RiderNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiderNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiderNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
