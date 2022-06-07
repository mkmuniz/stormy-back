import * as sistemaController from './sistema.controller';


import { Router } from 'express';
const router = Router();

router
    .get('/:id', sistemaController.buscarUm)
    .get('/', sistemaController.getAll)
    .post('/', sistemaController.criar)

module.exports = router;