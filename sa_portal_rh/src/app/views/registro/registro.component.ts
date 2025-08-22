import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

    registerForm!: FormGroup;
  
    constructor(
      private authService: AuthService,
      private router: Router,
      private fb: FormBuilder,
    ) {}
  
    ngOnInit() {
      this.registerForm = this.fb.group({
        nome: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        senha: ['', [Validators.required]]
      });
    }


onRegistrar() {
  if (this.registerForm.invalid) return;

  const user = {
    ...this.registerForm.value,
    tipo: 'cliente'
  };

  this.authService.registrar(user).subscribe({
    next: success => {
      if (success) {
        this.router.navigate(['']);
      } else {
        alert('Registro falhou. Verifique os dados.');
      }
    },
    error: err => {
      alert('Erro durante registro: ' + err.message);
    }
  });
}

}
