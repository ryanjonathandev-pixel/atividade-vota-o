# Votação

Este projeto é uma pequena aplicação de votação em HTML e JavaScript.

## Arquivos

- `Votaçao.html` - página principal do sistema de votação.
- `escolha_seu_candidato.html` - página para selecionar o candidato desejado.
- `vote.js` - lógica de validação do voto e mensagens para o usuário.
- `AnaliZ.js` - possível arquivo de análise ou complementação do processo de votação.

## Como usar

1. Abra `Votaçao.html` no navegador.
2. Informe o número do candidato no campo `numero`.
3. Clique no botão para confirmar o voto.
4. O JavaScript valida o número e exibe uma mensagem ao usuário.

## Observações

- O arquivo `vote.js` atualmente verifica se o número digitado é `80`.
- Se o número não for `80`, o processo é interrompido e o usuário deve corrigir o valor.

## Sugestões de melhoria

- Adicionar validação de todos os candidatos disponíveis.
- Mostrar o resultado do voto na própria página em vez de usar `alert`.
- Criar um botão de confirmação que só fique ativo quando o campo estiver preenchido.
