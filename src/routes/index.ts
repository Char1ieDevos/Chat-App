import { Router } from 'express';
import IndexController from '../controllers/index';

const router = Router();
const indexController = new IndexController();

export function setRoutes(app) {
    app.use('/api/chat/send', router.post('/', indexController.sendMessage.bind(indexController)));
    app.use('/api/chat/receive', router.get('/', indexController.receiveMessage.bind(indexController)));
}