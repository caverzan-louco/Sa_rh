# RH Connect – Sistema de Gestão de Vagas e Currículos

**RH Connect** é uma aplicação web Single Page Application (SPA) desenvolvida com Angular e json-server, projetada para simular um sistema de recrutamento com authenticação de usuários e autorização baseda em perfis. Esse projeto tem como objetivo proporcionar uma experiência prática em Angular, abordando desde a prototipação até a implementação de funcionalidades completas com boas práticas de desenvovimento.


## Objetivo Geral

Desenvolver uma aplicação Angular funcional que simule um sistema interno de RH com cadastro de vagas e envio de currículos, utilizando authenticação, autorização por perfil de usuário (Admin e Usuário Comum), e estruturação de componentes reutilizaveis.


## Objetivos Específicos

- Compreender e aplicar os conceitos de **autenticação** e **autorização**.
- Implementar **guardas de rota** para restringir acessos com base no tipo de usuário.
- Utilizar **Formulários Reativos (Reactive Forms)** com validação.
- Simular uma API REST utilizando o **json-server**.
- Criar **componentes reutilizáveis** e manter a **organização modular** do código.
- Aplicar **estilização SCSS customizada**, com layout responsivo.
- Desenvolver uma aplicação completa a partir de um **briefing realista**.


## Escopo Funcional

### Usuário Comum

- Cadastro de conta (registro)
- Login
- Cadastro de currículo
- Visualização de vagas públicas


### Administrador

- Login
- Cadastro, edição e exclusão de vagas
- Visualização de currículos recebidos


## Informações do Projeto

- Cliente ficticio: RH Connect
- Tempo de desenvolvimento: 32 horas totais
- Público alvo: Candidatos usuários e administradores internos


## Segurança e Acesso

- Autenticação via e-mail e senha
- Armazenamento da sessão no localStorage
- Autorização de rotas com **Guards personalizados**:
  - AuthGuard: Verifica se o usuário está autenticado
  - AdminGuard: Verifica se o tipo do usuário é "admin"
  - Rota protegida por tipo com canActivate
