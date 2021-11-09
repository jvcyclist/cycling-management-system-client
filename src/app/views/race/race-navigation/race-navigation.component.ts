import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-race-navigation',
  templateUrl: './race-navigation.component.html',
  styleUrls: ['./race-navigation.component.css']
})
export class RaceNavigationComponent implements OnInit {

  @Output() viewName = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onChangeView(viewName: string){
    console.log('Emitted!');
    this.viewName.emit(viewName)
  }

}
