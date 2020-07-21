import axios from "axios";
import router from "vue-router";
// import ElementUI from "element-ui";


var baseUrl = "http://api.kjlm68.com:12345/",
  baseApiUrl = baseUrl + "api/";
var ajax = {
  post(url, data) {
    // , errorReturn = false
    url += url.indexOf('?') > -1 ? '&' : '?';
    url += '_ajax=1';

    return new Promise((resolve, reject) => {
      axios.post(url, data)
        .then(res => {
          if (res.data.code == 10001) {
            router.push({
              path: "/login"
            })
          } else if(res.data.code == 0){
              resolve(res.data);
            
          }else{
            // if(errorReturn){
                
            //   resolve(res.data);
            // }else{
              // ElementUI.$message({
              //   message:res.msg,
              //   type:"error"
              // })
              resolve(res.data);
            // }
          }
        })
        .catch(error => {
          reject(error);
        });
    });
  }
  // ajax(url, data, method){

  // }
};


var index = {
  list(data){
    return ajax.post(baseApiUrl + "index/task/list", data);
  },
  create(data){
    return ajax.post(baseApiUrl + "index/order/create", data);
  },
  mylist(data){
    return ajax.post(baseApiUrl + "index/task/mylist", data);
  }
}


var method = {
    //抖音分享内容
    getmediaid(data){
      return ajax.post(baseApiUrl + "method/douyin/getmediaid", data);
    }
}

var api = {
    index,
    method
}

export default api;