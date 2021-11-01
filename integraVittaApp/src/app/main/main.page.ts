import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PhotoPage } from '../photo/photo.page';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss']
})
export class MainPage implements OnInit{

  constructor(public modalController: ModalController) {

  }
  ngOnInit(){

  }

  async presentModal() {
    const modal = await this.modalController.create({
      component:  PhotoPage,
      cssClass: 'my-custom-class',

    });
    return await modal.present();
  }

 
  
}
