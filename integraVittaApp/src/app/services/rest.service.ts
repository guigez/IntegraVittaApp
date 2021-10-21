
import { Injectable } from  '@angular/core';

import { HttpClient, HttpHeaders } from  '@angular/common/http';
import { from, Observable, of } from 'rxjs';

import {Plano} from '../models/plano'
import { Storage } from '@ionic/storage';
import {AuthService} from './auth.service'
import { FactoryTarget } from '@angular/compiler';

const TOKEN_KEY = 'jwt-token';

@Injectable({ providedIn: 'root' })
export class RestService {


  private url: string = 'http://localhost:3001/api/';
  private options : any = {}


   constructor(private storage: Storage, private http: HttpClient, private authService: AuthService) {

  }

  async getPlanoFiltro(search : String) {
    let token = "erro";
    await this.storage.get(TOKEN_KEY).then(res => {token = JSON.parse(res).token})

    this.options = {'Authorization': 'Bearer ' + token}


    return this.http.get<Plano[]>(this.url + 'treino/findByNomeDescricao?search=' + search, {headers: this.options});
  }

}
