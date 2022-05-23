import { Component, OnInit } from '@angular/core';
import { MenusService } from '../../services/menus.service';
import { Producto } from '../../interfaces/GenericResponse.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styles: [
  ]
})
export class CarritoComponent implements OnInit {
  products: Producto[] = [];
  products$!: Observable<Producto[]>;
  total$!: Observable<number>;

  total:number = 0.0;

  constructor(private productsService: MenusService) {
    this.products = JSON.parse(localStorage.getItem('productos')!) || [];
    this.total = JSON.parse(localStorage.getItem('total')!) || 0.00;
   }

  ngOnInit(): void {
    this.products$ = this.productsService.getProductos$();
    this.products$.subscribe(products => this.products = products);
    this.total$ = this.productsService.getTotal$();
    this.total$.subscribe(total => this.total = total);
  }

  eliminar(id: string){
    this.productsService.eliminarProductoCarrito(id);
  }

 
}
