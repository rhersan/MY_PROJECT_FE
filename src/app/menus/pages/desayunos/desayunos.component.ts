import { Component, OnInit } from '@angular/core';
import { MenusService } from '../../services/menus.service';
import { Producto } from '../../interfaces/GenericResponse.interface';

@Component({
  selector: 'app-desayunos',
  templateUrl: './desayunos.component.html',
  styles: [
  ]
})
export class DesayunosComponent implements OnInit {

  productos: Producto[] = [];

  constructor(private productService: MenusService) { }

  ngOnInit(): void {
    this.obtenerPrductos();
  }

  obtenerPrductos(){
    this.productService.getListProducts(1)
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
