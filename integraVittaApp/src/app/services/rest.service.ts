
import { Injectable } from  '@angular/core';

import { HttpClient, HttpHeaders } from  '@angular/common/http';
import { from, Observable, of } from 'rxjs';

import {Plano} from '../models/plano'
import { Storage } from '@ionic/storage';
import {AuthService} from './auth.service'


const TOKEN_KEY = 'jwt-token';

@Injectable({ providedIn: 'root' })
export class RestService {


  private url: string = 'http://localhost:3001/api/';
  private options : any = {}


   constructor(private storage: Storage, private http: HttpClient, private authService: AuthService) {

  }

  async getPlano() {
    let token = "erro";
    await this.storage.get(TOKEN_KEY).then(res => {token = JSON.parse(res).token})

    this.options = {'Authorization': 'Bearer ' + token}


    return this.http.get<any>(this.url + 'aluno/getPlanos', {headers: this.options});
  }

  async getUser(){
    let token = "erro";
    await this.storage.get(TOKEN_KEY).then(res => {token = JSON.parse(res).token})

    this.options = {'Authorization': 'Bearer ' + token}


    return this.http.get<any>(this.url + 'aluno/getuser', {headers: this.options});
  }

  async listarPagamentos(){
    let token = "erro";
    await this.storage.get(TOKEN_KEY).then(res => {token = JSON.parse(res).token})

    this.options = {'Authorization': 'Bearer ' + token}


    return this.http.get<any>(this.url + 'pagamento/listarPagamentos', {headers: this.options});
  }
}
