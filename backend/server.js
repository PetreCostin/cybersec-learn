const express = require('express');
const app = express();
app.use(express.json());

let lessons = []; // This will act as our database for the demo

// CRUD operations
app.get('/lessons', (req, res) => { res.json(lessons); });
app.post('/lessons', (req, res) => { lessons.push(req.body); res.status(201).send(); });
app.put('/lessons/:id', (req, res) => { lessons[req.params.id] = req.body; res.send(); });
app.delete('/lessons/:id', (req, res) => { lessons.splice(req.params.id, 1); res.send(); });

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});