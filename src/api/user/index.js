import { get, post, del, put, postFile } from "../axios";
let service = "/mall";
let userService = "/user";
//修改密码
export const changePassword = (data) =>
  post(userService + "/web/center/update/password", data);
//修改手机号
export const changePhone = (data) =>
  post(userService + "/web/center/update/mobile", data);
//校验验证码
export const verifyPhone = (data) =>
  post(userService + "/web/center/check/code", data);
// 注册公司
export const registerCompany = (data) =>
  post(userService + "/web/company/create", data);
// 上传图片
export const upload = (params) => postFile(userService + "/oss/upload", params);
// 注册用户
export const registeredUser = (data) =>
  post(userService + "/web/company/user/create", data);
// 发送短信
export const smsSend = (data) => post(userService + "/send", data);
//登录
export const login = (data) => post(service + "/web/login/toLogin", data);
//获取用户信息
export const getUserInfo = (data) =>
  post(service + "/web/login/select/user/details", data);
// 忘记密码
export const forgetThePassword = (data) =>
  post(userService + "/web/center/forgot/password", data);
// 是否注册手机号
export const registerMobileNumber = (data) =>
  post(userService + "/web/center/judge/mobile/exist", data);
