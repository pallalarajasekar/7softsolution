/**
 * Created by pallali on 22/2/16.
 */
/**
 * Created by harinaths on 30/1/16.
 */
var config = {
    port: 8966,
    viewPath: __dirname + '/views', //Template Engine
    publicPath: __dirname + '/public', //Public Folder (Javascript, CSS)
    sessionStore: true,
    socketIO: true
}

var XPressIO = require('xpressio');
var xpress = new XPressIO(config).start();
var app = xpress.app;
var io = xpress.io;


app.get('/', function(req, res){
    res.render("index")
})

app.get('/home', function(req, res){
    res.render("home")
})

app.get('/about', function(req, res){
    res.render("about")
})

app.get('/service', function(req, res){
    res.render("service")
})

app.get('/contact', function(req, res){
    res.render("contact")
})

app.get('/portfolio', function(req, res){
    res.render("portfolio")
})


