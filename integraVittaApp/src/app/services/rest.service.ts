
import { Injectable } from  '@angular/core';

import { HttpClient } from  '@angular/common/http';
import { Observable } from 'rxjs';

import {Plano} from '../models/plano'


@Injectable({ providedIn: 'root' })
export class RestService {


  private url: string = 'http://localhost:3001/api/';
  private httpOptions: any = {ContentType : 'application/json'};

  constructor(private http: HttpClient) { }

  getPlano(id : string) : Observable<Plano[]> {
    return this.http.get<Plano[]>(this.url + 'treino/findOneById/' + id)
  }

  getPlanoFiltro(search : String) : Observable<Plano[]> {
    return this.http.get<Plano[]>(this.url + 'treino/findByNomeDescricao?search=' + search);
  }

  atualizarPlano(plano: Plano, id?: string) : Observable<any> {
    return this.http.put<any>(this.url + 'treino/update/' + id, plano)
  }
}
