const express = require('express');
const bodyParser = require('body-parser');


const {mongoose} = require('./db/mongoose');
let {Todo} = require('./models/todo');
let {User} = require('./models/user');


const app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    console.log(req.body);

    let todo = new Todo({text: req.body.text});

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

// Get /todos


app.listen(3000, () => {
    console.log('Started at port 3000');
});



module.exports = {app};
