
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ApiService } from 'app/api.service';

@Component({
  selector: 'encuesta',
  templateUrl: './encuesta.component.html',
styleUrls: ['./encuesta.component.css'],
})
export class EncuestaComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private api:ApiService

  ) {}
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
      nombres: [''],
      parentesco:[''],
      edad: ['']
    })]),
    aportantes: this.fb.array([this.fb.group({
      nombres: [''],
      edad: [''],
      monto: [''],
      compania: [''],
    })]),
            tipo:['', Validators.required],
            esquema:['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      console.log('Formulario enviado:', this.form.value);
    this.api.grabarEncuesta(this.form.value).subscribe(data => {
      if (data) {
        console.log(data);
      }
    });
    alert('Formulario enviado correctamente');
     this.onReset();
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

    const total = this.Aportantes.length;
    const totalfami = this.Dependientes.length;
    // elimina desde el último hasta el segundo elemento
    for (let i = total - 1; i >= 1; i--) {
      this.onDeleteAportante(i);
    }
    for (let i = totalfami - 1; i >= 1; i--) {
      this.onDeleteDependiente(i);
    }
   // this.Aportantes.clear();
     this.form.reset({});
  }
   
   
}
