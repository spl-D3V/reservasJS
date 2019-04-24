const {Schema, model} = require('mongoose');
const {ObjectId} = Schema;
const HorarioSchema = new Schema({
    pista_id: {type: ObjectId, required: true},
    horaInicio: {type: Date, required: true}
});

module.exports = model('Horario', HorarioSchema);