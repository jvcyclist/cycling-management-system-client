import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-account-activation',
  templateUrl: './account-activation.component.html',
  styleUrls: ['./account-activation.component.css']
})
export class AccountActivationComponent implements OnInit {

  private url = environment.baseUrl + '/api/auth/account-activation'

  activationCode: string = '';
  form!: FormGroup;
  constructor(private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      params => {
        
        this.activationCode = params.activationCode
      
        this.form = this.formBuilder.group(
          {
              mail: '',
              password: '',
              activationCode: this.activationCode
          }
      );
      } 
    )
  }

  submit(){
    this.http.post(this.url, this.form.getRawValue()).subscribe(response => this.router.navigateByUrl('/login'))
  }

}
