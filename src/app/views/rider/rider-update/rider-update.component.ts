import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { RiderMock } from 'src/app/data-mocks/rider-mock';
import { CategoriesList } from 'src/app/models/categories-list';
import { Category } from 'src/app/models/category.model';
import { Rider } from 'src/app/models/rider.model';
import { RiderService } from 'src/app/services/rider.service';

@Component({
  selector: 'app-rider-update',
  templateUrl: './rider-update.component.html',
  styleUrls: ['./rider-update.component.css']
})
export class RiderUpdateComponent implements OnInit {

  id: number = 0;

  category: Category = {name:"ZAK"}
  categoriesList: string[] = CategoriesList.categories;

  riderMock: RiderMock = new RiderMock();
  rider: Rider = {firstName: "", lastName: "", licenseNo: "", category: this.category!};

  constructor(
    private route: ActivatedRoute,
    private locate: Location,
    private riderService: RiderService,
    private router: Router
  ) { }

  ngOnInit(): void { 
    this.route.paramMap.subscribe(
      (params: ParamMap) => {
        this.id = Number(params.get('id'));
        if (this.id !== null && this.id !== 0) {
          this.riderService.getRiderById(this.id).subscribe(
            rider => {
              this.rider = rider
              this.category = rider.category!;
            }
            
            
            )
        } 
      }
    )

  }

  onBack(): void {
    this.locate.back();
  }

  onSave(): void {
    if (this.id !== 0) {
      this.rider.category!.name = this.category.name;
      this.riderService.updateRider(this.rider).subscribe(
        rider => {
          this.router.navigateByUrl('/rider/' + rider.id)
      })
    }
    else { 
    this.riderService.saveRider(this.rider).subscribe(
      rider => this.locate.back()
    )
  }

  }

}
