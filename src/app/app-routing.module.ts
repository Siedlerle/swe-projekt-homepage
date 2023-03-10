import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImpressumComponent } from './impressum/impressum.component';
import { AbgabenComponent } from './abgaben/abgaben.component';

const routes: Routes = [
  {path: 'impressum', component: ImpressumComponent},
  {path: 'abgaben', component: AbgabenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
