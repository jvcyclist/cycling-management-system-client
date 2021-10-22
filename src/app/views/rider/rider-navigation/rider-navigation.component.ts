import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rider-navigation',
  templateUrl: './rider-navigation.component.html',
  styleUrls: ['./rider-navigation.component.css']
})
export class RiderNavigationComponent implements OnInit {

  @Output() viewName = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onChangeView(viewName: string): void{
    this.viewName.emit(viewName);
  }
  
}
