const express = require('express');
const app = express();
const mongoose = require('mongoose');
const swig = require('swig');
const configure = require('./configure');
const router = require('./router');
const session = require('express-session');

app.use(express.static("public"));

swig.setDefaults({
    cache: false
})
app.set('view cache', false);
app.set('views','./views');
app.set('view engine','html');
app.engine('html', swig.renderFile);

app.use(session({
    secret : 'strawman001',
    resave : true,
    saveUninitialized: false,
    cookie : {
        maxAge : 1000 * 60 * 5,
    },
}));

app.use('/',router);
app.listen(process.env.PORT || 3000,function(){
    console.log('The server is running!')
});

//"mongodb://127.0.0.1:27017/logistiXDB"
var connection = mongoose.connection;
mongoose.connect(configure.dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
connection.on('open', function() {
    console.log('Database has connected!');
});