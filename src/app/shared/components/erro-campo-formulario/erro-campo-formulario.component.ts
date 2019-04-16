import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-erro-campo-formulario',
  template: `
    <p class="text-danger">
      {{ mensagemErro }}
    </p>
  `,
  styleUrls: ['./erro-campo-formulario.component.css']
})
export class ErroCampoFormularioComponent {

  @Input('form-control') formControl: FormControl

  constructor() { }

  public get mensagemErro(): string | null {

    if (this.verificaSeExisteMensagemErro())
      return this.exibirMensagem()
    else 
      return null
  }

  private verificaSeExisteMensagemErro(): boolean {

    return this.formControl.invalid && this.formControl.touched
  }

  private exibirMensagem(): string | null {

    if (this.formControl.errors.required)

      return 'Dado Obrigatório!'

    if (this.formControl.errors.email)

      return 'Email em Formato Inválido!'
    else
      if (this.formControl.errors.minlength) {

        const requiredLength = this.formControl.errors.minlength.requiredLength
        return `Deve conter no mínimo ${requiredLength} caracteres!`
    }
    else
      if (this.formControl.errors.maxlength) {

        const requiredLength = this.formControl.errors.maxlength.requiredLength
        return `Deve conter no máximo ${requiredLength} caracteres!`
    }
  }
}
