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
    this.vetorCursos = this.servico.listar();
    
  }

}
