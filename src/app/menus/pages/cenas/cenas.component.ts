import { Component, OnInit } from '@angular/core';
import { Producto } from '../../interfaces/GenericResponse.interface';
import { MenusService } from '../../services/menus.service';

@Component({
  selector: 'app-cenas',
  templateUrl: './cenas.component.html',
  styles: [
  ]
})
export class CenasComponent implements OnInit {

  productos: Producto[] = [];

  constructor(private productService: MenusService) { }

  ngOnInit(): void {
    this.obtenerPrductos();
  }

  obtenerPrductos(){
    this.productService.getListProducts(3)
    .subscribe(
      (products) => {
        this.productos = products.data;
      },
      (err) => {
        console.log(err);
      }
    );

  }
}
