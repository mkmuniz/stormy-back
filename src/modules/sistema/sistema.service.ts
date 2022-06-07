import Sistema from './entities/sistema.entity';

export default class SistemaService {

    static async buscarTodos(filtros: any) {
        return filtros
            ? Sistema.find(filtros).lean()
            : Sistema.find().lean();
    }
    static async buscarSistemaAtivo() {
        return Sistema.find({ status: 'aberto' }).lean()
    }
    static async criar(body: any) {
        const sistemaAtivo = await this.buscarSistemaAtivo();
        if (sistemaAtivo.length > 0) {
            return console.log("Erro")
        }
        if (!body['permissoes']) {
            body = { ...body, permissoes: {} }
        }
        return Sistema.create(body);
    }
    static async buscarUm(id: any) {
        const sistema = await Sistema.findById(id);
        if (!sistema) {
            return console.log("Sistema não encontrado");
        }
        return sistema
    }

    static async getAll() {
        try {
            return await Sistema.find();
        } catch(err: any) {
            return console.log(err as Error);
        }
    }
}