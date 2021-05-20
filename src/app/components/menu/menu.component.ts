import { Component, OnInit } from '@angular/core';

interface Menu{
  titulo: string;
  direccion: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  menu: Menu[] = [
    {titulo:'Home', direccion:'/home'},
    {titulo:'Segundo', direccion:'/dos'}
  ];

  constructor() { }

  ngOnInit() {}

}
