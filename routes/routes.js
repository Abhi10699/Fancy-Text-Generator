module.exports = function(app){
  app.get('/',(req,res)=>{
    res.render('info');
  })

  app.get('/:name',(req,res)=>{
    console.log(req.params.name)
    if(req.params.name.length > 15){
      res.render('alert');
    }else{
      res.render('index',{data:req.params.name});
    }
  })
}
