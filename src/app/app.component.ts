import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  Validators,
  FormControl,
  FormBuilder,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public form: FormGroup;
  public options: string[] = ['One', 'Two', 'Three'];
  public filterOptions: Observable<string[]>;

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
      auto: [''],
    });

    this.filterOptions = this.form.get('auto').valueChanges.pipe(
      startWith(null),
      map((val) => {
        if (!val) {
          return this.options;
        } else {
          return this.options.filter((option) => {
            return option.toLowerCase().startsWith(val.toLowerCase());
          });
        }
      })
    );
  }

  public getError(): string {
    if (this.form.get('email').hasError('email')) {
      return `l'email n'est pas valide`;
    }
  }
}
