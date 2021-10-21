import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { BehaviorSubject, from, Observable, of, Subject } from 'rxjs';
import { take, map, switchMap } from 'rxjs/operators'

const HELPER = new JwtHelperService();
const TOKEN_KEY = 'jwt-token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: Observable<any>;
  private userData = new BehaviorSubject(null);

  constructor(private storage: Storage, private http: HttpClient, private plt: Platform, private router: Router) { 
    this.loadStorageToken();
   }

  loadStorageToken(){
    let platformObs = from(this.plt.ready());
    this.user = platformObs.pipe(
      switchMap(() => {
        return from(this.storage.get(TOKEN_KEY))
      }),

      map(token => {
        if(token) {
          let decoded = HELPER.decodeToken(token);
          this.userData.next(decoded);
          return true;
        } else return null;
      })
    );
  }

  login(credentials: {email: string, password: string}): Observable<any> {
    if(credentials.email == 'wilson@email.com' && credentials.password == '123'){
      return of('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c');
    }

    //request para api para verificar o usuario
    return this.http.post('http://localhost:3001/api/loginAlunos', credentials).pipe(
      take(1),
      map(res => {
        return JSON.stringify(res);
      }),

      switchMap(token => {
        let decoded = HELPER.decodeToken(token);
        
        this.userData.next(decoded);

        let storageObs = from(this.storage.set(TOKEN_KEY, token));
       
        return storageObs;

      })
    );
  }

  getUser(){
    return this.userData.getValue();
  }

  logout(){
    this.storage.remove(TOKEN_KEY).then(() => {
      this.router.navigateByUrl('/');
      this.userData.next(null);
    })
  }


}



