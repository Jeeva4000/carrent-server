const mongoose = require('mongoose');

function connectDB() {
    mongoose.connect('mongodb+srv://Jeeva:Jeeva12345@cluster0.7wb6jvt.mongodb.net/car-rent?retryWrites=true&w=majority', { useUnifiedTopology: true, useNewUrlParser: true })

    const connection = mongoose.connection
    connection.on('connected', () => {
        console.log("MongoDB is connected successfully")
    })
    connection.on('error', () => {
        console.log("MongoDB is connection is error");
    })
}


connectDB()


module.exports = mongoose;