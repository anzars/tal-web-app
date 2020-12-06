import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClient, HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PremiumformComponent } from './premiumform/premiumform.component';
import { ResultformComponent } from './resultform/resultform.component';
import { DescriptionComponent } from './description/description.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ControlService } from 'src/service/control-service';
import { userdetails } from 'src/Models/userdetails';
import { userService } from 'src/service/Userservice';
import { ReviewComponent } from './review/review.component';
import { interceptorservice } from 'src/service/interceptorservice';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PremiumformComponent,
    ResultformComponent,
    DescriptionComponent,
    ReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [
              {
                provide: HTTP_INTERCEPTORS,
                useClass: interceptorservice,
                multi: true,
              } ,
              ControlService, userService],
  bootstrap: [AppComponent]
})
export class AppModule { }
