import { Component, OnInit } from '@angular/core';

interface MenuItem {
  text: string,
  ruta: string
}


@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styles: [

    `
      li{
        cursor: pointer
      }
    
    `

  ]
})


export class SideMenuComponent {

  templateMenu: MenuItem[] = [
    {
      text: 'Básicos',
      ruta: 'template/basicos'
    },
    {
      text: 'Dinamicos',
      ruta: 'template/dinamicos'
    },
    {
      text: 'Switches',
      ruta: 'template/switches'
    },
  ]

  reactiveMenu : MenuItem[] = [
    {
      text: 'Básicos',
      ruta: 'reactive/basicos'
    },
    {
      text: 'Dinamicos',
      ruta: 'reactive/dinamicos'
    },
    {
      text: 'Switches',
      ruta: 'reactive/switches'
    },
  ]
  

}
