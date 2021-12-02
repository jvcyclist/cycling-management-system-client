import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jsPDF from 'jspdf';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent implements OnInit {

  title = 'Cycling Management App'

  sarray: string[] = [];

  tabTitle: string = 'MAIN';

  currentUser: any;

  constructor(private token: TokenStorageService, private route: Router) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
  }

  isCollapsed = true;
  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  changeActiveTabTitle(tabTitle: string): void {
    this.tabTitle = tabTitle;
    this.isCollapsed = true
  }

  logout(){
    this.token.signOut();
    this.route.navigateByUrl('/login').then(() => window.location.reload());
  }

  isUserHasRole(role: string): boolean {  
    return this.currentUser.roles.includes(role);
  }

}
