import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appTableHeader]'
})
export class TableHeaderDirective {

  constructor(public templateRef: TemplateRef<any>) { }

}
