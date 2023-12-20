import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaServicosComponent } from './lista-servicos.component';

describe('ListaServicosComponent', () => {
  let component: ListaServicosComponent;
  let fixture: ComponentFixture<ListaServicosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaServicosComponent]
    });
    fixture = TestBed.createComponent(ListaServicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
