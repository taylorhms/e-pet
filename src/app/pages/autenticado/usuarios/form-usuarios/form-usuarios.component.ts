import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Departments } from 'src/app/models/department';
import { Roles } from 'src/app/models/role';
import { testData } from 'src/app/models/test-data';
import { DepartmentService } from 'src/app/services/department.service';
import { RoleService } from 'src/app/services/role.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-form-usuarios',
  templateUrl: './form-usuarios.component.html',
  styleUrls: ['./form-usuarios.component.css']
})
export class FormUsuariosComponent implements OnInit {

  roles: Roles = [];
  departments: Departments = [];

  id?: number;
  isAlteracao = false;

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
  ];

  constructor (
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private userService: UserService,
    private roleService: RoleService,
    private departmentService: DepartmentService,
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
    this.roleService.findAll().subscribe(res => this.roles = res);
    this.departmentService.findAll().subscribe(res => this.departments = res);
  }

  carregarDados() {
    this.userService.findById(this.id!).subscribe({
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
        this.userService.update(this.id!, this.form.value) :
        this.userService.save(this.form.value);

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
    this.router.navigateByUrl('/app/usuarios');
  }
}
