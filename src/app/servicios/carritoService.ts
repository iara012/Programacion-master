import { Injectable } from '@angular/core';
import { Producto } from '../../models/producto';

@Injectable({
  providedIn: 'root',
})
export class CarritoService {

  productosCarro: Producto[] = [];

  agregarProducto(p: Producto): void {

    const producto = this.productosCarro.find(prod => prod.id === p.id);

    if (producto) {
      producto.cantidad++;
    } else {
      this.productosCarro.push({
        ...p,
        cantidad: 1
      });
    }

  }

  obtenerProducto(): Producto[] {
    return this.productosCarro;
  }

  aumentarContenido(id: number): void {

    const producto = this.productosCarro.find(p => p.id === id);

    if (producto) {
      producto.cantidad++;
    }

  }

  disminuirContenido(id: number): void {

    const producto = this.productosCarro.find(p => p.id === id);

    if (producto) {

      if (producto.cantidad > 1) {
        producto.cantidad--;
      } else {
        this.eliminarProducto(id);
      }

    }

  }

  eliminarProducto(id: number): void {

    const indice = this.productosCarro.findIndex(
      p => p.id === id
    );

    if (indice !== -1) {
      this.productosCarro.splice(indice, 1);
    }

  }

  obtenerTotal(): number {

    return this.productosCarro.reduce((total, p) => {
      return total + (p.precio * p.cantidad);
    }, 0);

  }

}