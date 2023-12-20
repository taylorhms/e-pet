import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPedidosComponent } from './form-pedidos.component';

describe('FormPedidosComponent', () => {
  let component: FormPedidosComponent;
  let fixture: ComponentFixture<FormPedidosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormPedidosComponent]
    });
    fixture = TestBed.createComponent(FormPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
