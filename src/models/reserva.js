const {Schema, model} = require('mongoose');
const {ObjectId} = Schema;
const ReservaSchema = new Schema({
    usuario_id: {type: ObjectId, required: true},
    pista_id: {type: ObjectId, required: true},
    horaInicio: {type: Date, required: true}
});

module.exports = model('Reserva', ReservaSchema);