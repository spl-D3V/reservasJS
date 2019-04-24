const {Schema, model} = require('mongoose');
const PistaSchema = new Schema({
    nombre: {type: String, required: true, default: ''},
    deporte: {type: String, required: true, default: ''},
    estado: {type: Boolean, default: true}
});


module.exports = model('Pista', PistaSchema);