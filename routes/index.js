var express = require('express');
var router = express.Router();
var data = require ('../utils/data')

/* GET home page. */
router.get('/', function(req, res, next) {
  data.getAllProducts((error, data)=>{
    if(error){
        return res.send({
            error
        })
    }
    const JSONBody = JSON.parse(data);
    return res.render('index', {
        title: "Modda",
        data,
        JSONBody
    });

  })
});

module.exports = router;
