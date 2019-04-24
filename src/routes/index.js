const express = require('express');
const router = express.Router();
const dashboardMain = require('../controllers/dashboardMain');
module.exports = app => {
    router.get('/', dashboardMain.index);
    router.get('/configuracion', dashboardMain.configuracion);
    router.get('/configuracion/:pista_id', dashboardMain.configuracion);
    router.post('/modificacion', dashboardMain.modificacion);
    //router.post('/images/:image_id/like', image.like);
    //router.post('/images/:image_id/comment', image.comment);
    //router.delete('/images/:image_id', image.delete);
    app.use(router);
}