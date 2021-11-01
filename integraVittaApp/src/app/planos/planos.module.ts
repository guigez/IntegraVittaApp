import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PlanosPage } from './planos.page';

import { PlanosPageRoutingModule } from './planos-routing.module';
import { RestService } from '../services/rest.service';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    PlanosPageRoutingModule
  ],
  declarations: [PlanosPage],
  providers: [
    RestService,
  ]
})
export class PlanosPageModule {}
