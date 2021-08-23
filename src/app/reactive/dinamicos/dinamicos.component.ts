import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent{

  miFormulario: FormGroup = this.fb.group({
    nombre: [ , [ Validators.required, Validators.minLength(3)] ],
    favoritos: this.fb.array( [
      ['Metal Gear'],
      ['Death Stranding']
    ], Validators.required )
  })

  get favoritosArr(){
    return this.miFormulario.get('favoritos') as FormArray
  }

  nuevoFavorito: FormControl = this.fb.control('', Validators.required)

  constructor(private fb: FormBuilder) { }

  guardar(){

    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched()
      return;
    }

    // (this.miFormulario.valid)? this.imprimir = true : this.imprimir = false

  }

  agregarFavorito(){
    
    if (this.nuevoFavorito.invalid) {
      return
    }

    this.favoritosArr.push( this.fb.control(
      this.nuevoFavorito.value, Validators.required
    ) )

      this.nuevoFavorito.reset()

  }

  invalid( campo: string ){
    return this.miFormulario.controls[campo].touched
           && this.miFormulario.controls[campo].errors
  }


  borrar(i: number){
    this.favoritosArr.removeAt( this.nuevoFavorito.value )
  }
} 
