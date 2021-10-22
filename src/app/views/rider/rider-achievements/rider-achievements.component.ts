import { Component, Input, OnInit } from '@angular/core';
import { Achievement } from 'src/app/models/achievement.model';
import { AchievementsMock } from 'src/app/models/achievements-mock';

@Component({
  selector: 'app-rider-achievements',
  templateUrl: './rider-achievements.component.html',
  styleUrls: ['./rider-achievements.component.css']
})
export class RiderAchievementsComponent implements OnInit {

  @Input()
  id: number = 0;

  achievementMock: AchievementsMock = new AchievementsMock();

  achievements: Achievement[] = [];

  constructor() { }

  ngOnInit(): void {
    console.log("ID from RiderAchievementsComponent : " + this.id);
    this.achievements = this.achievementMock.getAchievementsByRiderId(this.id);
  }

}
