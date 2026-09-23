export interface Videojoc {
  id: number;
  nom: string;
  plataforma: string;
  preu: number;
  disponible: boolean;
  valoracio?: number; // opcional
}