import express from 'express';
import path from 'path';
import 'express-async-errors';
import cors from 'cors';

import './database/connection';

import routes from './routes';
import errorHandler from './errors/handler'

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes)
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
app.use(errorHandler)

app.listen(3333);



// Banco de Dados
// Driver nativo: [sqlite3] Permite executar as querys do banco de dados direto pelo node mas não oferece abstração (precisa escrever a query no mesmo formato do banco de dados)
// Query builder: [knex.js] Permite escrever as querys com javascript. No final converte para formato banco de dados.
// ORM: Nível de abstração maior. Permite criar uma classe em javascript que simboliza a tabela no banco de dados. Cada linha de retorno é uma instancia/objeto derivado da classe.
 