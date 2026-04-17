import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HolidayDTO, HolidayResourceService } from '../../../api';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-holiday-form.component',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule
  ],
  templateUrl: './holiday-form.component.html',
  styleUrl: './holiday-form.component.css',
})
export class HolidayFormComponent implements OnInit{
  holidayForm!: FormGroup;

  constructor(private fb: FormBuilder, private holidayResource: HolidayResourceService, private router: Router) {}

  ngOnInit(): void {
    this.holidayForm = this.fb.group({
      id: [null],
      name: [''],
      description: [''],
      coverPath: [false]
    });
  }

  onSubmit(): void {
    const formValue: HolidayDTO = this.holidayForm.value;
    this.holidayResource.apiHolidaysPost(formValue).subscribe({
      next: (res) => console.log('SUCCESS', res),
      error: (err) => console.error('ERROR', err)
    });
    this.router.navigate(['/holidays/']);
  }
}
