import { Router } from 'express';

import controller from '../controllers/index.js';
import dataController from '../controllers/data.js';
import generateData from '../middleware/generateData.js';
import generateCsv from '../middleware/generateCsv.js';

const router = Router();

router.get('/', (req, res) => {
    controller.homePage(req, res)
});

router.post('/generate', (req, res, next) => {
    generateData(req, res, next),
        dataController.getData(req, res)
}
)

router.get('/ddlcsv', async (req, res, next) => {
    await generateCsv(req, res, next),
        dataController.getCsv(req, res)
})

router.get('/ddljson', (req, res) => {
    dataController.getJson(req, res)
})

export default router;


