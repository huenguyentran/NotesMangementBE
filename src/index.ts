import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
// import cookieParser from 'cookie-parser';
// import compression from 'compression';
import cors from 'cors';
import { databaseService } from './services/database.service'

//init app
const app = express();
const port = 8080;

app.use(cors({
    credentials: true,
}));

// app.use(compression());
// app.use(cookieParser());
app.use(bodyParser.json());

app.use(express.json())

databaseService.connect();

const server = http.createServer(app);

server.listen(port, () => {
    console.log('Server running on http://localhost:8080/')
});
