import { Exercicio } from "./exercicios";

export class Plano {
    _id?: string;
    nome: String;
    descricao: String;
    exercicios: Exercicio[];

    constructor() {
      this.nome = '';
      this.descricao ='';
      this.exercicios = []
    }
  }