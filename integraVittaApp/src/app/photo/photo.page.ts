import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.page.html',
  styleUrls: ['./photo.page.scss'],
})
export class PhotoPage implements OnInit {
  photo : string;
  haschanged: boolean = false;


  constructor(public photoService: PhotoService, public modalController: ModalController) { }

  ngOnInit() {

  }
  async addPhoto() {
    await this.photoService.addPhoto().then(data => this.photo = data);
    this.haschanged = true;
  }

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  savePhoto(){
    this.photoService.savePhoto(this.photo).then(data => data.subscribe(res => {
      if(res.status === 'Sucesso')
        this.dismiss();
      else
        alert("Error")
    }))
  }
  
}


