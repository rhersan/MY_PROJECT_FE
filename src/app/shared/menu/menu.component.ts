import { Component } from '@angular/core';
import { MenuItem } from '../interfaces/menu.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
    `
    .active{
        color: aqua;
    }
    `
  ]
})
export class MenuComponent {
  menus: MenuItem[] = [
    {
      label: 'Inicio',
      icon: 'pi-desktop',
      routerLink: ''
    },
    {
      label: 'Desayunos',
      icon: 'pi-desktop',
      routerLink: 'desayunos'
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

}
