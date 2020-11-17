import { BasicAuthenticationService } from './services/basic-authentication.service';
import { HttpInterceperBasicAuthService } from './services/http/http-interceper-basic-auth.service';
import { TodoDataService } from './services/data/todo-data.service';
import { WelcomeDataService } from './services/data/welcome-data.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './services/route-guard.service';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  { path: 'welcome/:name', component: WelcomeComponent, canActivate:[RouteGuardService] },
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent},
  { path: 'todos', component: ListTodosComponent, canActivate:[RouteGuardService]},
  { path: 'logout', component: LogoutComponent, canActivate:[RouteGuardService]},
  { path: 'todos/:id', component: TodoComponent, canActivate:[RouteGuardService]},
  { path: '**', component: ErrorComponent}
];

@NgModule({
  declarations: [AppComponent, LoginComponent, WelcomeComponent, ErrorComponent, ListTodosComponent, MenuComponent, FooterComponent,
                 LogoutComponent,
                 TodoComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes), FormsModule, HttpClientModule],
  exports: [RouterModule],
  providers: [RouteGuardService,
              WelcomeDataService,
              TodoDataService,
              BasicAuthenticationService,
              {provide: HTTP_INTERCEPTORS, useClass: HttpInterceperBasicAuthService, multi: true}
            ],
  bootstrap: [AppComponent],
})
export class AppModule {}
