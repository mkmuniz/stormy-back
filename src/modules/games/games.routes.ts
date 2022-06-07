import * as gamesController from './games.controller';
const Router = require('express');
const router = Router();

router
    .get('/', gamesController.getAll)
    .get('/:id', gamesController.getOne)
    .post('/', gamesController.postOne)
    .post('/comentar/:id', gamesController.postComentario)
    .post('/resposta/:id', gamesController.postResposta)
    .delete('/:id', gamesController.deleteOne)
    .patch('/:id', gamesController.patchOne)
module.exports = router;