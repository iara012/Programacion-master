import { Component } from '@angular/core';
import { Producto } from '../../../models/producto';
import { CommonModule } from '@angular/common';
import { CarritoService } from '../../servicios/carritoService';
import { FavoritosService } from '../../servicios/favoritos';

@Component({
  selector: 'app-productos',
  imports: [CommonModule],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class Productos {

  constructor(
    private carrito: CarritoService,
    private favoritos: FavoritosService
  ) { }

  Productos: Producto[] = [

    {
      id: 1,
      nombre: "Shampoo",
      categoria: "Producto Capilar",
      precio: 2500,
      stock: 5,
      descripcion: "Este shampoo tiene una fórmula con poderosos ingredientes que se absorben y actúan rápidamente, nutre el cabello desde la raíz hasta las puntas para hacerlo 5 veces más fuerte y brillante durante todo el día.",
      cantidad: 1,
      disponibilidad: true,
      imagen: "assets/shampoo1.webp"
    },

    {
      id: 2,
      nombre: "Acondicionador",
      categoria: "Producto Capilar",
      precio: 3000,
      stock: 3,
      descripcion: "Acondicionador con ingredientes nutritivos que controlan el frizz. Decile adiós al frizz con Elvive Dream Liso.",
      cantidad: 1,
      disponibilidad: true,
      imagen: "assets/acondicionador1.webp"
    },

    {
      id: 3,
      nombre: "Aceite",
      categoria: "Producto Capilar",
      precio: 5000,
      stock: 4,
      descripcion: "Tratamiento en aceite que brinda un cuidado extra, aporta nutrición y suavidad para el pelo seco.",
      cantidad: 1,
      disponibilidad: true,
      imagen: "assets/aceite1.avif"
    },

    {
      id: 4,
      nombre: "Fijador",
      categoria: "Producto Capilar",
      precio: 4500,
      stock: 6,
      descripcion: "Fijador en aerosol que mantiene el peinado por más tiempo, controla el frizz y aporta brillo.",
      cantidad: 1,
      disponibilidad: true,
      imagen: "assets/fijador1.webp"
    },

    {
      id: 5,
      nombre: "Serum",
      categoria: "Producto Capilar",
      precio: 3000,
      stock: 2,
      descripcion: "Sérum que brinda hasta 100 horas de suavidad en tan solo 1 minuto.",
      cantidad: 1,
      disponibilidad: true,
      imagen: "assets/serum1.webp"
    },

    {
      id: 6,
      nombre: "Mascarilla",
      categoria: "Producto Capilar",
      precio: 7200,
      stock: 10,
      descripcion: "Tratamiento capilar intensivo para nutrir profundamente el cabello.",
      cantidad: 1,
      disponibilidad: true,
      imagen: "assets/mascarilla1.webp"
    },


    {
      id: 7,
      nombre: "Mascarilla",
      categoria: "Producto Capilar",
      precio: 8700,
      stock: 8,
      descripcion: "Tratamiento capilar intensivo para hidratar y nutrir profundamente el cabello.",
      cantidad: 1,
      disponibilidad: true,
      imagen: "assets/mascarilla2.webp"
    },


    {
      id: 8,
      nombre: "Aceite",
      categoria: "Producto Capilar",
      precio: 7200,
      stock: 10,
      descripcion: "Nutre, aporta brillo y controla el frizz sin dejar el cabello pesado",
      cantidad: 1,
      disponibilidad: true,
      imagen: "assets/aceite2.png"
    },

       {
      id: 9,
      nombre: "Aceite",
      categoria: "Producto Capilar",
      precio: 5600,
      stock: 18,
      descripcion: "Aceite enriquecido con ingredientes naturales que hidrata y protege el cabello",
      cantidad: 1,
      disponibilidad: true,
      imagen: "assets/aceite3.webp"
    },


     {
      id: 10,
      nombre: "Acondiciondor",
      categoria: "Producto Capilar",
      precio: 10800,
      stock: 20,
      descripcion: "Desenreda al instante y aporta suavidad y brillo natural.",
      cantidad: 1,
      disponibilidad: true,
      imagen: "assets/acondicionador2.png"
    },


     {
      id: 11,
      nombre: "Fijador",
      categoria: "Producto en aerosol",
      precio: 5700,
      stock: 20,
      descripcion: "Fijador en spray que mantiene el peinado por más tiempo sin dejar residuos",
      cantidad: 1,
      disponibilidad: true,
      imagen: "assets/fijador2.webp"
    },



 {
      id: 12,
      nombre: "Plancha de pelo",
      categoria: "Producto Electronico",
      precio:25000,
      stock: 23,
      descripcion: "Distribuye el calor de forma uniforme para un alisado perfecto.",
      cantidad: 1,
      disponibilidad: true,
      imagen: "assets/planchita1.jpg"
    },


     {
      id: 13,
      nombre: "Plancha de pelo",
      categoria: "Producto Electronico",
      precio:27000,
      stock: 25,
      descripcion: "Planchita de calentamiento rápido para un peinado impecable.",
      cantidad: 1,
      disponibilidad: true,
      imagen: "assets/planchita2.jpg"
    },


 {
      id: 14,
      nombre: "Secadora de pelo",
      categoria: "Producto Electronico",
      precio:29000,
      stock: 14,
      descripcion: "Secado rápido y delicado para un cabello más suave y manejable.",
      cantidad: 1,
      disponibilidad: true,
      imagen: "assets/secadoraPelo1.jpg"
    },




  ];

  agregarAlCarrito(producto: Producto): void {
    this.carrito.agregarProducto(producto);
  }

  agregarAFavoritos(producto: Producto): void {
    this.favoritos.agregarAFavoritos(producto);
  }

}