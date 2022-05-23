import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Producto } from '../../interfaces/GenericResponse.interface';
import { MenusService } from '../../services/menus.service';

@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styles: [
  ]
})
export class MenuCardComponent implements OnInit {
  @Input() listProductos: Producto[] = [];

    
  constructor(private productsService: MenusService) { }

  ngOnInit(): void {
  }

  agregar(objProduct: Producto){
    this.productsService.agregraCarrito(objProduct);
  }



}
