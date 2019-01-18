var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
//res.send('respond with a resource');
   res.render("check",{
   	
   	title: "考勤管理",
   	
   	small: "小标题",
   	
   	index: 4
   })
});

module.exports = router;
