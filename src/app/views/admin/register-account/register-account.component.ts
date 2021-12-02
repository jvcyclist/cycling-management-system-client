import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-register-account',
  templateUrl: './register-account.component.html',
  styleUrls: ['./register-account.component.css']
})
export class RegisterAccountComponent implements OnInit {
  form!: FormGroup;
  private url = environment.baseUrl + '/api/auth/signup'

  constructor(private formBuilder: FormBuilder,
              private http: HttpClient
    ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: 'pkarasTEST',
      email: 'patryk1karas@gmail.com',
      firstName: 'Patryk',
      lastName: 'Karaś'
    })
  }

  submit() {
    this.http.post(this.url, this.form.getRawValue()).subscribe(response => response)
  }

}
