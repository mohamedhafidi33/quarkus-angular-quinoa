import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {HolidayDTO} from '../../../api';

@Component({
  selector: 'app-holiday-form.component',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './holiday-form.component.html',
  styleUrl: './holiday-form.component.css',
})
export class HolidayFormComponent implements OnInit{
  holidayForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

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
    console.log(formValue);
  }
}
