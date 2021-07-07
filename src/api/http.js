import axios from 'axios'



// 二次封装axios请求
class Http{

  constructor(){
    // 创建axios实例对象
    this.instance = axios.create(
      // 请求统一进行配置
      {
        baseURL: 'http://152.136.185.210:8000/api/w6',
        timeout: 60000,
      }
    );

    this.addResponseInterceptors();
  }

  // 添加响应拦截器的代码
  addResponseInterceptors(){
    this.instance.interceptors.response.use(config => { 
      return config; //拦截之后要返回回去，否则就被拦截请求失败了
    }, err => {
      console.log(err);
    });
    this.instance.interceptors.response.use(res => {
      // console.log(res);
      return res.data; //拦截之后要返回回去，只返回data就可以
    }, err => {
      console.log(err);
    })
  }

  get(url, params = {}){
    return this.instance.get(url, {
      params
    });
  }

  post(url, data = {}){
    return this.instance.post(url, data);
  };
}


export default new Http();


