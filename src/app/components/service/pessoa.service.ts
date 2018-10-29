import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pessoa } from '../model/pessoa';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor(private http: HttpClient) { }

  getPessoas(): Observable<Pessoa[]>{
    return this.http.get<Pessoa[]>('http://localhost:8080/test');
  }

  inserePessoa(pessoa: Pessoa): Observable<Pessoa> {
    console.log(pessoa);
    //APLICADO COM E SEM JSON STRINGIFY
    return this.http.post<Pessoa>('http://localhost:8080/test', pessoa, httpOptions);
  }

}
