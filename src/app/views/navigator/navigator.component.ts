import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent implements OnInit {

  title = 'Cycling Management App'

  tabTitle: string = 'MAIN';

  constructor() { }

  ngOnInit(): void {
  }

  isCollapsed = true;
  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }


  changeActiveTabTitle(tabTitle: string): void {
    this.tabTitle = tabTitle;
  }

  downloadPDFTEST(){
    const doc = new jsPDF();


    doc.text("Hello world!", 50, 50);
    doc.save("a5.pdf");
  }

}
