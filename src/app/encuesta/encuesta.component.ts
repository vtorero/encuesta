import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css'],
})
export class EncuestaComponent implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      shortText: ['', Validators.required],
    
      address: [''],
      city: [''],
      country: [''],
      category: [''],
      options: ['opt1'],
      notifications: [false],
      longText: [''],
      accept: [false, Validators.requiredTrue]
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      console.log('Formulario enviado:', this.form.value);
      alert('Formulario enviado correctamente');
    } else {
      this.form.markAllAsTouched();
    }
  }

  onReset(): void {
    this.form.reset({
      gender: 'male',
      options: 'opt1',
      notifications: false,
      accept: false
    });
  }
}
