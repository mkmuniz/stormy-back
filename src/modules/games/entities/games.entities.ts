import mongoose from '../../_database/index';


const gamesSchema = new mongoose.Schema({
    titulo: {
        type: String,
        unique: true,
        require: true
    },

    descricao: {
        type: String,
        require: true,
    },

    imagem: {
        type: String,
    },

    comentarios: [{
        autor: String,
        coment: String,
        data: Date,
        nota: String,
        respostas: [{
            autor: String,
            coment: String,
            data: Date,
            nota: String
        }]
    }],

});


export const Games
    = mongoose.model('games', gamesSchema);
