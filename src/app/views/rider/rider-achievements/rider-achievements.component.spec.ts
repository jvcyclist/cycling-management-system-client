import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiderAchievementsComponent } from './rider-achievements.component';

describe('RiderAchievementsComponent', () => {
  let component: RiderAchievementsComponent;
  let fixture: ComponentFixture<RiderAchievementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiderAchievementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiderAchievementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
