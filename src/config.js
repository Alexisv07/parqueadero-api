require('dotenv').config();

module.exports = {
    app: {
        port: process.env.PORT || 5501, // Configura el puerto 
    },
    mysql:{
        host: process.env.MYSQL_HOST || 'localhost',
        user: process.env.MYSQL_USER || 'root',
        password: process.env.MYSQL_PASSWORD || '',
        database: process.env.MYSQL_DATABASE || 'parqueadero_db',
    }
}