
import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/users.js';


const app = express();
const PORT = 8080

app.use(bodyParser.json());

app.get('/', (req, res) => {
    console.log("Hit registered on /");
    res.send("Hello /");
})

app.get('/user',(req,res) => {
    res.send(users);
})

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));
