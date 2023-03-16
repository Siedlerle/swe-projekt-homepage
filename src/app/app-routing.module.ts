import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImpressumComponent } from './impressum/impressum.component';
import { AbgabenComponent } from './abgaben/abgaben.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ProjektComponent } from './projekt/projekt.component';
import { GeschuetzteAbgabenComponent } from './geschuetzte-abgaben/geschuetzte-abgaben.component';
import { LoginComponent } from './login/login.component';
import { DatenschutzerklaerungComponent } from './datenschutzerklaerung/datenschutzerklaerung.component';


const routes: Routes = [
  {path: 'projekt', component: ProjektComponent},
  {path: 'aboutus', component: AboutusComponent},
  {path: 'impressum', component: ImpressumComponent},
  {path: 'abgaben', component: AbgabenComponent},
  { path: 'geschützte_Abgaben', component: GeschuetzteAbgabenComponent},
  { path: 'login', component: LoginComponent},
  {path: 'datenschutzerklaerung', component: DatenschutzerklaerungComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
