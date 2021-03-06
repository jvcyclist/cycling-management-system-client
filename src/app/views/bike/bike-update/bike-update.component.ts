import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Bike } from 'src/app/models/bike.model';
import { BikeService } from 'src/app/services/bike.service';

@Component({
  selector: 'app-bike-update',
  templateUrl: './bike-update.component.html',
  styleUrls: ['./bike-update.component.css']
})
export class BikeUpdateComponent implements OnInit {

  id: number = 0;
  bike: Bike = {}

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private locate: Location,
    private bikeService: BikeService,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params: ParamMap) => {
        this.id = Number(params.get('id'));
        if (this.id !== null && this.id !== 0) {
          this.bikeService.getBikeById(this.id).subscribe(
            bike => {
              this.bike = bike
            }
          )
        } else {

        }
      }
    )
  }

  onBack() {
    this.locate.back()
  }
  onSave () {
    this.bikeService.saveBike(this.bike).subscribe(
      bike => {
        this.router.navigateByUrl('/bike/' + bike.id)
        this._snackBar.open('Zaktualizowano pomyślnie', 'X', { duration: 2500,  panelClass: ['white-snackbar']})
      }
    )
  }

}
