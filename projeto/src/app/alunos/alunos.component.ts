import { Component, OnInit } from '@angular/core';
import { AlunosServiceService } from '../alunos-service.service'
import { aluno } from '../alunos/aluno.model'

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {
  a: aluno;

  constructor(private alunosServiceService: AlunosServiceService) { 
    
  }

  ngOnInit(): void {
    this.a = this.alunosServiceService.get();
    console.log (this.a.RA);
    console.log (this.a.nome);
    console.log (this.a.idade);
  }

}
