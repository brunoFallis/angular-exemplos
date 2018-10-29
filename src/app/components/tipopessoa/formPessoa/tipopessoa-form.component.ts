import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Pessoa } from '../../model/pessoa';
import { PessoaService } from '../../service/pessoa.service';

@Component({
  selector: 'app-tipopessoa-form',
  templateUrl: './tipopessoa-form.component.html',
  styleUrls: ['./tipopessoa-form.component.css']
})
export class TipopessoaFormComponent implements OnInit {

  personForm = new FormGroup({
    nome: new FormControl(''),
    email: new FormControl(''),
    cpf: new FormControl(''),
    enderecoDTO: new FormGroup({
      cep: new FormControl(''),
      logradouro: new FormControl(''),
      numero: new FormControl(''),
      complemento: new FormControl(''),
      bairro: new FormControl(''),
      cidade: new FormControl(''),
      uf: new FormControl('')
    })
  });

  pessoa: Pessoa;

  constructor(private service: PessoaService) { }

  ngOnInit() {
    this.pessoa = new Pessoa();
  }

  onSubmit() {
    this.pessoa = this.personForm.value;
    this.service.inserePessoa(this.pessoa).subscribe();
  }

}
