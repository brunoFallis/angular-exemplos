import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../../model/pessoa';
import { PessoaService } from '../../service/pessoa.service';

@Component({
  selector: 'app-tipopessoa-list',
  templateUrl: './tipopessoa-list.component.html',
  styleUrls: ['./tipopessoa-list.component.css']
})
export class TipopessoaListComponent implements OnInit {

  pessoas: Array<Pessoa>;

  constructor(private service: PessoaService) { }

  ngOnInit() {
    this.service.getPessoas().subscribe(pessoas => this.pessoas = pessoas);
  }

}
