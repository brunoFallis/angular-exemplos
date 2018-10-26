import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipopessoaRoutingModule } from './tipopessoa-routing.module';
import { TipopessoaFormComponent } from './formPessoa/tipopessoa-form.component';
import { TipopessoaListComponent } from './listPessoa/tipopessoa-list.component';

@NgModule({
  imports: [
    CommonModule,
    TipopessoaRoutingModule
  ],
  declarations: [TipopessoaFormComponent, TipopessoaListComponent]
})
export class TipopessoaModule { }
