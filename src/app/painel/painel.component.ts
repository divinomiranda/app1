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
  public resposta: string

  public rodada: number = 0
  public rodadaFrase: Frase

  public progresso: number = 0


  constructor() { 
    this.rodadaFrase = this.frases[this.rodada]
    console.log(this.rodadaFrase);
  }

  ngOnInit() {
  }

  atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value;
    //console.log( this.resposta);
  }

  verificarResposta(): void {
    //console.log('Verificar resposta: ', this.resposta)
    if(this.rodadaFrase.frasePtBr == this.resposta){
      this.rodada++
      this.progresso = this.progresso + (100/this.frases.length)
      alert('A tradução está correta')

      //console.log(this.rodada)
      this.rodadaFrase = this.frases[this.rodada]
      console.log(this.rodadaFrase)
    } else {
      alert('A tradução está errada')
    }
    
    
  }
}
