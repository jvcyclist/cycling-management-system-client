import { Component, Input, OnInit } from '@angular/core';
import { AchievementsMock } from 'src/app/data-mocks/achievements-mock';
import { Achievement } from 'src/app/models/achievement.model';
import { AchievementService } from 'src/app/services/achievement.service';

import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'
import { Rider } from 'src/app/models/rider.model';


@Component({
  selector: 'app-rider-achievements',
  templateUrl: './rider-achievements.component.html',
  styleUrls: ['./rider-achievements.component.css']
})
export class RiderAchievementsComponent implements OnInit {



  test: boolean = false

  @Input()
  id: number = 0;

  @Input()
  rider: Rider = {};

  @Input()
  achievements: Achievement[] = []

  achievementsThisYear: Achievement[] = []

  achievementMock: AchievementsMock = new AchievementsMock();

  newAchievement: Achievement = {};

  isEditable: boolean[] = []
  
  isNewItemForm: boolean = false;

  columnsToDisplay = ['id', 'range', 'city', 'description','place','date'];

  constructor(private achievementService: AchievementService) { }

  ngOnInit(): void {
    console.log("ID from RiderAchievementsComponent : " + this.id);
    this.achievements.forEach(element => {
      this.isEditable.push(false);
    });

    this.achievementService.getAchievementsByThisYearAndRiderId(this.rider.id!).subscribe(
      achievements => {
        this.achievementsThisYear = achievements;
        this.achievementsThisYear = this.achievementsThisYear.sort(
          (a: Achievement, b: Achievement) => {

          return this.parseDate(a.achievementDate!).getTime() - this.parseDate(b.achievementDate!).getTime();
        });
      
      
      
      
      }
    )
    
    this.sortAchievementsByIdDesc();
   // this.achievementsThisYear = this.achievements.filter(({achievementDate})=> ['2021'].includes(achievementDate!.toDateString.slice(-4)))
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

  onDelete(id: number) {
    console.log('onDelete Works for ID: ' + id)
    this.achievementService.delete(this.achievements[id].id!).subscribe(response => {
      this.achievements = this.achievements.filter(mc => mc !== this.achievements[id])
    })
  }
  processReport(){
  
    var doc = new jsPDF('l', 'mm', [305, 250]);
    doc.text('Data raportu: ' + new Date().toLocaleString(), 200, 15)
    doc.text('Osiagniecia zawodnika z obecnego sezonu: ' + this.rider.firstName + ' ' + this.rider.lastName, 15, 15)
    autoTable(doc, {html: '#achievements', startY: 30})
    var concatedName = this.rider.lastName?.toUpperCase() + '_' + this.rider.firstName?.slice(0,1) + ' '
    doc.save(concatedName + new Date().toLocaleString().replace(',','') + '.pdf')
   
  }

   parseDate(input: any) {
    var parts = input.match(/(\d+)/g);
    // new Date(year, month [, date [, hours[, minutes[, seconds[, ms]]]]])
    return new Date(parts[2], parts[1]-1, parts[1]); // months are 0-based
  }

}
