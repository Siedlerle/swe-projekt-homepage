import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { AbgabenComponent } from './abgaben/abgaben.component';
import { RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ProjektComponent } from './projekt/projekt.component';
import { GeschuetzteAbgabenComponent } from './geschuetzte-abgaben/geschuetzte-abgaben.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    ImpressumComponent,
    AbgabenComponent,
    AboutusComponent,
    ProjektComponent,
    GeschuetzteAbgabenComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
