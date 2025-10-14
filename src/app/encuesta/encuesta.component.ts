
import { Component, OnInit } from '@angular/core';
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
   get Aportantes() {
      return this.form.get('aportantes') as FormArray;
    }

  ngOnInit(): void {
    this.form = this.fb.group({
      nombre:['', Validators.required],
      edad:['', Validators.required],
      oficina:['', Validators.required],
      sueldo:['', Validators.required],
      dependientes: this.fb.array([this.fb.group({
      nombres: ['', Validators.required],
      parentesco:['',Validators.required],
      edad: ['', [Validators.required, Validators.min(0)]]
    })]),
    aportantes: this.fb.array([this.fb.group({
      nombres: ['', Validators.required],
      edad: ['', [Validators.required, Validators.min(0)]],
      monto: ['', [Validators.required, Validators.min(0)]],
      compania: ['', Validators.required],
    })]),
            tipo:['', Validators.required],
            esquema:['', Validators.required],
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
onAddToDependiente():void{
  const PagoGroup = this.fb.group({
		nombres: ['', Validators.required],
    parentesco:['',Validators.required],
    edad: ['', [Validators.required, Validators.min(0)]],
	});
	this.Dependientes.push(PagoGroup);
}

onAddToAportante():void{
  const AportGroup = this.fb.group({
      nombres: ['', Validators.required],
      edad: ['', [Validators.required, Validators.min(0)]],
      monto: ['', [Validators.required, Validators.min(0)]],
      compania: ['', Validators.required],
	});
	this.Aportantes.push(AportGroup);
}

onDeleteDependiente(index:number):void{
  this.Dependientes.removeAt(index);
}

onDeleteAportante(index:number):void{
  this.Aportantes.removeAt(index);
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
