var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
  	
  	title: '首页管理',
  	
  	small: "小标题",
  	
  	index:1,
  	
  	data:[{"username":"<b><i style='color:red'>李鸿章</i></b>","age":22},{"username":"王大锤","age":34}] 
    
    
  });
});

module.exports = router;
