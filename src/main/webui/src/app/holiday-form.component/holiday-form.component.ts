import { Component, OnInit } from '@angular/core';
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

  constructor(private fb: FormBuilder, private holidayResource: HolidayResourceService) {}

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
    this.holidayResource.apiHolidaysPost(formValue);
    console.log(formValue);
  }
}
