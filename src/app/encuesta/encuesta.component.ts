import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule, FormArray } from '@angular/forms';

@Component({
  selector: 'encuesta',
  templateUrl: './encuesta.component.html',
styleUrls: ['./encuesta.component.css'],
})
export class EncuestaComponent implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}
   get Dependientes() {
      return this.form.get('dependientes') as FormArray;
    }
  ngOnInit(): void {
    this.form = this.fb.group({
      shortText: ['', Validators.required],
      dependientes: this.fb.array([this.fb.group({
      nombres: ['', Validators.required],
      parentesco:['',Validators.required],
      edad: ['', [Validators.required, Validators.min(0)]]
    })]),
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
onAddToPago():void{
  const PagoGroup = this.fb.group({
		nombres: ['', Validators.required],
    parentesco:['',Validators.required],
    edad: ['', [Validators.required, Validators.min(0)]],
	});
	this.Dependientes.push(PagoGroup);
}

onDeletePago(index:number):void{
  this.Dependientes.removeAt(index);
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
