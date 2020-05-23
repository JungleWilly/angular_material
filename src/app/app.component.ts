import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  Validators,
  FormControl,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', Validators.email],
      checkbox: [''],
      radio: [''],
      slidetoggle: [''],
      select: [''],
      range: [''],
      date: [''],
    });
  }

  public getError(): string {
    if (this.form.get('email').hasError('email')) {
      return `l'email n'est pas valide`;
    }
  }
}
