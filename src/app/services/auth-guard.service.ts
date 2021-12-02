import { Injectable, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  currentUser: any;

  constructor(private token: TokenStorageService,
    private router: Router
    ) 
    {
      this.currentUser = this.token.getUser()
     }

  canActivate(): boolean {
    if (!this.currentUser) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
