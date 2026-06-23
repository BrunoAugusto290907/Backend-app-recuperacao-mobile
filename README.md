# Backend - App Evasão Escolar (Recife)

API RESTful construída em Node.js com Express para dar suporte à aplicação mobile de mapeamento escolar.

## Funcionalidades
- Rota `GET /historico`: Retorna a lista de todas as escolas e localizações guardadas.
- Rota `POST /salvar`: Recebe os dados de localização do usuário e da escola e salva na memória do servidor. Possui validação para evitar que a mesma escola seja salva em duplicidade.

## Como configurar e executar localmente

1. Certifique-se de que tem o Node.js instalado na sua máquina.
2. No terminal, navegue até a pasta do projeto e instale as dependências:
   ```bash
   npm install