const db = require('../../db/mysql');

const tabla = 'registros';

function todos (){
    return db.todos('registros')
}

function uno (id){
    return db.uno('registros', id)
}

function agregar (body){
    return db.agregar('registros', body)
}

function eliminar (body){
    return db.eliminar('registros', body)
}

module.exports = {
    todos,
    uno,
    agregar,
    eliminar,
}