import { Component, OnInit } from '@angular/core';
import { Producto } from '../../../models/producto';
import { CarritoService } from '../../servicios/carritoService';

@Component({
  selector: 'app-carrito',
  imports: [],
  templateUrl: './carrito.html',
  styleUrl: './carrito.css',
})
export class Carrito implements OnInit {

  productosEnCarro: Producto[] = [];

  constructor(public carrito: CarritoService) {}

  ngOnInit(): void {
    this.productosEnCarro = this.carrito.obtenerProducto();
  }

  aumentarCantidad(id: number): void {
    this.carrito.aumentarContenido(id);
  }

  disminuirCantidad(id: number): void {
    this.carrito.disminuirContenido(id);
  }

  eliminarProducto(id: number): void {
    this.carrito.eliminarProducto(id);
  }

  obtenerTotal(): number {
    return this.carrito.obtenerTotal();
  }

}
