const express = require('express');
const cors = require('cors');

const app = express();

// Permite receber dados em JSON e comunicação com o app
app.use(cors());
app.use(express.json());

// Nossa "tabela" de banco de dados na memória
const historicoSalvo = [];

// Rota GET: Retorna tudo o que foi salvo
app.get('/historico', (req, res) => {
  res.json(historicoSalvo);
});

// Rota POST: Recebe a localização e a escola, e salva no histórico
app.post('/salvar', (req, res) => {
  const { localizacaoUsuario, escola } = req.body;

  // Verifica se o ID da escola já existe na nossa lista
  const escolaJaExiste = historicoSalvo.find(item => item.escola._id === escola._id);

  if (escolaJaExiste) {
    // Se existir, devolvemos um erro 400 (Bad Request) avisando o motivo
    return res.status(400).json({ mensagem: 'Esta escola já foi salva no histórico.' });
  }

  // Se não existir, monta o objeto e continua o processo normal de salvar
  const novoRegistro = {
    id: Date.now().toString(),
    dataHora: new Date().toLocaleString('pt-BR'),
    localizacaoUsuario,
    escola
  };

  // Esta linha agora está protegida AQUI DENTRO da rota POST
  historicoSalvo.push(novoRegistro);
  
  console.log("Novo dado salvo:", novoRegistro);
  res.status(201).json({ mensagem: 'Registro salvo com sucesso!', registro: novoRegistro });
});

// Inicia o servidor na porta 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Backend rodando! Escutando na porta ${PORT}`);
});