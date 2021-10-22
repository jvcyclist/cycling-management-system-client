import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-rider-details',
  templateUrl: './rider-details.component.html',
  styleUrls: ['./rider-details.component.css']
})
export class RiderDetailsComponent implements OnInit {

  viewName: string = 'PERSONAL-DATA';

  id: number = 0;
  constructor(
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params: ParamMap) => {
        this.id = Number(params.get('id'));
      }
    )}

    onChangeView(viewName: string){
      this.viewName = viewName;
    }

}
