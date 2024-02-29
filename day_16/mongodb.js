const mongoose = require('mongoose')
function connectToMongoDB(){
    try {
        mongoose.connect('mongodb+srv://hemant:charon@paytmdb.jury2lg.mongodb.net/',{
            serverSelectionTimeoutMS: 6000
          });
      } catch (error) {
        console.log('error:', error);
        handleError(error);
      }
    mongoose.connection.on('connected', () => console.log('connected'));
    mongoose.connection.on('open', () => console.log('open'));
}
connectToMongoDB();