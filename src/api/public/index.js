/*
**
公共组件
**
 */
import { get, post, del, put, postFile } from "../axios";
let service = "/mall";
let userService = "/user";
let mUrl = "/tender";
//轮播图
export const selectCoupon = (data) =>
  get(service + "/web/banner/select/all", data);
// 上传图片
export const upload = (params) => postFile(userService + "/oss/upload", params);
//上传文件(多文件)
export const uploads = (params) =>
  postFile(userService + "/oss/uploads", params);
// 新增商家
export const postApproval = (data) =>
  post(service + "/web/enterprise/create", data);
// 获取行业标签
export const getIndustryLabelList = () =>
  get(service + "/web/label/select/all");
// 获取所有品牌
export const getBrandList = () => get(service + "/web/item/brand/select/all");
// 获取所有商品分类
export const getCategories = () =>
  post(service + "/web/item/category/select/tree");
//获取所有专题
export const selectTopicAll = () => get(service + "/web/activity/select/all");
// 分页查询品牌
export const pageInquiryBrand = (params, data) =>
  post(service + "/web/item/brand/select/page/list", data, params);
// 商品列表
export const indexImages = (params, data) =>
  post(service + "/web/item/select/page/list", data, params);
