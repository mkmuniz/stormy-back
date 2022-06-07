import gamesService from "./games.service";
import express from 'express';
import * as RESPONSE from '../utils/types/index';

/**
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
*/
export async function getAll(req: express.Request, res: express.Response) {
    return await gamesService.getAll().then(data => res.json(data))

}

/**
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
*/
export async function getOne(req: express.Request, res: express.Response) {
    const { id } = req.params;
    return await gamesService.getOne(id).then(data => res.json(data));
}

/**
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
*/
export async function postOne(req: express.Request, res: express.Response) {
    const { body } = req;
    return await gamesService.postOne(body).then((data: any) => res.json(data))
}

/**
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
*/
export async function postComentario(req: express.Request, res: express.Response) {
    const { body } = req;
    const { id } = req.params;
    return await gamesService.postComentario(id, body).then((data: any) => res.json(data))
}

/**
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
*/
export async function postResposta(req: express.Request, res: express.Response) {
    const { body } = req;
    const { id } = req.params;
    return await gamesService.postResposta(id, body).then((data: any) => res.json(data))
}

/**
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
*/
export async function deleteOne(req: express.Request, res: express.Response) {
    const { id } = req.params;
    const results = await gamesService.deleteOne(id);
    return res.status(RESPONSE.HTTP_STATUS.OK).send(results);
}

/**
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
*/
export async function patchOne(req: express.Request, res: express.Response) {
    const { id } = req.params;
    const { body } = req;
    const results = await gamesService.patchOne(id, body);
    return res.status(RESPONSE.HTTP_STATUS.OK).send(results);
}