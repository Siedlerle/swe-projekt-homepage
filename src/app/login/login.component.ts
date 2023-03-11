import { Component, ViewChild, ElementRef } from '@angular/core';
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

  name = '';
  password = '';

  correctName = 'Dozent';
  correctPsswd = 'c3dlRG96ZW50MjAyMw=='

  constructor(private router: Router) {}

  onSubmit(): void {
    this.name = this.nameInputRef.nativeElement.value;
    this.password = this.passwdInputRef.nativeElement.value;

    // Weiterleitung zur nächsten Komponente
    if (this.name == this.correctName && this.password == atob(this.correctPsswd)) {
      this.router.navigate(['/geschützte_Abgaben']);
    } 
    else if(this.name != '' && this.password != '')
    {
      alert('Benutzername oder Passwort ist falsch');
    }
  }
}

