import { Router } from 'express';

import controller from '../controllers/index.js';
import dataController from '../controllers/data.js';

const router = Router();

router.get('/', (req, res) => {
    controller.homePage(req, res)
});

router.post('/generate', (req, res) => {
    dataController.generateData(res, res)
}
)

export default router;


