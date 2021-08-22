import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario!: NgForm // Me traigo la referencia local del html
  initForm = {
    producto: 'Lapiz',
    precio: 10,
    stock: 5
  }

  constructor() { }

  ngOnInit(): void {
  }


nombreValido() : boolean {
  return this.miFormulario?.controls.producto?.invalid && 
         this.miFormulario?.controls.producto?.touched
}

precioValido(): boolean {
  // return (this.miFormulario?.value.precio > 0
  //         && this.miFormulario?.controls.precio.touched) ? (false) : (true)

  return this.miFormulario?.controls.precio?.value <= 0
         && this.miFormulario?.controls.precio?.touched
}

  // guardar( miFormulario: NgForm){ 
guardar( ){ 
    console.log(this.miFormulario);
    this.miFormulario.resetForm({
      precio: 0,
      stock: 0
    });
  }
}
