const respuesta = new require('./respuestas');
 function errors(err, req, res, next){
    console.log('[error]', err);

    const message = err.message || 'Error interno';
    const status = err.statusCode || 500;

    respuesta.error(err, req, massage, status);
 }

 module.exports = errors;