import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenusService } from '../../services/menus.service';
import { Producto } from '../../interfaces/GenericResponse.interface';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styles: [
  ]
})
export class FormularioComponent implements OnInit {

  resp     !: any;
  producto: Producto = {
    id: '',
    calories: 0,
    idCategory: 0,
    imgSrc: '',
    ingredients: '',
    price: 0,
    product: '',
    status: 1,
    weight: 0,
    quantity: 0
  }

  seleccionado: number = 0;



  lista = [
    { id: 0, name: '-- Seleccione --' },
    { id: 1, name: 'Desayunos' },
    { id: 2, name: 'Comidas' },
    { id: 3, name: 'Cenas' },
    { id: 4, name: 'Postres' },
    { id: 5, name: 'Bebidas' },
  ];
  constructor(private activetedRoute: ActivatedRoute,
    private service: MenusService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.activetedRoute.params
      .subscribe(({ id }) => {
        this.service.getProduct(id)
          .subscribe((respProduct) => {
            this.resp = respProduct;
            this.producto = this.resp.data;
          },
            (err) => {
              this.producto = {
                id: '',
                calories: 0,
                idCategory: 0,
                imgSrc: '',
                ingredients: '',
                price: 0,
                product: '',
                status: 1,
                weight: 0,
                quantity: 0
              };
            }
          );
      });

  }

  guardar() {
    console.log(this.producto);
    if (this.producto.id.length > 0 && this.producto.id != "00000000-0000-0000-0000-000000000000") {
      this.service.putUpdateProduct(this.producto)
        .subscribe(
          (resp) => {
            if (resp.systemCode == 1) {
              this.router.navigate(['']);
            } else {
              console.log(`SystemCode: ${resp.systemCode}, Message: ${resp.message}`);
            }
          },
          (err) => {
            console.log(err);
          }
        );

    }
    else{
      // Crear nuevo
      console.log('Nuevo');
      this.service.createProduct(this.producto)
        .subscribe(
          (resp) => {
            if (resp.systemCode == 1) {
              this.router.navigate(['']);
            } else {
              console.log(`SystemCode: ${resp.systemCode}, Message: ${resp.message}`);
            }
          },
          (err) => {
            console.log(err);
          }
        );
    }

  }

  regresar() {
    this.router.navigate(['']);
  }




}
