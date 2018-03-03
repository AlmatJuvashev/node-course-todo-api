const {ObjectId} = require('mongodb');

const  {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// const id = '5a98e086b0ba8b11516addf8';
//
// if (!ObjectId.isValid(id)) {
//     console.error('ID not valid');
// }

// // Todo.remove({})
// Todo.remove({}).then((result) => {
//     console.log(result);
// });

//Todo.findOneAndRemove({})


Todo.findByIdAndRemove('5a9a2e46f0ed1b2b93e2a931').then((todo) => {
    console.log(todo);
});
