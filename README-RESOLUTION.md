<div align="center">
  <img alt="Desafio Front-end" title="Desafio Front-end" src="https://garantia.inmediam.com.br//assets/logoInmediamCores-bc0eeaaa.svg" width="20%" />
</div>
<h1 align="center">
    Desafio Front-end
</h1>

Esse desafio foi proposto pela empresa InMediam, em que foram requisitadas habilidades necessáiras para desenvolver um projeto Front-End.
O resultado final é uma aplicação em React utilizando o Vite como ferramenta de desenvolvimento de um plataforma para comprar HQ's da Marvel
incluindo também acessar uma pagina detalhada de uma HQ especifica, assim como uma pagina de carrinho de compras e outra para o checkout de pagamento com informações adquiridas da API  <a href="https://developer.marvel.com">Developer Marvel</a>.

---
## 🚀 Desenvolvimeto

A solução do desafio front-end React foram utilizadas as seguintes tecnologias principais:

[React](https://reactjs.org/)<br>
[Typescript](https://www.typescriptlang.org/)<br>
[Vite](https://vitejs.dev/)<br>
[Styled-Components](https://styled-components.com/)<br>
[Axios](https://axios-http.com/docs/intro/)<br>
[Zod](https://zod.dev/)<br>
[React-Hook-Form](https://react-hook-form.com/)

Na aplicação React utilizei também Eslint e Prettier que são tecnologias que ajudam bastante no desenvolvimento e na qualidade e na escrita do código, por isso o desenvolvimento da lógica se torna bem mais focado.

- Durante o desenvolvimeno tive que aprender a usar o Zod para validar os campos do formulario do cartão de credito pois nunca havia trabalhado com ele. Vi que ele interage bem com a biblioteca react-hook-form e implementei os dois;
- Também relembrei como era legalzinho de trabalhar com o context api, tinha bastante tempo que não saia do Zustand, então foi bom pra relembrar como essa tecnologia funciona;
- Confesso que o Vite me deu um pouco de trabalho na parte de lidar com as paginas da aplicação, devido a uma parte da documentação que cita aplicações vite com multiple pages, e que era necessario declarar cada uma das paginas no vite.config https://vitejs.dev/guide/build.html#multi-page-app , porem com o react-router-dom deu pra evitar essa configuração.
- Por ultimo, mas não menos importante, o design. Mudei de ideia varias vezes durante o desenvolvimento, as vezes é mais facil lidar com um design já definido, porem, explorar possibilidades (sem usar uma biblioteca de componentes) foi bem divertido;
---

## ⬇️ Uso do projeto localmente

### Clone do repositório

1. Abra o terminal e crie um diretório no local de sua preferência com o comando **mkdir**:

```javascript
  mkdir desafio-frontend
```

2. Entre no diretório que acabou de criar e depois clone o projeto:

```javascript
  cd desafio-frontend
  git clone https://github.com/istorres/desafio-frontend.git
```

### Rode o Projeto do Desafio

3. Entre no diretório criado após a clonagem do repositório.

```javascript
  cd desafio-frontend
```

4. Instale as dependencias.

```javascript
  npm i
```

5. Crie um arquivo chamdo .env, usando o arquivo .env.example para cria-lo, você deve conseguir o seguinte conteúdo no arquivo:
   - Vá até o site https://developer.marvel.com siga os passos do "Getting Started" para adiquirir suas chaves;

```javascript
  VITE_PUBLIC_API_URL=https://gateway.marvel.com
  VITE_PUBLIC_API_KEY=SUA CHAVE PUBLICA
  VITE_PRIVATE_API_KEY=SUA CHAVE PRIVADA
```

6. Realize o start da Aplicacao.

```javascript
  npm run dev
```
### Aplicação em Produção

7. Acesse a aplicação em produção pelo seguinte link:
   link: [Marvel Comics HUB](https://desafio-frontend-pink.vercel.app/)

