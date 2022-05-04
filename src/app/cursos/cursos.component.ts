import { Component, OnInit } from '@angular/core';
import { curso } from './curso';
import { ServiçosService } from './curso.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  //atributos

  //instanciando objetos
  vetorCursos!:curso[];//pega a classe curso
  curso!:curso;
  id!:number;

  constructor(private servico:ServiçosService) { }

  //inicicializador
  ngOnInit(): void {

    // instaciando um obejoto curso, assim ao escrever as informações nas inputs, vai gravar no 
    //objeto e gravar separamente em nome, valor e area.
    this.id = -1;
    this.curso = new curso("", 0, "");
    this.vetorCursos = this.servico.listar();
    
  }
  cadastrar(){
    this.servico.cadastrar(this.curso);
    this.curso = new curso("", 0, "");
  }

  excluir(id:number){
    this.servico.excluir(id);
    this.id = -1;
  }
  editar(id:number){
    this.id = id;

    this.curso = new curso(
      this.vetorCursos[id].nomeCurso,
      this.vetorCursos[id].valor,
      this.vetorCursos[id].areaCurso
    );
  }
  atualizar(){
    this.servico.alterar(this.id, this.curso);
    this.curso = new curso("", 0, "");
    this.id = -1;
  }
}
