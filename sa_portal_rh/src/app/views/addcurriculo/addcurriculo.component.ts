import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Curriculo } from 'src/app/models/curriculo.model';
import { CurriculoService } from 'src/app/services/curriculo.service';

@Component({
  selector: 'app-add-curriculo',
  templateUrl: './addcurriculo.component.html',
  styleUrls: ['./addcurriculo.component.scss']
})
export class AddCurriculoComponent {
  curriculo: any = {
    nome: '',
    email: '',
    contato: '',
    idade: null,
    fotoPerfil: '',
    interesses: '',
    experiencia: '',
    qualificacoes: '',
    idiomas: '',
    formacao: '',
    habilidades: ''
  };

   constructor(
    private router: Router,
    private _curriculoService: CurriculoService
  ) {}

  cadastrarCurriculo() {
    const { cpf, nome, idade, email, contato } = this.curriculo;

    // Validações
    if (!cpf || !nome || !idade || !email || !contato) {
      alert('Preencha todos os campos obrigatórios.');
      return;
    }

    if (idade < 18) {
      alert('A idade mínima para cadastro é 18 anos.');
      return;
    }

    const interessesArr = (this.curriculo.interesses || '').toString().split(',').map((i: string) => i.trim());
    if (interessesArr.some((i: string) => i === '')) {
      alert('Interesses não podem estar vazios.');
      return;
    }

    // Conversões
    this.curriculo.interesses = interessesArr;
    this.curriculo.formacao = this.splitAndTrim(this.curriculo.formacao);
    this.curriculo.qualificacoes = this.splitAndTrim(this.curriculo.qualificacoes);
    this.curriculo.habilidades = this.splitAndTrim(this.curriculo.habilidades);
    this.curriculo.idiomas = this.splitAndTrim(this.curriculo.idiomas);
    this.curriculo.fotoPerfil = 'foto-perfil';

    // Chamada ao serviço
    this._curriculoService.cadastrarCurriculo(this.curriculo).subscribe(
      () => {
        this.curriculo = new Curriculo(0, '', '', 0, '', '', [], '', '', [], [], [], [], '');
        alert('Currículo cadastrado com sucesso');
        this.router.navigate(['/curriculos']);
      },
      (err) => {
        console.error('Exception: ', err);
        alert('Ocorreu um erro ao cadastrar o currículo.');
      }
    );
  }

  onSubmit() {
    this.cadastrarCurriculo();
  }

  private splitAndTrim(value: any): string[] {
    return (value || '').toString().split(',').map((v: string) => v.trim());
  }
}
