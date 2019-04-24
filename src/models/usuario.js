const {Schema, model} = require('mongoose');
const UsuarioSchema = new Schema({
    username: {type: String, unique: true, trim: true, required: true, minlength: 3},
    nombre: {type: String, required: true},
    apellidos: {type: String, required: true},
    telefono: {type: Number, required: true, minlength: 9, maxlength:9},
    password: {type: String, required: true, trim:true, minlength: 6},
    nivelAcceso: {type: Number, default: 0},
    valido: {type: Boolean, default: false},
    creacion:{type: Date, default: Date.now}
});

module.exports = model('Usuario', UsuarioSchema);