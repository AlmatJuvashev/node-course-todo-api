// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client)=>{
    if (err) {
        return console.log("Unable to connect to MongoDB server");
    }
    console.log("Connected to MongoDB server");
    const db = client.db('TodoApp');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5a9674adc00dc833f66b7606')
    // }, {
    //     $set: { completed: true}
    // }, {
    //     returnOriginal: false
    // });


    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5a953b0820b7f0ceefb73d0c')
    }, {
        $set: {name: "Almat"},
        $inc: {age: -1}
    }, {
        returnOriginal: true
    })
    //client.close();
});
