import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiFer } from '../pages/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiferiService {

  constructor(private HttpClient:HttpClient) { }

  GetToptHeadLines(){
    return this.HttpClient.get<ApiFer>('https://api.victorsanmartin.com/feriados/en.json');
  }
}
