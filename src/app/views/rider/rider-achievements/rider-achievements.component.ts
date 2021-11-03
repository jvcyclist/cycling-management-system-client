import { Component, Input, OnInit } from '@angular/core';
import { AchievementsMock } from 'src/app/data-mocks/achievements-mock';
import { Achievement } from 'src/app/models/achievement.model';

@Component({
  selector: 'app-rider-achievements',
  templateUrl: './rider-achievements.component.html',
  styleUrls: ['./rider-achievements.component.css']
})
export class RiderAchievementsComponent implements OnInit {

  @Input()
  id: number = 0;

  @Input()
  achievements: Achievement[] = []

  achievementMock: AchievementsMock = new AchievementsMock();

  constructor() { }

  ngOnInit(): void {
    console.log("ID from RiderAchievementsComponent : " + this.id);
    //this.achievements = this.achievementMock.getAchievementsById(this.id);
  }

}
