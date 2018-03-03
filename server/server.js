const express = require('express');
const bodyParser = require('body-parser');
const {ObjectId} = require('mongodb');

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

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, (e) => {
        res.status(400).send(e);
    });
});

// Get /todos/:id
app.get('/todos/:id', (req, res) => {
    let id = req.params.id;

    // Validate id using isValid
        // respond with 404 - send back empty
    if (!ObjectId.isValid(id)){
        return res.status(404).send();
    }

    //query todos collection
    Todo.findById(id).then((todo) => {
        // if no todo - send back a 404 with empty body
        if (!todo) {
            return res.status(404).send();
        }

        // if todo - send it back
        res.status(200).send({todo});
    }, (e) => {
        res.status(400).send();
    });

});

app.listen(3000, () => {
    console.log('Started at port 3000');
});



module.exports = {app};
