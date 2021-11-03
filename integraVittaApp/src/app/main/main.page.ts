import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PhotoPage } from '../photo/photo.page';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss']
})
export class MainPage implements OnInit{

  public user : any = { nome : "",
                        email: "",
                        photo : ""};

  constructor(public modalController: ModalController, private rest:RestService) {

  }
  ngOnInit(){
    this.rest.getUser().then(data => data.subscribe(res => {
      this.user = res.user
    }));

  }

  async presentModal() {
    const modal = await this.modalController.create({
      component:  PhotoPage,
      cssClass: 'my-custom-class',

    });

    modal.onDidDismiss()
      .then((res) => {
        this.user.photo = res.data.photo
    });

    return await modal.present();

    
  }

  

 
  
}
