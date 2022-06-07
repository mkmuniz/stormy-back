import { Games } from './entities/games.entities';
const bcrypt = require('bcrypt');


export default class gamesService {
    static async getAll() {
        try {
            return await Games.find();
        } catch(err: any) {
            return console.log(err as Error);
        }
    }
    
    static async getOne(id: string) {
        try {
            return await Games.findById(id);
        } catch(err: any) {
            return console.log(err as Error);
        }
    }

    static async postOne(body: any) {
        try {
            return await Games.create(body);
        } catch(err: any) {
            return console.log(err as Error);
        }
    }

    static async postComentario(id: String, body: any) {
        try {
            return await Games.findOneAndUpdate(id, {$push: { comentarios: [{ autor: body.autor, coment: body.coment, nota: body.nota }]}});
        } catch(err: any) {
            return console.log(err as Error);
        }
    }

    static async postResposta(id: String, body: any) {
        try {
            const user = await Games.findById(id);
            const listaComentarios = user.comentarios.filter((comentario: any) => {
                return comentario._id = body.remetente;
            })
            return listaComentarios.findOneAndUpdate(body.remetente, {$push: {"autor": body.autor, "comentario": body.comentario, "nota": body.nota}});
        } catch(err: any) {
            return console.log(err as Error);
        }
    }

    static async patchOne(id: string, body: any) {
        try {
            return await Games.findByIdAndUpdate(id, body);
        } catch(err: any) {
            return console.log(err as Error);
        }
    }

    static async deleteOne(id: string) {
        try {
            return await Games.findByIdAndDelete(id);;
        } catch(err: any) {
            return console.log(err as Error);
        }
    }
}