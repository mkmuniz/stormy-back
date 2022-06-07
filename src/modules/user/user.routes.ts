import * as userController from './user.controller';
const Router = require('express');
const router = Router();

router
    .get('/', userController.getAll)
    .get('/:id', userController.getOne)
    .post('/username', userController.findOne)
    .post('/email', userController.findOneEmail)

    .post('/', userController.postOne)
    .delete('/:id', userController.deleteOne)
    .patch('/:id', userController.patchOne)
module.exports = router;