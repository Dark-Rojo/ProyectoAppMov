export interface ReporteCompleto{
  titular: string;
  descCompleta: string;
  reporteRapido: ReporteRapido;
}

export interface ReporteRapido{
  nombreMascota: string;
  fotoMascota: string;
  descRapida: string;
  lugar: string;
}
