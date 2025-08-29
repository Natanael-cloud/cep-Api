# Consulta CEP

Aplicação web simples para consultar informações de endereço a partir de um CEP, utilizando a API pública ViaCEP.

## Funcionalidades

- Consulta de CEPs brasileiros.
- Exibe rua, bairro, localidade e UF.
- Indicação de carregamento durante a busca.
- Interface responsiva e amigável.

## Como usar

1. Clone ou baixe este repositório.
2. Abra o arquivo [`index.html`](index.html) em seu navegador.
3. Digite um CEP válido (apenas números, 8 dígitos) e clique em "Consultar CEP".
4. Veja as informações retornadas na tela.

## Estrutura do Projeto

```
index.html
src/
  assets/
    css/
      style.css
    js/
      main.js
```

- [`index.html`](index.html): Página principal da aplicação.
- [`src/assets/css/style.css`](src/assets/css/style.css): Estilos da interface.
- [`src/assets/js/main.js`](src/assets/js/main.js): Lógica de consulta e manipulação da interface.

## Tecnologias

- HTML5
- CSS3
- JavaScript (ES6)
- [ViaCEP API](https://viacep.com.br/)

