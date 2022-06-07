import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const SistemaSchema = new Schema({
    titulo: {
        type: String,
        required: true,
    },


    listadassessoes: [{
    }]

});

const Sistema = mongoose.model('sistema', SistemaSchema);
export default Sistema;
