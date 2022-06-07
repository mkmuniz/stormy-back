import mongoose from 'mongoose';
import 'dotenv/config';
const cors = require('cors');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const URL: any = process.env.URL;
mongoose.connect(URL)
    .catch(err => {
        throw err
    });

export default mongoose;