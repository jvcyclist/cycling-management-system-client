import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { race } from 'rxjs';
import { RaceMock } from 'src/app/data-mocks/race-mock';
import { CategoriesList } from 'src/app/models/categories-list';
import { Category } from 'src/app/models/category.model';

import { Race } from 'src/app/models/race.model';
import { RaceService } from 'src/app/services/race.service';
import { textChangeRangeIsUnchanged } from 'typescript';

@Component({
  selector: 'app-race-update',
  templateUrl: './race-update.component.html',
  styleUrls: ['./race-update.component.css']
})
export class RaceUpdateComponent implements OnInit {

  id: number = 0;
  categoriesList: string[] = []
  chosenCategory: string = '';

  race: Race = {id: 0, title: "", startDate: new Date(Date.now()), endDate: new Date(Date.now()), url: "", categories: [] }
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private locate: Location,
    private raceService: RaceService,
    private _snackBar: MatSnackBar
  ) { 

  }

  ngOnInit(): void { 
    this.route.paramMap.subscribe(
      (params: ParamMap) => {
        this.id = Number(params.get('id'));
        if (this.id !== null && this.id !== 0) {
          this.raceService.getRaceById(this.id).subscribe(
            race => {
              this.race = race
              this.filterCategories();
            }
          )
        } else {
          this.filterCategories();  
        }
      }
    )
  }

  private filterCategories() {
    this.categoriesList = CategoriesList.categories.filter(category => {
      return !this.race.categories?.map(c => c.name).includes(category);
    });
  }

  onBack(): void {
    this.locate.back();
  }

  onSave(): void {
    if(this.id == 0){
      this.raceService.addRace(this.race).subscribe(race => {
        this.router.navigateByUrl('/race/'+ race.id)
        this._snackBar.open('Utworzono wy??cig pomy??lnie', 'X', { duration: 2500,  panelClass: ['white-snackbar']})
      })
    } else {
      this.raceService.updateRace(this.race).subscribe(race => {
        this.router.navigateByUrl('/race/'+ race.id)
        this._snackBar.open('Zaktualizowano wy??cig pomy??lnie', 'X', { duration: 2500,  panelClass: ['white-snackbar']})
      })
    }


  }

  addCategory() {
    this.race.categories?.push(new Category(undefined, this.chosenCategory, undefined))
    this.categoriesList = this.categoriesList.filter(cat => cat !== this.chosenCategory)
    this.chosenCategory = ''
  }
  
  deleteCategory(name: string | undefined){
    if(name !== undefined){
      this.race.categories = this.race.categories?.filter(c => {
          return c.name !== name
      })
      this.categoriesList.push(name)
    }
  }


}
