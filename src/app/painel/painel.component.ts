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
  public resposta: string =''

  public rodada: number = 0
  public rodadaFrase: Frase

  public progresso: number = 0

  public tentativas: number = 3


  constructor() { 
    this.atualizaRodada()
  }

  ngOnInit() {
  }

  atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value;
  }

  verificarResposta(): void {
    if(this.rodadaFrase.frasePtBr == this.resposta){
      this.rodada++
      this.progresso = this.progresso + (100/this.frases.length)
      alert('A tradução está correta')

      this.atualizaRodada()
      
    } else {
      alert('A tradução está errada')
      //diminuir a variavel tentativas
      this.tentativas--
      if(this.tentativas === -1){
        alert('Você perdeu todas as tentativas')
      }
    }    
    
  }

  public atualizaRodada(): void {
    //define a frase da rodada
    this.rodadaFrase = this.frases[this.rodada]
    //limpar a resposta
    this.resposta = ''
  }
}
