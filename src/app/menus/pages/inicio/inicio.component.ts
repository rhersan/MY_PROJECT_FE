import { Component, OnInit } from '@angular/core';
import { Producto } from '../../interfaces/GenericResponse.interface';
import { MenusService } from '../../services/menus.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styles: [
  ]
})
export class InicioComponent implements OnInit {
  images = [262978, 1267320, 744780].map((n) => `https://images.pexels.com/photos/${n}/pexels-photo-${n}.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260`);

  constructor(private router: Router) { }
  ngOnInit(): void {
  }

  agregar(){
    this.router.navigate(['agregar']);
  }
}
