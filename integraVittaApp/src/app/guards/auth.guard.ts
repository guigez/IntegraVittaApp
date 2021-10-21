import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators'
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router, private alertCtrl: AlertController){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.auth.user.pipe(
        take(1),

        map(user => {
          console.log('in can activate:', user);
          if(!user){
            this.alertCtrl.create({
              header: "Unathorized",
              message: "Você não tem acessa a esta pagina",
              buttons:['OK']
            }).then(alert => alert.present());
            this.router.navigateByUrl('/');
            return false;
          } else {
             return true;
          }
        })

      )
    //return true;
  }
  
}
