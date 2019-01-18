var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
//res.send('respond with a resource');
   res.render("users",{
   	
   	title: "人员管理",
   	
   	small: "小标题",
   	
   	index:2
   })
});

module.exports = router;
