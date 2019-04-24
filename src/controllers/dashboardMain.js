/* eslint-disable no-console */

const ctrl = {};
const { Pista } = require('../models');
const {Types} = require('mongoose');

ctrl.index = async (req, res) =>{
    const viewModel = {};
    const pistasActivas = await Pista.find();
    viewModel.pistas = pistasActivas
    console.log(pistasActivas);
    res.render('dshmainindex', viewModel);
}
ctrl.configuracion = async (req, res) => {
    const viewModel = {
        pista: {},
        horario: []
    };
    viewModel.pista._id = -1;
    if (req.params.hasOwnProperty('pista_id')){
        const pista = await Pista.findOne({_id: req.params.pista_id}).catch(err => console.log(err));
        if(pista){
            viewModel.pista = pista;
        }
    }
    console.log('antes empezar ',viewModel.pista);
    res.render('configuracionPistas', viewModel);
}
ctrl.modificacion = async (req, res) => {
    const {nombre, deporte, estado, _id} = req.body;
    console.log (nombre, deporte, estado, _id);
    let pista = null;
    if (Types.ObjectId.isValid(_id)){
        pista = await Pista.findOne({_id}).catch(err => console.log(err));
        if (pista){
            pista.nombre = nombre;
            pista.deporte = deporte;
            pista.estado = (estado === 'true');
            const saved = await pista.save().catch(err => console.log(err));
            console.log('UUU ', saved);
        }
        
    }else{
        pista = new Pista({nombre, deporte});
        pista.estado = (estado === 'true');
        const saved = await pista.save().catch(err => console.log(err));
        console.log('CCC ', saved);
    }
    
    console.log(pista);
    console.log(req.body.nombre);
    console.log(req.body.deporte);
    console.log(req.body.estado);
    console.log(req.body._id);
    res.send('ok');
};

module.exports = ctrl;