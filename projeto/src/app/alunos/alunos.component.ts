import { Component, OnInit } from '@angular/core';
import { AlunosServiceService } from '../alunos-service.service'
import { aluno } from '../alunos/aluno.model'

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  constructor(private alunosServiceService: AlunosServiceService) { }

  ngOnInit(): void {
    var a: aluno = this.alunosServiceService.get();
    
  }

}
