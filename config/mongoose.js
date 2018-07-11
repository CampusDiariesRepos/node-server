const mongoose  = require('mongoose');

mongoose.Promise = global.Promise;

// if the development environment is local, first make sure that your mongodb is running in the background
// if the server is deployed in a remote environment, include the URI of the mongodb in the Config Vars
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/readersClub')
    .then(success => {
        console.log('Successfully connected to database: ' + Date.now());
    })
    .catch(err => {
        console.log('Error while connecting to database: ' + Date.now() + ' Error: ' + err);
    })

module.exports = {
    mongoose: mongoose
};