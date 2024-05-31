const studentRouter = require('./students');

function route(app){
    app.use('/api/student', studentRouter);

}

module.exports = route;