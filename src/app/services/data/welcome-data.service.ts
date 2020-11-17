import { API_URL } from './../../../app.constants';
import { HttpHeaders } from '@angular/common/http';
import { HelloWorldBean } from './../../model/hello-world-bean';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class WelcomeDataService {

  constructor(private httpClient: HttpClient) { }

  executeHelloWorldBeanService() {
    return this.httpClient.get<HelloWorldBean>(`${API_URL}/hello-world-bean`);
  }

  executeHelloWorldServiceWithPathVariable(name: string) {

    return this.httpClient.get<HelloWorldBean>(`${API_URL}/hello-world-bean/path-variable/${name}`);
  }
}
