import mongoose from '../../_database/index';


const usuarioSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        require: true
    },

    password: {
        type: String,
        require: true,
    },

    email: {
        type: String,
        unique: true,
        require: true
    },

});


export const User
    = mongoose.model('user', usuarioSchema);
