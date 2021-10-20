import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  credentials = {
    email: 'teste4@gmail.com',
    password: '123'
  };

  constructor(private auth:AuthService, private alertCtrl: AlertController, private router: Router) { }

  ngOnInit() {
  }

  login(email: string, password: string){
    this.credentials = { 
      email: email,
      password: password
    };
    this.auth.login(this.credentials).subscribe(async res => {
      if(res){
        this.router.navigateByUrl('/tabs');
      } 

      else{
        const alert = await this.alertCtrl.create({
          header:'Login Falhou',
          message: 'Email ou Senha errado!',
          buttons: ['OK']
        });
        await alert.present();
      }
    });
  }

}
