import { ReporteCompleto } from './../../interfaces/interfaces';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-reportess',
  templateUrl: './reportess.component.html',
  styleUrls: ['./reportess.component.scss'],
})
export class ReportessComponent implements OnInit {

  @Input() reportes: ReporteCompleto[] = [];

  constructor() { }

  ngOnInit() {}

}
