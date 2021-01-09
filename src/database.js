const mongosee = require('mongoose');

mongosee.connect('mongodb://dbaccess:Airclic100132@notas-shard-00-00.l6jfi.mongodb.net:27017,notas-shard-00-01.l6jfi.mongodb.net:27017,notas-shard-00-02.l6jfi.mongodb.net:27017/notes?ssl=true&replicaSet=atlas-qxn4db-shard-0&authSource=admin&retryWrites=true&w=majority' , {
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

