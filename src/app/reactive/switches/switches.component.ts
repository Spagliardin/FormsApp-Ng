import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit{
  
  miFormulario: FormGroup = this.fb.group({
    genero: ['M', Validators.required],
    notificaciones: [true , Validators.required],
    terminos: [false, Validators.requiredTrue]
  })

  persona = {
    genero: 'F',
    notificaciones: true
  }

  constructor(private fb : FormBuilder) { }

 ngOnInit(){
   this.miFormulario.reset({ ...this.persona, terminos: true })

   //RXJS

   this.miFormulario.valueChanges.subscribe( ({ terminos, ...rest }) => {
    //  console.log(form);
    // delete form.terminos ----> De cualquiera de las dos maneras se sacan las condiciones
    this.persona = rest

   } )

 }

 guardar(){
   const formValue = {...this.miFormulario.value} 
   delete formValue.notificaciones;

   this.persona = formValue
 }
}
