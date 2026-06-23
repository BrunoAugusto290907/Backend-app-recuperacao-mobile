# Backend - App Evasão Escolar (Recife)

API RESTful construída em Node.js com Express para dar suporte à aplicação mobile de mapeamento escolar.

## Funcionalidades
- Rota `GET /historico`: Retorna a lista de todas as escolas e localizações guardadas.
- Rota `POST /salvar`: Recebe os dados de localização do utilizador e da escola e guarda na memória do servidor. Possui validação para evitar que a mesma escola seja guardada em duplicado.
- Rota `DELETE /limpar`: (Opcional) Limpa todo o histórico de registos da memória.

## Como configurar e executar localmente

1. Certifique-se de que tem o Node.js instalado na sua máquina.
2. Clone este repositório.
3. No terminal, navegue até à pasta do projeto e instale as dependências:
   ```bash
   npm install