var express = require('express');
var router = express.Router();
var todo= require('../models/todoSchema');


/* GET home page. */
router.get('/', function(req, response, next) {
  todo.find({},(err,res)=>{
  if(err) console.log(err);
  response.render('main', { res, title:'2Do'  });
  });
});

router.post('/newtodo', function(req, res){
  const{task}=req.body;
  if(task!=''){
    console.log(task);
    todo({task}).save().then(task=>{
      res.redirect('/');
    }).catch(err=>console.log(err));
  }
  else res.redirect('/');
});

router.post('/delete', function(req, res){
  const{taskid}=req.body;
  console.log(taskid);

  todo.findByIdAndDelete(taskid, (err)=> {
    if(err) console.log(err);
    console.log(`Deletion completed`);
  });
  res.redirect('/');
});


module.exports = router;
