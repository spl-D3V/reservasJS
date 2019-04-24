const mongoose = require('mongoose');
const {database} = require('./keys');

mongoose.connect(database.URI, {
    useNewUrlParser: true,
    useCreateIndex: true
}).then(db => console.log('DB conectada'))
.catch(err => console.error(err));