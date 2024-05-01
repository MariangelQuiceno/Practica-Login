import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url))

//Importar los metodos

import { methods as auth } from './controllers/auth.controller.js';



//Server 
const app = express();
app.set('port', 4000)
app.listen(app.get('port'));
console.log('server corriendo en:', app.get('port') );


//Configuración 
app.use(express.static(__dirname + '/public'))
app.use(express.json());

//Rutas
app.get('/', (req,res) => res.sendFile(__dirname + "/pages/login.html"))
app.get('/register', (req,res) => res.sendFile(__dirname + "/pages/register.html"))
app.get('/user', (req,res) => res.sendFile(__dirname + "/pages/loginUser/loginUser.html"))
app.post('/api/register', auth.register )
app.post('/api/login', auth.login )


