import { Injectable } from '@angular/core';
import { aluno } from './alunos/aluno.model'


@Injectable({
  providedIn: 'root'
})

export class AlunosServiceService {

  usuario: aluno = {
    nome: "Joao Vitor",
    idade: 21,
    RA: 117116519
  }

  constructor() { }
  
  get () {
    return this.usuario;
  }
}
