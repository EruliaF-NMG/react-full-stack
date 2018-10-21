import express from 'express';
import path from 'path'
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compress from 'compression';
import cors from 'cors';
import helmet from 'helmet';

import template from './../template';
import devBundle from './devBundle';

// routes
import userRoutes from './routes/user.routes'
import authRoutes from './routes/auth.routes'


const CURRENT_WORKING_DIR = process.cwd();
const app = express();

//comment out before building for production
devBundle.compile(app)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(compress());
app.use(helmet());
app.use(cors());

app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')));
// mount routes
app.use('/', userRoutes);
app.use('/', authRoutes);

app.get('/', (req, res) => {
    res.status(200).send(template())
})


// Catch unauthorised errors
app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
      res.status(401).json({"error" : err.name + ": " + err.message})
    }
})

export default app;