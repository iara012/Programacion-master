import { Component } from '@angular/core';
import { Producto } from '../../../models/producto';

@Component({
  selector: 'app-ofertas',
  imports: [],
  templateUrl: './ofertas.html',
  styleUrl: './ofertas.css',
})
export class Ofertas {
ofertas:Producto[]=[

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



]
}
