import { Plano } from "./plano";

export interface Aluno {
    _id?: string;
    nome: String;
    cpf?: Number;
    telefone: String;
    email: String;
    plano?: Plano;
  }