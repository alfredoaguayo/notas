const mongosee = require('mongoose');

mongosee.connect('mongodb://aws_dbaccess:Airclic100132@notas.l6jfi.mongodb.net/notas?retryWrites=true&w=majority' , {
useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})
    .then(db => console.log('Mongo está conectado.'))
    .catch(err => console.error(err));


// mongosee.connect('mongodb:///notas.l6jfi.mongodb.net/notas' , {
//     useCreateIndex: true,
//     useNewUrlParser: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true
// })
//     .then(db => console.log('Mongo está conectado.'))
//     .catch(err => console.error(err));
