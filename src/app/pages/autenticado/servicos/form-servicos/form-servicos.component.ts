import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Users } from 'src/app/models/user';
import { ServiceService } from 'src/app/services/service.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-form-servicos',
  templateUrl: './form-servicos.component.html',
  styleUrls: ['./form-servicos.component.css']
})
export class FormServicosComponent {

  users: Users = [];

  id?: number;
  isAlteracao = false;

  form = this.formBuilder.group<any>({
    name: [null, Validators.required],
    date: [null, Validators.required],
    user: [null, Validators.required]
  });

  erros = [
    { error: 'required', message: 'Campo Obrigarório' },
    { error: 'email', message: 'E-mail inválido' }
  ];

  constructor (
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private serviceService: ServiceService,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
      this.activatedRoute.paramMap.subscribe(params => {
        const id = params.get('id');

        if (id) {
          this.id = +id;
          this.isAlteracao = true;
          this.carregarDados();
        }
      });

      this.carregarDropdowns();
  }

  carregarDropdowns() {
    this.userService.findAllPage().subscribe(res => this.users = res.content);
  }

  carregarDados() {
    this.serviceService.findById(this.id!).subscribe({
      next: res => {
        this.form.patchValue(res as object);
      },
      error: res => {
        this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Não foi possível carregar os dados.' });
      }
    });
  }

  enviar() {
    if (this.form.invalid) {
      Object.keys(this.form.controls).forEach(ctrl => this.form.get(ctrl)?.markAsDirty());
      this.messageService.add({ severity: 'warn', summary: 'Atenção!', detail: 'Você precisa preencher todos os campos obrigatórios!' });
      return;
    }

    const request = this.isAlteracao ?
        this.serviceService.update(this.id!, this.form.value) :
        this.serviceService.save(this.form.value);

    request.subscribe({
      next: () => {
        this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Salvo com sucesso!' });
        this.voltar();
      },
      error:() => {
        this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Ocorreu um erro.' });
      }
    });
  }

  voltar() {
    this.router.navigateByUrl('/app/servicos');
  }
}
