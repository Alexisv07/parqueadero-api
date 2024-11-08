const app = require('./app');

app.listen(app.get('port'), () => {
    console.log("servidor traido desde el puerto", app.get("port"));
});