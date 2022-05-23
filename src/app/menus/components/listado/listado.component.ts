import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Producto } from '../../interfaces/GenericResponse.interface';
import { MenusService } from '../../services/menus.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [
  ]
})
export class ListadoComponent implements OnInit {

  products: Producto[] = [];
  producto!: Producto;
  constructor(private service: MenusService,
              private router: Router) { 

  }
  

  ngOnInit(): void {
    this.obtenerPrductos();
  }

  obtenerPrductos(){
    this.service.getListProducts(0)
    .subscribe(
      (products) => {
        this.products = products.data;
        console.log(products.data);
      },
      (err) => {
        console.log(err);
      }
    );

  }

  
  eliminarProducto(id: string){
    this.service.deleteProduct(id)
    .subscribe(
      (resp) => {
        console.log(resp);
        if(resp.systemCode == 1){
          //this.router.navigate(['']);  
          this.obtenerPrductos();
        }else{
            console.log(`SystemCode: ${resp.systemCode}, Message: ${resp.message}`);
        }
      },
      (err) => {
        console.log(err);
      }
    )
  }
  editar(id: string){
    console.log("Editar: ",id);
  }



}
