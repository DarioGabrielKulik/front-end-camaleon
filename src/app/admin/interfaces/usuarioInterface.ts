export interface Usuario {
  id: number;
  nombre: string;
  email: string;
  password: string;
  permisos: boolean;
  codigo: null;
  url: Url[];
  rol: string;
}

export interface Url {
  larga: string;
  nombre: string;
  visitas: number;
  corta: string;
}