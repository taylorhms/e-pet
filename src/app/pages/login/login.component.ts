import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form = this.formBuilder.group<any>({
    username: [null, Validators.required],
    password: [null, Validators.required]
  });

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private messageService: MessageService,
    private router: Router
  ) { }

  login() {
    if (this.form.invalid) {
      Object.keys(this.form.controls).forEach(ctrl => this.form.get(ctrl)?.markAsDirty());
      this.messageService.add({ severity: 'warn', summary: 'Atenção!', detail: 'Preencha todos os campos!' });
      return;
    }

    const username = this.form.controls['username'].value as string;
    const password = this.form.controls['password'].value as string;

    this.userService.login(username, password).subscribe({
      next: () => {
        window.localStorage.setItem(environment.userStorageKey, username);
        this.router.navigateByUrl('/app/home');
      },
      error: e => {
        this.messageService.add({ severity: 'error', summary: 'Erro', detail: JSON.parse(e.error).message });
      }
    });
  }

  semAcesso() {
    this.messageService.add({ severity: 'info', summary: 'Sem acesso?', detail: 'Solicite acesso ao administrador do sistema.' });
  }
}
