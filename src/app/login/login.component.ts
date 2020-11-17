import { BasicAuthenticationService } from './../services/basic-authentication.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  errorMessage: string;
  success: boolean;

  constructor(private router: Router,
              private basicAuthenticationService: BasicAuthenticationService) {
    this.errorMessage = 'Invalid Credentials';
    this.success = true;
  }

  ngOnInit() {
  }

  handleBasisAuthLogin() {
    this.basicAuthenticationService.executeJWTAuthenticationService(this.username, this.password).subscribe(
      response => {
        this.router.navigate(['welcome', this.username]);
        this.success = true;
      },
      error => this.success = false
    );
  }

}
