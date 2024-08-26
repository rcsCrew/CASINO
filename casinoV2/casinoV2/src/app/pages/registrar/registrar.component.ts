import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent {

  @ViewChild('eyeIcon') eyeIcon!: ElementRef;
  @ViewChild('eyeIconSlash') eyeIconSlash!: ElementRef;
  @ViewChild('passwordInput') passwordInput!: ElementRef;

  // Função para alternar a visibilidade da senha
  togglePasswordVisibility() {
    const inputType = this.passwordInput.nativeElement.type;

    // Alterna o tipo de input entre 'password' e 'text'
    this.passwordInput.nativeElement.type = inputType === 'password' ? 'text' : 'password';

    // Alterna a exibição dos ícones
    this.eyeIcon.nativeElement.style.display = inputType === 'password' ? 'none' : 'inline';
    this.eyeIconSlash.nativeElement.style.display = inputType === 'password' ? 'inline' : 'none';
  }
}
