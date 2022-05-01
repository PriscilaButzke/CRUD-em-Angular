import { Injectable } from '@angular/core';
import { curso } from './curso';
import { CursosComponent } from './cursos.component';

//acesso total ao serviço, para restringir basta trocar o r0ot pelo nome da pasta que tera acesso
@Injectable({
  providedIn: 'root'
})

//classe
export class ServiçosService {

  constructor() { }

  //grud
  //vetor 
  
  public vetorCursos:curso[] = [
    new curso("Angular" ,800, "Desenvolvimento"),
    new curso("Javascript" ,600, "Desenvolvimento"),
    new curso("HTML e CSS" ,400, "Desenvolvimento"),
  ];

  //cadastro de cursos
  public cadastrar(c:curso){
    this.vetorCursos.push(c);
    //push: cadastra a informação no vetor
  }

  //listar
  public listar(){
    return this.vetorCursos;
  }

  //alteração de curso
  public alterar(id:number, c:curso){
    this.vetorCursos[id]=c;
  }

  //exclusao
  public excluir(id:number){
    //O método splice() altera o conteúdo de uma lista, 
    //adicionando novos elementos enquanto remove elementos antigos.
    //neste caso, apenas remove
    this.vetorCursos.splice(id,1);// esta pegando o id do elemento e incluindo 1 elemento
  }
}
