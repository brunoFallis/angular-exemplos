import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipopessoaListComponent } from './tipopessoa-list.component';

describe('TipopessoaListComponent', () => {
  let component: TipopessoaListComponent;
  let fixture: ComponentFixture<TipopessoaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipopessoaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipopessoaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
