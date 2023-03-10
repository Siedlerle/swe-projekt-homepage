import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImpressumComponent } from './impressum/impressum.component';
import { AbgabenComponent } from './abgaben/abgaben.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ProjektComponent } from './projekt/projekt.component';

const routes: Routes = [
  {path: 'projekt', component: ProjektComponent},
  {path: 'aboutus', component: AboutusComponent},
  {path: 'impressum', component: ImpressumComponent},
  {path: 'abgaben', component: AbgabenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
