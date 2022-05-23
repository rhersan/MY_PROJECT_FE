import { Component, OnInit } from '@angular/core';
import { Producto } from '../../interfaces/GenericResponse.interface';
import { MenusService } from '../../services/menus.service';

@Component({
  selector: 'app-bebidas',
  templateUrl: './bebidas.component.html',
  styles: [
  ]
})
export class BebidasComponent implements OnInit {

  productos: Producto[] = [];

  constructor(private productService: MenusService) { }

  ngOnInit(): void {
    this.obtenerPrductos();
  }
  
  obtenerPrductos(){
    this.productService.getListProducts(5)
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
