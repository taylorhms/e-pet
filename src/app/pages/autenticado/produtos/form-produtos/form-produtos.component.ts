import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-form-produtos',
  templateUrl: './form-produtos.component.html',
  styleUrls: ['./form-produtos.component.css']
})
export class FormProdutosComponent {

  id?: number;
  isAlteracao = false;

  form = this.formBuilder.group<any>({
    code: [null, Validators.required],
    name: [null, Validators.required],
    price: [null, [Validators.required, Validators.min(0)]],
    quantity: [null, Validators.required]
  });

  erros = [
    { error: 'required', message: 'Campo Obrigarório' },
    { error: 'min', message: 'Valor inválido' }
  ];

  constructor (
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private productService: ProductService,
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
  }

  carregarDados() {
    this.productService.findById(this.id!).subscribe({
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
        this.productService.update(this.id!, this.form.value) :
        this.productService.save(this.form.value);

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
    this.router.navigateByUrl('/app/produtos');
  }
}
