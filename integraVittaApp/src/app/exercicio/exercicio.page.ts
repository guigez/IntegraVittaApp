import { Component, OnInit } from '@angular/core';
import { Plano } from '../models/plano';

@Component({
  selector: 'app-exercicio',
  templateUrl: './exercicio.page.html',
  styleUrls: ['./exercicio.page.scss'],
})
export class ExercicioPage implements OnInit {
  plano: Plano;
  constructor() { }

  ngOnInit() {
    this.plano = new Plano();
    this.plano.nome = localStorage.getItem('nom')
    this.plano.descricao = localStorage.getItem('des')
    this.plano.exercicios = JSON.parse(localStorage.getItem('ex'));
    console.log(this.plano)
  }


  abrirExercicio(exercicio): void {
    localStorage.setItem('ex-sel', JSON.stringify(exercicio))
  }
}
