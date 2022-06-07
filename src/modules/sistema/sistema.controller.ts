import sistemaService from "./sistema.service";
import express from 'express';


/**
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
*/
export async function getAll(req: express.Request, res: express.Response) {
    return await sistemaService.getAll().then(data => res.json(data))

}

/**
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
export async function buscarUm(req: express.Request, res: express.Response) {
    const { id } = req.params;
    return await sistemaService.buscarUm(id)
        .then(data => res.json(data))
}

/**
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
export async function criar(req: express.Request, res: express.Response) {
    const { body } = req;
    return await sistemaService.criar(body).then(data => res.json(data))
}