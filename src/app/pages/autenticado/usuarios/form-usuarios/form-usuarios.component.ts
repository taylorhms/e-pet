import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { testData } from 'src/app/models/test-data';

@Component({
  selector: 'app-form-usuarios',
  templateUrl: './form-usuarios.component.html',
  styleUrls: ['./form-usuarios.component.css']
})
export class FormUsuariosComponent {

  roles = testData.roles;
  departments = testData.departments;

  form = this.formBuilder.group<any>({
    name: [null, Validators.required],
    email: [null, [Validators.required, Validators.email]],
    login: [null, Validators.required],
    contact: [null, Validators.required],
    role: [null, Validators.required],
    password: [null, Validators.required],
    department: [null, Validators.required]
  });

  erros = [
    { error: 'required', message: 'Campo Obrigarório' },
    { error: 'email', message: 'E-mail inválido' }
  ]

  constructor (
    private formBuilder: FormBuilder,
    private messageService: MessageService
  ) { }

  enviar() {
    console.log(this.form.value);
    Object.keys(this.form.controls).forEach(ctrl => this.form.get(ctrl)?.markAsDirty());
    if (this.form.valid)
    this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Salvo com sucesso!' });
    else
    this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Preencha tudinho!' });
  }
}
