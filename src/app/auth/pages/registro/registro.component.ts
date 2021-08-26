import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
// import { emailPattern, nombreApellidoPattern, noPuedeSerStrider } from 'src/app/shared/validator/validaciones';
import { ValidatorService } from 'src/app/shared/validator/validator.service';
import { EmailValidatorService } from 'src/app/shared/validator/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern( this.vs.nombreApellidoPattern)]],
    email: ['', [Validators.required, Validators.pattern( this.vs.emailPattern )], [ this.emailValidator ] ],
    username: ['', [Validators.required, this.vs.noPuedeSerStrider  ] ],
    password: ['', [Validators.required,  Validators.minLength(6)] ],
    password2: ['', [Validators.required, ] ],
  },{
    validators: [ this.vs.camposIguales('password', 'password2') ]
  })

  get emailErrorMsg():string{
    
    const errors = this.miFormulario.get('email')?.errors;

    if (errors?.required) {
      return 'Email Obligatorio'
    } else if (errors?.pattern){
      return 'El valor no tiene formato valido'
    } else if (errors?.pattern){
      return 'Email existente'
    }


    return ''

  }

  constructor(private fb: FormBuilder,
              private vs: ValidatorService,
              private emailValidator : EmailValidatorService) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Nicolas Spagliardi',
      email: 'test1@test.com',
      username: 'Spagliardin',
      password: '123456',
      password2: '123456',
    })
  }

  Invalid( campo: string ){
    return this.miFormulario.get(campo)?.invalid
           && this.miFormulario.get(campo)?.touched
  }

  saveForm(){
    this.miFormulario.markAllAsTouched()
  }

  // emailRequired(){
  //   return this.miFormulario.get('email')?.errors?.required
  //          && this.miFormulario.get('email')?.touched
  // }

  // emailFormate(){
  //   return this.miFormulario.get('email')?.errors?.pattern
  //          && this.miFormulario.get('email')?.touched
  // }

  // emailExist(){
  //   return this.miFormulario.get('email')?.errors?.emailTomado
  //          && this.miFormulario.get('email')?.touched
  // }
}
