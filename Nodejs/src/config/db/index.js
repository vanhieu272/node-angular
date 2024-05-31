require('dotenv');
const mongoose = require('mongoose');


async function connect(){
    try{
        await mongoose.connect('mongodb://localhost:27017/CRUD_student');
    }catch (error){
        console.error('connect fail', error);
    }
}

module.exports = { connect };