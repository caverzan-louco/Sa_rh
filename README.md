# Sa_rh

# Plataforma RH

**Descrição**  
Protótipo funcional de uma aplicação SPA (Single Page Application) com Angular 16+, simulando um sistema de recrutamento. Inclui cadastros de usuários e currículos, login, autorização com perfis (Admin e Usuário Comum), além de CRUD de vagas com interface responsiva.



##  Tecnologias Utilizadas
- **Front-end**: Angular 16+, SCSS customizado, Reactive Forms  
- **Mock Back-end**: json‑server (db.json)  
- **Autenticação / Autorização**: localStorage, rotas protegidas com guardas (AuthGuard, AdminGuard)  
- **UI/UX**: protótipos em Figma (ou similar) + wireframes (como os ilustrados acima)



##  Funcionalidades

### Usuário Comum
- Registro e login
- Preenchimento e envio de currículo
- Visualização de vagas disponíveis

### Administrador (Admin)
- Login
- CRUD de vagas (criar, editar, excluir)
- Visualização dos currículos enviados

### Público (não autenticado)
- Visualização pública da lista de vagas


## Equipe de Desenvolvimento
- 4 Integrantes
- 24 Horas trabalhadas ao todo


##  Estrutura de Dados (db.json)

### json
{
  "usuarios": [
    {
      "id": 1,
      "email": "admin@rh.com",
      "senha": "admin123",
      "tipo": "admin"
    }
  ],
  "curriculos": [
    {
      "id": "1",
      "nome": "Carlão",
      "idade": "77",
      "formacao": "Ciência da Computação",
      "descricao": "Especialista em BackEnd e bancos de dados relacionais."
    }
  ],
  "vagas": [
    {
      "id": "1",
      "nome": "Desenvolver FrontEnd Jr",
      "foto": "foto1.jpg",
      "descricao": "Trabalhar com HTML, CSS e JS",
      "salario": 4000
    }
  ]
}

## Diagrama Visual

          Sistema
             ^
             |
             |
     +------------------+
     |                  |
 Usuário           Administrador
 Comum                  |
     |                  |
     |                  |
     v                  v
 Registrar conta    Efetuar login
     |                  |
     v                  v
 Efetuar login      Cadastrar vaga
     |                  |
     v                  v
Cadastrar currículo Editar vaga
     |                  |
     v                  v
Visualizar vagas    Excluir vaga
     |                  |
     v                  v
Visualizar vagas    Visualizar currículos
(público)           recebidos
