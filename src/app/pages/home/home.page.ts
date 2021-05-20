import { ReporteCompleto } from './../../interfaces/interfaces';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  reportes: ReporteCompleto[] = [
    {
      titular: 'Noel',
      descCompleta: 'Perro de color canela que se perdio en guadalupe, le gusta comer tacos',
      reporteRapido: {
        nombreMascota: 'Canela',
        fotoMascota:'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y',
        descRapida: 'Perro de color canela',
        lugar:'Guadalupe'
      }
    },
    {
      titular: 'Noel',
      descCompleta: 'Perro de color canela que se perdio en guadalupe, le gusta comer tacos',
      reporteRapido: {
        nombreMascota: 'Canela',
        fotoMascota:'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y',
        descRapida: 'Perro de color canela',
        lugar:'Guadalupe'
      }
    },
    {
      titular: 'Noel',
      descCompleta: 'Perro de color canela que se perdio en guadalupe, le gusta comer tacos',
      reporteRapido: {
        nombreMascota: 'Canela',
        fotoMascota:'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y',
        descRapida: 'Perro de color canela',
        lugar:'Guadalupe'
      }
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
