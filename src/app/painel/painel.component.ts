import { Frase } from './../shared/frase.model';
import { FRASES } from './frases-mock'
import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';

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

  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter()

  constructor() { 
    this.atualizaRodada()
  }

  ngOnInit() {
  }

  ngOnDestroy() {
   console.log('Componente painel foi destruido');
    
  }

  atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value;
  }

  verificarResposta(): void {
    if(this.rodadaFrase.frasePtBr == this.resposta){

      this.rodada++
      this.progresso = this.progresso + (100/this.frases.length)
      
      if (this.rodada === 4) {
        this.encerrarJogo.emit('Vitória')
      }

      this.atualizaRodada()
      
    } else {
      //diminuir a variavel tentativas
      this.tentativas--
      
      if(this.tentativas === -1){
        this.encerrarJogo.emit('Derrota')
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
