import {Component, inject, signal, WritableSignal} from '@angular/core';
import {HolidayDTO, HolidayResourceService} from '../../../../api';
import {MatButton} from '@angular/material/button';
import {MatCheckbox} from '@angular/material/checkbox';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {FormGroup, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-holiday-edit.component',
  imports: [
    MatButton,
    MatCheckbox,
    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule
  ],
  templateUrl: './holiday-edit.component.html',
  styleUrl: './holiday-edit.component.css',
})
export class HolidayEditComponent {
  holiday: WritableSignal<HolidayDTO>  = signal({})
  holidayResource = inject(HolidayResourceService);
  protected holidayForm!: FormGroup;

  protected onSubmit() {
    // TODO
  }
}
