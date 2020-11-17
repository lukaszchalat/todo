import { WelcomeDataService } from './../services/data/welcome-data.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name: string;
  welcomeMessage: string;
  errorMessage: string;

  constructor(private route: ActivatedRoute,
              private welcomeDataService: WelcomeDataService) { }

  ngOnInit() {
    this.name = this.route.snapshot.params['name'];
  }

  getWelcomeMessage() {
    this.welcomeDataService.executeHelloWorldBeanService().subscribe(response => this.welcomeMessage = response.message,
                                                                     error => this.errorMessage = error.error.message);
  }

  getWelcomeMessageWithParameter() {
    this.welcomeDataService.executeHelloWorldServiceWithPathVariable(this.name)
                           .subscribe(response => this.welcomeMessage = response.message,
                                      error => this.errorMessage = error.error.message);
  }

}
