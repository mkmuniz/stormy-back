import * as authController from './auth.controller';
import { loginStrategy } from './strategies/auth.strategies';
const Router = require('express');
const router = Router();
const express = require('express');
const cors = require('cors');
const app = express();


app.use(cors());

router.post('/', loginStrategy, authController.login);

module.exports = router;