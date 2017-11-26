import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module'; 
import { MainService } from './main.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './main/list/list.component';
import { MainComponent } from './main/main.component';
import { ShowComponent } from './main/show/show.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListComponent,
    MainComponent,
    ShowComponent,
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],

  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
