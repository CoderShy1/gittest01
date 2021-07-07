import http from './http'
// 项目是需要迭代的。
// 前端开发会进行迭代，后台开发会进行迭代。
// 这个文件是对请求地址进行统一管理的。

export const getHomeGoods = ()=>{
  return http.get('/home/data',
  {
    type:'pop',
    page:'1'
  });
}

export const getDetail = (iid)=>{
  return http.get('/detail',
  {
    iid
  });
}

export class Goods {
  constructor(itemInfo, columns, services) {
  this.title = itemInfo.title
  this.desc = itemInfo.desc
  this.newPrice = itemInfo.price
  this.oldPrice = itemInfo.oldPrice
  this.columns = columns
  this.services = services
  this.realPrice = itemInfo.lowNowPrice
  this.picurl = itemInfo.topImages
  }
}