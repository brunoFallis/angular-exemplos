import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TipopessoaListComponent } from './listPessoa/tipopessoa-list.component';
import { TipopessoaFormComponent } from './formPessoa/tipopessoa-form.component';

const routes: Routes = [
  {path: '', component: TipopessoaListComponent},
  {path: 'insert', component: TipopessoaFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipopessoaRoutingModule { }
