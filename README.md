# express

# express 操作 
# express http://www.expressjs.com.cn
# cnpm install express-generator -g
# express -h
# express --view=ejs
# cd myapp
# cnpm install
# 修改 myapp/package.json 文件的scripts 选项
    "scripts" :{
        
         "start": "node ./bin/www",
         
         "dev" : "superviso ./bin/wwwr" 
    
    }

 #  cnpm run dev  //运行项目
 
 # 默认端口号为3000， 浏览器中访问 http:// localhost:3000/
 
 # express 项目目录详解
   
  #  bin 
        www  //node项目的启动地址 ---服务器
         
  # node_modules   //项目中的需要的依赖

  # public //项目中的静态资源目录 css / 图片 / js
  
  # routes  //项目路由文件夹
  
  # views  //项目视图文件夹
  
  # app.js   //node项目的启动地址 ---配置
  
  # package.json    //描述文件
  
  public 静态资源目录， 不管页面在哪里， 如果想要访问public内部的css js img  路径前面加反斜杠 /
  
 <link href="/stylesheets/style.css" />         
 
 这是因为 在 app.js 文件中的如下代码实现
 
   app.use(express.static(path.join(_dirname,"public")))
