import { Injectable } from '@angular/core';
import { Producto } from '../../models/producto';

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {

  productosFavoritos: Producto[] = [];

  agregarAFavoritos(p: Producto): void {

    const existe = this.productosFavoritos.find(prod => prod.id === p.id);

    if (!existe) {
      this.productosFavoritos.push({
        ...p
      });
    }

  }

  obtenerFavoritos(): Producto[] {
    return this.productosFavoritos;
  }

  eliminarDeFavoritos(id: number): void {

    const index = this.productosFavoritos.findIndex(p => p.id === id);

    if (index !== -1) {
      this.productosFavoritos.splice(index, 1);
    }

  }

}