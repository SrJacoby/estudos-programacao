import express from 'express'
import cors from 'cors'
import { registrar, login, perfil } from './userController.js'
import { autenticarToken } from './auth.js'

const app = express();
app.use(cors());
app.use(express.json())

app.post('/register', registrar)
app.post('/login', login);
app.get('/perfil', autenticarToken, perfil)

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000')
});