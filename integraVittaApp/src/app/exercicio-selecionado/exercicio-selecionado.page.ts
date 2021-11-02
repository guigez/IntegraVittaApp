import { Component, OnInit } from '@angular/core';
import { Exercicio } from '../models/exercicios';

@Component({
  selector: 'app-exercicio-selecionado',
  templateUrl: './exercicio-selecionado.page.html',
  styleUrls: ['./exercicio-selecionado.page.scss'],
})
export class ExercicioSelecionadoPage implements OnInit {
  exercicio : Exercicio;
  constructor() { }

  ngOnInit() {
    this.exercicio = JSON.parse(localStorage.getItem('ex-sel'))
    console.log(this.exercicio);
  }

}
