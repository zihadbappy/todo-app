var express = require('express');
var router = express.Router();
var todo= require('../models/todoSchema');


/* GET home page. */
router.get('/', function(req, response, next) {
  todo.find({},(err,res)=>{
  if(err) console.log(err);
  response.render('index', { title: '2DO', res  });
  });
});

router.get('/newtodo', function(req, res){
  const{task}=req.body;
  if(task!=''){
    console.log(task);
    todo({task}).save().then(task=>{
      res.redirect('/');
    }).catch(err=>console.log(err));
  }
});


module.exports = router;
