import { HTTP_STATUS } from "../utils/types/index";
import * as RESPONSE from '../utils/types/index';
import authService from './auth.service';
import express from 'express';
import passport from "passport";

/**
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
 export async function login(req: express.Request, res: express.Response) {
    return res.status(RESPONSE.HTTP_STATUS.OK).send(req.user);
}