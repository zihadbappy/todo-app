const mongoose=require('mongoose');

const todoSchema= new mongoose.Schema({
    task:{
        type:String,
        required:true
    }
});

const todo=mongoose.model('tasks',todoSchema);

module.exports=todo;