import { Component, Input, OnInit } from '@angular/core';
import { AchievementsMock } from 'src/app/data-mocks/achievements-mock';
import { Achievement } from 'src/app/models/achievement.model';
import { AchievementService } from 'src/app/services/achievement.service';

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

  newAchievement: Achievement = {};

  isEditable: boolean[] = []
  
  isNewItemForm: boolean = false;

  constructor(private achievementService: AchievementService) { }

  ngOnInit(): void {
    console.log("ID from RiderAchievementsComponent : " + this.id);
    this.achievements.forEach(element => {
      this.isEditable.push(false);
    });

    this.sortAchievementsByIdDesc();
 
  }

  onEdit(index: number): void {
    this.isEditable[index] = true
    console.log('Edited achievement item with index: ' + index)
  }

  onSave(index: number, achievement: Achievement){
    console.log('Saved Achievement with index:' + index );
    console.log('Saved Achievement :' + achievement.id );
    this.achievementService.update(achievement).subscribe(
      achievement => this.isEditable[index] = false
    )
  }

  openFormForNewItem(){
    this.isNewItemForm = true
  }

  onCreate(){
    this.achievementService.save(this.newAchievement, this.id).subscribe(
      achievement => {
        this.achievements.push(achievement);
        this.isEditable = []
        this.achievements.forEach(element => {
          this.isEditable.push(false);
        });
        this.sortAchievementsByIdDesc();
        this.isNewItemForm = false
      }
    )
  }

  sortAchievementsByIdDesc(){
    this.achievements = this.achievements.sort(
      (a: Achievement, b: Achievement) => {
      return b.id! - a.id!;
    });
  }
}
