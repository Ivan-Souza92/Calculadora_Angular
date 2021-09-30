import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  n1: string = '';
  n2: string = '' ;
  result:number = 0 ;
  operador :string = '';

  constructor() { }

  ngOnInit(): void {
  }

  Sinal(op:any){     
    if(op.target.value == 'soma'){
       this.operador = "soma";
    }
    if(op.target.value == 'subtracao'){
      this.operador = "subtracao";
    }
    if(op.target.value == 'multiplicacao'){
     this.operador = "multiplicacao"
    }
    if(op.target.value == 'divisao'){
      this.operador = "divisao";
    }
  }

  Operacao(){
    if(this.operador == "soma"){
      if(parseFloat(this.n1) && parseFloat(this.n2)){
        this.result = parseFloat(this.n1) + parseFloat(this.n2);
      } 
    }
    if(this.operador == "subtracao"){
      if(parseFloat(this.n1) && parseFloat(this.n2)){
        this.result = parseFloat(this.n1) - parseFloat(this.n2);   
      }
    }
    if(this.operador == "multiplicacao"){
      if(parseFloat(this.n1) && parseFloat(this.n2)){
        this.result = parseFloat(this.n1) * parseFloat(this.n2);
      }
    }
    if(this.operador == "divisao"){
      if(parseFloat(this.n1) && parseFloat(this.n2)){
        this.result = parseFloat(this.n1) / parseFloat(this.n2);
      }
    }
  }
  limpar(){  
    this.n1 = '';
    this.n2 = '';
    this.result = 0;
  }

}
