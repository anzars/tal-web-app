import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DescriptionComponent } from './description/description.component';
import { HomeComponent } from './home/home.component';
import { PremiumformComponent } from './premiumform/premiumform.component';
import { ResultformComponent } from './resultform/resultform.component';


const routes: Routes = [
  {path: '' , redirectTo: 'home' , pathMatch: 'full'},
  {path: 'home', component: HomeComponent , children: [
  {path: 'description', component: DescriptionComponent},
  {path: 'premium', component: PremiumformComponent},
  {path: 'result/:factor' , component: ResultformComponent},
  {path: '**' , redirectTo: 'premium'}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
