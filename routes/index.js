import { Router } from 'express';

import controller from '../controllers/index.js';
import dataController from '../controllers/data.js';
import generateData from '../middleware/generateData.js';

const router = Router();

router.get('/', (req, res) => {
    controller.homePage(req, res)
});

router.post('/generate', (req, res, next) => {
    generateData(req, res, next),
        dataController.getData(req, res)
}
)

export default router;


