import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PremiumformComponent } from './premiumform/premiumform.component';
import { ResultformComponent } from './resultform/resultform.component';
import { DescriptionComponent } from './description/description.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ControlService } from 'src/service/control-service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PremiumformComponent,
    ResultformComponent,
    DescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [ControlService],
  bootstrap: [AppComponent]
})
export class AppModule { }
