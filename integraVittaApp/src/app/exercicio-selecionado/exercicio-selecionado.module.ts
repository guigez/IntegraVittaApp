import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExercicioSelecionadoPageRoutingModule } from './exercicio-selecionado-routing.module';

import { ExercicioSelecionadoPage } from './exercicio-selecionado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExercicioSelecionadoPageRoutingModule
  ],
  declarations: [ExercicioSelecionadoPage]
})
export class ExercicioSelecionadoPageModule {}
