import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipoLivroRoutingModule } from './tipo-livro-routing.module';
import { TipoLivroListComponent } from './list/tipo-livro-list.component';
import { TipoLivroFormComponent } from './form/tipo-livro-form.component';


@NgModule({
  imports: [
    CommonModule,
    TipoLivroRoutingModule
  ],
  declarations: [TipoLivroListComponent, TipoLivroFormComponent]
})
export class TipoLivroModule { }
