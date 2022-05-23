import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from "@angular/common/http";
import { catchError, map, Observable, of, Subject, throwError } from 'rxjs';

import { Producto, GenericResponse } from '../interfaces/GenericResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class MenusService {
  private urlApi: string = 'https://localhost:44358/MyProject';

  productosAgregados: Producto[] = [];
  listProductos     : Producto[] = [];
  dbLocal           : Producto[] = [];

  private products$ = new Subject<Producto[]>();
  private total$    = new Subject<number>();

  
  exitProduct: boolean = false;
  total: number = 0;

  constructor(private http: HttpClient) { 
    // Obtenermos la información del local storage
    this.dbLocal = JSON.parse(localStorage.getItem('productos')!) || [];
  }

  protected handleError(error: HttpErrorResponse): Observable<any> {

    const codes = [400, 401, 403, 404];
    if (!codes.includes(error.status)) {
      console.error("An error occurred:", error);
      return throwError("Something bad happened; please try again later.");


    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${JSON.stringify(error.error)}`);
      return throwError(of(error.error));
    }

  }

  // Obtener Productos
  getListProducts(idCategory: number): Observable<GenericResponse> {
    const url = `${this.urlApi}/Products/Get`;
    const params = new HttpParams()
      .set('idCategory', idCategory);
    return this.http.get(url, { params }).pipe(
      map((response: any) => {
        return response;
      }),
      catchError(this.handleError)
    );

  }

  getProduct(id: string): Observable<GenericResponse> {
    const url = `${this.urlApi}/Products/Get/${id}`;
    return this.http.get<GenericResponse>(url).pipe(
      map((response: any) => {
        return response;
      }),
      catchError(this.handleError)
    );
  }


  /*
  agregarHeroe(objHeroe: Heroe): Observable<Heroe>{
    const url = `${this.baseUrl}/heroes`;
    return this.http.post<Heroe>(url,objHeroe);
  }
  */
  putUpdateProduct(objProduct: Producto):Observable<GenericResponse>{
    const url = `${this.urlApi}/Products`;
    return this.http.put<GenericResponse>(url,objProduct);
  }

  
  deleteProduct(id: string):Observable<GenericResponse>{
    const url = `${this.urlApi}/Products/${id}`;
    return this.http.delete<GenericResponse>(url);
  }

  createProduct(objProduct: Producto):Observable<GenericResponse>{
    const url = `${this.urlApi}/Products`;
    return this.http.post<GenericResponse>(url,objProduct);
  }

  agregraCarrito(objProduct: Producto) {   
    let productosLocales = this.listProductos.filter(p => p.id == objProduct.id).length > 0;
    // validar que exista información antes de hacer las consultas.
    if (this.dbLocal.length > 0) {
      if (this.dbLocal.filter(p => p.id == objProduct.id).length > 0) {
        this.exitProduct = true;
      }
    }


    // validamos que el produto exista en localStorage pero que no sea nuevo
    if (this.exitProduct && productosLocales) {
      //Se obtiene la posición de registro en localStorega 
      let objIndex = this.dbLocal.findIndex((obj => obj.id == objProduct.id));
      // Obtenemos la cantidad de productos actual
      let cantidad = this.dbLocal[objIndex].quantity! || 0;
      //Actualizamos el valor de la cantidad
      this.dbLocal[objIndex].quantity = cantidad + 1;
      // Pasamos la información nueva a nuestro objeto de listado de productos
      this.listProductos = this.dbLocal;

    } else {
      objProduct.quantity = 1;
      // Pasamos nuestra infor de localStorage al objeto de listado de productos
      this.listProductos = this.dbLocal;
      // Como el producto no exite lo agregamos
      this.listProductos.push(objProduct);

    }

    // Agrabamos los cambios al localStorage
    localStorage.setItem('productos', JSON.stringify(this.listProductos));
    // Mandamos la información para mostrar en el listado.       
    this.products$.next(this.listProductos);

    // Guardamos todos los productos agregados para calcular el total
    this.productosAgregados.push(objProduct);
    this.calculaTotal(this.productosAgregados);    

  }

  getProductos$(): Observable<Producto[]> {
    return this.products$.asObservable();
  }

  getTotal$(): Observable<number> {
    return this.total$.asObservable();
  }

  calculaTotal(lisProductos: Producto[] = []):void{

    let sumaTotal = 0;
    this.listProductos.forEach((row)=>{
      sumaTotal += row.price * row.quantity! || 0;
    });
    this.total = sumaTotal;
    localStorage.setItem('total', JSON.stringify(this.total));
    this.total$.next(this.total);
  }


  eliminarProductoCarrito(idProducto: string){
    //Se obtiene la posición de registro en localStorega 
    let objIndex = this.dbLocal.findIndex((obj => obj.id == idProducto));
    // Obtenemos la cantidad de productos actual
    let cantidad = this.dbLocal[objIndex].quantity! || 0;

    if(cantidad > 1){
      //Actualizamos el valor de la cantidad
      this.dbLocal[objIndex].quantity = cantidad - 1;
      // Pasamos la información nueva a nuestro objeto de listado de productos
      this.listProductos = this.dbLocal;
        // Agrabamos los cambios al localStorage
      localStorage.setItem('productos', JSON.stringify(this.listProductos));
     
    }else{
      this.dbLocal = this.dbLocal.filter((obj => obj.id != idProducto));
      this.listProductos = this.dbLocal;
      localStorage.setItem('productos', JSON.stringify(this.listProductos));      
    }

    // Mandamos la información para mostrar en el listado.       
    this.products$.next(this.listProductos);

    // Guardamos todos los productos agregados para calcular el total
    //this.productosAgregados.push(objProduct);/
    this.calculaTotal(this.productosAgregados);    

    
  }

}
