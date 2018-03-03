const express = require('express');
const bodyParser = require('body-parser');
const {ObjectId} = require('mongodb');

const {mongoose} = require('./db/mongoose');

let {Todo} = require('./models/todo');
let {User} = require('./models/user');


const app = express();


const port = process.env.PORT || 3000;

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

app.delete('/todos/:id', (req, res) => {
    // get the id

    let id = req.params.id
    //validate the id > not valid return 404
    if (!ObjectId.isValid(id)) {
        return res.status(404).send();
    }

    //remove todo by id
    Todo.findByIdAndRemove(id).then((doc) => {
        //success
        //if no doc send 404
        if (!doc) {
            return res.status(404).send();
        }
        //send doc back with 200
        res.status(200).send({doc});

    }, (e) => res.status(404).send());

});

app.listen(port, () => {
    console.log(`Started up at port ${port}`);
});



module.exports = {app};
