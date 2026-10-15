import { Component, OnInit } from '@angular/core';
import { Producto } from '../../../models/producto';
import { FavoritosService } from '../../servicios/favoritos';

@Component({
  selector: 'app-favoritos',
  imports: [],
  templateUrl: './favoritos.html',
  styleUrl: './favoritos.css',
})
export class Favoritos implements OnInit {

  productosFavoritos: Producto[] = [];

  constructor(private favoritos: FavoritosService) {}

  ngOnInit(): void {
    this.productosFavoritos = this.favoritos.obtenerFavoritos();
  }

  eliminarFavorito(id: number): void {
    this.favoritos.eliminarDeFavoritos(id);
    this.productosFavoritos = this.favoritos.obtenerFavoritos();
  }

}