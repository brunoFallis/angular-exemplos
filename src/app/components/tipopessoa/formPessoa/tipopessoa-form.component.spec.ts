import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipopessoaFormComponent } from './tipopessoa-form.component';

describe('TipopessoaFormComponent', () => {
  let component: TipopessoaFormComponent;
  let fixture: ComponentFixture<TipopessoaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipopessoaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipopessoaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
