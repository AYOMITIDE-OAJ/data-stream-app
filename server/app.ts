import express from 'express';
import cors from 'cors';


import projects from './routes/projects';

const app = express();

// Enable CORS for all origins
app.use(cors());

const port = process.env.PORT || 3000;

app.use('/projects', projects);


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});