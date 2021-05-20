import { Component, Input, OnInit } from '@angular/core';
import { ReporteRapido } from 'src/app/interfaces/interfaces';


@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.scss'],
})
export class ReporteComponent implements OnInit {

  @Input() reporte: ReporteRapido;

  constructor() { }

  ngOnInit() {}

}
