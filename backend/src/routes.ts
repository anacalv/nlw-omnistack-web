import { Router } from 'express';
import multer from 'multer';

import OrphanagesController from './controllers/OrphanagesController';
import UploadConfig from './config/upload';

const routes = Router();
const upload = multer(UploadConfig);

//MVC - Model (representatividade de uma entidade - dados), views (como é disponibilizado para o frontend), controllers (lógica das rotas)
//index, show, create, update, delete

routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.show);
routes.post('/orphanages', upload.array('images'), OrphanagesController.create);


export default routes;