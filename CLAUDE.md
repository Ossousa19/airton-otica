# Airton Ótica: site de bio

Landing page da Airton Ótica (São Luís, MA), usada no link da bio do Instagram. Não é loja virtual: todo contato acontece pelo WhatsApp de cada loja.

Publicado em https://ossousa19.github.io/airton-otica/ pelo GitHub Pages. Todo push na branch `main` publica sozinho em 1 a 2 minutos.

## Estrutura

- `index.html`: marcação da página, incluindo os símbolos SVG (logo, ícones) no topo do `<body>`.
- `css/styles.css`: todo o estilo. Os tokens de cor e fonte estão no `:root`, no início do arquivo.
- `js/main.js`: dados e comportamento. Os dados ficam no início do arquivo:
  - `MALLS`: shoppings, horários (minutos desde 0h) e busca do mapa.
  - `STORES`: lojas, números de WhatsApp (formato `5598…`) e rótulos.
  - `PRODUCTS`: armações da grade "Nossos essenciais" (`img` aponta para `assets/img/produto-<nº>.jpg`).
  - `MOTIVOS`: assuntos do formulário e a frase que entra na mensagem.
- `assets/img/`: fotos já otimizadas. Os números (5089, 5130…) são os arquivos `_MG_xxxx.jpg` da sessão de fotos.
- `assets/logo-airton.svg`: logo oficial (símbolo + "Airton Ótica").
- `docs/referencias/`: referências visuais aprovadas pelo cliente (Doyle, Logancee, Optopia).

## Identidade

- Cores: branco `#FFFFFF` e azul-profundo `#04364A` são a base. Azul vivo `#0589B3` só em detalhes. Fundo lilás `#E9E1EC` vem das fotos de estúdio.
- Fonte: Jost (Google Fonts) em toda a página. O cliente rejeitou serifas em itálico e a Archivo larga.
- Logo: usar sempre o arquivo oficial, em azul-profundo no fundo claro e em branco no fundo escuro.
- Logos das marcas: arquivos oficiais em `assets/img/marca-*.png`, todos na mesma cor. Armani Exchange e Lacoste só com o nome (sem "A|X" e sem jacaré).

## Regras do cliente

- Tudo em português do Brasil, com textos curtos.
- Fotos devem mostrar a armação inteira. Zoom só onde o detalhe é o ponto (ex.: cristais Swarovski).
- O topo é um carrossel de fotos largas com o título por cima à esquerda. Não mudar essa estrutura.
- Formulário de contato fica simples: duas seleções (assunto e loja) e o botão "Entrar em contato".
- Não inventar dados da empresa. Fatos confirmados: fundada em 15/01/2011; Airton Oliveira e Franco Sousa à frente; Zeiss Vision Center no São Luís Shopping em 2021 (confirmar se continua); 6 lojas (Ilha 07 e 08, Tropical 01 e 02, São Luís 03, Golden 05 no piso L1, loja L64).
- O número da Loja 03 foi completado com o 9 da frente (98879-6305): testar antes de divulgar.

## Antes de publicar

Abrir `index.html` no navegador (ou Live Server) e conferir no celular (390px) e no desktop: nada vaza para os lados, as fotos carregam e os botões de WhatsApp abrem a loja certa.
