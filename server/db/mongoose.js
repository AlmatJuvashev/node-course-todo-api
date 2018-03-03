const mongoose = require('mongoose');

mongoose.Promise = global.Promise;


let db = {
    localhost: 'mongodb://localhost:27017/TodoApp',
    mLab: process.env.MONGODB_URI
}

mongoose.connect(db.mLab || db.localhost);


module.exports = {mongoose};
