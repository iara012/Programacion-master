import { Routes } from '@angular/router';
import { Carrito } from './compartidos/carrito/carrito';
import { Inicio } from './paginas/inicio/inicio';
import { FactoryTarget } from '@angular/compiler';
import { Favoritos } from './compartidos/favoritos/favoritos';
import { Ofertas } from './paginas/ofertas/ofertas';
import { Contacto } from './paginas/contacto/contacto';
import { InicioSesion } from './auth/inicio-sesion/inicio-sesion';
import { Productos } from './paginas/productos/productos';
import { Registro } from './auth/registro/registro';

export const routes: Routes = [
    { path: '', redirectTo: 'inicio', pathMatch: 'full'},

    { path: 'inicio', component: Inicio},
    {path: 'inicioSesion', component: InicioSesion},
    { path: 'carrito', component: Carrito },
    {path: 'favoritos', component:Favoritos},
    {path: 'ofertas', component:Ofertas},
    {path: 'contacto', component:Contacto},
    {path: 'productos', component:Productos},
    {path: 'registro', component:Registro},

   { path: '**', redirectTo:'Inicio'},
    
];
