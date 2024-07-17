import 'dotenv/config'
import express from 'express';
import router from './routes/index.js';
import session from 'express-session';

const PORT = process.env.PORT || 3000;

const app = express();

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);
app.set('view engine', 'pug');


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});