import { Component, OnInit } from '@angular/core';
import { ApiferiService } from 'src/app/servicios/apiferi.service';
import { Data } from '../interfaces/interfaces';

@Component({
  selector: 'app-feriados',
  templateUrl: './feriados.page.html',
  styleUrls: ['./feriados.page.scss'],
})
export class FeriadosPage implements OnInit {
  articles:Data[]=[];

  constructor(private apiFer: ApiferiService) { }

  ngOnInit() {
    this.apiFer.GetToptHeadLines().subscribe(resp =>{
    console.log(resp);
    this.articles.push(...resp.data);
  })
  }
}
