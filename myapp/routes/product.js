var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
//res.send('respond with a resource');
   res.render("product",{
   	
   	title: "产品管理",
   	
   	small: "小标题",
   	
   	index: 3
   })
});

module.exports = router;
