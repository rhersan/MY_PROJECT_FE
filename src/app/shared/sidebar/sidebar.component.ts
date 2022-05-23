import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../interfaces/menu.interface';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
    `
    li { cursor: pointer;}
     
    `
  ]
})
export class SidebarComponent implements OnInit {

  menus: MenuItem[] = [
    {
      label: 'Desayunos',
      icon: 'pi-desktop',
      routerLink: ''
    },
    {
      label: 'Comidas',
      icon: 'pi-desktop',
      routerLink: 'comidas'
    },
    {
      label: 'Cenas',
      icon: 'pi-desktop',
      routerLink: 'cenas'
    },
    {
      label: 'Postres',
      icon: 'pi-desktop',
      routerLink: 'postres'
    },
    {
      label: 'Bebidas',
      icon: 'pi-desktop',
      routerLink: 'bebidas'
    },
  ];

  constructor() { }

  ngOnInit(): void {
    
  }

}
