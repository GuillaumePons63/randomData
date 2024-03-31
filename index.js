import 'dotenv/config'

import express from 'express';
import router from './routes/index.js';

const PORT = process.env.PORT || 3000;

const app = express();


app.use(router);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
