import { ReportessComponent } from './reportess/reportess.component';
import { ReporteComponent } from './reporte/reporte.component';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    ReporteComponent,
    ReportessComponent,
  ],
  exports: [
    HeaderComponent,
    MenuComponent,
    ReportessComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
  ]
})
export class ComponentsModule { }
