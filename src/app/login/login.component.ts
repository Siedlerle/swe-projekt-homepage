
import { Component,  ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
,
})


export class LoginComponent 
{
  @ViewChild('nameInput') nameInputRef!: ElementRef<HTMLInputElement>;
  @ViewChild('passwdInput') passwdInputRef!: ElementRef<HTMLInputElement>;

  loginFailed = false;

  name = '';
  password = '';

  correctName = 'Dozent';
  correctPsswd = 'c3dlRG96ZW50MjAyMw=='

  constructor(private router: Router) {}

  onSubmit(event: Event): void {
    event.preventDefault();
    this.name = this.nameInputRef.nativeElement.value;
    this.password = this.passwdInputRef.nativeElement.value;

    // Weiterleitung zur nächsten Komponente
    if (this.name == this.correctName && this.password == atob(this.correctPsswd)) {
      this.router.navigate(['/geschützte_Abgaben']);
      this.loginFailed = false;
    } 
    else{
      this.nameInputRef.nativeElement.value = '';
      this.passwdInputRef.nativeElement.value = '';
      this.loginFailed = true;
    }
  }

}
