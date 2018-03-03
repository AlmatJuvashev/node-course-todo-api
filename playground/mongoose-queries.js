const {ObjectId} = require('mongodb');

const  {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

const id = '5a98e086b0ba8b11516addf8';

if (!ObjectId.isValid(id)) {
    console.error('ID not valid');
}

//
// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });
//
// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.error('Id not found');
//     }
//     console.log('Todo by Id', todo);
// }).catch((e) => console.error(e));

User.findById(id).then((user) => {
    if (!user) {
        return console.error('Unable to find user');
    }

    console.log('User by ID', user)
}).catch((e) => console.log(e));
