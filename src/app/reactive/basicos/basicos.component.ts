import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit{

  // miFormulario: FormGroup = new FormGroup({
  //   nombre: new FormControl('rtx 4080ti'),
  //   precio: new FormControl(1500),
  //   stock : new FormControl(5),
  // })

  
  miFormulario: FormGroup = this.fb.group({
    nombre: [, [ Validators.required, Validators.minLength(3) ] ],
    precio: [, [Validators.min(0), Validators.required]],
    stock: [, [Validators.min(0), Validators.required]]
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(){
    this.miFormulario.reset({
      nombre:'RTX',
      precio: 1500,
      stock: 5
    })
  }

  invalid( campo: string ){
   return  this.miFormulario.controls[campo].errors 
           && this.miFormulario.controls[campo].touched
  }

  save(){
    
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched()
      return;
    }


    this.miFormulario.reset()

  }

}
