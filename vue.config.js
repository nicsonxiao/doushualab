module.exports = {
    lintOnSave:false, //关闭lints检测警告
    devServer:{
        compress:false,
        open:true,
        proxy:{
            '/path':{ // 这个意思是：原先以 /api 开头的请求
                //代理的具体地址
                target:'',
                //是否开启代理,是否允许跨域
                changeOrigin:true,
                //ws
                //重写
                pathRewrite:{
                    '/path':'/' // 上面那个 /path 替换成这个/ 
                }
            }
        }
    },
    css:{
        loadderOption:{
            //设置全部配置
            sass:{
                prependData:`@import "./src/assets/common/css/global.scss"`
            }
        },
    },
    publicPath : "/",
    assetsDir:"static/public"
}