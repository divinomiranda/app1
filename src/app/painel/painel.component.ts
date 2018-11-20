import { Frase } from './../shared/frase.model';
import { FRASES } from './frases-mock'
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Frase[] = FRASES;
  public instrucao: string = 'Traduza a frase:'; 
  constructor() { 
    console.log(this.frases);
  }

  ngOnInit() {
  }

  atualizaResposta(): void {
    console.log('teste')
  }
}
